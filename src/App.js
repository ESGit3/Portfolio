import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
            <header className="App-header">
                <nav>
                  <h1>Portfolio</h1>
                  <ul className="navList">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                  </ul>
                </nav>
            </header>
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
                            <h4>lmao this is dumb</h4>
                        </div>
                        <div className="col-3">
                            <img src="assets/Splash.jpg" alt=""/>
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
