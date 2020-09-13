FROM python:latest

WORKDIR /usr/src/app

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y git
RUN apt-get autoremove -y
RUN pip install flask

# 追加
 RUN pip install flask-cors