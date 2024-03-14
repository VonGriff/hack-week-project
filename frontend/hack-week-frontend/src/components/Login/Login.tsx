const Login = ({login}: {login: () => void}) => {
  return <button onClick={login} >Login</button>
}

export default Login;