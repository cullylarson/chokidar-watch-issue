# chokidar-watch-issue

Chokidar doesn't notice changes when it's running inside a Docker container and files are changed from the host machine. Basically a typical dev setup where you're editing files from your host machine, but the app is running inside a Docker container.

Running:

- Docker version 19.03.13, build 4484c46d9d
- docker-compose version 1.27.4, build 40524192

## Reproduce

1. Start the container

```
npm install
docker-compose up -d
docker logs -f chokidar-watch-issue-app
```

2. Change a file from your host machine. There is not log message indicating the change was noticed.

## Run using polling

If you enable polling, it works. Edit `docker-compose.yml` and change `command: "npm run start"` to `command: "npm run start:polling"`. Restart the container, change a file. You should see chokidar notices the change.
