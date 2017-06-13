import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavContent, NavItem } from 'react-blazecss'

import { AuthWidget } from './auth'

export default () =>
  (<Nav inline shadow="higher" animate position="top" fixed>
    <NavContent>El Plan</NavContent>
    <Link to="/"><NavItem>Home</NavItem></Link>
    <NavItem><Link to="/about">About</Link></NavItem>
    <NavItem right bStyle="primary"><AuthWidget /></NavItem>
  </Nav>)
