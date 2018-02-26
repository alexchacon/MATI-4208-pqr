FROM node:6.9.2
EXPOSE 3002
COPY package*.json ./
COPY . .
RUN npm install
CMD sequelize db:migrate
CMD node ./bin/www