# Hit_and_Blow

## 役割分担
- K19060 スタート画面
- K19064 ゲーム画面
- K19023 結果画面
- K19055 バックエンド（メイン：ランダムで4桁の数字を生成）
- K19092 バックエンド(メイン：ランキング)

## APIの仕様
- /start
  - GET
    - 4桁のランダム数を返す
    - request
        ```
            None
        ```
    - response
        ```json
            {
                "number":1234
            }
        ```
- /ranking
  - GET
    - ランキングデータを返す
    - request
        ```
            None
        ```
    - response
        ```json
            [
                {
                    "rank":1,
                    "name":"hoge",
                    "moves":2 // 何手でクリアしたか
                },
                {
                    "rank":2,
                    "name":"hage",
                    "moves":3 // 何手でクリアしたか
                },

            ]
        ```
  - POST
    - 何手でクリアできたかと名前を受け取り，ランキングデータに保存する
    - request
        ```json
            {
                "name":"hoge",
                "moves":3
            }
        ```
    - response
        ```
            None
        ```

## Dockerの使い方
### ファイル，ディレクトリの説明
- /mysql
  - mysqlの設定ファイルや，dockerイメージをビルドするためのファイルがある．
- /mysql/Dockerfile
  - dockerイメージをビルドするためのファイル
- /mysql/db
  - データベースの構成が書いてあるファイルが入っている
- ./docker-compose.yaml
  - dockerのコンテナを管理するためのファイル

### Dockerのインストール方法
`brew cask install docker`
(docker-composeも一緒にインストールされる)

### コマンド
- `docker-compose up -d --build`
  - dockerコンテナを起動するコマンド

## 使い方
1. `docker-compose up -d --build` する
2. 初回起動時のみ，データベースの初期化があるため3分ほど待つ
3. pythonのアプリを起動する

## 実行方法

### 事前準備
1. Dockerをインストールする(上記の[Dockerの使い方]を参照)
2. cryptographyをインストール`pip install cryptography`
3. PyMySQLをインストールする`pip install PyMySQL`

### 実行方法
1. Dockerを立ち上げる(上記の[Dockerの使い方]を参照)
2. `python3 web.py`にてサーバーを立ち上げる
