FROM node:lts as builder

WORKDIR /app

# set ENV
ARG BASE_URL
ENV BASE_URL=${BASE_URL}
ARG GOOGLE_ANALYTICS_ID
ENV GOOGLE_ANALYTICS_ID=${GOOGLE_ANALYTICS_ID}
ARG NOTION_TABLE_ID
ENV NOTION_TABLE_ID=${NOTION_TABLE_ID}
ARG NOTION_ABOUT_PAGE_ID
ENV NOTION_ABOUT_PAGE_ID=${NOTION_ABOUT_PAGE_ID}

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn generate

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]