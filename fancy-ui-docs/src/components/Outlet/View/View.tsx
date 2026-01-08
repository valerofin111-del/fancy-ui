import type { ReactNode } from 'react'
import styles from './View.module.scss'

interface ViewTypes {
    children: ReactNode
}

var View = ({ children } : ViewTypes ) => {
    return (
        <>
            { children }
        </>
    )
}

export default View
