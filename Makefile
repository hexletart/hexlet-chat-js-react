install:
	npm ci

build:
	rm -rf frontend/build
	npm run build

lint-frontend:
	make -C frontend lint

start-backend:
	npx start-server

start-frontend:
	make -C frontend start

start:
	make start-backend

develop:
	make start-backend & make start-frontend
