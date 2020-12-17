from flask import Blueprint, jsonify, request, json, Flask
ranking = Blueprint('ranking', __name__)


@ranking.route('/ranking', methods=['GET', 'POST'])
def ranking_response():
    with open('../ranking.json') as f:
        json_data = json.load(f)

    if request.method == 'GET':
        return jsonify(json_data)


if __name__ == "__main__":
    app = Flask(__name__)
    app.register_blueprint(ranking)

    app.run(debug=True)
