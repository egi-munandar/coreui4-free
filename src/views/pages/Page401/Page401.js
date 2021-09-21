import React from 'react'
import { CButton, CCol, CContainer, CRow } from '@coreui/react'
import { useDispatch } from 'react-redux'
import { logout } from 'src/redux/userSlice'
import { useHistory } from 'react-router-dom'

const Page401 = () => {
  const dispatch = useDispatch()
  const hist = useHistory()
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">401</h1>
              <h4 className="pt-3">Unauthenticated.</h4>
              <p className="text-medium-emphasis float-start">
                You don&apos;t have permission to see this page.
              </p>
            </div>
            <CButton color="link" onClick={() => dispatch(logout())}>
              Logout
            </CButton>
            <CButton color="primary" onClick={() => hist.push('/')}>
              Back
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page401
