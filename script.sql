
--CREANDO TABLA PRODUCTOS
create table productos(
	id_producto int,
	nombre text not null,
	precio numeric not null,
	constraint pk_productos primary key (id_producto)
);
--CREANDO SECUENCIA PARA LA LLAVE PRIMARIA id_producto DE LA TABLA productos
create sequence id_producto 
start 10
owned by productos.id_producto

--FUNCION PARA OBTENER TODOS LOS PRODUCTOS
create or replace function ft_view_productos()
returns table (
		id_producto int,
		nombre text,
		precio numeric
	)
language plpgsql
as
$$
begin
return query
	select pro.id_producto, pro.nombre, pro.precio from productos pro;
end;
$$





--CREANDO TABLA USUARIOS
create table usuarios(
	id_usuario int,
	nombre_usuario text not null unique,
	correo text not null unique,
	contrasenia text not null,
	constraint pk_usuarios primary key (id_usuario)
);

--ELIMINAR LA TABLA ANTERIOR
drop table usuarios

--CREANDO SECUENCIA PARA LA LLAVE PRIMARIA id_usuario DE LA TABLA usuarios
create sequence id_usuarios
start 100
owned by usuarios.id_usuario


--INSERTANDO UN USUARIO
insert into usuarios (id_usuario,nombre_usuario,correo,contrasenia) values (nextval('id_usuarios'),'antonio','antonio@gmail.com','123456')

--MOSTRAR TODOS LOS USUARIOS
select *from usuarios 

--CREANDO FUNCION PARA INSERTAR USUARIOS
create or replace function ft_mant_insert_usuario(p_nombre_usuario text, p_correo text, p_contrasenia text)
returns json
language plpgsql
as
$$
begin

	if exists (select * from usuarios where nombre_usuario=p_nombre_usuario or correo = p_correo) then
		return '{"estado": false, "mensaje":"El usuario ya existe"}';
	else
		insert into usuarios (id_usuario,nombre_usuario,correo,contrasenia) 
				values(nextval('id_usuarios'),p_nombre_usuario,p_correo,p_contrasenia);
		return '{"estado": true, "mensaje":"Usuario registrado satisfactoriamente"}';
	end if;

end;
$$

--ELIMINAR LA FUNCION ANTERIOR
DROP FUNCTION ft_mant_insert_usuario(text,text,text)

--CREANDO FUNCION PARA INICIAR SESION
create or replace function ft_view_usuario(p_correo text)
returns table(
	correo text,
	contrasenia text
)
language plpgsql
as
$$
begin
	return query
	select u.correo, u.contrasenia from usuarios u where u.correo = p_correo;
end;
$$




















