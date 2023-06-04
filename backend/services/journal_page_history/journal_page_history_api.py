from flask import Blueprint, jsonify, json, request

journal_page_history_blueprint = Blueprint("journal_page_history_blueprint", __name__)
@journal_page_history_blueprint.route("/journal_page_history_blueprint", methods=["POST"])
def canntFindNameForThisFunction():
    data = request.get_json()
    print(data)
    return jsonify({"message":"API Success"})
