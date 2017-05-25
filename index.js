var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//azure database
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var configDetails = require('./config/index.js');

var app = express();
var port = configDetails.host;

var config = configDetails.Config;
var connection = new Connection(config);

connection.on('connect', function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("working");
        request = new Request(
            "SELECT TOP (1000) [RoleId],[RoleName] FROM [dbo].[UserRolesRef]",
            function(err, rowCount, rows){
                if(err){
                    console.log(err);
                }
                console.log(rowCount);
            }

        );

        request.on('row', function(columns){
           columns.forEach(function(column){
               console.log( column);
           });

        });

        connection.execSql(request);

    }
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
   res.sendFile('./public/index.html');
});

app.listen(port, function(){
    console.log("Working on " + port);
});

