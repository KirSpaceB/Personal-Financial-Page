from flask import Blueprint, jsonify, request
import mysql.connector
from datetime import datetime

journal_page_history_blueprint = Blueprint("journal_page_history_blueprint", __name__)
@journal_page_history_blueprint.route("/journal_page_history", methods=["POST"])
def canntFindNameForThisFunction():
    print('test')
    data = request.get_json();
    print(data)
    dateString = data[0]["Date of Investment"];
    dateObject = datetime.strptime(dateString, '%m/%d/%Y');
    formattedDate = dateObject.strptime(dateString, '%m/%d/%Y');
    print(data[0]["Date of Investment"])
    connect = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="journal_page_database"
    );

    cursor = connect.cursor();

    sqlInsertDataQuery = "INSERT INTO Investments (date_of_investment, gain_loss_reason, investment_reason) VALUES (%s, %s, %s)"

    
    valuesSentToQuery = (formattedDate, data[0]["Profit / Loss? Why?"], data[0]["Reasoning Of Investment"]);
    cursor.execute(sqlInsertDataQuery,valuesSentToQuery);
    connect.commit();
    cursor.close();
    connect.close();
    return jsonify({"message":"API Success"})
