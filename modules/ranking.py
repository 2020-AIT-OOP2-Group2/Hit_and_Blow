from flask import Blueprint, jsonify, request, json, Flask
from sql import dbctl

ranking = Blueprint('ranking', __name__)
db = dbctl()


@ranking.route('/ranking', methods=['GET', 'POST'])
def ranking_response():

    json_data = db.getRanking()

    if request.method == 'GET':
        return jsonify(json_data)


if __name__ == "__main__":
    app = Flask(__name__)
    app.register_blueprint(ranking)

    app.run(debug=True)
