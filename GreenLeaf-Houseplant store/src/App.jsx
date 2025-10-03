import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
