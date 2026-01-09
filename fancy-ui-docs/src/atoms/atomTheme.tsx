import { atomWithStorage } from "jotai/utils";
export type ThemeType = 'WhiteTheme' | 'BlackTheme'
var atomTheme = atomWithStorage<ThemeType>('Theme' ,'WhiteTheme')
export default atomTheme
