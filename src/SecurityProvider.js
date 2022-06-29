import { useState } from 'react'
import SecurityContext from './SecurityContext'
import axios from "axios"
import Login from './Login'

const SecurityProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <SecurityContext.Provider
      value={{
        login: async (username, password) => {
          // Note to engineering team:
          // Maybe make this more secure...
          await axios.post('/api/login', { username, password })
          setLoggedIn(true)

        },
        logout: async () => {
          axios.post('/api/logout')
          return setLoggedIn(false)
        },
        onFailure() {
          return setLoggedIn(false)
        },
        loggedIn,
      }}
    >
      {loggedIn ? props.children : <Login />}
    </SecurityContext.Provider>
  )
}

export default SecurityProvider
