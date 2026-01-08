import type { ReactNode, KeyboardEvent } from "react"
import React, { useState } from "react"
import { createPortal } from "react-dom"
import type { CSSLength, directionType } from "../types/props"

interface NotificationTypes {
    children?: ReactNode
    trigger?: ReactNode
    close?: ReactNode
    action?: ReactNode
    time?: number
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

export var Notification = React.memo(( { children, trigger, close, action, time = 1000,
        direction = 'row', color, b, bRadius, bgOpacity = 0,
        m, mTop, mLeft, mRight, mBottom, p, pTop, pLeft, pRight, pBottom,
        gap, w, h, id, className } : NotificationTypes ) => {

        var [ isOpen, setIsOpen ] = useState<boolean>(false)

        var EnterOrSpace = function ( e : KeyboardEvent, func: () => void ) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                func()
            }
        }

        var pushNotification = () => {
            setIsOpen(true)

            var timeout = setTimeout(() => {
                setIsOpen(false)
            }, time)

            return () => clearTimeout(timeout)
        }

    return (
        <div>
            <div tabIndex={0} role='button' onClick={pushNotification} 
                style={{ cursor: isOpen ? 'not-allowed' : 'pointer', pointerEvents: isOpen ? 'none' : 'auto' }}
            >
                { trigger }
            </div>

            { isOpen && createPortal(          
                <div style={{ display: 'flex', zIndex: '900', pointerEvents: 'none',
                        justifyContent: 'center', alignItems: 'center', position: 'fixed',
                        top: '0', left: '0', width: '100%', height: '100%', 
                        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})` }} 
                >
                    <div id={id} className={className}
                        style={{ display: 'flex', zIndex: '999', backgroundColor: color,
                            margin: m, marginTop: mTop, marginLeft: mLeft, marginRight: mRight, marginBottom: mBottom,
                            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
                            gap: gap, width: w, height: h, position: 'relative', pointerEvents: 'auto',
                            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
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
