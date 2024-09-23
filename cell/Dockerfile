FROM node

RUN mkdir -p /cell/uploadImgs
COPY ./server/dist /cell/server
COPY ./server/node_modules /cell/node_modules
COPY ./view/build /cell/view

WORKDIR /cell

# RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 4000

CMD ["node", "./server/main.js"]