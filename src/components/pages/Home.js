import './pages.css';
import Sidebar from './sidebar/Sidebar';

const Home = () => {
  return (
  <>
    <div className='home-container'>
        <div>
            <h1>React Blog</h1>
        </div>
        <img src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040412.jpg?w=900&t=st=1684327084~exp=1684327684~hmac=d22b35a2b1c92237982beced9dbebe9c593b69ffedaac60687d00580ff75c8cc" alt='banner'/>
    </div>
    <Sidebar/>
  </>
  )
}

export default Home