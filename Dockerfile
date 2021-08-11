FROM node:14.17

ARG WORK_DIR 
ARG APP_PORT

WORKDIR ${WORK_DIR}

COPY package.json ./
COPY package-lock.json ./

RUN npm install @sveltejs/kit

RUN npm install

COPY . ./

EXPOSE 5000

ENV HOST=0.0.0.0

ENTRYPOINT ["/bin/bash"]

CMD ["-c", "npm run dev"]