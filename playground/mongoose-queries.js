const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server//db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id='c0751df9771caeb03ec72fc';

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}


// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findById(id).then((todos) => {
//     if(!todos){
//         console.log('id not found');
//     }
//     console.log('Todos By Id', todos);
// }).catch((e) => {
//     console.log(e);
// })

User.findById('5c026475fe38249a0956f9a8').then((user) => {
    if(!user){
        return console.log('Inable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})
