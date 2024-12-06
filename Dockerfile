FROM node:lts

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

CMD ["npm", "run", "preview"]

EXPOSE 3000