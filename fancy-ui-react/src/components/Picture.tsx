import type { CSSLength } from "../types/props"
import React from "react"

interface PictureTypes {
    src?: string
    alt?: string
    color?: string
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
    b?: string
    bRadius?: string
    id?: string
    className?: string
}

export var Picture = React.memo(( { src, alt, color, m, mTop, mLeft, mRight, mBottom, 
        p, pTop, pLeft, pRight, pBottom,
        gap, w, h, b, bRadius, id, className } : PictureTypes ) => {
    return (
        <img src={src} alt={alt} id={id} className={className} style={{ margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
            gap: gap, width: w, height: h, border: b, borderRadius: bRadius, backgroundColor: color }} />
    )
})
