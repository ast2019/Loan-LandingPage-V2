# ── Stage 1: Build ──────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: Serve with Nginx ────────────────────────────────
FROM nginx:alpine

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Embed nginx config directly (no separate file needed)
RUN printf 'server {\n\
    listen 80;\n\
\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
\n\
    error_page 404 /404.html;\n\
    location = /404.html {\n\
        root /usr/share/nginx/html;\n\
        internal;\n\
    }\n\
\n\
    error_page 500 502 503 504 /50x.html;\n\
    location = /50x.html {\n\
        root /usr/share/nginx/html;\n\
        internal;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
