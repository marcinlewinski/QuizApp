#!/bin/bash

if ! docker info > /dev/null 2>&1; then
  open -a "Docker Desktop"
  sleep 10 
fi

docker-compose up --build