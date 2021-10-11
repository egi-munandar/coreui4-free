import React from 'react'
import {
  CAvatar,
  CBadge,
  CCard,
  CCardBody,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownItemPlain,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAsterisk,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'src/redux/userSlice'
import axios from 'axios'

const AppHeaderDropdown = () => {
  const config = useSelector((state) => state.config)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const submitLogout = () => {
    axios.post(config.apiHost + '/logout').then(() => {
      dispatch(logout())
    })
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          {user.name} ({user.role.description})
        </CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilAsterisk} className="me-2" />
          Ganti Password
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          Profil
        </CDropdownItem>
        <CDropdownItem className="text-danger" onClick={submitLogout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
