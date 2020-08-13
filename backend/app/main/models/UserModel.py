from . import db


class UserModel(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60))
    email = db.Column(db.String(30), unique = True)
    password = db.Column(db.String(50))
    mobile = db.Column(db.Integer)