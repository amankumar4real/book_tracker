from . import db


class CategoryModel(db.Model):
    __tabename__="category"
    id = db.Column(db.Integer, primary_key=True)
    genre = db.Column(db.String(50))