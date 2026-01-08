import fancyUiLogo from '../../assets/fancy-ui-logo.png'
import { Div } from 'fancy-ui-react'

var Welcome = () => {
    return (
        <Div p={'21px'}>
            <img style={{ width: '120px', height: '120px' }} src={fancyUiLogo} alt="fancy-ui-logo" />
            <p>Welcome</p>
        </Div>
    )
}

export default Welcome
