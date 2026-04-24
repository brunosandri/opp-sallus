import os
import json
import shutil
from datetime import datetime
from flask import Blueprint, jsonify, request

dashboard_bp = Blueprint('dashboard', __name__)

# Caminhos base
BASE_DIR = os.path.dirname(__file__)
ARQUIVO_ETAPAS = os.path.join(BASE_DIR, "../data/etapas_obra.json")
NFTS_FILE = os.path.join(BASE_DIR, "../data/nfts.json")
DOCUMENTOS_FILE = os.path.join(BASE_DIR, "../data/documentos.json")
BACKUP_DIR = os.path.join(BASE_DIR, "../backups")

# Funções auxiliares
def carregar_etapas():
    try:
        with open(ARQUIVO_ETAPAS, "r", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def criar_backup():
    os.makedirs(BACKUP_DIR, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = os.path.join(BACKUP_DIR, f"etapas_{timestamp}.json")
    shutil.copy(ARQUIVO_ETAPAS, backup_path)

# ROTA: NFTs por usuário
@dashboard_bp.route("/nfts/<email>", methods=["GET"])
def get_nfts_por_email(email):
    try:
        with open(NFTS_FILE, "r", encoding="utf-8") as f:
            nfts = json.load(f)
        nfts_usuario = [n for n in nfts if n["email"] == email]
        return jsonify(nfts_usuario)
    except Exception as e:
        return jsonify({"erro": "Falha ao carregar NFTs", "detalhe": str(e)}), 500

# ROTA: Etapas da obra
@dashboard_bp.route("/obra", methods=["GET"])
def get_status_obra():
    return jsonify(carregar_etapas())

# ROTA: Adicionar nova etapa
@dashboard_bp.route("/adicionar-etapa", methods=["POST"])
def adicionar_etapa():
    try:
        nova_etapa = request.json
        etapas = carregar_etapas()
        etapas.append(nova_etapa)

        with open(ARQUIVO_ETAPAS, "w", encoding="utf-8") as f:
            json.dump(etapas, f, indent=2, ensure_ascii=False)

        criar_backup()
        return "Etapa adicionada com sucesso", 200
    except Exception as e:
        return jsonify({"erro": "Falha ao adicionar etapa", "detalhe": str(e)}), 500

# ROTA: Documentos (gerais + do usuário)
@dashboard_bp.route("/documentos/<email>", methods=["GET"])
def get_documentos(email):
    try:
        with open(DOCUMENTOS_FILE, "r", encoding="utf-8") as f:
            documentos = json.load(f)

        docs_gerais = [doc for doc in documentos if doc["email"] == "geral"]
        docs_usuario = [doc for doc in documentos if doc["email"] == email]

        return jsonify(docs_gerais + docs_usuario)
    except Exception as e:
        return jsonify({"erro": "Falha ao carregar documentos", "detalhe": str(e)}), 500

# ROTA: Vincular novo NFT
@dashboard_bp.route("/vincular-nft", methods=["POST"])
def vincular_nft():
    try:
        data = request.get_json()
        email = data.get("email")
        token_id = data.get("tokenId")
        participacao = data.get("participacao")
        valorinv = data.get("valorinv")
        valorcapt = data.get("valorcapt")

        if not all([email, token_id, participacao, valorinv, valorcapt]):
            return jsonify({"error": "Campos obrigatórios faltando"}), 400

        # Carregar NFTs existentes
        with open(NFTS_FILE, "r", encoding="utf-8") as f:
            nfts = json.load(f)

        nfts.append({
            "email": email,
            "tokenId": token_id,
            "participacao": participacao,
            "valorinv": valorinv,
            "valorcapt": valorcapt

        })

        # Salvar no arquivo
        with open(NFTS_FILE, "w", encoding="utf-8") as f:
            json.dump(nfts, f, indent=2, ensure_ascii=False)

        return jsonify({"message": "NFT vinculado com sucesso"}), 200
    except Exception as e:
        return jsonify({"error": "Erro ao vincular NFT", "detalhe": str(e)}), 500
