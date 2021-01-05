const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
	'first name': 'Max',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	[userChosenKeyName]: '...',
	greet: function() {
		alert('Hi there!');
	},
	1.5: 'hello'
};

//person.age = 31;
delete person.age; //Clean way
//person.age = undefined; //Dont do this
//person.age = null; //Dont do this
person.isAdmin = true;

const keyName = 'first name';

console.log(person['first name']);
console.log(person[1.5]);
console.log(person);