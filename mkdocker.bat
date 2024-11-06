git fetch
git pull
docker stop barney-wsp2
docker rm barney-wsp2
cd C:\Users\Administrator\Documents\Barney\Barney-WSP2
docker build -t barney-wsp2 .
docker run -d -p 3333:3000 --name barney-wsp2 barney-wsp2
pause