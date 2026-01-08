import type { CSSLength, orientationType } from "../types/props"

interface ProgressTypes {
    progress?: `${number}%`
    color?: string
    orientation?: orientationType
    w?: CSSLength
    h?: CSSLength
    b?: string
    bRadius?: string
    id?: string
    className?: string
}

export var Progress = ( { progress, color, orientation,
        w, h, b, bRadius, id, className } : ProgressTypes ) => {
    return (
        <div id={id} className={className} 
            style={{ display: "flex", width: orientation === 'horizontal' ? w : h,
                height: orientation === "horizontal" ? h : w,
                border: b, borderRadius: bRadius }} 
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
