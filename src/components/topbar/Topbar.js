import './topbar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  return (
    <>
        <div className='topbar'>
            <div className='left'>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            </div>
            <div className='center'>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>write</li>
                <li>logout</li>
              </ul>
            </div>
            <div className='right'>
              <img src="https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?w=900&t=st=1684313850~exp=1684314450~hmac=00476cff939caae5e2f9cc39d8cb1d939d0dc55cb4dd7e6117dbd06dcc04d8f5" alt='logo'/>
              <SearchIcon />
            </div>
        </div>
    </>
  )
}

export default Topbar