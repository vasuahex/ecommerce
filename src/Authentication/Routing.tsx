import { NavLink } from "react-router-dom"
const Routings = () => {
  return (
    <div className="">
      <NavLink to="/login"><h1>Login</h1></NavLink>
      <NavLink to="/register"><h1>Register</h1></NavLink>
    </div>
  )
}

export default Routings