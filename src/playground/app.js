/**
 * Indecision App
 */

const Header = ( props ) => {
	console.log( props ); // result: {title: "test value"}
	return (
		<div>
			<h1>{ props.title }</h1>
			{ props.subtitle && <p>{ props.subtitle }</p> }
		</div>
	);
};

Header.defaultProps = {
	title: 'Indecision'
};

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Action = ( props ) => {
	return (
		<div>
			{/* The disabled value will be flipped to true to false and vice versa,
				 depending on the boolean value of this.props.hasOptions */}
			<button disabled={ ! props.hasOptions } onClick={ props.handlePick }>
				What should I do?
			</button>
		</div>
	);
};

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Options = ( props ) => {
	console.log( props.options );
	return (
		<div>
			{/* props.options will contain the options array defined in Indecision class and we are iterating it over to display each item in para tag
				 Then we are we are passing the item to the Option tag as optionText key-value pair, which will then make it
				 available in Option functional based component as props.optionText*/}
			{ props.options.map( ( item ) => (
					<Option
						handleDeleteOption={ props.handleDeleteOption }
						key={ item }
						optionText={ item }
					/>
				)
			) }

			{/* When the button is clicked it will call the handleDeleteOptions() set as a
				value of handleDeleteOptions property inside Options tag of IndecisionApp class*/}
			<button onClick={ props.handleDeleteOptions } >Remove All</button>
		</div>
	);
};

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Option = ( props ) => {
	return (
		<div>
			{/* The optionText key value set inside the Options functional based component, is now available here. */}
			{ <p>{ props.optionText }</p> }
			{<button
				onClick={ ( event ) => {
					props.handleDeleteOption( props.optionText )
				}}
			>Remove</button>
			}
		</div>
	);
};


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
		this.setState( () => ( { error: error } ) );

		// Make the input box blank once the form is submitted.
		event.target.elements.name.value = '';
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
		this.handleDeleteOption = this.handleDeleteOption.bind( this );
		this.state = {
			options: props.options
		}
	}

	// Life cycle method : gets fired when Component enters the screen
	componentDidMount() {

		// The try, catch method executes the codes wrapped inside try and the goes into catch wrapper if there is an error.
		try {
			// Get the localStorage data stored using componentDidUpdate() and parse it into obj
			const jsonData = localStorage.getItem( 'options' );
			const options = JSON.parse( jsonData );

			// If we get values inside options.
			if ( options ) {
				// Change the state of the options array with new values.
				this.setState( () => ( { options } ) );
			}
		} catch ( e ) {
			// Do nothing if there is an error (e)
		}
	}

	// Life cycle method : getsfired when Component ( props or state ) gets updated
	componentDidUpdate( prevProps, prevState ) {
		/**
		 * If the previous options array length is not the same as the updated one,
		 * then save the data in the localStorage.
		 */
		if ( prevState.options.length !== this.state.options.length ) {
			const jsonData = JSON.stringify( this.state.options );
			localStorage.setItem( 'options', jsonData );
			console.log( localStorage.getItem( 'options' ) );
		}
	}

	componentWillUnmount() {
		console.log( 'component unmounted' );
	}

	// Deletes all items.
	handleDeleteOptions() {
		this.setState( () => ( { options: [] } ) );
	}

	// Deletes a single item.
	handleDeleteOption( optionToRemove ) {

		this.setState( ( prevState ) => ( {
			options: prevState.options.filter( ( option ) => {

				/**
				 * If the optionToRemove clicked by user is not the item in the array then return true,
				 * meaning keep  the item, otherwise return false and remove the item.
				 */
				return optionToRemove !== option;
			} )
		} ) );
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

		this.setState( ( prevState ) => ( { options: prevState.options.concat( option ) } ) );
	}

	render() {

		// You can define a title constant and use its value as the title value of header tag below.
		const subTitle = 'This is sub title';
		return (
			<div>
				<Header subtitle={ subTitle }/>
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
					handleDeleteOption={ this.handleDeleteOption }
				/>
				<AddOption handleAddOption={ this.handleAddOption }/>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: [ 'Amy', 'Jacky' ]
};


const app = document.getElementById( 'appId' );

ReactDOM.render( <IndecisionApp options={ ['Neha', 'Smita'] }/>, app );