import { APP_NAME, HEADER_BG_COLOR, HEADER_TEXT_COLOR } from './constants'
import type { HeaderProps } from './types'

function Header({ appName = APP_NAME, bgColor = HEADER_BG_COLOR, txtColor = HEADER_TEXT_COLOR }: HeaderProps) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: txtColor
    }

    return (
        <header className="container" style={ headerStyles }>
            <h2>{ appName }</h2>
        </header>
    )
}

export default Header