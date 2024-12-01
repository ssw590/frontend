FROM node:lts

WORKDIR /app

COPY . .

## Install dependencies with `--immutable` to ensure reproducibility.
RUN npm ci

RUN npm run build

CMD ["npm", "run", "preview"]

EXPOSE 3000