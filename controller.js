//todo 7
exports.findUsers = function(req, res) {
    
    var user_id = req.params.user_id;

    connection.query('SELECT * FROM person where id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    //post nya ada dalam req.body.$_POST['first_name']
    //post nya ada dalam req.body.$_POST['last_name']
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('INSERT INTO person (first_name, last_name) values (?,?)',
    [ first_name, last_name ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    
    //post nya ada dalam req.body.$_POST['user_id']
    //post nya ada dalam req.body.$_POST['first_name']
    //post nya ada dalam req.body.$_POST['last_name']
    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('UPDATE person SET first_name = ?, last_name = ? WHERE id = ?',
    [ first_name, last_name, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah user!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    
    //post nya ada dalam req.body.$_POST['user_id']
    var user_id = req.body.user_id;

    connection.query('DELETE FROM person WHERE id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus user!", res)
        }
    });
};

// CREATE TABLE IF NOT EXISTS `person` (
//     `id` int(11) NOT NULL AUTO_INCREMENT,
//     `first_name` varchar(50) NOT NULL DEFAULT '0',
//     `last_name` varchar(50) NOT NULL DEFAULT '0',
//     PRIMARY KEY (`id`)
//   )