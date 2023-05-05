import React, { Suspense } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutesObj } from "./app.paths";
import ComponentLoader from "./components/component-loader/component-loader";
import { lazyWithRetry } from "./core/utils/lazy-loading.utils";

const HomePage = lazyWithRetry(() => import("./pages/home-page/home-page"));

const ContactPage = lazyWithRetry(
  () => import("./pages/contact-page/contact-page")
);

const withSuspense = (WrappedComponent: React.ComponentType) => {
  return (
    <Suspense fallback={<ComponentLoader />}>
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element: JSX.Element) => {
  const newComponent = () => withSuspense(element.props.component);

  return { ...element, props: { ...element.props, component: newComponent } };
};

export function AppRouting() {
  return (
    <Suspense
      fallback={
        <div className="text-primary-200 pt-10">
          <ComponentLoader />
        </div>
      }
    >
      <Routes>
        <Route
          key="home"
          path={appRoutesObj.getBaseUrl()}
          element={withSuspenseComponents(<HomePage />)}
        />

        <Route
          key="contact"
          path={appRoutesObj.getContactPath()}
          element={withSuspenseComponents(<ContactPage />)}
        />

        <Route
          key="notDefined"
          path="*"
          element={<Navigate to={appRoutesObj.getBasePath()} />}
        />
      </Routes>
    </Suspense>
  );
}
