import { Component } from "react";

class ErrorBoundary extends Component{

    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({hasError: true});
    }

    render(){
        return this.state.hasError?<p>'something went wrong'</p>:this.props.children;
    }

}

export default ErrorBoundary;