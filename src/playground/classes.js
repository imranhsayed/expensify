class Person {
	/**
	 * Here you can set age's default value to 24
	 *
	 * @param name
	 * @param age
	 */
	constructor( name, age = 24 ) {

		/**
		 * This means that set the class property this.name equal to 'name' if passed as param,
		 * while instantiating the class, if not set it equal to 'test'.
		 * @type {*|string}
		 */
		this.name = name || 'test';
		this.age = age;
	}

	getGreeting() {
		return `Hi! My name is ${ this.name }`;
	}

	getDescription() {
		this.gender = 'Male';
		return `${ this.name } is ${ this.age } years old.`;
	}
}

class Student extends Person{
	/**
	 * Override the constructor method of the parent class Person, however inheriting the functionality
	 * of parent's constructor using super() and adding another parameter major to it.
	 *
	 * @param name
	 * @param age
	 * @param major
	 */
	constructor( name, age, major ) {
		super( name, age );
		this.major = major;
	}

	/**
	 * This Child method checks whether this.major has a value and returns a boolean value
	 *
	 * @return {boolean}
	 */
	hasMajor() {
		return !! this.major; // Here !! double logical not operator will return true if this.major has a value, false otherwise.
	}

	getDescription() {

		// Store the value returned by parent class method getDescription() into description var, using super.getDescription()
		let description = super.getDescription();

		if ( this.major ) {

			// Add more value to the existing description value returned by the parent class method getDescription()
			description += ` Their major is ${ this.major }`;
		}
		return description;

	}
}

class Traveller extends Person {
	constructor( name, age, homeLocation ) {
		super( name, age );
		this.homeLocation = homeLocation
	}

	getGreeting() {
		let greeting = super.getGreeting();

		if ( this.homeLocation ) {
			greeting += ` And the home location is ${ this.homeLocation }`;
		}

		return greeting;
	}
}

const stud = new Student( 'Alex', 23, 'Computer Science' );
const travel = new Traveller( 'Ada', 20, 'New York' );
console.log( travel ); // result: Student {name: "Alex", age: 23, major: "Computer Science"}
console.log( stud.hasMajor() ); // result: true
console.log( stud.getDescription() ); // result: Alex is 23 years old. Their major is Computer Science
console.log( travel.getGreeting() );