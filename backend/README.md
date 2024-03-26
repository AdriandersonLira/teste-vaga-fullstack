# Como rodar o projeto (parte do backend)?

#### Certifique der ter instalado

- npm@10.5.0
- node@20.11.1
- docker
- postgres@16

##### 1 - Primeiro abra um terminal dentro da pasta backend e escreva

```bash
backend/$ npm i
```

##### 2 - Suba o container docker

```bash
backend/$ docker-compose up -d
```

##### 3 - Execute a migration

```bash
backend/$ npx prisma migrate dev
```

##### 4 - Execute o projeto

```bash
backend/$ npm run dev
```

##### 5 - Caso queira testar no insomnia ou postman acesse [http://localhost:3333](http://localhost:3333)
