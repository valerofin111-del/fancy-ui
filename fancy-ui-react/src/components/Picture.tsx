import React from "react"
import type { PictureTypes } from "../types/props"

export var Picture = React.memo(( { src, alt, 
    m, mTop, mLeft, mRight, mBottom, bgColor,
        p, pTop, pLeft, pRight, pBottom,
        gap, w, h, b, bRadius, id, className } : PictureTypes ) => {
            
    return (
        <img src={src} alt={alt} id={id} className={className} style={{ margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
            gap: gap, width: w, height: h, border: b, borderRadius: bRadius, backgroundColor: bgColor }} />
    )
})
