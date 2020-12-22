import pymysql.cursors


class dbctl():
    conn = None

    def __init__(self):
        self.conn = pymysql.connect(
            host='localhost',
            port=33060,
            user='group2',
            password='ChangeMe',
            db='production_db',
            charset='utf8',
            # cursorclassを指定することで
            # Select結果をtupleではなくdictionaryで受け取れる
            cursorclass=pymysql.cursors.DictCursor)

    def getRanking(self):
        if self.conn == None:
            print('データベースに接続できませんでした')
            return None

        with self.conn.cursor() as cursor:
            query_string = 'select * from scores order by score asc limit 10;'
            cursor.execute(query_string)
            query_result = cursor.fetchall()
            # print(query_result)
        return query_result

    def postRanking(self, name, score):
        if self.conn == None:
            print('データベースに接続できませんでした')
            return None

        with self.conn.cursor() as cursor:
            query_string = 'insert into scores(player,score) values (%s,%s)'
            cursor.execute(query_string, (name, score,))
        self.conn.commit()


if __name__ == '__main__':
    db = dbctl()
    db.getRanking()
