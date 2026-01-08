import type { ReactNode, KeyboardEvent } from "react"
import { useState } from "react"
import { createPortal } from "react-dom"
import React from "react"
import type { CSSLength, directionType } from "../types/props"

interface AlertTypes {
    children?: ReactNode
    trigger?: ReactNode
    action?: ReactNode
    close?: ReactNode
    direction?: directionType
    color?: string
    b?: string
    bRadius?: string
    bgOpacity?: number
    m?: CSSLength
    mTop?: CSSLength
    mLeft?: CSSLength
    mRight?: CSSLength
    mBottom?: CSSLength
    p?: CSSLength
    pTop?: CSSLength
    pLeft?: CSSLength
    pRight?: CSSLength
    pBottom?: CSSLength
    gap?: CSSLength
    w?: CSSLength
    h?: CSSLength
    id?: string
    className?: string
}

export var Alert = React.memo(( { children, trigger, action, color, b, bRadius,
        close, direction = 'column' , bgOpacity = 0.5,
        m, mTop, mLeft, mRight, mBottom, p, pTop, pLeft, pRight, pBottom, 
        gap, w, h, id, className } : AlertTypes ) => {
    
    var [ isOpen, setIsOpen ] = useState<boolean>(false)

    var EnterOrSpace = function ( e : KeyboardEvent, func: () => void ) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            func()
        }
    }

    return (
        <div>
            <div tabIndex={0} role='button' 
                onClick={() => setIsOpen(prev => !prev)} style={{ cursor: 'pointer' }}
            >
                { trigger }
            </div>

            { isOpen && createPortal(          
                <div onClick={() => setIsOpen(prev => !prev)}
                    style={{ display: 'flex', zIndex: '900', justifyContent: 'center', alignItems: 'center', position: 'fixed',
                        top: '0', left: '0', width: '100%', height: '100%', backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`}}
                >
                    <div id={id} className={className} onClick={(e) => e.stopPropagation()}
                        style={{ display: 'flex', zIndex: '999', backgroundColor: color,
                            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
                            gap: gap, width: w, height: h, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                            margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
                            border: b, borderRadius: bRadius }} 
                    >
                        { children }

                        <div style={{ display: 'flex', flexDirection: direction, gap: gap }} >
                            { close && (
                                <div tabIndex={0} role='button' onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})}
                                    onClick={() => setIsOpen(prev => !prev)} style={{ cursor: 'pointer' }}
                                >
                                    { close } 
                                </div>
                                )
                            }

                            { action && (
                                <div tabIndex={0} role='button' onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})}
                                    onClick={() => setIsOpen(prev => !prev)} style={{ cursor: 'pointer' }}
                                > 
                                    { action } 
                                </div>
                                ) 
                            }
                        </div>
                    </div>
                </div>, document.body
                )
            }
        </div>
    )
})
