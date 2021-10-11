import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'src/redux/userSlice'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Login = () => {
  const dispatch = useDispatch()
  const config = useSelector((state) => state.config)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    axios.get(config.apiHost + '/home').then(({ data }) => {
      dispatch(login(data))
      hist.push('/dashboard')
    })
  }, [])

  const hist = useHistory()
  const submitLogin = (e) => {
    e.preventDefault()
    axios
      .get(config.apiHost + '/sanctum/csrf-cookie')
      .then(() => {
        axios
          .post(
            config.apiHost + '/login',
            { username, password },
            {
              headers: {
                Accept: 'application/json',
              },
            },
          )
          .then((d) => {
            console.log(d)
            axios.get(config.apiHost + '/home').then(({ data }) => {
              dispatch(login(data))
              hist.push('/dashboard')
            })
          })
          .catch((e) => {
            if (e.response.status === 422) {
              console.log(e.response.data)
              Swal.fire('Login Gagal!', 'Periksa kembali username dan password anda.', 'error')
            }
          })
      })
      .catch((e) => console.log(e))
    // const user = {
    //   username,
    //   password,
    // }
    // dispatch(login(user))
    // hist.push('/dashboard')
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={submitLogin}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          type="submit"
                          disabled={!username || !password}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="d-flex justify-content-end">
                        <CButton color="link" onClick={() => hist.push('/dashboard')}>
                          Ke Dashboard
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
