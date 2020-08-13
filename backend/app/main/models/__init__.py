from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .UserModel import UserModel
from .CategoryModel import CategoryModel
# from .BooksModel import BooksModel