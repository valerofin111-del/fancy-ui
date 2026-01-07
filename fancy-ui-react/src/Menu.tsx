import type { ReactNode, KeyboardEvent } from "react"
import { useState } from "react"

interface MenuTypes {
    trigger?: ReactNode
    items?: Record<string, ReactNode>
    side?: 'top' | 'right' | 'left' | 'bottom'
    id?: string
    className?: string
}

export var Menu = ({ trigger, items, side = 'bottom', id, className } : MenuTypes) => {

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

            { isOpen && (
                <div style={{ display: 'flex', flexDirection: direction }} >
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
                )
            }
        </ div>
    )
}
