from flask import Flask, jsonify

from shell_wrapper import do_create_account, do_transfer, get_result


app = Flask(__name__)


@app.route("/create_account")
def create_account() -> str:
    do_create_account()
    return jsonify({'message': get_result('create_account')})


@app.route("/transfer/<receiver>/<coin>")
def transfer(receiver: str, coin: str) -> str:
    do_transfer(receiver, coin)
    return jsonify({'message': get_result('transfer')})
