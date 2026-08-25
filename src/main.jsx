import { createRoot } from 'react-dom/client'
import "./style.css";
import Header from "./Layout/Header"
import Students from './Students';
import Footer from "./Layout/Footer"
import StudentReview from './StudentReview';

// createRoot(document.getElementById('root')).render(
// <h1>
// Hello World
// </h1>

// )

// const rootElement = document.getElementById('root');
// const h1Element = document.createElement('h1');
// h1Element.textContent = "Hello Apoorva";
// rootElement.appendChild(h1Element);

const root = createRoot(document.getElementById('root'));
const courseName = "React"
const lectureCount = 11;
const isActive = false

function HomePage()
{
  return (
    <div>
      <Header/>
    <p className="customHeading">
      I am very excited for the {courseName} Course</p>
      <p>Lecture Count: {lectureCount}</p>
      <p>Is Active: {isActive.toString()}</p>
      <p>Is Active: {isActive? "Active": "Inactive"}</p>
      <h3>Topics to learn in React Course</h3>
      <ul>
        <li>JSX</li>
        <li>Components</li>
        <li>Routing</li>
        <li>State Management</li>
      </ul>
      <div>
        Enter Task: <input type = "text" maxLength={6} disabled={isActive}></input>
      </div>
      <Students experience={2} name={"Sita"}>
      <StudentReview/>
      </Students>
      <Students experience={3} name={"Babita"}>
        <StudentReview/>
      </Students>
      <Students experience={5} name={"Gita"}>
         <StudentReview/>
      </Students>
      <Students experience={9} name={"Pooja"}>
        <StudentReview/>
      </Students>       
      <Students experience={12} name={"Apoorva"}>
         <StudentReview/>
      </Students>   
    <Footer/>
  </div>
  )
}



root.render(
  <div>
<HomePage></HomePage>

  </div>

);
