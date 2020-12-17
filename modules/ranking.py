from flask import Blueprint, jsonify, request, json, Flask
from sql import dbctl

ranking = Blueprint('ranking', __name__)
db = dbctl()


@ranking.route('/ranking', methods=['GET', 'POST'])
def ranking_response():

    if request.method == 'GET':
        json_data = db.getRanking()
        return jsonify(json_data)
    elif request.method == 'POST':
        if request.json == '':
            return jsonify({
                'message': 'JSON not found.'
            })

        print(request.json)
        db.postRanking(request.json['name'], request.json['moves'])
        return jsonify({})  # 表示できるページが存在しないというエラーが出るため，空のJSONを返す


if __name__ == "__main__":
    app = Flask(__name__)
    app.register_blueprint(ranking)

    app.run(debug=True)
