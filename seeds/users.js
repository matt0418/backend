
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    // .then(function () {
    //   // Inserts seed entries
    //   return knex('users').insert([
    //     {name: 'John Kelly', username: 'test', password:'test', email: 'test@gamil.com', role:'provider'},
    //     {name: 'Jack Sparrow', username: 'test2', password:'test2', email: 'test2@gamil.com', role:'consumer'},
    //     {name: 'Emilia Clarke', username: 'test3', password:'test3', email: 'test3@gamil.com', role:'consumer'},
    //     {name: 'Jon Snow', username: 'test4', password:'test4', email: 'test4@gamil.com', role:'provider'},
    //     {name: 'Tyrion Lannister', username: 'test5', password:'test5', email: 'test5@gamil.com', role:'consumer'},
    //     {name: 'Gandalf', username: 'test6', password:'test6', email: 'test6@gamil.com', role:'consumer'},
    //     {name: 'Frodo Baggins', username: 'test7', password:'test7', email: 'test7@gamil.com', role:'provider'},
    //     {name: 'Meriodic Brandybuck', username: 'test8', password:'test8', email: 'test8@gamil.com', role:'consumer'},
    //     {name: 'Samwise Gamgee', username: 'test9', password:'test9', email: 'test9@gamil.com', role:'consumer'},
    //   ]);
    // });
};
