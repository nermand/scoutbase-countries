import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
    console.error('Component tree error:', error);
    console.error('Info:', info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <span>Something went terribly wrong!</span>
          <p>
            <a href="/">Go to Home page</a>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
