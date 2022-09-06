import React from 'react';
import ReactDOM from 'react-dom';
import  './style.css';

function Cv(){
  return <div>
    <div className='center bold size'>REACT DEVELOPER</div>
    <hr></hr>
    <hr className='blackline'></hr>
<h2>Muhammad Fahad</h2>

<br/>
<h4>Professional Summary: </h4>
<p> College graduate with a background in web devlopment.Excellent focus and ability to learn things quickly.
  Excellent critical analaysis and problem solving</p>
  <h4>Skills:</h4>
  <div>
  <h5 className='start'>Languages:</h5> <p className='start'> JavaScript (ES6),net</p> <br/>
  </div>
  
  <h5 className='start'>ClientScripting:</h5> <p className='start'>React,Vue,jquery</p><br/>
  <h5 className='start'>ServerScripting:</h5> <p className='start'> Nodejs</p><br/>
  <h4>WorkHistory:</h4>
  <h5 className='start'>ReactDeveloper:</h5> <p className='start'>-11/2020-11/2021</p> <br/>
  <h5 className='start'>Abc company:</h5> <p className='start'> -remote</p><br/>
  <p className='paramargin'> Developed a  student registraton web application using React and js libraries </p>

  <h4>Certifications:</h4>
  <h5 className='start'>FreeCodecamp</h5> <p className='start'> 2016-</p> <br/>
  <h5 className='start'>CS50</h5> <p className='start'> 2017</p><br/>
  <h4>Education:</h4>
  <h5 className='start'>Bachelors of Science</h5> <p className='start'>Computercience 2016-</p> <br/>
  <h5 className='start'>Karachi univeristy</h5> <p className='start'> karachi,pakistan</p><br/>
  <h4>portfolio:</h4>
  <h5 className='start'> </h5><p className='start'>www.seeportfolio.com</p> <br/>

  

  </div>
  

}
ReactDOM.render(<Cv/>,document.querySelector("#root"));
