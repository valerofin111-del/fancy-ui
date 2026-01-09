import { Div, Menu, Switch } from 'fancy-ui-react'
import styles from './GetStarted.module.scss'

var GetStarted = () => {
    return (
        <>
            <Div justify={'start'} mTop={'12px'} mLeft={'24px'} >
                <h1>Getting Started</h1>
            </Div>

            <Div justify={'start'} mLeft={'24px'} direction={'column'} >
                <ol>
                    <li style={{ fontWeight: 900 }} > Installation
                        <Switch
                            triggers={{ 1: <p className={styles.Pm} >npm</p>, 
                                        2: <p className={styles.Pm}>yarn</p>, 
                                        3: <p className={styles.Pm}>pnpm</p> }} 
                            contents={{ 1: <p className={styles.Bash}>npm install fancy-ui</p>, 
                                        2: <p className={styles.Bash}>yarn install fancy-ui</p>, 
                                        3: <p className={styles.Bash}> pnpm install fancy-ui </p> }}  
                        >
                            <p className={styles.Bash}>npm install fancy-ui</p>
                        </Switch>
                    </li>

                    <li style={{ fontWeight: 900 }}> How to use </li>
                </ol>
            </Div>
        </>
    )
}

export default GetStarted
