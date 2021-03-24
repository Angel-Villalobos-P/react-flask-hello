from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Profesional(db.Model):
    __tablename__ = 'profesional'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    profesion = db.Column(db.String(120), unique=False, nullable=False)
    cedula_profesional = db.Column(db.Integer, unique=True, nullable=False)
    nombre_profesional = db.Column(db.String(120), unique=False, nullable=False)
    correo_profesional = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
         return f"<profesional {self.id} - {self.nombre_profesional}>"

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "profesion": self.profesion,
            "cedula_profesional": self.cedula_profesional,
            "nombre_profesional": self.nombre_profesional,
            "correo_profesional": self.correo_profesional
        }
    
class Cliente(db.Model):
    __tablename__ = 'cliente'
    id = db.Column(db.Integer, primary_key=True)
    cedula_cliente = db.Column(db.Integer, unique=True, nullable=False)
    nombre_cliente = db.Column(db.String(120), unique=False, nullable=False)
    correo_cliente = db.Column(db.String(120), unique=True, nullable=False)
    telefono_cliente = db.Column(db.String(120), unique=False, nullable=False)
    proyectos = db.relationship('Proyecto', backref='cliente')

    def __repr__(self):
         return f"<cliente {self.id} - {self.nombre_cliente}>"

    def serialize(self):
        return {
            "id": self.id,
            "cedula_cliente": self.cedula_cliente,
            "nombre_cliente": self.nombre_cliente,
            "correo_cliente": self.correo_cliente,
            "telefono_cliente": self.telefono_cliente,
            "proyectos": list(map(lambda proyecto:proyecto.serialize(), self.proyectos))
        }

class Proyecto(db.Model):
    __tablename__ = 'proyecto'
    id = db.Column(db.Integer, primary_key=True)
    id_cliente = db.Column(db.Integer, db.ForeignKey('cliente.id'))
    #id_profesional = db.Column(db.Integer, db.ForeignKey('profesional.id'))
    nombre_proyecto = db.Column(db.String(120), unique=False, nullable=False)
    descripcion_proyecto = db.Column(db.String(120), unique=False, nullable=False)
    # fecha_entrega = db.Column(db.Date, unique=False, nullable=False)
    fecha_entrega = db.Column(db.String(200), unique=False, nullable=False)
    # horas_totales = db.Column(db.Integer, unique=False, nullable=False)
    horas_totales = db.Column(db.String(150), unique=False, nullable=False)
    tareas = db.relationship('Tarea', backref='proyecto')

    def __repr__(self):
         return f"<proyecto {self.id} - {self.nombre_proyecto}>"

    def serialize(self):
        return {
            "id": self.id,
            "id_cliente": self.id_cliente,
            "nombre_proyecto": self.nombre_proyecto,
            "descripcion_proyecto": self.descripcion_proyecto,
            "fecha_entrega": self.fecha_entrega,
            "horas_totales": self.horas_totales,
            "tareas": list(map(lambda tarea:tarea.serialize(), self.tareas))
        }

class Tarea(db.Model):
    __tablename__ = 'tarea'
    id = db.Column(db.Integer, primary_key=True)
    id_proyecto = db.Column(db.Integer, db.ForeignKey('proyecto.id'))
    nombre_tarea = db.Column(db.String(120), unique=False, nullable=False)
    fecha_entrega = db.Column(db.String(150), unique=False, nullable=False)
    horas_totales = db.Column(db.String(150), unique=False, nullable=False)
    completada = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
         return f"<tarea {self.id} - {self.nombre_tarea}>"

    def serialize(self):
        return {
            "id": self.id,
            "nombre_tarea": self.nombre_tarea,
            "fecha_entrega": self.fecha_entrega,
            "horas_totales": self.horas_totales,
            "completada": self.completada,
            "id_proyecto":self.id_proyecto
        }
