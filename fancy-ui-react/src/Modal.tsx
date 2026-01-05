import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'

interface Content {
    children?: ReactNode,
    isOpen?: boolean
}

export var Content : FC<Content> = ({ children, isOpen }) => {
    if (!isOpen) return null

    return createPortal(<>{children ? children : 'content' }</>, document.body)
}

interface ModalTypes {
    children?: ReactNode,
    trigger?: ReactNode,
    close?: ReactNode,
    side?: 'top' | 'right' | 'left' | 'bottom'
}

export var Modal : FC<ModalTypes> = ({ children, trigger, close, side = 'bottom' }) => {

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
        <>
            <div style={{display: 'flex', flexDirection: direction }} >
                <div onClick={() => setIsOpen(prev => !prev)} > { trigger ? trigger : 'trigger' } </div>
                <Content isOpen={isOpen}> { children } </Content>
            </div>

            {close && (
                <div onClick={() => setIsOpen(prev => !prev)} > {close} </div>
            )}

        </>
    )
}
