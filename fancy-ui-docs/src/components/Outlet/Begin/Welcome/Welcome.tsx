import { Link } from 'react-router'
import fancyUiLogo from '../.././../../assets/fancy-ui-logo.png'
import { Div, Picture } from '@valerofin111/fancy-ui-react'
import styles from './Welcome.module.scss'

var Welcome = () => {
    return (
        <>
            <Div justify={'center'} m={'6px'}>
                <Picture w={'240x'} h={'240px'} src={fancyUiLogo} alt="fancy-ui-logo" />
            </Div>
            <Div justify={'center'}>
                <h1 style={{ fontWeight: 900 }} >Fancy-UI</h1>
            </Div>
            <Div justify={'center'} direction={'row'} gap={'72px'} mTop={'24px'} >
                <Link className={styles.Button} to={'/begin'}> Get started </Link>
                <Link className={styles.Button} to={'/Div'}> Components </Link>
            </Div>
            <Div justify={'center'} mTop={'48px'}>
                Build your apps easier with fancy-ui
            </Div>
        </>
    )
}

export default Welcome
