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
                "number":1234,
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
                    "moves":2, // 何手でクリアしたか
                },
                {
                    "rank":2,
                    "name":"hage",
                    "moves":3, // 何手でクリアしたか
                },

            ]
        ```
  - POST
    - 何手でクリアできたかと名前を受け取り，ランキングデータに保存する
    - request
        ```json
            {
                "name":"hoge",
                "moves":3,
            }
        ```
    - response
        ```
            None
        ```