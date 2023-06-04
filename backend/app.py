from flask import Flask
from services.bitcoin_data.historical_data import bitcoin_historical_data_blueprint
from services.journal_page_history.journal_page_history_api import journal_page_history_blueprint
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.register_blueprint(bitcoin_historical_data_blueprint)
app.register_blueprint(journal_page_history_blueprint)
if __name__ == "__main__":
    app.run(debug=True)