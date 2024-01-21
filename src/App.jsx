import { Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp"
import SignIn from "./components/Login"
import Todo from "./components/todo"
import PrivateRoute from "./components/routes/PrivateRoute"
import ProtectedRoute from "./components/routes/ProtectedRoute"
import './App.css'


function App() {

  return (
    <>
<Routes>
  <Route element={<ProtectedRoute/>}>
  <Route index element={<SignIn/>} />
  <Route path="/SignUp" element={<SignUp/>} />
  </Route>

<Route element={<PrivateRoute/>}>
  <Route path="/Todo" element={<Todo/>} />

</Route>
</Routes>
    </>
  )
}

export default App
