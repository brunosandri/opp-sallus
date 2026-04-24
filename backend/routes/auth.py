from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash
import json
import os

auth_bp = Blueprint("auth", __name__)

# Caminho absoluto para o arquivo de usuários
BASE_DIR = os.path.dirname(__file__)
USERS_FILE = os.path.join(BASE_DIR, "../data/usuarios.json")

# Carregar usuários
try:
    with open(USERS_FILE, "r", encoding="utf-8") as f:
        raw_data = json.load(f)

    usuarios = {
        email: dados["senha"]
        for email, dados in raw_data.items()
    }

except Exception as e:
    usuarios = {}

# Rota de login
@auth_bp.route("/login", methods=["POST"])
def login():
    try:
        data = request.json
        email = data.get("email")
        senha = data.get("password")

        if not email or not senha:
            return jsonify({"error": "Email e senha obrigatórios."}), 400
        
        if email in usuarios and check_password_hash(usuarios[email], senha):
            return jsonify({"token": f"fake-token-for-{email}"})

        return jsonify({"error": "Login inválido"}), 401

    except Exception as e:
        return jsonify({"error": "Erro interno no login", "detalhe": str(e)}), 500