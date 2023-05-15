from flask import Blueprint, jsonify

bitcoin_historical_data_blueprint = Blueprint('bitcoin_historical_data_api', __name__)

@bitcoin_historical_data_blueprint.route('/bitcoin_historical_data', methods=['GET'])
def data():
    return jsonify({'message':'endpoint created'})