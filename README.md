# BSGame

## Setup

- Start by initialising the database, you will need to have postgres installed locally. Then run `psql -f ./config/database/initialize_db.sql`.
- Ensure that `sequelize-cli` is installed globally in your terminal.

### Docker setup:
- `docker-compose up`
when done:
- `docker-compose down`

## Notes

- New migrations can be created with `sequelize migration:create --url postgres://bsgame@postgresql/bsgame_development --name ${NAME_GOES_HERE}`
- Just working out how to handle the authentication right now.
