import React from 'react'

const Link = (props) => {
  return (
    <a href={props.to} className="text-gray-200 hover:text-white">{props.children}</a>
  )
}

export default Link