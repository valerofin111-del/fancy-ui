type CSSLength = number | string

interface ProgressTypes {
    progress?: `${number}%`
    color?: string
    w?: CSSLength
    h?: CSSLength
    id?: string
    className?: string
}

export var Progress = ( { progress, color,
        w, h, id, className } : ProgressTypes ) => {
    return (
        <div id={id} className={className} 
            style={{ display: "flex", width: w, height: h }} 
        >
            <div style={{ width: progress, height: '100%', backgroundColor: color }} />
        </div>
    )
}
