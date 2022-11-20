import PropTypes  from "prop-types"
import Button from './Button';


const Header = ({title, onAdd , show}) => {
 
  return (
    <header className="header">
      <h1 > { title}</h1>
     <Button className="btn"  onClick={onAdd} color={show ? 'red' : 'green'}   text={show ? 'close':'Add'}/>
    </header>
  )
}
Header.defaultProps ={
  title: 'Task Tracker',
}
Header.propTypes ={
  title: PropTypes.string.isRequired,
}
// css in js
// const headerStayle = {
//   color: 'red' ,
//   backgroundColor: 'black',
// }
export default Header
