# BSGame

## Setup

- Start by initialising the database, you will need to have postgres installed locally. Then run `psql -f ./config/database/initialize_db.sql`.
- Ensure that `sequelize-cli` is installed globally in your terminal.

### Docker setup

- Ensure postgresql is not running locally on port 5432.
- run `docker-compose up` from the command line.

when done:

- run `docker-compose down` from the command line.

## Notes

- New migrations can be created with `sequelize migration:create --url postgres://bsgame@postgresql/bsgame_development --name ${NAME_GOES_HERE}`
- Just working out how to handle the authentication right now.

## Todo

- Need to setup docker for tests.
