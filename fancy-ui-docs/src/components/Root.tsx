import { Outlet } from "react-router"
import styles from '../scss/Root.module.scss'
import { useAtomValue } from "jotai"
import Nav from "./Nav/Nav"
import Bar from "./Bar/Bar"
import atomTheme from "../atoms/atomTheme"
import { useAnimate } from "motion/react"
import { motion } from "motion/react"

var Root = () => {

    var theme = useAtomValue(atomTheme)

    var [ coords, animate ] = useAnimate<HTMLDivElement>()

    var mouseMove = (e : any): void => {
        if (!coords.current) return

        var rect = e.currentTarget.getBoundingClientRect()

        var x = e.clientX - rect.left
        var y = e.clientY - rect.top

        var valueX = ((x / rect.width) * 12 - 6)
        var valueY = -((y / rect.height) * 12 - 6)

        animate(coords.current, {
            rotateX: valueX,
            rotateY: valueY 
        }, { duration: 0.1 } )

    }

    var mouseLeave = (): void => {
        animate(coords.current, {
            rotateX: 0,
            rotateY: 0
        }, { duration: 0.1 })
    }

    return (
        <div className={styles[`Root${theme}`]} >
            
            <div className={styles.Bar} >
                <Bar />
            </div>

            <div className={styles.Main} >

                <div className={styles.Nav} >
                    <Nav />
                </div>

                <motion.div className={styles.Outlet} ref={coords}
                    onMouseMove={mouseMove}
                    onMouseLeave={mouseLeave}
                    style={{ transformStyle: 'preserve-3d', overflow: 'auto' }} 
                >
                    <Outlet />
                </motion.div>

            </div>
        </div>
    )
}

export default Root
