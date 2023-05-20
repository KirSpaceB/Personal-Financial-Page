from flask import Blueprint, jsonify
import time
import datetime
import pandas as pd
bitcoin_historical_data_blueprint = Blueprint('bitcoin_historical_data_api', __name__)

@bitcoin_historical_data_blueprint.route('/bitcoin_historical_data', methods=["GET"])
def data():
    ticker = 'BTC-USD'
    period1 = int(time.mktime(datetime.datetime(2023,5,1,23,59).timetuple()))
    period2 = int(time.mktime(datetime.datetime(2023,5,29,23,59).timetuple()))
    interval = '1wk'
    query_string = f'https://query1.finance.yahoo.com/v7/finance/download/{ticker}?period1={period1}&period2={period2}&interval={interval}&events=history&includeAdjustedClose=true'
    csv = pd.read_csv(query_string)
    jsonCsv = csv.to_json()
    return jsonify({'bitcoin_historical_data':jsonCsv})