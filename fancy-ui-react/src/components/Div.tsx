import type { ReactNode } from "react"
import React from 'react'
import type { alignType, CSSLength, directionType, justifyType, wrapType } from "./types/props"

interface DivTypes {
    children?: ReactNode,
    justify?: justifyType
    align?: alignType
    direction?: directionType
    wrap?: wrapType
    m?: CSSLength
    mTop?: CSSLength
    mLeft?: CSSLength
    mRight?: CSSLength
    mBottom?: CSSLength
    p?: CSSLength
    pTop?: CSSLength
    pLeft?: CSSLength
    pRight?: CSSLength
    pBottom?: CSSLength
    gap?: CSSLength
    w?: CSSLength
    h?: CSSLength
    id?: string
    className?: string
}

export var Div = React.memo(( { children, justify, align, direction, wrap,
        m, mTop, mLeft, mRight, mBottom, 
        p, pTop, pLeft, pRight, pBottom,
        gap, w, h, id, className } : DivTypes ) => {
    return (
        <div id={id} className={className} style={{ display: "flex", 
            justifyContent: justify, alignItems: align, flexDirection: direction, flexWrap: wrap,
            margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
            gap: gap, width: w, height: h }} > { children } </div>
    )
})
