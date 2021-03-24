"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Profesional, Cliente, Proyecto, Tarea
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

#######################

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
    new_profesional = Profesional( username=request_body["username"], password=request_body["password"], profesion=request_body["profesion"], cedula_profesional=request_body["cedula_profesional"], nombre_profesional=request_body["nombre_profesional"], correo_profesional=request_body["correo_profesional"])
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


#########################

#CRUD de Clientes

#get solo un cliente
@api.route('/clientes/<int:id>', methods=['GET']) 
def get_only_cliente(id):
    only_cliente = Cliente.query.filter_by(id=id).first()
    if not only_cliente:
        return jsonify({"msg":"cliente not found"}),404
    only_cliente= only_cliente.serialize()
    return jsonify(only_cliente),200


#get todos los clientes
@api.route('/clientes', methods=['GET'])
def show_all_clientes():
    all_clientes = Cliente.query.all()
    all_clientes_serialized = list(map(lambda Cliente: Cliente.serialize(), all_clientes))
    return jsonify(all_clientes_serialized), 200



#add cliente
@api.route('/clientes', methods=['POST'])
def add_cliente():
    # recibir info del request
    request_body = request.get_json()
    print(request_body)
    new_cliente = Cliente(cedula_cliente=request_body["cedula_cliente"], nombre_cliente=request_body["nombre_cliente"],correo_cliente=request_body["correo_cliente"], telefono_cliente=request_body["telefono_cliente"])
    db.session.add(new_cliente)
    db.session.commit()
    return jsonify("All good, added"), 200
    # return jsonify("All good, added"), 200


#delete cliente
@api.route('/clientes/<int:id>', methods=['DELETE'])
def del_cliente(id):
    # recibir info del request
    cliente = Cliente.query.get(id)
    if cliente is None:
        raise APIException('Cliente not found', status_code=404)
    db.session.delete(cliente)
    db.session.commit()
    return jsonify("All good, deleted"), 200


#Update cliente
@api.route('/clientes/<int:id>', methods=['PUT'])
def update_cliente(id):
    body = request.get_json()
    cliente = Cliente.query.get(id)
    if cliente is None:
        raise APIException('Cliente not found', status_code=404)
    if body is None:
        raise APIException('Wrong data', status_code=404)
    if "id" in body:
        cliente.id = body["id"]
    if "cedula_cliente" in body:
        cliente.cedula_cliente = body["cedula_cliente"]
    if "nombre_cliente" in body:
        cliente.nombre_cliente= body["nombre_cliente"]
    if "telefono_cliente" in body:
        cliente.telefono_cliente = body["telefono_cliente"]
    db.session.commit()
    return jsonify("All good, updated!"), 200



########################

#CRUD de Proyectos

#get solo un proyecto
@api.route('/proyectos/<int:id>', methods=['GET']) 
def get_only_proyecto(id):
    only_proyecto = Proyecto.query.filter_by(id=id).first()
    if not only_proyecto:
        return jsonify({"msg":"El proyecto no existe "}),404
    only_proyecto = only_proyecto.serialize()
    return jsonify(only_proyecto),200


#get todos los proyectos
@api.route('/proyectos', methods=['GET'])
def show_all_proyetos():
    all_proyectos = Proyecto.query.all()
    all_proyectos_serialized = list(map(lambda Proyectos: Proyectos.serialize(), all_proyectos))
    return jsonify(all_proyectos_serialized), 200


#add proyecto
@api.route('/proyectos', methods=['POST'])
def add_proyecto():
    # recibir info del request
    request_body = request.get_json()
    print(request_body)
    new_proyecto = Proyecto(id_cliente=request_body["id_cliente"], nombre_proyecto=request_body["nombre_proyecto"], descripcion_proyecto=request_body["descripcion_proyecto"],
     fecha_entrega=request_body["fecha_entrega"], horas_totales=request_body["horas_totales"])
    db.session.add(new_proyecto)
    db.session.commit()
    return jsonify("All good, added"), 200


#delete proyecto
@api.route('/proyectos/<int:id>', methods=['DELETE'])
def del_proyecto(id):
    # recibir info del request
    proyecto = Proyecto.query.get(id)
    if proyecto is None:
        raise APIException('Proyecto no encontrado', status_code=404)
    db.session.delete(proyecto)
    db.session.commit()
    return jsonify("Todo bien, fue eliminado"), 200


#Update proyecto
@api.route('/proyectos/<int:id>', methods=['PUT'])
def update_proyecto(id):
    body = request.get_json()
    proyecto = Proyecto.query.get(id)
    if proyecto is None:
        raise APIException('Proyecto no encontrado', status_code=404)
    if body is None:
        raise APIException('Wrong data', status_code=404)
    if "nombre_proyecto" in body:
       proyecto.nombre_proyecto = body["nombre_proyecto"]
    if "fecha_entrega" in body:
       proyecto.fecha_entrega = body["fecha_entrega"]
    if "horas_totales" in body:
       proyecto.horas_totales= body["horas_totales"]
    if "id_cliente" in body:
       proyecto.id_cliente= body["id_cliente"]
    if "descripcion_proyecto" in body:
       proyecto.descripcion_proyecto= body["descripcion_proyecto"]

    db.session.commit()
    return jsonify("All good, updated!"), 200



########################

#CRUD de Tareas

#get solo una tarea
@api.route('/tareas/<int:id>', methods=['GET']) 
def get_only_tarea(id):
    only_tarea = Tarea.query.filter_by(id=id).first()
    if not only_tarea:
        return jsonify({"msg":"La tarea no existe "}),404
    only_tarea= only_tarea.serialize()
    return jsonify(only_tarea),200


#get todas las tareas
@api.route('/tareas', methods=['GET'])
def show_all_tareas():
    all_tareas = Tarea.query.all()
    all_tareas_serialized = list(map(lambda Tareas: Tareas.serialize(), all_tareas))
    return jsonify(all_tareas_serialized), 200



#add tarea
@api.route('/tareas', methods=['POST'])
def add_tarea():
    # recibir info del request
    request_body = request.get_json()
    print(request_body)
    new_tarea = Tarea(id_proyecto=request_body["id_proyecto"], nombre_tarea=request_body["nombre_tarea"], 
    fecha_entrega=request_body["fecha_entrega"], horas_totales=request_body["horas_totales"], completada=request_body["completada"])
    db.session.add(new_tarea)
    db.session.commit()
    return jsonify("All good, added"), 200


#delete tarea
@api.route('/tareas/<int:id>', methods=['DELETE'])
def del_tarea(id):
    # recibir info del request
    tarea = Tarea.query.get(id)
    if tarea is None:
        raise APIException('Tarea no encontrada', status_code=404)
    db.session.delete(tarea)
    db.session.commit()
    return jsonify("Todo bien, fue eliminada"), 200


#Update tarea
@api.route('/tareas/<int:id>', methods=['PUT'])
def update_tarea(id):
    body = request.get_json()
    tarea =Tarea.query.get(id)
    if tarea is None:
        raise APIException('tarea no encontrada', status_code=404)
    if body is None:
        raise APIException('Wrong data', status_code=404)
    if "nombre_tarea" in body:
       tarea.nombre_tarea = body["nombre_tarea"]
    if "fecha_entrega" in body:
       tarea.fecha_entrega = body["fecha_entrega"]
    if "horas_totales" in body:
       tarea.horas_totales= body["horas_totales"]
    if "completada" in body:
       tarea.completada= body["completada"]
    if "id_proyecto" in body:
       tarea.id_proyecto= body["id_proyecto"]

    db.session.commit()
    return jsonify("All good, updated!"), 200






