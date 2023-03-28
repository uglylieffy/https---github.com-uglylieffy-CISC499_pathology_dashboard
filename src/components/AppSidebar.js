import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarToggler,
  CNavGroup,
  CNavItem,
  CSidebarNav,
} from '@coreui/react'
import 'simplebar/dist/simplebar.min.css'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand>Filters</CSidebarBrand>
      <CSidebarNav>
        <CNavGroup toggler="Cancer Type">
          <CNavItem href="#/dashboard">Melanoma</CNavItem>
          <CNavItem href="#" disabled>
            Others
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
