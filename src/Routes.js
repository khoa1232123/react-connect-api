import React from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Switch } from "react-router-dom";
import ProductListPage from "./pages/Product/ProductListPage";
import ProductActionPage from "./pages/Product/ProductActionPage";
import ShowProductDetail from "./components/ShowProduct/ShowProductDetail";
import Cart from "./components/Cart/Cart";

const routes = [
  { path: "/", exact: true, main: () => <HomePage /> },
  { path: "/products", exact: true, main: () => <ProductListPage /> },
  { path: "/products/detail/:id", exact: false, main: () => <ShowProductDetail /> },
  { path: "/cart", exact: false, main: () => <Cart /> },
  {
    path: "/products/add",
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />
  },
  {
    path: "/products/edit/:id",
    exact: false,
    main: ({ match, history }) => (
      <ProductActionPage match={match} history={history} />
    )
  },
  { path: "", exact: false, main: () => <NotFoundPage /> }
];

var showContent = routes => {
  var result = null;
  result = routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        component={route.main}
        exact={route.exact}
      />
    );
  });
  return result;
};

export default function Routes() {
  return <Switch>{showContent(routes)}</Switch>;
}
