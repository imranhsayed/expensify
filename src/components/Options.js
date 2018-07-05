import React from 'react';
import Option from './Option';
/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Options = ( props ) => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title"> Your Options</h3>
			{/* When the button is clicked it will call the handleDeleteOptions() set as a
				value of handleDeleteOptions property inside Options tag of IndecisionApp class*/}
			<button className="button button--link" onClick={ props.handleDeleteOptions } >Remove All</button>
		</div>

		{/* props.options will contain the options array defined in Indecision class and we are iterating it over to display each item in para tag
				 Then we are we are passing the item to the Option tag as optionText key-value pair, which will then make it
				 available in Option functional based component as props.optionText*/}
		{ props.options.map( ( item, index ) => (
				<Option
					handleDeleteOption={ props.handleDeleteOption }
					key={ item }
					count={ index + 1 }
					optionText={ item }
				/>
			)
		) }
	</div>
);

export default Options;