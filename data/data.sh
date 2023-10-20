#!/bin/sh

export MONGO_HOST=mongodb
export MONGO_PORT=27017

DB_NAME=quizz
COLLECTION_NAME=quizzes

DATA_FILE=./sample-data.json

mongoimport --host mongodb --port 27017 --db quizz --collection quizzes --file ./sample-data.json --jsonArray