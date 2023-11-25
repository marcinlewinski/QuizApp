@echo off
setlocal enabledelayedexpansion

docker info >nul 2>&1
if errorlevel 1 (

  start "Docker Desktop" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
  timeout /t 10 >nul
)

docker-compose up --build