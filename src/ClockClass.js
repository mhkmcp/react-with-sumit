import { React, Component } from 'react'

class ClockElement extends Component {
    // when state is dependent on props 
    // constructor(props) {
    //     super(props);
    //     this.state = { date: props.date }
    // }
    
    // when state is independent of props
    state = { date: new Date() }

    componentDidMount() {
        this.clockTimer = setInterval(() => { this.tick() }, 1000); 
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    
    tick() {
        this.setState({date: new Date()})
    }
    
    render() { 
        return ( 
            <div>Here's the { this.props.children } Time is {this.state.date.toLocaleTimeString(this.props.locale)}</div>
         );
    }
}
 
export default ClockElement;