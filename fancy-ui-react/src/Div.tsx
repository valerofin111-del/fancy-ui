import type { FC, ReactNode } from "react"

type CSSLength = number | string

interface DivTypes {
    children?: ReactNode,
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly',
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
    m?: CSSLength,
    mTop?: CSSLength,
    mLeft?: CSSLength,
    mRight?: CSSLength,
    mBottom?: CSSLength,
    p?: CSSLength,
    pTop?: CSSLength,
    pLeft?: CSSLength,
    pRight?: CSSLength,
    pBottom?: CSSLength
}

export var Div : FC<DivTypes> = ( { children, justify, align, direction,
        m, mTop, mLeft, mRight, mBottom, 
        p, pTop, pLeft, pRight, pBottom } ) => {
    return (
        <div style={{ display: "flex", justifyContent: justify, alignItems: align, flexDirection: direction,
            margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
             }} > {children ? children : 'div' } </div>
    )
}
