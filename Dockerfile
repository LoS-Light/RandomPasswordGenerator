FROM node:lts-alpine
ENV NODE_ENV=production

WORKDIR /

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .

EXPOSE 3100
CMD ["node", "app.js"]