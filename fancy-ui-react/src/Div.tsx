import type { ReactNode } from "react"

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
    pBottom?: CSSLength,
    w?: CSSLength,
    h?: CSSLength,
    id?: string,
    className?: string
}

export var Div = ( { children, justify, align, direction,
        m, mTop, mLeft, mRight, mBottom, 
        p, pTop, pLeft, pRight, pBottom,
        w, h, id, className } : DivTypes ) => {
    return (
        <div id={id} className={className} style={{ display: "flex", justifyContent: justify, alignItems: align, flexDirection: direction,
            margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
            width: w, height: h }} > { children } </div>
    )
}
