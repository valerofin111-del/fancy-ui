import type { FC, ReactNode } from "react"

interface DivTypes {
    children?: ReactNode,
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly',
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
    m?: number | string,
    mTop?: number | string,
    mLeft?: number | string,
    mRight?: number | string,
    mBottom?: number | string,
    p?: number | string,
    pTop?: number | string,
    pLeft?: number | string,
    pRight?: number | string,
    pBottom?: number | string
}

var Div : FC = ( { children, justify, align, 
        m, mTop, mLeft, mRight, mBottom, 
        p, pTop, pLeft, pRight, pBottom } : DivTypes ) => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: justify, alignItems: align, 
                margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
                padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
                 }} > {children ? children : 'Div' } </div>
        </>
    )
}

export default Div
