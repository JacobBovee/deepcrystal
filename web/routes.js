import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import Drop from './modules/drop'
import ImageGrid from './modules/grid'
import Login from './modules/login'

export default () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={Login} />
      <Route path="drop" component={Drop} />
      <Route path="grid" component={ImageGrid} />
    </Route>
  </Router>
)
