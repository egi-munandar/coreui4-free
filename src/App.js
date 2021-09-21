import React from 'react'
import { useSelector } from 'react-redux'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import Login from './views/Login'
import Page401 from './views/pages/Page401/Page401'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const user = useSelector((state) => state.user)
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        {user !== null ? (
          <Switch>
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/401" name="Page 401" render={(props) => <Page401 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route path="/" render={() => <Redirect to="/login" />} />
          </Switch>
        )}
      </React.Suspense>
    </HashRouter>
  )
}
export default App
