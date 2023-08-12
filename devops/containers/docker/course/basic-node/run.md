**Run the container**
`docker run -d -p 3000:3000 --name rest-api express-server`

**Stop the container**
`docker stop rest-api`

**Start the container later**
> `docker run` above is not needed if the container is already created
`docker start rest-api`

**exec into the container**
> This will show all the source code! Feel free to explore
`docker exec -it rest-api /bin/bash`