import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    const stock = Number(this.props.stock);
    const initial = Number(this.props.initial);
    this.state = {
      clicks: initial,
      min: initial,
      max: stock,
      boton:'Agregar al Carrito'
    };
  }
  IncrementNumber() {
    if(this.state.max > this.state.clicks){
      this.setState({ clicks: this.state.clicks +  1});
    }
  }
  DecreaseNumber() {
    if(this.state.min < this.state.clicks){
      this.setState({ clicks: this.state.clicks -  1});
    }
  }
  AfterSubmission(event) {
    event.preventDefault();
  }
  AddToCart() {
    if(this.state.min < this.state.clicks || this.state.clicks > this.state.max){
        this.setState({ boton: 'listo' });
    }
  }
  render() {
    return (
      <form onSubmit = {this.AfterSubmission}>
        <button  onClick={this.DecreaseNumber.bind(this)}>-</button>
        <input className='qty' type='number' value={this.state.clicks}></input>
        <button  onClick={this.IncrementNumber.bind(this)}>+</button>
        <button onClick={this.AddToCart.bind(this)}>{this.state.boton}</button>
      </form>
    );
  }
}

export default App;