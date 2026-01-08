import { Link } from "react-router"
import { Menu } from 'fancy-ui-react'

var DivLink = () => {
    return <Link to={'/Div'}>Div</Link>
}

var ModalLink = () => {
    return <Link to={'/Modal'} >Modal</Link>
}
 
var Nav = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <Menu items={{ 1: <DivLink />,
                           2: <ModalLink />
                }} trigger={<p>Components</p>} />
        </ul>
    )
}

export default Nav
