import { type KeyboardEvent, useState, Activity } from "react"
import type { MenuTypes } from "../types/props"

export var Menu = ( { trigger, items, side = 'bottom', bgColor, color,
        m, mTop, mLeft, mRight, mBottom,
        p, pTop, pLeft, pRight, pBottom,
        b, bRadius, id, className } : MenuTypes ) => {

    var [ isOpen, setIsOpen ] = useState<boolean>(false)

    var EnterOrSpace = function ( e : KeyboardEvent, func: () => void ) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            func()
        }
    }
    
    type directionType = 'column-reverse' | 'row-reverse' | 'row' | 'column'

    var direction: directionType = 'column';

    switch (side) {
        case 'top':
            direction = 'column-reverse';
            break;
        case 'left':
            direction = 'row-reverse';
            break;
        case 'right':
            direction = 'row';
            break;
        case 'bottom':
            direction = 'column';
            break;
        default:
            direction = 'column';
            break;
    }

    return (
        <div id={id} className={className} style={{ display: 'flex', flexDirection: direction }} >
            <div onClick={() => setIsOpen(prev => !prev)} 
                role="button" onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})}
            >
                { trigger } 
            </div>

            <Activity mode={ isOpen ? 'visible' : 'hidden' }>
                <div style={{ display: 'flex', flexDirection: direction, border: b, borderRadius: bRadius, 
                        margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
                        padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
                        backgroundColor: bgColor, color: color }} 
                >
                    {
                        items && Object.keys(items).map(key => (
                            <div onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})} 
                                onClick={() => setIsOpen(prev => !prev)}
                                style={{ cursor: 'pointer' }}
                                key={key} tabIndex={0} role="button"
                            > 
                                {items![key]} 
                            </div>
                        ))
                    }
                </div>
            </Activity>
        </ div>
    )
}
