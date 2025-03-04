export const CustomRouter = ({config}) => {
    let {pathname} = window.location;
    if(pathname[pathname.length-1] === "/" && pathname.length>1) {
        pathname = pathname.substring(0, pathname.length-1)
    }

    const getRoute = (routes, parentPath="") => {
        let route = routes.find((r) => parentPath + r.path === pathname);

        if(route) {
            return route;
        }

        routes.forEach((r) => {
            if(r.routes) {
                const innerRoute = getRoute(r.routes, parentPath+r.path);

                if(innerRoute) {
                    route=innerRoute;
                }
            }
        })

        return route ?? null;
    } 

    const route = getRoute(config)

    if(route && route.component) {
        return route.component;
    }

    return <div><h1>There is nothing on this path</h1></div>
}