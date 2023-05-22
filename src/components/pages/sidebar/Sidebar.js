import './sidebar.css';
import Posts from './Posts';
import UserProfile from './UserProfile';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-left'>
          <Posts image="https://media.istockphoto.com/id/1330239566/photo/weeds-on-a-lake-shore.jpg?s=1024x1024&w=is&k=20&c=7MmefaCJqp9nDZSoGQBcYCkwszc-YbyiJxOoxeHdepA="/>
          <Posts image="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          <Posts image="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          <Posts image="https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
          <Posts image="https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          <Posts image="https://images.pexels.com/photos/1266833/pexels-photo-1266833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </div>
        <div className='sidebar-right'>
          <UserProfile/>
        </div>
      </div>
    </>
  )
}

export default Sidebar