import { type KeyboardEvent, Activity, useState } from "react"
import type { SwitchTypes } from "../types/props"

export var Switch = ( { children, triggers, contents, close, 
        side, b, bRadius, id, className } : SwitchTypes ) => {

    var [ content, setContent ] = useState<string | undefined>(undefined)

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
            var direction : directionType = 'row-reverse'
            break
        case 'right':
            var direction : directionType = 'row'
            break
        case 'bottom':
            var direction : directionType = 'column'
            break
        default:
            var direction : directionType = 'column'
            break
    }

    var directionInside: directionType = 'row'

    switch(side) {
        case 'top':
            var directionInside : directionType = 'row'
            break
        case 'left':
            var directionInside : directionType = 'column'
            break
        case 'right':
            var directionInside : directionType = 'column'
            break
        case 'bottom':
            var directionInside : directionType = 'row'
            break
        default:
            var directionInside : directionType = 'row'
            break
    }

    return (
        <div id={id} className={className} style={{ display: 'flex', flexDirection: direction }} >
            <div style={{ display: 'flex', flexDirection: directionInside }} >
                {
                    triggers && Object.keys(triggers).map(key => (
                        <div onKeyDown={(e) => EnterOrSpace(e, () => {setContent(key)})} 
                            onClick={() => setContent(key)}
                            style={{ cursor: 'pointer' }}
                            key={key} tabIndex={0} role="button"
                        > 
                            {triggers![key]} 
                        </div>
                    ))
                }
            </div>

            <div>
                <Activity mode={ content === undefined ? 'visible' : 'hidden' }>
                    <div style={{ border: b, borderRadius: bRadius }} > { children } </div>
                </Activity>

                { content && contents && (
                    <div style={{ border: b, borderRadius: bRadius }}>
                        { contents[content] }
                        {close && (
                            <div onClick={() => setContent(undefined)} 
                                style={{ cursor: 'pointer' }}
                            > 
                                {close}
                            </div> 
                            )
                        }
                    </div>
                ) }
            </div>
        </div>
    )
}
