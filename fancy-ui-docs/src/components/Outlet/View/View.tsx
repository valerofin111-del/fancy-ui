import type { ReactNode } from 'react'
// import styles from './View.module.scss'
import { Link } from 'react-router'
import { Div } from '@valerofin111/fancy-ui-react'

interface ViewTypes {
    title: ReactNode
    children: ReactNode
    nextPage: string
    nextPageUrl: string
}

var View = ({ title, children, nextPage, nextPageUrl } : ViewTypes ) => {
    return (
        <Div pTop={'24px'} pRight={'24px'} pLeft={'24px'} pBottom={'24px'} >
            <div>
                { title }
            </div>

            <div>
                { children }
            </div>

            <div>
                <Link to={nextPageUrl} > {nextPage} </Link>
            </div>
        </Div>
    )
}

export default View
