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


def login(details):
    try:
        email = details["email"]
        password = details["password"]
    except KeyError:
        return jsonify({"error": True, "message": "One or more fields missing!"})

    if email == "" or password == "":
        return jsonify({"error": True, "message": "Datafield is empty!"})

    if type(email) is not str or type(password) is not str:
        return jsonify({"error": True, "message": "Wrong datatype!"})

    def jwt_obj():
        return {
                    "email": email,
                    "created_at": str(datetime.datetime.utcnow()),
                    "expire_at": str(datetime.datetime.utcnow() + datetime.timedelta(days=1))
                }

    find_user = UserModel.query.filter(UserModel.email == email).first()

    if find_user is not None:
        if find_user.password == password:
            my_data = jwt_obj()

            encode_jwt = jwt.encode(my_data, SECRET_KEY)

            user_name = db.session.execute('''SELECT name from user where email = "%s" and password = "%s"'''%(email, password))

            user_data = [dict(row) for row in user_name]

            return jsonify({"error": False, "message": "user logged in!", "name": user_data[0]["name"], "token": encode_jwt.decode()})

        else:
            return jsonify({"error": True, "message": "Entered password is wrong!"})

    else:
        return jsonify({"error": True, "message": "Not a valid user!"})
    