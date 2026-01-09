import { type KeyboardEvent, useState, Activity } from "react"
import type FancyTypes from "../types/props"

export var Menu = ( { trigger, items, side = 'bottom',
        b, bRadius, id, className } : FancyTypes ) => {

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
        <div id={id} className={className} style={{ display: 'flex', flexDirection: direction }} >
            <div onClick={() => setIsOpen(prev => !prev)} 
                role="button" onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})}
            >
                { trigger } 
            </div>

            <Activity mode={ isOpen ? 'visible' : 'hidden' }>
                <div style={{ display: 'flex', flexDirection: direction, border: b, borderRadius: bRadius }} >
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
