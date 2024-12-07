FROM node:lts

RUN apt update && apt install -y nginx

WORKDIR /app

COPY . .

COPY nginx.conf /etc/nginx/nginx.conf

RUN npm ci

RUN npm run build

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 3000