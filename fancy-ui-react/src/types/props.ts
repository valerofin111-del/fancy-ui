import { type ReactNode } from "react"

type CSSLength = number | string
type justifyType = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
type alignType = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
type directionType = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type wrapType = 'nowrap' | 'wrap' | 'wrap-reverse'
type sideType = 'top' | 'right' | 'left' | 'bottom'
type orientationType = 'vertical' | 'horizontal'
type ReactNodes = Record<string, ReactNode>

type always = {
    id?: string
    className?: string
}

type colors = {
    bgColor?: string
    color?: string
}

type size = {
    w?: CSSLength
    h?: CSSLength
}

type border = {
    b?: string
    bRadius?: string
}

type padding = {
    p?: CSSLength
    pTop?: CSSLength
    pLeft?: CSSLength
    pRight?: CSSLength
    pBottom?: CSSLength
}

type margin = {
    m?: CSSLength
    mTop?: CSSLength
    mLeft?: CSSLength
    mRight?: CSSLength
    mBottom?: CSSLength
}

type box = {
    direction?: directionType
    justify?: justifyType
    align?: alignType
    wrap?: wrapType
    gap?: CSSLength
}

type nodes = {
    children?: ReactNode
    contents?: ReactNodes
    triggers?: ReactNodes
    trigger?: ReactNode
    action?: ReactNode
    close?: ReactNode
    items?: ReactNodes
}

type others = {
    orientation?: orientationType
    side?: sideType
    progress?: `${number}%`
    bgOpacity?: number
    time?: number
    src?: string
    alt?: string
}

export interface DivTypes 
extends always, colors, size, border, margin, padding, box,
Pick<nodes, 'children'> {}

export interface ModalTypes 
extends always, colors, size, border, margin, padding,
Pick<nodes, 'children' | 'trigger' | 'close'>, Pick<others, 'side'>  {} 

export interface SwitchTypes
extends always, colors, size, border, margin, padding, 
Pick<nodes, 'triggers' | 'contents' | 'close' | 'children'>, Pick<others, 'side' >  {}
