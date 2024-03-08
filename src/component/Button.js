//First define Buttons in the calulator

import PropTypes from 'prop-types';

export default function Button(props){
    /*
    Define button function component.
    export default:  a syntax in ES6 module system used to export a default value. In this case, it exports a function component that can be imported and used in other files.
    function Button(props): function definition. component properties (props) are the data passed to the component, allowing configuration of the component's behavior and appearance.
    */
   const className = `component-button ${props.orange ? 'orange' : ''} 
                                       ${props.wide ? 'wide' : ''}`; //evaluates whether the orange prop is true or false. If true, it adds the class orange to the className; otherwise, it adds an empty string.
    //The resulting className is a string that concatenates the base class name with additional classes based on the presence of certain props.
    return (
        //props.name pass from outsides.
        <div className={className}>
            <button>{props.name}</button> 
        </div>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
}