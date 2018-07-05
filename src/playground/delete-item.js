/**
 * Stateless functional component for display all options
 */
const Options = ( props ) => {
	return (
		<div>
			{
				/**
				 * props.options.map() iterates through each item of options array and
				 * uses the option component to display each item of the array.
				 * Note that props.removeItem() is also being passed here which is coming from
				 * Items component, so that it can be used inside Option component on onclick event.
				 */
				props.options.map( ( item ) => {
					// Using another component here rather than hard coding because an item can only have one unique key
					return <Option
						key={ item }
						optionText={ item }
						removeItem = { props.removeItem }
					/>
				} )
			}
		</div>
	);
};

/**
 * Stateless functional component to display a single option
 * with a button which when clicked calls props.removeItem() to remove an item.
 */
const Option = ( props ) => {
		return (
			<div>
				{ <p>{ props.optionText }</p> }
				{<button
					onClick={ ( event ) => {
						props.removeItem( props.optionText )
					}}
				>Remove</button>
				}
			</div>
		)
};

/**
 * Class component where we define state object of options array
 * and render the Options component.
 */
class Items extends React.Component {
	constructor( props ) {
		super( props );
		this.removeItem = this.removeItem.bind( this );
		this.state = {
			options: [ 'Item1', 'Item2' ]
		};
	}

	/**
	 * Removes an item frm the options array
	 *
	 * @param {string/int} optionToRemove Item name passed from Option component when remove button is clicked.
	 */
	removeItem( optionToRemove ) {

		// Change the state of the options array by removing the item which was clicked.
		this.setState( ( prevState ) => {
			console.log( prevState );
			return {
				/**
				 * prevState.options.filter() filters through each item of the array and keeps
				 * only the items which are not equal to the one clicked upon.
				 */
				options: prevState.options.filter( ( item ) => {
					return optionToRemove !== item
				} )
			}
		} )
	}

	render() {
		return (
			<Options
				options={ this.state.options}
				removeItem={ this.removeItem }
			/>
		);
	};
}

const appEl = document.getElementById( 'appId' );
ReactDOM.render( <Items />, appEl );