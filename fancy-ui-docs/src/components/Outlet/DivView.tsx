import View from './View/View'

var DivView = () => {
    return (
        <View nextPage='Modal' nextPageUrl='/Modal' title='Div' >
            <p>Div - is just div with flexbox</p>
            <p style={{ fontWeight: 900 }} >Types:</p>
            <ul>
                <li>id?: string</li>
                <li>className?: string</li>
                <li>bgColor?: string</li>
                <li>color?: string</li>
                <li>w?: CSSLength</li>
                <li>h?: CSSLength</li>
                <li>b?: string</li>
                <li>bRadius?: string</li>
                <li>p?: CSSLength</li>
                <li>pTop?: CSSLength</li>
                <li>pLeft?: CSSLength</li>
                <li>pRight?: CSSLength</li>
                <li>pBottom?: CSSLength</li>
                <li>m?: CSSLength</li>
                <li>mTop?: CSSLength</li>
                <li>mLeft?: CSSLength</li>
                <li>mRight?: CSSLength</li>
                <li>mBottom?: CSSLength</li>
                <li>direction?: directionType</li>
                <li>justify?: justifyType</li>
                <li>align?: alignType</li>
                <li>wrap?: wrapType</li>
                <li>gap?: CSSLength</li>
                <li>children?: ReactNode</li>
            </ul>
        </View>
    )
}

export default DivView
