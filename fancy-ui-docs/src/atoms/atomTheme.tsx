import { atom } from "jotai";
export type ThemeType = 'WhiteTheme' | 'BlackTheme'
var atomTheme = atom<ThemeType>('WhiteTheme')
export default atomTheme
