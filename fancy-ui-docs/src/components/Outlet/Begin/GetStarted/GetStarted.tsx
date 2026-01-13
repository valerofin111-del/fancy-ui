import { Div, Switch } from '@valerofin111/fancy-ui-react'
import styles from './GetStarted.module.scss'

var GetStarted = () => {
    return (
        <>
            <Div justify={'start'} mTop={'12px'} mLeft={'24px'} >
                <h1>Getting Started</h1>
            </Div>

            <Div justify={'start'} mLeft={'24px'} direction={'column'} >
                <ol>
                    <li> 
                        <p style={{ fontWeight: 900 }} > Installation </p>
                        <Switch
                            triggers={{ 1: <p className={styles.Pm} >bun</p>,
                                        2: <p className={styles.Pm} >npm</p>, 
                                        3: <p className={styles.Pm}>yarn</p>, 
                                        4: <p className={styles.Pm}>pnpm</p> }} 
                            contents={{ 1: <p className={styles.Bash}>bun add @valerofin111/fancy-ui-react</p>,
                                        2: <p className={styles.Bash}>npm install @valerofin111/fancy-ui-react</p>, 
                                        3: <p className={styles.Bash}>yarn add @valerofin111/fancy-ui-react</p>, 
                                        4: <p className={styles.Bash}> pnpm add @valerofin111/fancy-ui-react</p> }}  
                        >
                            <p className={styles.Bash}>bun add @valerofin111/fancy-ui-react</p>
                        </Switch>
                    </li>

                    <li style={{ fontWeight: 900 }}> How to use </li>
                </ol>
            </Div>
        </>
    )
}

export default GetStarted
