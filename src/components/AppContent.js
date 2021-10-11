import React, { Suspense, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import { useSelector } from 'react-redux'

const AppContent = () => {
  const user = useSelector((state) => state.user)
  const [rts, setRts] = useState([])
  useEffect(() => {
    if (!user) {
      setRts([...routes])
    } else {
      setRts([...routes])
    }
  }, [user])
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {rts.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
          {/* <Route path="/" render={() => <Redirect to="/404" />} /> */}
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
