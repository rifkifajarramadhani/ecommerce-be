FROM node:22-alpine3.19

# install node
# RUN apt-get update && apt-get install -y ca-certificates curl gnupg gpg
# RUN mkdir -p /etc/apt/keyrings;
# RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
# ENV NODE_MAJOR=18
# RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list

# RUN apt-get update && apt-get install -y nodejs

COPY ../ /app
WORKDIR /app

RUN cd /app && yarn install

# allow user to delete node modules
RUN chmod -R 777 /app/node_modules

CMD yarn install && yarn start