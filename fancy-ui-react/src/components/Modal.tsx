import { type KeyboardEvent, Activity, useState } from 'react'
import type { ModalTypes } from '../types/props'

export var Modal = ( { 
        children, trigger, close, 
        side = 'bottom',
        m, mTop, mLeft, mRight, mBottom, 
        p, pTop, pLeft, pRight, pBottom,
        b, bRadius,
        id, className,
        bgColor, color 
} : ModalTypes ) => {

    var [ isOpen, setIsOpen ] = useState<boolean>(false)

    var EnterOrSpace = function ( e : KeyboardEvent, func: () => void ) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            func()
        }
    }

    type directionType = 'column-reverse' | 'row-reverse' | 'row' | 'column'

    var direction: directionType = 'column'

    switch (side) {
        case 'top':
            var direction : directionType = 'column-reverse'
            break
        case 'left':
            var direction: directionType = 'row-reverse'
            break
        case 'right':
            var direction: directionType = 'row'
            break
        case 'bottom':
            var direction: directionType = 'column'
            break
        default:
            var direction: directionType = 'column'
            break
    }

    return (
        <div tabIndex={0}
            style={{display: 'flex', flexDirection: direction }}
        >
            <div tabIndex={0} role='button' onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})} 
                onClick={() => setIsOpen(prev => !prev)} style={{ cursor: 'pointer' }}
            > 
                { trigger }
            </div>

            <Activity mode={ isOpen ? 'visible' : 'hidden' } >
                <div style={{ border: b, borderRadius: bRadius, 
                        margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
                        padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
                        backgroundColor: bgColor, color: color }}
                >
                    { <div id={id} className={className} > { children } </div> } 
                    { close && (
                        <div tabIndex={0} role='button' onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})}
                            onClick={() => setIsOpen(prev => !prev)} 
                            style={{ cursor: 'pointer' }}
                        >
                            {close} 
                        </div> 
                        )
                    }
                </div>
            </Activity>

        </div>
    )
}
