
module.exports = function(app, connect, request){

    app.post('/register', function(req, res){
        console.log(req.body);
    });


}