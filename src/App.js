import pic from './pn.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nav'>

        <a className='nav-links' href="/">Home</a>
        <a className='nav-links' href="/">About</a>
        <a className='nav-links' href="/">logo</a>
        <a className='nav-links' href="/">Contact</a>
        <a className='nav-links' href="/">Q&A</a>
      </div>

      <div className='home-img'>
        <img src={pic} alt=''></img>
      </div>


      <h1 className='home-categories-h1' align="left"  >  Categories: </h1>

      <div className='home-categories'>



        <div className='home-categories-box'>

          <h1>uoefh</h1>


        </div>

        <div className='home-categories-box'>
          <h1>uoefh</h1>
        </div>

        <div className='home-categories-box'>
          <h1>uoefh</h1>
        </div>

        <div className='home-categories-box'>
          <h1>uoefh</h1>
        </div>


      </div>



      <h1 className='home-brands-h1' align="left"  > Brands: </h1>



      <div className='home-brands'>

        <div className='home-brands-box'>

          <h1>uoefh</h1>

        </div>

        <div className='home-brands-box'>
          <h1>uoefh</h1>
        </div>

        <div className='home-brands-box'>
          <h1>uoefh</h1>
        </div>

        <div className='home-brands-box'>
          <h1>uoefh</h1>
        </div>
      </div>



      <h1 className='home-topSellers-h1' align="left"  >  Top Sellers : </h1>

      <div className='home-topSellers'>




        <div className='home-topSellers-box'>

          <h1>uoefh</h1>

        </div>

        <div className='home-topSellers-box'>
          <h1>uoefh</h1>
        </div>

        <div className='home-topSellers-box'>
          <h1>uoefh</h1>
        </div>

        <div className='home-topSellers-box'>
          <h1>uoefh</h1>
        </div>

      </div>

    </div>
  );
}

export default App;
