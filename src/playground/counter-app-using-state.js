class Counter extends React.Component {

	constructor( props ) {
		super( props );
		this.handleAddOne = this.handleAddOne.bind( this );
		this.handleMinusOne = this.handleMinusOne.bind( this );
		this.handleResetAll = this.handleResetAll.bind( this );

		this.state = {
			count: props.counter,
		}
	}

	componentDidMount() {
		try {
			const stringCount = localStorage.getItem( 'count' );
			const count = parseInt( countVal, 10 );

			if ( ! isNaN( count ) ) {
				this.setState( () => ( { count } ) );
			}
		} catch ( e ) {
			// Do nothing
		}
	}

	componentDidUpdate( prevProps, prevState ) {

		// If the previous state is not equal to the current state, if meaning state has changed.
		if ( prevState.count !== this.state.count ) {
			localStorage.setItem( 'count', this.state.count );
		}
	}

	handleAddOne() {
		this.setState( ( prevState ) => {
			return {
				/**
				 * Change the previous value of count property of previous state,
				 * each time this function is called.
				 * Please note the we are only changing count value here, if there are any other
				 * properties in previous state they will stay the same.
				 */
				count: prevState.count + 1
			}
		} );
	}

	handleMinusOne() {
		this.setState( ( prevState ) => {
			return {
				count: prevState.count - 1
			}
		} );
	}

	handleResetAll() {
		this.setState( () => {
			return {
				count: 0
			}
		} );
	}

	render() {
		return (
			<div>
				<h1>Count: { this.state.count }</h1>
				<button onClick={ this.handleAddOne }>+1</button>
				<button onClick={ this.handleMinusOne }>-1</button>
				<button onClick={ this.handleResetAll }>Reset All</button>
			</div>
		);
	}
}

Counter.defaultProps = {
	counter: 0
};

const appEl = document.getElementById( 'appId' );
ReactDOM.render( <Counter counter={1}/>, appEl );