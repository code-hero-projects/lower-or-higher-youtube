docker build . -t code-hero-api
docker run -d -p 8080:80 --name code-hero-api code-hero-api