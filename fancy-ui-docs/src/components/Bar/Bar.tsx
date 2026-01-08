import { Div } from "fancy-ui-react"
import { useAtom } from "jotai"
import type { ThemeType } from "../../atoms/atomTheme"
import atomTheme from "../../atoms/atomTheme"

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
        <Div>
            <p onClick={changeTheme} >Theme</p>
        </Div>
    )
}

export default Bar
