CREATE USER bsgame;
ALTER USER bsgame WITH SUPERUSER;
CREATE DATABASE bsgame_testing;
CREATE DATABASE bsgame_development;
GRANT ALL PRIVILEGES ON DATABASE bsgame_testing TO bsgame;
GRANT ALL PRIVILEGES ON DATABASE bsgame_development TO bsgame;
