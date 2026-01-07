type CSSLength = number | string

interface SeparatorTypes {
    orientation?: 'vertical' | 'horizontal'
    length?: CSSLength
    thickness?: CSSLength
    color?: string
    radius?: CSSLength
    m?: CSSLength
    mTop?: CSSLength
    mLeft?: CSSLength
    mRight?: CSSLength
    mBottom?: CSSLength
    id?: string
    className?: string
}

export var Separator = ( { orientation = 'horizontal', length, thickness, color, radius,
        m, mTop, mLeft, mRight, mBottom, id, className } : SeparatorTypes ) => {

    return (
        <div id={id} className={className} style={{ backgroundColor: color, borderRadius: radius,
            width: orientation === 'horizontal' ? length : thickness,
            height: orientation === 'horizontal' ? thickness : length,
            margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom }} 
        />
    )
}
