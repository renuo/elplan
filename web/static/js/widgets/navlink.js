import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function bem (base, options) {
  return [base]
    .concat(Object.keys(options).filter(name => !!options[name]).map(name => `${base}--${name}`))
    .join(' ')
}

const NavLink = (props) => {
  const { active, brand, error, info, right, success, warning, ...childProps } = props
  const classes = bem('c-nav__item', { active, brand, error, info, right, success, warning })
  return (
    <Link {...childProps} className={classes}>
      {props.children}
    </Link>
  )
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
  brand: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  right: PropTypes.string,
  success: PropTypes.string,
  warning: PropTypes.string
}

NavLink.defaultProps = {
  active: false,
  brand: false,
  error: false,
  info: false,
  right: false,
  success: false,
  warning: false
}

export default NavLink
