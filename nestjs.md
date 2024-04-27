# NestJS

## Basic Request Handling

| Order | Operation  |       Meaning       |
|:-----:|:----------:|:-------------------:|
|   1   |    Pipe    |  Validate request   |
|   2   |   Guard    | User authentication |
|   3   | Controller |       Routing       |
|   4   |  Service   |  Write your logic   |
|   5   | Repository | Database Operations |

## Commands

```shell
npm i -g @nestjs/cli                    # Install nest cli
nest new <APP_NAME>                     # Create new Application
nest generate module <MODULE_NAME>      # Create new module
nest generate controller <MODULE_NAME>  # Create new controller

npm i superagent          # Doesn't come pre-installed
npm i class-validator     # Allows decorator validations
npm i class-transformer   # Easily transform between plain {} & class {}
npm i ajv                 # Jest response schema validation

# Mongo Database

npm i @nestjs/typeorm typeorm
npm i mongodb 
```
