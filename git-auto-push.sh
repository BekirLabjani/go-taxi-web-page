@echo off
cd /d G:\develper\angular-projects\webside-from-taxidriver

git remote set-url origin git@github.com:BekirLabjani/go-taxi-web-page.git

git add .
git commit -m "Update 0.1"
git push origin main
