import React from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';


/**
 * Create a custom Indecision class component that extends react's component class.
 * Here we define variables like title,subtitle and options and pass it to the Header and Options classes by
 * defining keys title and subtitle and setting their values to these constants, key value pairs will be converted
 * into object key value pairs by react and will be available to Header and Options classes as this.props.title and this.props.subtitle.
 */
export default class IndecisionApp extends React.Component {


	state = {
		options: [],
		selectedOption: undefined
	};
	// constructor( props ) {
	// 	super( props );
	// 	this.handleDeleteOptions = this.handleDeleteOptions.bind( this );
	// 	this.handlePick = this.handlePick.bind( this );
	// 	this.handleAddOption = this.handleAddOption.bind( this );
	// 	this.handleDeleteOption = this.handleDeleteOption.bind( this );
	// }

	// Deletes all items.
	handleDeleteOptions = () => {
		this.setState( () => ( { options: [] } ) );
	};

	// Clears the selected option in the Modal pop up.
	handleClearSelectedOption = () => {
		this.setState( () => ( { selectedOption: undefined } ) );
	};

	// Deletes a single item.
	handleDeleteOption = ( optionToRemove ) => {

		this.setState( ( prevState ) => ( {
			options: prevState.options.filter( ( option ) => {

				/**
				 * If the optionToRemove clicked by user is not the item in the array then return true,
				 * meaning keep  the item, otherwise return false and remove the item.
				 */
				return optionToRemove !== option;
			} )
		} ) );
	};

	handlePick = () => {
		let arrayLength = this.state.options.length;
		let randomNum = Math.floor( Math.random() * arrayLength );
		const option = this.state.options[ randomNum ];

		this.setState( () => ({
			selectedOption: option
		}) );
	};

	handleAddOption = ( option ) => {

		// Set validation : If user has not entered any value return an error string.
		if ( ! option ) {
			return 'Please enter a value';
			// if the option value entered already exists in the option array
		} else if ( this.state.options.indexOf( option ) > -1 ) {
			return 'Option already exists';
		}

		this.setState( ( prevState ) => ( { options: prevState.options.concat( option ) } ) );
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

	render() {

		// You can define a title constant and use its value as the title value of header tag below.
		const subTitle = 'This is sub title';
		return (
			<div>
				<Header subtitle={ subTitle }/>
				<div className="container">
					{/* this.state.options.length will return true if there are items in options array and
				make the boolean value available to Action class as this.props.hasOptions*/}
					<Action
						hasOptions={ this.state.options.length }
						handlePick={ this.handlePick }
					/>
					<div className="widget">
						<Options
							options={ this.state.options }
							// This will give access to handleDeleteOptions() inside Options component
							handleDeleteOptions={ this.handleDeleteOptions }
							handleDeleteOption={ this.handleDeleteOption }
						/>
						<AddOption handleAddOption={ this.handleAddOption }/>
					</div>
				</div>
				<OptionModal
					selectedOption = { this.state.selectedOption }
					handleClearSelectedOption = { this.handleClearSelectedOption }
				/>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: [ 'Amy', 'Jacky' ]
};
