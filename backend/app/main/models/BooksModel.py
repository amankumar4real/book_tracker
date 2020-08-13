from . import db


class BooksModel(db.Model):
    __tablename__="books"
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(60))
    cat_id = db.Column(db.Integer, db.ForeignKey("category_model.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)