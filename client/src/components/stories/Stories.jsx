import { useContext } from 'react';
import './stories.scss'
import { AuthContext } from '../../context/authContext';

const Stories = () => {

    const {currentUser} = useContext(AuthContext)
    //TEMPORARY

     if (!currentUser) {
    return null; // STOP render completely
  }
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3184188/pexels-photo-3184188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/32307142/pexels-photo-32307142/free-photo-of-young-graduate-holding-dr-seuss-book-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/32059371/pexels-photo-32059371/free-photo-of-graduation-ceremony-group-portrait-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/7550298/pexels-photo-7550298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&lazy=load",
    },
  ];

  return (
     <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories