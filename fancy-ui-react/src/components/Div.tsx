import React from 'react'
import type { DivTypes } from '../types/props'

export var Div = React.memo(( { 
        children, 
        justify, align, direction, wrap,
        m, mTop, mLeft, mRight, mBottom, 
        p, pTop, pLeft, pRight, pBottom,
        gap, 
        w, h, 
        b, bRadius, 
        id, className 
} : DivTypes ) => {

    return (
        <div id={id} className={className} style={{ display: "flex", 
            justifyContent: justify, alignItems: align, flexDirection: direction, flexWrap: wrap,
            margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
            gap: gap, width: w, height: h, border: b, borderRadius: bRadius }} 
        >
            { children }
        </div>
    )
})
