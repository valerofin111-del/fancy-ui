import React from "react"
import type { SeparatorTypes } from "../types/props"

export var Separator = React.memo(( { 
        orientation = 'horizontal', 
        w, h, 
        color,
        m, mTop, mLeft, mRight, mBottom, 
        b, bRadius, 
        id, className 
} : SeparatorTypes ) => {

    return (
        <div id={id} className={className} 
            style={{ backgroundColor: color, 
                border: b, borderRadius: bRadius,
                width: orientation === 'horizontal' ? h : w,
                height: orientation === 'horizontal' ? w : h,
                margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom }} />
    )
})
