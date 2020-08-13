from ..models import db, UserModel
import json
from instance.config import SECRET_KEY
import datetime
import jwt
from ..util.auth_token import check_auth_token
from flask import jsonify

def register(details):
    try:
        name = details["name"]
        email = details["email"]
        password = details["password"]
        mobile = details["mobile"]
    except KeyError:
        return json.dumps({"error": True, "message": "One or more fields are missing!"})

    if name == "" or email == "" or password == "" or mobile == "":
        return json.dumps({"error": True, "message": "Empty field."})

    if type(name) is not str or type(email) is not str or type(password) is not str or type(mobile) is not int:
        return json.dumps({"error": True, "message": "Invalid Datatype!"})

    already_reg = UserModel.query.filter(UserModel.email == email).first()

    if already_reg is None:
        
        user = UserModel(name=name, email=email, password=password, mobile=mobile)

        db.session.add(user)
        db.session.commit()

        return json.dumps({"error": False, "message": "User added to the database!"})

    else:

        return json.dumps({"error": True, "message": "User already registered!"})