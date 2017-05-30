var TYPES = require('tedious').TYPES;
module.exports = function(connect, Request, app) {

    var result = [];
    var getUserRoles = new Request(
        'getUserRoleTypes',
        function (err, rowCount, rows) {
            if (err) {
                console.log(err);
            }
            else {
            }
        }
    );

    getUserRoles.on('row', function (col) {
        col.forEach(function (column) {
            console.log("%s\t%s",column.metadata.colName, column.value);
            result.push(column.value);
            console.log(result);
        });


    });
    connect.execSql(getUserRoles);

    app.get('/getUserRoleTypes', function (req, res) {


        res.send(result);
    });
}






