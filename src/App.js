import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
// --------------------------------------------------------------
    function applyForVisa(documents) {
      console.log('Processing visa request...')

      let promise = new Promise( (resolve, reject) => {
        setTimeout( ()=> {
            Math.random() > 0.1 ? resolve({}) : reject('Visa Rejected');
        }, 1500);
      });

      return promise;
    }

    let getVisa = (visa) => {
      console.info('Visa received')
      return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
          resolve(visa)
        }, 2000)
      });
    }

    function bookHotel(visa) {
      console.log(visa)
      console.log('Booking hotel')
      return Promise.resolve(visa);
    }

    function buyTickets(booking) {
      console.log('Buying tickets')
      console.log('Reservation Nr.: ', booking)
    }

    applyForVisa({})
      .then(getVisa)
      .then(bookHotel)
      .then(buyTickets)
      .catch(error => console.error(error))
      .then( ()=> console.log('I\'m stil here'))


//----------------------------------------------------------------


    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
