var person = {
	name: 'Mike',
	places: [ 'China', 'Japan', 'Australia' ],
	printPlaces: function () {
		console.log( this ); // this refers to person object here

		// ES5 foreach loop that runs through each item of the places array. Comment this section while checking result for arrow function below.
		this.places.forEach( function ( city ) {
			console.log( this.name ); // this not available inside a functions function and its undefined
		} );

		/**
		 * ES6 the arrow functions no longer bind their own this value. They just use the this value of the context they were created in.
		 * So they will use their parents this value
		 */
		this.places.forEach( ( city ) => {
			console.log( this.name ); // this is now available and refers to its parent's ( printPlaces ) this value which is the person object
		} );
	}
};

person.printPlaces();