import React from "react";
import { Fragment } from "react";
import { Route } from "react-router";

export default function SignTemplate(props) {
  return (
    <Fragment>
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return (
            <Fragment>
              <props.component {...propsRoute} />
            </Fragment>
          );
        }}
      />
    </Fragment>
  );
}
