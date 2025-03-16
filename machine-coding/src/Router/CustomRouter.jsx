export const CustomRouter = ({ config }) => {
  let { pathname } = window.location;
  if (pathname[pathname.length - 1] === "/" && pathname.length > 1) {
    pathname = pathname.substring(0, pathname.length - 1);
  }

  const getRoute = (routes, parentPath = "") => {
    let route = routes.find(
      (r) => parentPath + r.path.toLowerCase() === pathname.toLowerCase()
    );

    if (route) {
      return route;
    }

    routes.forEach((r) => {
      if (r.routes) {
        const innerRoute = getRoute(r.routes, parentPath + r.path);

        if (innerRoute) {
          route = innerRoute;
        }
      }
    });

    return route ?? null;
  };

  const route = getRoute(config);

  if (route && route.component) {
    return route.component;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
        paddingLeft: "48px",
        background: "var(--background-primary)",
      }}
    >
      <h1>There is nothing on this path</h1>
    </div>
  );
};
