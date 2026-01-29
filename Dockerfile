# ---- Build Stage ----
FROM node:20.15.1-alpine AS builder

WORKDIR /var/nextjs

COPY package.json package-lock.json /var/nextjs/

RUN npm install

COPY . /var/nextjs

RUN npx cross-env NODE_OPTIONS=--openssl-legacy-provider next build

# ---- Production Stage ----
FROM node:20.15.1-alpine

WORKDIR /var/nextjs

COPY package.json package-lock.json /var/nextjs/

RUN npm install --omit=dev

COPY --from=builder /var/nextjs/.next /var/nextjs/.next

ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NODE_ENV=production

EXPOSE 5000

CMD ["npx", "next", "start", "-p", "5000"]
