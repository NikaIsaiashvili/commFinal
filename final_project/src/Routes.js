import { Routes as RoutesList, Route } from "react-router-dom";
import { ROUTES_CONFIG } from "./config/routes";
import NotFound from "./pages/NOT_FOUND/NotFound";

function RoutesPath() {
  return (
    <RoutesList>
      {ROUTES_CONFIG.map((route) => {
      const Guard = route.guard;
      const Page = route.page;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Guard>
                <Page />
              </Guard>
            }
          />
        );
      })}
      <Route path="*" element= {<NotFound />} />
    </RoutesList>
  );
}

export default RoutesPath;
