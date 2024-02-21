import { Link, useNavigate } from "react-router-dom"

type Props = {}

const Home = (props: Props) => {

  const navigate = useNavigate()

  const handleLogin = () => {
    //request atıldı 
    setTimeout(() => {
      navigate('/about')
    }, 2000);
  }
  return (
    <>
      <div>Home</div>
      <Link to={'/detail'} className="btn btn-danger" >Go To Detail</Link>
      <button className="btn btn-success" onClick={handleLogin} >Login</button>
    </>
  )
}

export default Home