import { Activity, useState } from "react"
import type { HoverTypes } from "../types/props"

export var Hover = ({ 
        trigger, children,
        m, mTop, mLeft, mRight, mBottom,
        p, pTop, pLeft, pRight, pBottom,
        w, h,
        bgColor, color,
        b, bRadius,
        id, className,
        side
} : HoverTypes ) => {

    var [ isOpen, setIsOpen ] = useState<boolean>(false)

    return (
        <div style={{ display: 'flex' }} >
            <div onMouseEnter={() => setIsOpen(prev => !prev)}
                onMouseLeave={() => setIsOpen(prev => !prev)}
            >
                { trigger }
            </div>

            <Activity mode={ isOpen ? 'visible' : 'hidden' } >
                { children }
            </Activity>
        </div>
    )
}
