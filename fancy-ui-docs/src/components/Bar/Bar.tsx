import { Div, Picture } from "@valerofin111/fancy-ui-react"
import { useAtom } from "jotai"
import type { ThemeType } from "../../atoms/atomTheme"
import atomTheme from "../../atoms/atomTheme"
import fancyUiLogo from '../../assets/fancy-ui-logo.png'

var MoonSymbol = () => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M21 13.5A9 9 0 1 1 10.5 3a7.5 7.5 0 0 0 10.5 10.5z" 
                  fill="currentColor"/>
        </svg>
    )
}

var SunSymbol = () => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="5" 
                fill="currentColor" 
                stroke="currentColor" 
                strokeWidth="0.5"/>
            <line x1="12" y1="1" x2="12" y2="4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            <line x1="12" y1="20" x2="12" y2="23" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            <line x1="1" y1="12" x2="4" y2="12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            <line x1="20" y1="12" x2="23" y2="12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
        </svg>
    )
}

var Bar = () => {

    var [ theme, setTheme ] = useAtom(atomTheme)

    var changeTheme = () => {
        let newTheme : ThemeType = 'WhiteTheme'
        switch (theme) {
            case 'WhiteTheme':
                newTheme = 'BlackTheme'
                break
            case 'BlackTheme' :
                newTheme = 'WhiteTheme'
                break
            default:
                newTheme = 'BlackTheme'
                break
        }

        setTheme(newTheme)
    } 

    return (
        <Div direction={'row'} >
            <Div mRight={'auto'} >
                <Picture h={'48px'} w={'48px'} src={fancyUiLogo} alt={'fancy-ui-logo'} />
                <p style={{ fontWeight: 900 }} >fancy-ui-react</p>
            </Div>

            <Div mLeft={'auto'} mTop={'12px'} mRight={'12px'} >
                <div onClick={changeTheme} > { (theme === 'WhiteTheme') ? <SunSymbol /> : <MoonSymbol /> } </div>
            </Div>
        </Div>
    )
}

export default Bar
