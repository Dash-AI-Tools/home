FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Build-time only: the nginx stage below never sees these, so the image carries no Ghost config.
ARG GHOST_URL
ARG GHOST_CONTENT_API_KEY
ARG SITE_URL
RUN GHOST_URL="$GHOST_URL" GHOST_CONTENT_API_KEY="$GHOST_CONTENT_API_KEY" SITE_URL="$SITE_URL" npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
