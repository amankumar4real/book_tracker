from . import user
from flask import request

@user.route("/")
def user_starter():

    return "welcome home!"