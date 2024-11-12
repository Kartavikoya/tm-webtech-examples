var cities = ['Hamilton', 'Toronto', 'Vancouver', 'London', 'Brussels', 'Sydney'] 
/*
	complete code to:- (write single line each)
		Remove cities to which you cant go
		Add 'Tokyo' at the end
		Add 'Boston' at the start
		Remove furthest city from the array
		Print the array
*/
cities.remove(4);
cities.push('Tokyo'); 
cities.unshift('Boston');
cities.splice(5);
console.log(cities);
