from flask import Flask
from services.bitcoin_data.historical_data import bitcoin_historical_data_blueprint
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.register_blueprint(bitcoin_historical_data_blueprint)

if __name__ == "__main__":
    app.run(debug=True)