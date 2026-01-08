import React from "react"
import type { CSSLength, orientationType } from "../types/props"

interface SeparatorTypes {
    orientation?: orientationType
    length?: CSSLength
    thickness?: CSSLength
    color?: string
    m?: CSSLength
    mTop?: CSSLength
    mLeft?: CSSLength
    mRight?: CSSLength
    mBottom?: CSSLength
    b?: string
    bRadius?: string
    id?: string
    className?: string
}

export var Separator = React.memo(( { orientation = 'horizontal', length, thickness, color,
        m, mTop, mLeft, mRight, mBottom, b, bRadius, id, className } : SeparatorTypes ) => {

    return (
        <div id={id} className={className} 
            style={{ backgroundColor: color, 
                border: b, borderRadius: bRadius,
                width: orientation === 'horizontal' ? length : thickness,
                height: orientation === 'horizontal' ? thickness : length,
                margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom }} />
    )
})
