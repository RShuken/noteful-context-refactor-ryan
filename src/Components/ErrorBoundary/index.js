import React from "react";
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) {
           return <div>This is the error boundary message. Sorry we encountered an Error.</div>
        }
        return this.props.children;
    }

}

export default ErrorBoundary;


ErrorBoundary.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}