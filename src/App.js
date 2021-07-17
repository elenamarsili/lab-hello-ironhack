import './App.css';

function App() {
  return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="/"><img src="/images/ironhack-logo.svg" alt=""/></a>
          <img src="/images/menu-top.svg" alt=""/>
        </div>
      </nav>

      <header className="App-header">
        <div className="text-title container">
          <h1 className="title">Say hello to<br></br>ReactJS</h1>
          <p>You will learn hot to use<br></br>the most popular frontend library <br></br>and become a super Ninja developer</p>
          <button type="button" className="btn btn-light mt-4 py-3 px-4">Awesome!</button>
        </div>
      </header>

      <section className="container-fluid">
        <div className="light row d-flex justify-content-between my-5 py-5">

          <div className="features col-sm-6 col-md-3 mx-0 my-5">
            <img src="/images/icon1.png" alt=""></img>
            <h3>Declarative</h3>
            <p className="features-text">React makes it<br></br>painless to create<br></br>interactive Uls.</p>
          </div>

          <div className="features col-sm-6 col-md-3 mx-0 my-5">
            <img src="/images/icon2.png" alt=""></img>
            <h3>Components</h3>
            <p className="features-text">Build encapsulated<br></br>components that<br></br>manage their state.</p>
          </div>

          <div className="features col-sm-6 col-md-3 mx-0 my-5">
            <img src="/images/icon3.png" alt=""></img>
            <h3>Single-Way</h3>
            <p className="features-text">A set of immutable<br></br>values are passed to<br></br>component's.</p>
          </div>

          <div className="features col-sm-6 col-md-3 mx-0 my-5">
            <img src="/images/icon4.png" alt=""></img>
            <h3>JSX</h3>
            <p className="features-text">Statically-typed,<br></br>designed to run on<br></br>modern browsers.</p>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default App;
