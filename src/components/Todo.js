import React from 'react'

function Todo({ title, description }) {
  return (
    <main>
        <h1>{title}</h1>
        <p>{description}</p>
    </main>
  )
}

export default Todo
