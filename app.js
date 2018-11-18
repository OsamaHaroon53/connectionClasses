var conn=require('./connection');

conn.MySQL();
setTimeout(()=>{conn.disconnectionMySQL()},10000);

conn.mongoDB();
setTimeout(()=>{conn.disconnectionMongoDB();},10000);
