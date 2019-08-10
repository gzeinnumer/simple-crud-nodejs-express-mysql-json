//todo 9
'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);

    app.route('/users/:user_id')
        .get(todoList.findUsers);

    app.route('/users')
        .post(todoList.createUsers);

    app.route('/users')
        .put(todoList.updateUsers);
    
    app.route('/users')
        .delete(todoList.deleteUsers);
};
//todo 10 node server.js
//todo 11 cek di browser localhost:3000
//todo 12 cek di postman localhost:3000/users jangan lupa param post nya, cek di controller = POST
//todo 13 cek di postman localhost:3000/users tampa param = GET
//todo 14 cek di postman localhost:3000/users jangan lupa param post nya, cek di controller = PUT
//todo 15 cek di postman localhost:3000/users jangan lupa param post nya, cek di controller = DELETE