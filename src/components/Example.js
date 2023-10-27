import React from 'react'

function Example(props) {
  return (
    <div>
        {props.exampleProp}
        {props.children}
    </div>
  )
}

export default Example;
