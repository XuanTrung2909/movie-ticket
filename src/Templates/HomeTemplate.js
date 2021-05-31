import React from "react";
import { Fragment } from "react";
import { Route } from "react-router";
import Header from './../Components/Header/Header'


export default function HomeTemplate(props) {
  return (
    <Fragment>
      <Header></Header>
      <Route
        path={props.path}
        exact
        render={(propsRoute) => {
          return(
            <Fragment>
              <props.component {...propsRoute} />
            </Fragment>
          )
        }}
      />
    </Fragment>
  );
}
