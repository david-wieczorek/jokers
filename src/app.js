import React, { Component } from 'react';
import Header from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper">{this.props.children}</div>
      </div>
    );
  }
}

class Toto {
  constructor(params, par) {
    this.titi = params;
    this.tutu = par;
  }
  getTiti() {
    const tern = this.titi;
    function tata() {
      return tern;
    }
    return tata();
  }
  getTutu(tt) {
    return this.tutu + tt;
  }
}

const book = new Toto('alfred', 'rené');
console.log(book.getTutu(2));

const funArray = [['🍾', 'Champagne'], ['🍭', 'Lollipop'], ['🎊', 'Confetti']];

var ee = funArray.filter(function(n) {
  return (n = '🍾');
});

console.log(ee);

export default App;
