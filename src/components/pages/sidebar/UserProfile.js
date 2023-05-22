import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const UserProfile = () => {
  return (
    <>
        <h2>About Me</h2>
        <img src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?w=360&t=st=1684392881~exp=1684393481~hmac=71649e1209eae0e8bd60bc05c593b38917648b66e21f33427d8c8dac75ebfd7c" alt='logo'/>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <h4>Categories</h4>
        <ul>
            <li>Life</li>
            <li>music</li>
            <li>style</li>
            <li>sport</li>
            <li>tech</li>
            <li>cinema</li>
        </ul>
        <h4>follow us</h4>
        <span>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </span>
    </>
  )
}

export default UserProfile