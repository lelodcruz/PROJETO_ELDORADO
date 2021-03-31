async function connect(){
  if(global.connection && global.connection.state !== 'disconnected')
  return global.connection;
const mysql = require("mysql2/promise");
const connection = await mysql.createConnection("mysql://root:@localhost:3306/gerenciadordispositivos");
console.log("Conectou no Mysql");
global.connection = connection;
return connection;
}


async function selecionardispositivos(){
  const conn = await connect();
  const [rows] = await conn.query('SELECT * from dispositivos');
  return rows;
}

async function inserirdispositivos(dispositivo){
  const conn = await connect();
  const sql = 'INSERT INTO dispositivos (categoria_estrangeira,cor,partNumber) VALUES (?,?,?)';
  const values = [dispositivo.categoria_estrangeira,dispositivo.cor,dispositivo.partNumber];
  return await conn.query(sql,values);

}

async function deletardispositivos(id){
  const conn = await connect();
  const sql = 'DELETE FROM dispositivos where id=?;';
  return await conn.query(sql,[id]);

}


module.exports = {selecionardispositivos,inserirdispositivos,deletardispositivos}






async function selecionarcategoria(){
  const conn = await connect();
  const [rows] = await conn.query('SELECT * from categoria');
  return rows;
}

async function inserircategoria(categoria){
  const conn = await connect();
  const sql = 'INSERT INTO categoria (categoria) VALUES (?)';
  const values = [categoria];
  return await conn.query(sql,values);

}

async function deletarcategoria(id){
  const conn = await connect();
  const sql = 'DELETE FROM categoria where id=?;';
  return await conn.query(sql,[id]);

}


module.exports = {selecionarcategoria,inserircategoria,deletarcategoria}