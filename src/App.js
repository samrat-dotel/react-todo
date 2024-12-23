import React from 'react'
import Todo from './components/Todo'
import styles from './App.module.css'

const todos = [
  {
    title: 'Learn React',
    description: 'Learn how to build a web app with React',
  },
  {
    title: 'Learn TypeScript',
    description: 'Learn how to add types to JavaScript',
  },
  {
    title: 'Learn GraphQL',
    description: 'Learn how to query and mutate data with GraphQL',
  },
  {
    title: 'Learn Node.js',
    description: 'Learn how to build a server with Node.js'
  },
  {
    title: 'Learn Express',
    description: 'Learn how to build a web app with Express', 
  },
  {
    title: 'Learn MongoDB',
    description: 'Learn how to store data with MongoDB',
  }
]

function App() {
  return (
    <main>
      <h1 className={styles.navbar}>React App</h1>

      {todos.map((todo, index) => {
        const { title, description } = todo;
        return <Todo key={index} title={title} description={description} />;
      })}
    </main>
  )
}

export default App
