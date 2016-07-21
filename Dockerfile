FROM makeomatic/node:6.2.2-onbuild

ENV NODE_ENV=production \
    PORT=8080 \
    HOST=0.0.0.0

EXPOSE 8080
