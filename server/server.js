const Hapi=require('hapi');
const reply = require('hapi/lib/reply');
const request = require('hapi/lib/request');
const Vision=require('@hapi/vision')
const Inert=require('inert');

const server=new Hapi.Server();
server.connection({
    port:3000,
    host:'localhost',
    routes:{cors:true}
})

server.register(Inert, (err) => {

    if (err) {
        throw err;
    }

server.route({
    method:'GET',
    path:'/',
    handler: (request,reply)=>{
        reply.file('./index.html');
        
    }
});
});


server.start((err)=>{
    if(err){
        console.log(err);
    }
    console.log(`the server is running @ ${server.info.uri}`);
})