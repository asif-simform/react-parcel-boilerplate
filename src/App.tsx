import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import { history, routes } from './config/routes'
import { PrivateRoute } from './containers/PrivateRoute'
import { PublicRoute } from './containers/PublicRoute'
import { HomePage } from './pages/HomePage'

export const App: React.FC = () => {
  return (
    <Fragment>
      <HomePage />
      {/* <Router history={history}>
        <Switch>
          {Object.keys(routes).map(key => {
            const value = routes[key]
            const { isPrivate, isStatic } = value
            if (isStatic) {
              return <Route {...value} key={key} />
            }
            const SelectedRoute = isPrivate ? PrivateRoute : PublicRoute
            //return <SelectedRoute {...value} key={key} />; // return this to enable auth
            return <Route {...value} key={key} /> // remove this when enabling the above
          })}
        </Switch>
      </Router> */}
    </Fragment>
  )
}
