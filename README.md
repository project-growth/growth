# Growth

## Table of Contents

1. [Team](#our-team)
2. [Requirements](#requirements)
3. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    2. [Running Application](#running-application)
      1. [Database](#database)
      2. [Client](#client)
      3. [Server](#server)
4. [Support](#support)
5. [Contributing](#contributing)

## Our Team
- __Product Owner__: [Seymur Mammadov](https://github.com/smammadov94)
- __Developer__: [Cameron Dunne](https://github.com/camdunne)

##  Requirements
- Node ^0.10.x
- MySQL

## Development
### Installing Dependencies
From within the root directory:

```sh
npm install
```

### Running Application
#### Database
Open local database connection
```sh
mysql.server start
```
Run Schema file:
```sh
mysql -u root < server/schema.sql
```
#### Client
Build bundle for client, and keep running in terminal:
```sh
npm run compile
```
#### Server
Run server, and keep running in terminal:
```sh
npm start
```

## Support
If you have any questions or need support please email our team at project.growth2@gmail.com

## Contributing
We are more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests.

If you would like to submit a pull request, please make an effort to follow the guide in [CONTRIBUTING.md](https://github.com/project-growth/growth/blob/master/contributing.md).
