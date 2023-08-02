import { Route, Routes } from 'react-router-dom'
import './App.css'
import { routes } from './routes/routes'

const App = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} Component={route.component}></Route>
      ))}
    </Routes>
  )
}

export default App
