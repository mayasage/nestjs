import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from './message.controller';
import Ajv from 'ajv';

const superagent = require('superagent');

const ajv = new Ajv();

const createMessageResponseSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    content: { type: 'string' },
  },
  required: ['username', 'content'],
  additionalProperties: false,
};
const createMessageResponseValidate = ajv.compile(createMessageResponseSchema);

const findMessageResponseSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      username: { type: 'string' },
      content: { type: 'string' },
    },
    required: ['username', 'content'],
    additionalProperties: false,
  },
};
const findMessageResponseValidate = ajv.compile(findMessageResponseSchema);

const findMessageByIdResponseSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    content: { type: 'string' },
  },
  required: ['username', 'content'],
  additionalProperties: false,
};
const findMessageByIdResponseValidate = ajv.compile(
  findMessageByIdResponseSchema,
);

describe('Api Message', function () {
  it('GET /message', async function () {
    const response = await superagent.get('http://localhost:3000/api/message');
    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(200);
    const isValid = findMessageResponseValidate(response.body);
    expect(isValid).toBe(true);
  });

  it('GET /message/:id fail', async function () {
    try {
      await superagent.get('http://localhost:3000/api/message/7');
    } catch (errResponse) {
      expect(errResponse.ok).toBeFalsy();
      expect(errResponse.status).toBe(500);
    }
  });

  it('GET /message/:id success', async function () {
    const response = await superagent.get(
      'http://localhost:3000/api/message/662ca93ffbf53dfc2a9e8134',
    );
    const isValid = findMessageByIdResponseValidate(response.body);
    expect(isValid).toBe(true);
  });

  it('POST /message fail', async function () {
    try {
      await superagent
        .post('http://localhost:3000/api/message')
        .set('Accept', 'application/json')
        .send({
          content: `Hi Lara, you're too cool. I miss you.`,
          username: 'Shanks',
          sneaker: 'blast',
        });
    } catch (errResponse) {
      expect(errResponse.ok).toBeFalsy();
      expect(errResponse.status).toBe(400);

      expect(errResponse.response.body).toStrictEqual({
        message: ['property sneaker should not exist'],
        error: 'Bad Request',
        statusCode: 400,
      });
    }
  });

  it('POST /message success', async function () {
    const response = await superagent
      .post('http://localhost:3000/api/message')
      .set('Accept', 'application/json')
      .send({
        username: 'shanks',
        content: `Hi Lara, you're too cool. I miss you.`,
      });

    expect(response.ok).toBeTruthy();
    expect(response.status).toBe(201);
    const isValid = createMessageResponseValidate(response.body);
    expect(isValid).toBe(true);
  });
});

describe('MessagesController', () => {
  let controller: MessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageController],
    }).compile();

    controller = module.get<MessageController>(MessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
