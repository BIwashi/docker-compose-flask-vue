# ubuntuベース
FROM ubuntu

# 各環境変数を設定
ENV USER vuejs
ENV PASS vuejs

# aptコンテナのupdate&upgrade
RUN apt-get update && apt-get upgrade -y

# ubuntu 18.0.4で発生する問題回避 timezone 選択
RUN apt-get install -y tzdata
ENV TZ=Asia/Tokyo

# curl・nodejs・npm・sudo・vimのインストール
RUN apt-get install -y curl  && \
    apt-get install -y nodejs npm && \
    apt-get install -y sudo && \
    apt-get install -y vim

RUN apt-get install -y git
RUN apt-get install wget
RUN wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh

# n package を導入
RUN npm install n -g

# n package を使って最新nodeをインストール
RUN n stable

# 古いnodeとnpmを消す
RUN apt-get purge -y nodejs npm

# vue-cli3インストール
RUN npm install -g @vue/cli
RUN npm install -g @vue/cli-init

# 追加
RUN apt-get autoremove -y
RUN npm install axios

# 一般ユーザーアカウントを追加
RUN useradd -m ${USER}
# 一般ユーザーにsudo権限を付与
RUN gpasswd -a ${USER} sudo
# 一般ユーザーのパスワード設定
RUN echo "${USER}:${PASS}" | chpasswd

# 一般ユーザに切り替える
USER ${USER}

# 作業するディレクトリの変更
WORKDIR /usr/src/app


# export HTTP_PROXY=http://proxy.example.com:8080
# export HTTPS_PROXY=http://proxy.example.com:8080