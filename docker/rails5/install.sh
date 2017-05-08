#!/bin/bash

docker-compose build --force-rm --no-cache
cp Gemfile* src/
docker-compose run web rails new . --database=postgresql --skip-bundle

cp database.yml src/config/database.yml
docker-compose run web rake db:create

# to run:
docker-compose up -d
