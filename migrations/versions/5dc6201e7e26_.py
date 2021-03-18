"""empty message

Revision ID: 5dc6201e7e26
Revises: a83eef43ee83
Create Date: 2021-03-18 18:50:09.515110

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5dc6201e7e26'
down_revision = 'a83eef43ee83'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('cliente', sa.Column('telefono_cliente', sa.String(length=120), nullable=False))
    op.drop_column('cliente', 'estado_cliente')
    op.drop_column('tarea', 'nombre_cliente')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('tarea', sa.Column('nombre_cliente', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.add_column('cliente', sa.Column('estado_cliente', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.drop_column('cliente', 'telefono_cliente')
    # ### end Alembic commands ###
