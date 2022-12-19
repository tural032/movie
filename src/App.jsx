import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListPage from './Pages/Listpage/ListPage'
import MainPage from './Pages/Mainpage/MainPage'
import store from './redux/store'
function App() {

  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
        <Route path="/" index element={<MainPage/>} />
        <Route path="/list"  element={<ListPage/>} />
        </Routes>
        </BrowserRouter>
      </Provider>
      
    </div>
  )
}
export default App
