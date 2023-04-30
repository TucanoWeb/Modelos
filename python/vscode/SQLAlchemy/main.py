from sqlalchemy import Column, MetaData, Table, create_engine, Integer, String, text

metadata_obj = MetaData()

user = Table(
    'user',
    metadata_obj,
    Column('user_id', Integer, autoincrement=True, primary_key=True),
    Column('name', String(60)),
    Column('email', String(75))
    
)

conta = Table(
    'conta',
    metadata_obj,
    Column('user_id', Integer, autoincrement=True, primary_key=True),
    Column('name', String(60)),
    Column('email', String(75))
    
)

engine = create_engine('sqlite:///teste.db')
metadata_obj.create_all(engine)

stmt_list = text("SELECT * FROM user")

with engine.connect() as conn:
    #conn.execute(text("INSERT INTO user VALUES(2, 'Nome 2', 'email2@gmail.com')"))
    conn.commit()
    
    result = conn.execute(stmt_list)
    
    for row in result:
        print(row)

    
