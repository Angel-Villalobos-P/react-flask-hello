"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Profesional, Cliente, Proyecto, Tarea, TareaProyecto
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


# CRUD PROFESIONAL
#get solo profesional
@api.route('/profesional/<int:id>', methods=['GET']) 
def get_only_profesional(id):
    only_profesional = Profesional.query.filter_by(id=id).first()
    if not only_profesional:
        return jsonify({"msg":"Profesional not found"}),404
    only_profesional = only_profesional.serialize()
    return jsonify(only_profesional),200

#get all info profesional
@api.route('/profesional', methods=['GET'])
def show_all_profesionals():
    all_profesional = Profesional.query.all()
    all_profesional_serialized = list(map(lambda profesional: profesional.serialize(), all_profesional))
    return jsonify(all_profesional_serialized), 200

#add profesional
@api.route('/profesional', methods=['POST'])
def add_profesional():
    # recibir info del request
    request_body = request.get_json()
    print(request_body)
    new_profesional = Profesional( username=request_body["username"], password=request_body["password"], profesion=request_body["profesion"], cedula_profesional=request_body["cedula_profesional"], nombre_profesional=request_body["nombre_profesional"], correo_profesional=request_body["correo_profesional"], estado_profesional=request_body["estado_profesional"])
    db.session.add(new_profesional)
    db.session.commit()
    return jsonify("All good, added"), 200

#delete Profesional
@api.route('/profesional/<int:id>', methods=['DELETE'])
def del_profesional(id):
    # recibir info del request
    profesional = Profesional.query.get(id)
    if profesional is None:
        raise APIException('Profesional not found', status_code=404)
    db.session.delete(profesional)
    db.session.commit()
    return jsonify("All good, deleted"), 200


#Update Profesional
@api.route('/profesional/<int:id>', methods=['PUT'])
def update_profesional(id):
    body = request.get_json()
    profesional = Profesional.query.get(id)
    if profesional is None:
        raise APIException('Profesional not found', status_code=404)
    if body is None:
        raise APIException('Wrong data', status_code=404)
    if "username" in body:
        profesional.username = body["username"]
    if "password" in body:
        profesional.password = body["password"]
    if "profesion" in body:
        profesional.profesion = body["profesion"]
    if "cedula_profesional" in body:
        profesional.cedula_profesional = body["cedula_profesional"]
    if "nombre_profesional" in body:
        profesional.nombre_profesional = body["nombre_profesional"]
    if "correo_profesional" in body:
        profesional.correo_profesional = body["correo_profesional"]
    if "estado_profesional" in body:
        profesional.estado_profesional = body["estado_profesional"]
    db.session.commit()
    return jsonify("All good, updated!"), 200