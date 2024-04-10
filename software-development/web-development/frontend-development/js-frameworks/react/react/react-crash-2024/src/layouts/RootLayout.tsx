import { Outlet } from 'react-router-dom'
import NavBar from '../components/Nav'

function RootLayout() {
    return (
        <>
            <NavBar /> {/* Renders the NavBar component ALWAYS since it is in the layout at the top level /. This means that anything rendered from outlet will also have the navbar*/ }
            {/* Renders all child route's components that fall within the route rendering this Root layout i.e. <HomePage /> */ }
            <Outlet />
        </>
    )
}

export default RootLayout