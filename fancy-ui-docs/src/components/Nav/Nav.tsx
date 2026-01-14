import { Modal } from '@valerofin111/fancy-ui-react'
import { Link } from 'react-router-dom'
 
var Nav = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/begin'}>Get started</Link></li>

            <Modal trigger={<p>Components</p>}>
                <ul>
                    <li><Link to={'/Div'} >Div</Link></li>
                    <li><Link to={'/Modal'} >Modal</Link></li>
                    <li><Link to={'/Switch'} >Switch</Link></li>
                </ul>
            </Modal>
        </ul>
    )
}

export default Nav
