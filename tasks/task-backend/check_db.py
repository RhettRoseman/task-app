import psycopg2

conn = psycopg2.connect(
    "postgresql://jroseman3:postgres@localhost:5434/taskmanager"
)
cur = conn.cursor()
cur.execute("SELECT * FROM tasks")
print(cur.fetchall())
cur.close()
conn.close()