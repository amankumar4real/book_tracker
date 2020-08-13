"""empty message

Revision ID: 941ec221a5ad
Revises: 
Create Date: 2020-08-13 15:51:37.602921

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '941ec221a5ad'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('category_model',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('genre', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=60), nullable=True),
    sa.Column('email', sa.String(length=30), nullable=True),
    sa.Column('password', sa.String(length=50), nullable=True),
    sa.Column('mobile', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('category_model')
    # ### end Alembic commands ###
