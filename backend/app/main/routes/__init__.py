from flask import Blueprint

user = Blueprint('user',__name__)
books = Blueprint('books',__name__)

from . import User
from . import Books