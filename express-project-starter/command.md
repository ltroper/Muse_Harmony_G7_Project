npx sequelize model:generate --name User --attributes username:string,email:string,hashPassword:string

npx sequelize model:generate --name Artist --attributes name:string

npx sequelize model:generate --name Album --attributes name:string,artistId:integer,releaseDate:date,albumArt:blob

npx sequelize model:generate --name Song --attributes name:string,albumId:integer

npx sequelize model:generate --name Review --attributes content:text,rating:integer,albumId:integer,userId:integer

npx sequelize model:generate --name AlbumLibrary --attributes name:string,userId:integer,albumId:integer

npx sequelize model:generate --name LikedAlbum --attributes userId:integer,albumId:integer



CREATE USER dev_user with password '' CREATEDB;

CREATE DATABASE museharmony_development with OWNER dev_user;

npx dotenv sequelize-cli db:migrate
npx dotenv sequelize-cli db:seed:all

npx dotenv sequelize-cli db:seed:undo:all
npx dotenv sequelize-cli db:migrate

random change
