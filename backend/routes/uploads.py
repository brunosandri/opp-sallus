import os
from flask import Blueprint, jsonify, current_app

uploads_bp = Blueprint('uploads', __name__)

@uploads_bp.route('/documentos/<user_id>', methods=['GET'])
def listar_docs(user_id):
    pasta = os.path.join(current_app.config['UPLOAD_FOLDER'], user_id)
    if not os.path.exists(pasta):
        return jsonify([])
    arquivos = os.listdir(pasta)
    return jsonify([{"nome": arq, "url": f"/uploads/{user_id}/{arq}"} for arq in arquivos])
