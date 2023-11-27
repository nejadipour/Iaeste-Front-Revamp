FROM hub.hamdocker.ir/library/node:16 AS builder
MAINTAINER Alireza Nejadipour nejadipour@gmail.com

WORKDIR /frontend-app
COPY package.json ./
RUN yarn

COPY . .

RUN npm run build


FROM hub.hamdocker.ir/library/nginx:1.15.8 AS publish
WORKDIR /frontend-app

EXPOSE 80
COPY conf/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /frontend-app/dist/ /usr/share/nginx/html

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

# Start the app
CMD ["nginx", "-g", "daemon off;"]
