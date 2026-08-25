import logo from "../images/react.png"

const pageStyle = {textAlign: "center", 
      backgroundColor: "lightgrey", 
      padding: "10px"}

function Header()
{
  return (
    <div className='pt-1 text-center'>
      <img src={logo} style={{width: "30px"}} />
      <span style={pageStyle} className="text-success">
        Welcome to the React Course
      </span>
      <hr/>
    </div>
  )
}
;
export default Header;