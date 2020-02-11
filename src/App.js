import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from './nav';

function App() {
  return (
    <div className="App">
        <Nav />
        <section className="splash">
          <div className="centerContainer">
              <h1>Ethan Shan</h1>
              <h6>test</h6>
          </div>
        </section>
        <section className="About">
            <div className="row">
                <div className="col-1"/>
                <div className="col-10">
                    <div className="row">
                        <div className="col-7">
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, commodi delectus deleniti doloremque doloribus earum excepturi facere magni minima natus nesciunt nostrum, nulla, quam ratione rerum soluta tempore vel!</h3>
                        </div>
                        <div className="col-5">
                            <img src={require('./assets/IMG_5555.JPG')} alt="" width="300px"/>
                        </div>
                    </div>
                </div>
                <div className="col-1"/>
            </div>
        </section>
    </div>
  );
}


export default App;
