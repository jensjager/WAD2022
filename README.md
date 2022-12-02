# The project / homework of WAD2022 course

## Team AA members:
- Taavi Eistre
- Jan Markus Rokka
- Jens Jäger

### Project setup
```
npm install
```

### Start local postgresql database
Start using local docker-compose.yml file.
```
docker-compose up -d
```
If docker isn't installed, start a database server another way with the following setting
or change the pool options inside `server\database.js`.
```
user: "postgres",
password: "postgres",
database: "wad2022",
host: "localhost",
port: "5432"
```

### Compiles and hot-reloads backend server using nodemon
```
npm run server
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```