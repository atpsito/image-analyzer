FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN pnpm install -g @nestjs/cli
RUN pnpm install -g serve

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN ls -la /usr/src/app/apps/backend
RUN pnpm deploy --filter=backend --prod --legacy /prod/backend
RUN pnpm deploy --filter=frontend --prod --legacy /prod/frontend

FROM base AS backend
COPY --from=build /prod/backend /prod/backend
WORKDIR /prod/backend
RUN ls -la
EXPOSE 3000
CMD [ "pnpm", "start:prod" ]

FROM base AS frontend
COPY --from=build /prod/frontend /prod/frontend
WORKDIR /prod/frontend
EXPOSE 5173
CMD [ "serve", "-s", "dist", "-l", "5173"]