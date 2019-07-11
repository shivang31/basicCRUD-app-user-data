#!/usr/bin python3.6
import pymysql
from app1 import app
from db_config import mysql
from flask import flash,render_template,request,redirect,jsonify
from werkzeug import generate_password_hash,check_password_hash

		#@app.route('/new_user')
		#def add_user_view():
		#	return render_template('home.html')
@app.route('/add',methods=['POST'])
def add_user():
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		firstname=request.form['firstname']
		lastname=request.form['lastname']
		email=request.form['email']
		phone=request.form['phone']
		password=request.form['password']
		cursor.execute("SELECT phone FROM Myprojectx WHERE phone=%s",phone)
		data = cursor.fetchall()
		if not data:
			if firstname and lastname and email and phone and password and request.method == 'POST':
			 	_hashed_password = generate_password_hash(password)
			 	sql = "INSERT INTO Myprojectx(firstname, lastname, email,phone,password) VALUES(%s,%s,%s,%s,%s)"
			 	data = (firstname, lastname, email,phone,password)
			 	cursor.execute(sql, data)
			 	conn.commit()
			 	return 'User added successfully'
			else:
			    return False
		else:
		    return 'User with this phone number already exists.'	    
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
@app.route('/')
def users():
	try:
		#import pdb;pdb.set_trace()
		conn = mysql.connect()
		cursor = conn.cursor(pymysql.cursors.DictCursor)
		cursor.execute("SELECT * FROM Myprojectx")
		data = cursor.fetchall()
		return render_template('users.html',row=data)

	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()
'''@app.route('/edit/<int:id>')
def edit_view(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor(pymysql.cursors.DictCursor)
		cursor.execute("SELECT * FROM Myprojectx WHERE _id=%s", id)
		row = cursor.fetchone()
		if row:
			return render_template('edit.html', row=row)
		else:
			return 'Error loading #{id}'.format(id=id)
	except Exception as e:
		print(e)
	finally:
		cursor.close()
		conn.close()'''
@app.route('/update', methods=['POST'])
def update_user():
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		print(request.form)	
		firstname=request.form['firstname']
		lastname=request.form['lastname']
		email=request.form['email']
		phone=request.form['phone']
		password=request.form['password']
		_id=request.form['id']
		# validate the received values
		if firstname and lastname and email and phone and password and _id and request.method == 'POST':
			#do not save password as a plain text
			_hashed_password = generate_password_hash(password)
			print(_hashed_password)
			# save edits
			sql = "UPDATE Myprojectx SET firstname=%s,lastname=%s, email=%s,phone=%s, password=%s WHERE _id=%s"
			data = (firstname, lastname, email,phone,password, _id,)
			cursor.execute(sql, data)
			conn.commit()
			return redirect('/')
		else:
			return 'Error while updating user'
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()

@app.route('/delete/<int:id>')
def delete_user(id):
	try:
		conn = mysql.connect()
		cursor = conn.cursor()
		cursor.execute("DELETE FROM Myprojectx WHERE _id=%s", (id,))
		conn.commit()
		flash('User deleted successfully!')
		return redirect('/')
	except Exception as e:
		print(e)
	finally:
		cursor.close() 
		conn.close()

if __name__ =="__main__":
	app.run(debug=True)
