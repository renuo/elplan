import React from 'react'
import { connect } from 'react-redux'
import { Nav, NavContent, NavItem } from 'react-blazecss'

import { AuthWidget } from './auth'
import { Icon, NavLink } from './widgets'

export default connect(state => ({ user: state.user }))(props =>
  (<Nav inline shadow="higher" animate position="top" fixed>
    <NavContent>El Plan</NavContent>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavContent right><AuthWidget /></NavContent>
    {props.user
      ? <NavLink to="/account" right>
        <Icon name="person" /> {props.user.name}
      </NavLink>
      : ''}
  </Nav>)
)
