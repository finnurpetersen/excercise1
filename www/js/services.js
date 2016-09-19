angular.module('starter.services', [])

.factory('foods', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var foods = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    add: function(newfood) {
foods.push(newfood);
},

    all: function() {
      return foods;
    },
    remove: function(food) {
      foods.splice(foods.indexOf(food), 1);
    },
    get: function(foodId) {
      for (var i = 0; i < foods.length; i++) {
        if (foods[i].id === parseInt(foodId)) {
          return foods[i];
        }
      }
      return null;
    }
  };
});
