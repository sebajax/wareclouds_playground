FROM node:12-alpine AS base

# Create app directory
WORKDIR /wareclouds-playground

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - dist: A production build compiled with Babel
FROM base AS builder

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .babelrc.json ./

RUN npm install
# RUN npm ci --only=production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./src ./src

RUN npm run build

# ---------- Tests ----------
FROM builder AS tests

RUN npm run test

RUN npm prune --production # Remove dev dependencies

# ---------- Release ----------
FROM base AS release

COPY --from=builder /wareclouds-playground/node_modules ./node_modules
COPY --from=builder /wareclouds-playground/dist ./dist

USER node

CMD [ "node", "./dist/app.js" ]