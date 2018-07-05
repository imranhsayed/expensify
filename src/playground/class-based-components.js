/**
 * Indecision App
 */

/**
 * Extending the Component class of React, that gives us component feature of react.
 * React component class requires one of its method to be called, called render().
 */
class Header extends React.Component {

	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <Header /> tag.
	 */
	render() {
		console.log( this.props ); // result: {title: "test value"}
		return (
			<div>
				<h1>{ this.props.title }</h1>
				<p>{ this.props.subtitle }</p>
			</div>
		);
	}
}

/**
 * Extending Component class of React as a child class Action,
 * where we define all the actions required in our site.
 */
class Action extends React.Component {

	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <Action /> tag.
	 */
	render() {
		return (
			<div>
				{/* The disabled value will be flipped to true to false and vice versa,
				 depending on the boolean value of this.props.hasOptions */}
				<button disabled={ ! this.props.hasOptions } onClick={ this.props.handlePick }>
					What should I do?
				</button>
			</div>
		);
	}
}

/**
 * Extending Component class of React as a child class Options,
 * where we define all the actions required in our site.
 */
class Options extends React.Component {

	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <Options /> tag.
	 */
	render() {
		console.log( this.props.options );
		return (
			<div>
				{/* this.props.options will contain the options array defined in Indecision class and we are iterating it over to display each item in para tag
				 Then we are we are passing the item to the Option tag as optionText key-value pair, which will then make it
				 available in Option class as this.props.optionText*/}
				{ this.props.options.map( ( item ) => <Option key={ item } optionText={ item }/> ) }

				{/* When the button is clicked it will call the handleDeleteOptions() set as a
				value of handleDeleteOptions property inside Options tag of IndecisionApp class*/}
				<button onClick={ this.props.handleDeleteOptions } >Remove All</button>
			</div>
		);
	}
}

class Option extends React.Component {
	render () {
		return (
			<div>
				{/* The optionText key value set inside the Options class, is now available here. */}
				{ <p>{ this.props.optionText }</p> }
			</div>
		);
	}
}

/**
 * Extending Component class of React as a child class AddOption,
 * where we define all the actions required in our site.
 */
class AddOption extends React.Component {

	constructor( props ) {
		super( props );
		this.handleAddOption = this.handleAddOption.bind( this );
		// Add the error property inside the state object and set its default value to undefined
		this.state = {
			error: undefined
		};
	}

	handleAddOption( event ) {
		event.preventDefault();

		/**
		 * event.target.elements contains the form values submitted as an object.
		 * The form input elements can be accessed by their name as their properties in this object.
		 * @type {string}
		 */
		const inputVal = event.target.elements.name.value.trim();

		/**
		 * Calling the handleAddOption() of IndecisionApp class set as property value of handleAddOption in AddOption tag.
		 * Also store if the error value if returned by handleAddOption() of IndecisionApp
		 * @type {*|void|string}
		 */
		const error = this.props.handleAddOption( inputVal );

		// If there is error change the state of error property to the value of the error.
		this.setState( () => {
			return {
				error: error
			}
		} );
	}

	/**
	 * Whatever is returned by render() here will be available in the JSX expression to <AddOption /> tag.
	 */
	render() {
		return (
			<div>
				{ this.state.error && <p>{ this.state.error }</p>  }
				<form action="/" method="POST" onSubmit={ this.handleAddOption }>
					<label htmlFor="name-input">Enter Name
						<input type="text" id="name-input" name="name"/>
					</label>
				</form>
			</div>
		);
	}
}

/**
 * Create a custom Indecision class component that extends react's component class.
 * Here we define variables like title,subtitle and options and pass it to the Header and Options classes by
 * defining keys title and subtitle and setting their values to these constants, key value pairs will be converted
 * into object key value pairs by react and will be available to Header and Options classes as this.props.title and this.props.subtitle.
 */
class IndecisionApp extends React.Component {

	constructor( props ) {
		super( props );
		this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
		this.handlePick = this.handlePick.bind( this );
		this.handleAddOption = this.handleAddOption.bind( this );
		this.state = {
			options: []
		}
	}

	handleDeleteOptions() {
		this.setState( () => {
			return {
				options: []
			}
		} );
	}

	handlePick() {
		let arrayLength = this.state.options.length;
		let randomNum = Math.floor( Math.random() * arrayLength );
		alert( this.state.options[ randomNum ] );
	}

	handleAddOption( option ) {

		// Set validation : If user has not entered any value return an error string.
		if ( ! option ) {
			return 'Please enter a value';
			// if the option value entered already exists in the option array
		} else if ( this.state.options.indexOf( option ) > -1 ) {
			return 'Option already exists';
		}

		this.setState( ( prevState ) => {
			return {
				options: prevState.options.concat( option )
			}
		} );
	}

	render() {

		// You can define a title constant and use its value as the title value of header tag below.
		const title = 'My Title';
		const subTitle = 'This is sub title';
		return (
			<div>
				<Header title={ title } subtitle={ subTitle }/>
				{/* this.state.options.length will return true if there are items in options array and
				make the boolean value available to Action class as this.props.hasOptions*/}
				<Action
					hasOptions={ this.state.options.length }
					handlePick={ this.handlePick }
				/>
				<Options
					options={ this.state.options }
					// This will give access to handleDeleteOptions() inside Options component
					handleDeleteOptions={ this.handleDeleteOptions }
				/>
				<AddOption handleAddOption={ this.handleAddOption }/>
			</div>
		);
	}
}

const app = document.getElementById( 'appId' );

ReactDOM.render( <IndecisionApp/>, app );