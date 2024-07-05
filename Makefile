install:
	npm ci

build:
	npm run build

lint-frontend:
	make -C frontend lint

start-backend:
	npm run start

start-frontend:
	make -C frontend start

start:
	make start-backend & make start-frontend