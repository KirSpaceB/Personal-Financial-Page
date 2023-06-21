from flask import Blueprint, jsonify,request
import random

ticker_data_api_blueprint = Blueprint("inputbar_api_blueprint", __name__);

@ticker_data_api_blueprint.route("/ticker_data_api", methods=["POST"])
def api():
    tslaVolatility = [];
    tickerNameFromFrontEnd = request.get_json();
    TSLA_DATA = {"TickerName":tickerNameFromFrontEnd,"Open":int, "Close":int, "Volatility":[]}

    if tickerNameFromFrontEnd == "TSLA":
        open = random.randint(200,300);
        close = random.randint(250,350);
        for x in range(10):
            stockVolatility = random.randint(200,300)
            tslaVolatility.append(stockVolatility);
        TSLA_DATA["Open"] = open;
        TSLA_DATA["Close"] = close;
        TSLA_DATA["Volatility"] = tslaVolatility;
    else:
        INVALID_TICKER = {"TickerName":tickerNameFromFrontEnd,"Open":int, "Close":int, "Volatility":[]}
        invalidTickerVolatility = [];
        open = random.randint(2000,3000);
        close = random.randint(2500,3500);
        for x in range(10):
            stockVolatility = random.randint(2000,3000)
            invalidTickerVolatility.append(stockVolatility);
        INVALID_TICKER["Open"] = open;
        INVALID_TICKER["Close"] = close;
        INVALID_TICKER["Volatility"] = invalidTickerVolatility;
        return({tickerNameFromFrontEnd:INVALID_TICKER})

    #We return an object with the ticker name
    return jsonify({tickerNameFromFrontEnd:TSLA_DATA});