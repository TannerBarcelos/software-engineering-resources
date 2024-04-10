import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import RootLayout from './layouts/RootLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/404'

/* index property: In react-router-dom, the index prop in a Route component is used to specify the default route that should be rendered when the parent route's path matches EXACTLY.  */
const routes = [
    <Route path="/" element={ <RootLayout /> }>
        <Route index element={ <HomePage /> } />,                           {/* This route will render the HomePage component when the path matches / EXACTLY */ }
        <Route path="jobs" element={ <JobsPage /> } />,                     {/* This route will render the JobsPage component when the path matches /jobs */ }
        <Route path="add-job" element={ <div>Add Job</div> } />,            {/* This route will render a div with the text Add Job when the path matches /add-job */ }
        <Route path="*" element={ <NotFound /> } />,                        {/* This route will render the NotFound component when the path does not match any of the routes above */ }
    </Route>,
]

export function createRouter() {
    const routesFromElements = createRoutesFromElements(routes)   // Create routes from elements in the routes array
    const router = createBrowserRouter(routesFromElements)        // Create a browser router using the routes
    return router
}


/**
 * A Note on this file
 * 
 * In this file, we have defined the routes for our application using the react-router-dom library. We have created a function createRouter that creates a browser router using the routes defined in the routes array.
 * This is solely a helper function to create the router and can be used in the App component to render the router, and make the code more modular and easier to manage.
 * 
 * All of this code could have been written in App.tsx above the component, but it is better to separate the routing logic from the component rendering logic to make the code more readable and maintainable.
 */