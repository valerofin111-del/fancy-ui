type CSSLength = number | string

interface ProgressTypes {
    progress?: `${number}%`,
    color?: string,
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly',
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
    m?: CSSLength,
    mTop?: CSSLength,
    mLeft?: CSSLength,
    mRight?: CSSLength,
    mBottom?: CSSLength,
    w?: CSSLength,
    h?: CSSLength,
    id?: string,
    className?: string
}

export var Progress = ( { progress, color, justify, align,
        m, mTop, mLeft, mRight, mBottom, 
        w, h, id, className } : ProgressTypes ) => {
    return (
        <div id={id} className={className} 
            style={{ display: "flex", justifyContent: justify, alignItems: align,
                margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
                width: w, height: h }} 
        >
            <div style={{ width: progress, height: '100%', backgroundColor: color }} />
        </div>
    )
}
