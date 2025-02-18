FROM node:lts as build-stage

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
ARG NOTION_PRIVACY_PAGE_ID
ENV NOTION_PRIVACY_PAGE_ID=${NOTION_PRIVACY_PAGE_ID}
ARG NOTION_IMPRINT_PAGE_ID
ENV NOTION_IMPRINT_PAGE_ID=${NOTION_IMPRINT_PAGE_ID}

RUN echo ${BASE_URL}

COPY . .

RUN yarn install 

RUN yarn generate

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true \
  --check-files

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]