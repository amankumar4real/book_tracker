from . import user
from flask import request
from ..services.user import register, login

@user.route("/")
def user_starter():

    return "welcome home!"

@user.route("/register", methods=["POST"])
def register_user():

    response = register(request.json)

    return response

@user.route("/login", methods=["POST"])
def login_user():

    response = login(request.json)

    return response