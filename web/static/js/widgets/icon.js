import React from 'react'

export default (props) => {
  const icon = require(`open-iconic/svg/${props.name}.svg`)
    .replace(/<svg.*?>/, '')
    .replace(/<\/svg>/, '')
  return <svg viewBox="0 0 8 8" className="icon" dangerouslySetInnerHTML={{ __html: icon }} />
}
