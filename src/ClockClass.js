import { React, Component } from 'react'

class ClockElement extends Component {
    state = {  }
    render() { 
        return ( 
            <div>Here's the { this.props.children } Time is {new Date().toLocaleTimeString(this.props.locale)}</div>
         );
    }
}
 
export default ClockElement;