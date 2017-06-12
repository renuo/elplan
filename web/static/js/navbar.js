import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Column, TopBar, TopBarTitle, TopBarRight, Menu, MenuItem } from 'react-foundation'

import { AuthWidget } from './auth'

export default () =>
  (<TopBar className="navbar">
    <Row>
      <Column>
        <TopBarTitle className="navbar__title"><Link to="/">El Plan</Link></TopBarTitle>
        <TopBarRight className="navbar__right">
          <Menu>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem>
              <AuthWidget />
            </MenuItem>
          </Menu>
        </TopBarRight>
      </Column>
    </Row>
  </TopBar>)
