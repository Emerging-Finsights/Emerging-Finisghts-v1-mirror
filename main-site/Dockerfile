FROM alpine

VOLUME [ "/src" ]
VOLUME [ "/public"]

EXPOSE 1313

RUN apk add npm
RUN apk add hugo
RUN apk add bash

COPY docker/hugo-run.sh /
COPY docker/hugo-build.sh /

RUN chmod +x /hugo-run.sh
RUN chmod +x /hugo-build.sh

CMD [ "/hugo-run.sh" ]
