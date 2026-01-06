import type { FC, ReactNode } from 'react'
import { useState } from 'react'

interface ModalTypes {
    children?: ReactNode,
    trigger?: ReactNode,
    close?: ReactNode,
    side?: 'top' | 'right' | 'left' | 'bottom',
    id?: string,
    className?: string
}

export var Modal = ( { children, trigger, close, side = 'bottom', id, className } : ModalTypes ) => {

    var [ isOpen, setIsOpen ] = useState<boolean>(false)

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
            <div id={id} className={className} 
                style={{display: 'flex', flexDirection: direction }}
            >
                <div onClick={() => setIsOpen(prev => !prev)}                 > 
                    { trigger } 
                </div>

                {isOpen && children}

                {close && <div onClick={() => setIsOpen(prev => !prev)} >close</div>}
            </div>
    )
}
