FROM nginx:alpine

RUN apk add --no-cache ca-certificates

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
