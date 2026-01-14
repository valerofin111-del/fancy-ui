import type { ProgressTypes } from "../types/props"

export var Progress = ( { 
        progress, orientation,
        color,
        m, mTop, mLeft, mRight, mBottom,
        w, h, 
        b, bRadius, 
        id, className 
} : ProgressTypes ) => {
    
    return (
        <div id={id} className={className} 
            style={{ display: "flex", width: orientation === 'horizontal' ? w : h,
                height: orientation === "horizontal" ? h : w,
                border: b, borderRadius: bRadius,
                margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom }}
        >
            <div style={{ backgroundColor: color,
                width: orientation === 'horizontal' ? progress : '100%' ,
                height: orientation === 'horizontal' ? '100%' : progress, 
                marginRight: orientation === 'horizontal' ? 'auto' : undefined,
                marginTop: orientation === 'horizontal' ? undefined : 'auto',
                borderRadius: bRadius }} />
        </div>
    )
}
