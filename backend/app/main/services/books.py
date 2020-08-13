from ..models import db, BooksModel, UserModel
import json
from instance.config import SECRET_KEY
import datetime
import jwt
from ..util.auth_token import check_auth_token
from flask import jsonify

def addBooks(details, token):
    try:
        name = details["name"]
        cat_id = details["cat_id"]
        price = details["price"]
        quantity = details["quantity"]
    except KeyError:
        return json.dumps({"error": True, "message": "One or more fields are missing!"})

    if name == "" or cat_id == "" or price == "" or quantity == "":
        return json.dumps({"error": True, "message": "Empty field."})

    if type(name) is not str or type(cat_id) is not int or type(price) is not int or type(quantity) is not int:
        return json.dumps({"error": True, "message": "Invalid Datatype!"})

    status, data = check_auth_token(token)

    if status is False:
        return json.dumps({"error": True, "message": "Token has expired!"})

    user_data = UserModel.query.filter(UserModel.email == data["email"]).first()

    if user_data is not None:
        des_id = user_data.id

        book = BooksModel(name=name, cat_id=cat_id, price=price, quantity=quantity, user_id=des_id)

        db.session.add(book)
        db.session.commit()

        return json.dumps({"error": False, "message": "Books added to the database!"})

    else:

        return json.dumps({"error": True, "message": "Try again later!"})


def delBooks(details, token):
    try:
        book_id = details["book_id"]
    except KeyError:
        return json.dumps({"error": True, "message": "One or more fields are missing!"})

    if book_id == "":
        return json.dumps({"error": True, "message": "Empty field."})

    if type(book_id) is not int:
        return json.dumps({"error": True, "message": "Invalid Datatype!"})

    status, data = check_auth_token(token)

    if status is False:
        return json.dumps({"error": True, "message": "Token has expired!"})

    book_data = BooksModel.query.filter(BooksModel.id==book_id).first()

    if book_data is not None:
        db.session.delete(book_data)
        db.session.commit()

        return json.dumps({"error": False, "message": "Books removed from the database!"})

    else:

        return json.dumps({"error": True, "message": "Try again later!"})


def updateBooks(details, token):
    try:
        name = details["name"]
        cat_id = details["cat_id"]
        price = details["price"]
        quantity = details["quantity"]
        book_id = details["book_id"]
    except KeyError:
        return json.dumps({"error": True, "message": "One or more fields are missing!"})

    if name == "" or cat_id == "" or price == "" or quantity == "" or book_id == "":
        return json.dumps({"error": True, "message": "Empty field."})

    if type(name) is not str or type(cat_id) is not int or type(price) is not int or type(quantity) is not int or type(book_id) is not int:
        return json.dumps({"error": True, "message": "Invalid Datatype!"})

    status, data = check_auth_token(token)

    if status is False:
        return json.dumps({"error": True, "message": "Token has expired!"})

    book_data = BooksModel.query.filter(BooksModel.id==book_id).first()

    if book_data is not None:
        book_data.name = name
        book_data.cat_id = cat_id
        book_data.price = price
        book_data.quantity = quantity

        db.session.commit()

        return json.dumps({"error": False, "message": "Books updated in the database!"})

    else:
        return json.dumps({"error": True, "message": "Try again later!"})


def listingBooks(token):
    status, data = check_auth_token(token)

    if status is False:
        return json.dumps({"error": True, "message": "Token has expired!"})

    books = db.session.execute('''SELECT u.name as user_name, u.id as user_id, c.genre, b.* FROM books as b JOIN category_model as c ON c.id = b.cat_id JOIN user as u ON u.id = b.user_id''')
    
    return jsonify({"error": False, "message": "Data send!",'result': [dict(row) for row in books]})