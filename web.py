from flask import Blueprint, jsonify, request, json, Flask, render_template
from modules.random_number import random_number
from modules.ranking import ranking as rank


app = Flask(__name__)

# トップ画面


@app.route('/')
def index():
    return render_template('start.html')

# ゲームスタート


@app.route('/play')
def start():
    return render_template('playScreen.html')

# 結果


@app.route('/play/ranking')
def ranking():
    return render_template('result.html')


if __name__ == "__main__":
    app.register_blueprint(random_number)
    app.register_blueprint(rank)

    app.run(debug=True)
