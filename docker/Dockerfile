FROM ubuntu:18.04

ENV ENDPOINT=

EXPOSE 3000

RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y git nodejs npm

RUN git clone https://github.com/sosomasox/hbem.git && \
    cd hbem && \
    npm install

WORKDIR todo

ADD ./scripts/entrypoint.sh ./

CMD ["./entrypoint.sh"]
