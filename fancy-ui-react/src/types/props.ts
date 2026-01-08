import type { ReactNode } from "react"

export type CSSLength = number | string
export type justifyType = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type alignType = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type directionType = 'row' | 'column' | 'row-reverse' | 'column-reverse'
export type wrapType = 'nowrap' | 'wrap' | 'wrap-reverse'
export type sideType = 'top' | 'right' | 'left' | 'bottom'
export type orientationType = 'vertical' | 'horizontal'
export type ReactNodes = Record<string, ReactNode>
