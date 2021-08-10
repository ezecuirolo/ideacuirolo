import React from 'react';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        clicks: 0
      };
    }
    IncrementNumber() {
      this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseNumber() {
      this.setState({ clicks: this.state.clicks - 1 });
    }
    AddToCart(){
        console.log("si");
    }
    AfterSubmission(event) {
        event.preventDefault();
    }

    render() {
      return (
        <form onSubmit = {this.AfterSubmission}>
          <button onClick={this.DecreaseNumber.bind(this)}>-</button>
          <input className='qty' type='numer' value={this.state.clicks}></input>
          <button onClick={this.IncrementNumber.bind(this)}>+</button>
          <button onClick={this.AddToCart.bind(this)}>Agregar al Carrito</button>
        </form>
      );
    }
  }
  
  export default App;