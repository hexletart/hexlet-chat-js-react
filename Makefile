install:
	npm ci

start-frontend:
	make -C frontend start

lint-frontend:
	make -C frontend lint

start-backend:
	npx start-server

start:
	make start-backend & make start-frontend