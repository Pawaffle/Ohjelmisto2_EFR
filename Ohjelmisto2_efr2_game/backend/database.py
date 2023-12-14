import mysql.connector


def make_connection():
    connection = mysql.connector.connect(
             host='',
             port=3306,
             database='efr_mini',
             user='American',
             password='123321',
             autocommit=True
             )
    return connection
