npx sequelize model:generate --name User --attributes username:string,email:string,hashPassword:string

CREATE USER dev_user with password '' CREATEDB;

CREATE DATABASE museharmony_development with OWNER dev_user;

npx dotenv sequelize-cli db:migrate
npx dotenv sequelize-cli db:seed:all

npx dotenv sequelize-cli db:seed:undo:all
npx dotenv sequelize-cli db:migrate
