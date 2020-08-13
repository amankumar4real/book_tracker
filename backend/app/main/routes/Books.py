from . import books
from flask import request
from ..services.books import addBooks, delBooks, updateBooks, listingBooks

@books.route("/")
def books_starter():

    return "welcome to books route!"

@books.route("/add", methods=["POST"])
def add_books():

    token = request.headers.get("Auth")

    response = addBooks(request.json, token)
     
    return response

@books.route("/delete", methods=["POST"])
def delete_books():

    token = request.headers.get("Auth")

    response = delBooks(request.json, token)
     
    return response

@books.route("/update", methods=["POST"])
def update_books():

    token = request.headers.get("Auth")

    response = updateBooks(request.json, token)
     
    return response

@books.route("/listing")
def listing_books():

    token = request.headers.get("Auth")

    response = listingBooks(token)
     
    return response