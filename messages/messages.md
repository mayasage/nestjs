# Messages

A basic CRUD app build with NestJS.

## APIs

- GET localhost:3000/messages
    - Retrieve a list of all messages
    - Required Operations

      | Order | Operation  | Required |           Why            |
          |:-----:|:----------:|:--------:|:------------------------:|
      |   1   |    Pipe    |    No    | User is sending no data. |
      |   2   |   Guard    |    No    |   Not doing Auth atm.    |
      |   3   | Controller |   Yes    |          Always          |
      |   4   |  Service   |   Yes    |          Always          |
      |   5   | Repository |   Yes    |        File is DB        |

- GET localhost:3000/messages/:id
    - Retrieve a message
    - Required Operations (Same as GET messages)

      | Order | Operation  | Required |           Why            |
            |:-----:|:----------:|:--------:|:------------------------:|
      |   1   |    Pipe    |    No    | User is sending no data. |
      |   2   |   Guard    |    No    |   Not doing Auth atm.    |
      |   3   | Controller |   Yes    |          Always          |
      |   4   |  Service   |   Yes    |          Always          |
      |   5   | Repository |   Yes    |        File is DB        |

- POST localhost:3000/messages
    - Retrieve a list of all messages
    - Required Operations

      | Order | Operation  | Required |            Why            |
          |:-----:|:----------:|:--------:|:-------------------------:|
      |   1   |    Pipe    |   Yes    | User's sending something. |
      |   2   |   Guard    |    No    |    Not doing Auth atm.    |
      |   3   | Controller |   Yes    |          Always           |
      |   4   |  Service   |   Yes    |          Always           |
      |   5   | Repository |   Yes    |        File is DB         |

## Naming Directories

| Order | Operation  |        Name        |        Why         |
|:-----:|:----------:|:------------------:|:------------------:|
|   1   |    Pipe    |         -          | This is decorator. |
|   2   |   Guard    |         -          |  Not doing Auth.   |
|   3   | Controller | MessageController  |       Always       |
|   4   |  Service   |  MessagesService   |       Always       |
|   5   | Repository | MessagesRepository |     File is DB     |
