import React from 'react'
import { CContainer, CHeader, CHeaderBrand, CHeaderNav, CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {/* below is sidebar on header */}
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>KHSC Clinical Pathology Dashboard &gt; Melanoma of the Skin</CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
