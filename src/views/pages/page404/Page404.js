import React from 'react'
import { CButton, CCol, CContainer, CRow } from '@coreui/react'
import { useHistory } from 'react-router-dom'

const Page404 = () => {
  const hist = useHistory()
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-medium-emphasis float-start">
                The page you are looking for was not found.
              </p>
            </div>
            <CButton onClick={() => hist.push('/dashboard')}>Back</CButton>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
