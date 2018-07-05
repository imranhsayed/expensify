class VisibilityToggle extends React.Component {

	constructor( props ) {
		super( props );
		this.handleToggleVisibility = this.handleToggleVisibility.bind( this );
		this.state = {
			visibility: false,
		}
	}

	handleToggleVisibility() {
		this.setState( ( prevState ) => {
			return {
				visibility: ! prevState.visibility,
			}
		} );
	}

	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={ this.handleToggleVisibility }>
					{ this.state.visibility ? 'Hide' : 'Show' }
				</button>
				<p>{ this.state.visibility ? 'This is content' : '' }</p>
			</div>
		);
	}
}

const appEl = document.getElementById( 'appId' );
ReactDOM.render( <VisibilityToggle />, appEl );