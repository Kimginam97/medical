import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routeConfig from './routes/Route'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {routeConfig.map(({ path, title, component: Component }) => (
          <Route path={path} key={title} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
