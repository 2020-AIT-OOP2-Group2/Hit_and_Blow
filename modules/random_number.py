from flask import Blueprint, jsonify, request, json, Flask
random_number = Blueprint('random_number', __name__)
from create_number import createnumber

@random_number.route('/start')
def index():
    return jsonify({"number":createnumber.num})


if __name__ == "__main__":
    app = Flask(__name__)
    app.register_blueprint(random_number)

    app.run(debug=True)