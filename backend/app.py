from flask import Flask, request, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Rotas
from routes.auth import auth_bp
from routes.dashboard import dashboard_bp
from routes.uploads import uploads_bp

# Carrega variáveis de ambiente
load_dotenv()

# Inicializa o app
app = Flask(__name__)

# Configurações do app
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "salusopp")
app.config["UPLOAD_FOLDER"] = os.getenv("UPLOAD_FOLDER", "uploads")

# CORS — controle de origem
CORS(app, resources={r"/*": {"origins": "*"}})

# Registro de Blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(dashboard_bp)
app.register_blueprint(uploads_bp)

# ----------------------------
# ROTA: Servir documentos via URL
# ----------------------------
@app.route("/uploads/<user_id>/<filename>")
def download_file(user_id, filename):
    pasta = os.path.join(app.config["UPLOAD_FOLDER"], user_id)
    return send_from_directory(pasta, filename)

# ----------------------------
# ROTA: Upload de documento
# ----------------------------
@app.route("/upload-doc/<email>", methods=["POST"])
def upload_doc(email):
    if "file" not in request.files:
        return "Arquivo ausente", 400

    file = request.files["file"]
    pasta_destino = os.path.join(app.config["UPLOAD_FOLDER"], email)
    os.makedirs(pasta_destino, exist_ok=True)
    caminho = os.path.join(pasta_destino, file.filename)
    file.save(caminho)

    return "Enviado com sucesso", 200

# ----------------------------
# Execução local
# ----------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)
