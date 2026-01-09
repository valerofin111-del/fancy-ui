import React from "react"
import type FancyTypes from "../types/props"

export var Separator = React.memo(( { orientation = 'horizontal', length, thickness, color,
        m, mTop, mLeft, mRight, mBottom, b, bRadius, id, className } : FancyTypes ) => {

    return (
        <div id={id} className={className} 
            style={{ backgroundColor: color, 
                border: b, borderRadius: bRadius,
                width: orientation === 'horizontal' ? length : thickness,
                height: orientation === 'horizontal' ? thickness : length,
                margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom }} />
    )
})
