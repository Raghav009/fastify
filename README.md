# Getting Started with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli)
This project was bootstrapped with Fastify-CLI.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).

## Git Reference
git init <br />
git config user.name "user_name" <br />
git config user.email user@email.com <br />
git config credential.username 'user_name' <br />
git remote add origin https://github.com/user_name/project_name.git <br />
git branch -M main <br />
git push -u origin main <br />

## Docker Steps
create docker file <br />
docker build -t raghav/nodejs:latest . <br />
docker container ls <br />
docker container run -d -p 3000:3000 raghav/nodejs:latest <br />
docker container stop 4b4 <br />

docker login <br />
docker push raghav/nodejs:0.0.1.RELEASE <br />

docker pull raghav/nodejs:0.0.1.RELEASE <br />

## Docker Compose
docker-compose up: Create and start containers defined in the docker-compose.yml file. <br />
docker-compose down: Stop and remove containers, networks, and volumes defined in the docker-compose.yml file. <br />
docker-compose build: Build or rebuild services defined in the docker-compose.yml file. <br />
docker-compose ps: List running containers defined in the docker-compose.yml file. <br />
docker-compose logs: View the logs of containers defined in the docker-compose.yml file. <br />
docker-compose exec: Run a command inside a running container. <br />