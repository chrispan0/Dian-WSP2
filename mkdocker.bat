git fetch
git pull
docker stop dian-wsp2
docker rm dian-wsp2
cd C:\Users\Administrator\Documents\Dian\Dian-WSP2
docker build -t dian-wsp2 .
docker run -d -p 3334:4000 --name dian-wsp2 dian-wsp2
pause