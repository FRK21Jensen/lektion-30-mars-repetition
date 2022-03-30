import React from 'react'

//destructuring of props
export default function Button({action, title}) {
  return (
    <button onClick={action}>{title}</button>
  )
}
