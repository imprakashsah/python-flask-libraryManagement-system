from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/ignoulibrary'
db = SQLAlchemy(app)


class Book(db.Model):
    serial = db.Column(db.Integer, primary_key=True)
    bookname = db.Column(db.String(100), unique=False, nullable=False)
    bookauthor = db.Column(db.String(100), nullable=False)
    isbn = db.Column(db.String(100),  nullable=False)
    type = db.Column(db.String(20), nullable=False)



@app.route("/addbook", methods =["GET", "POST"])
def index():
    if request.method == 'POST' :
        bookname = request.form.get('bookname')
        bookauthor = request.form.get('bookauthor')
        isbn = request.form.get('isbn')
        type = request.form.get('type')
        entry = Book(bookname = bookname, bookauthor = bookauthor, isbn = isbn, type = type) ;
        db.session.add(entry)
        db.session.commit()
    return render_template('index.html', book=book)



app.run(debug=True)