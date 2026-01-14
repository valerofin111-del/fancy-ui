import React, { type KeyboardEvent, useState } from "react"
import { createPortal } from "react-dom"
import type { NotificationTypes } from "../types/props"

export var Notification = React.memo(( { 
        children, trigger, close, action, 
        time = 1000, bgOpacity = 0,
        direction = 'row', gap,
        b, bRadius, 
        bgColor, color,
        m, mTop, mLeft, mRight, mBottom, 
        p, pTop, pLeft, pRight, pBottom,
        w, h,
        id, className 
} : NotificationTypes ) => {

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
                        style={{ display: 'flex', zIndex: '999', color: color, backgroundColor: bgColor,
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
