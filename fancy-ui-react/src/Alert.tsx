import type { ReactNode, KeyboardEvent } from "react"
import { useState } from "react"

interface AlertTypes {
    children?: ReactNode,
    trigger?: ReactNode,
    action?: ReactNode,
    close?: ReactNode,
    color?: string,
    bgOpacity?: number,
    p?: string,
    pTop?: string,
    pLeft?: string,
    pRight?: string,
    pBottom?: string,
    w?: string,
    h?: string,
    id?: string,
    className?: string
}

export var Alert = ( { children, trigger, action, color, close, bgOpacity = 0.5,
        p, pTop, pLeft, pRight, pBottom, 
        w, h, id, className } : AlertTypes ) => {
    
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

            { isOpen && (            
                <div onClick={() => setIsOpen(prev => !prev)}
                    style={{ display: 'flex', zIndex: '900', justifyContent: 'center', alignItems: 'center', position: 'fixed',
                        top: '0', left: '0', width: '100%', height: '100%', backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`}}
                >
                    <div id={id} className={className} onClick={(e) => e.stopPropagation()}
                        style={{ display: 'flex', zIndex: '999', justifyContent: 'center', alignItems: 'center', backgroundColor: color,
                            padding: p, paddingTop: pTop, paddingLeft: pLeft, paddingRight: pRight, paddingBottom: pBottom,
                            width: w, height: h, flexDirection: 'column' 
                          }} 
                    >
                        { children }
                        { action && (
                            <div tabIndex={0} role='button' onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})}
                                onClick={() => setIsOpen(prev => !prev)} style={{ cursor: 'pointer' }}
                            > 
                                { action } 
                            </div>
                            ) 
                        }
                        { close && (
                            <div tabIndex={0} role='button' onKeyDown={(e) => EnterOrSpace(e, () => {setIsOpen(prev => !prev)})}
                                onClick={() => setIsOpen(prev => !prev)} style={{ cursor: 'pointer' }}
                            >
                                { close } 
                            </div>
                            )
                        }
                    </div>
                </div>
                )
            }
        </div>
    )
}
