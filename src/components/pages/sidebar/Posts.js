

const Posts = (props) => {
  return (
    <>
        <div className="posts">
            <img src={props.image} alt="post"/>
            <div>
                <span>Music</span>
                <span>Life</span>
            </div>
            <h2>Lorem Ipsum is simply dummy</h2>
            <p className="time">1 hour ago</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    </>
  )
}

export default Posts