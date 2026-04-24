from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    password_hash = db.Column(db.String(128))

class ObraStatus(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(120))
    descricao = db.Column(db.Text)
    imagem_url = db.Column(db.String(256))
    data = db.Column(db.Date)

class Documento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(256))
    user_id = db.Column(db.Integer)