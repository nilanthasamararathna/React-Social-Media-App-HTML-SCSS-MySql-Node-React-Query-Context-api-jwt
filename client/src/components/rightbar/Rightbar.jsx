import "./rightbar.scss";
import Jane from "../../assets/images/jane.jpg";
import Mike from "../../assets/images/Mike.jpg";

const Rightbar = () => {
   return (
    <div className='rightbar'>
      <div className="container">
         <div className="item">
            <span>Suggetions for you</span>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <span>Jane Doe</span>
               </div>
               <div className="buttons">
                  <button>follow</button>
                  <button>dismiss</button>
               </div>
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Mike} alt="" />
                  <span>Mike Howard</span>
               </div>
               <div className="buttons">
                  <button>follow</button>
                  <button>dismiss</button>
               </div>
            </div>
         </div>
         <div className="item">
            <span>Latest activities</span>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <p>
                  <span>Jane Doe</span> change their cover picture
                  </p>
               </div>
               <span>1 min ago</span>
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <p>
                  <span>Jane Doe</span> change their cover picture
                  </p>
               </div>
               <span>1 min ago</span>
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <p>
                  <span>Jane Doe</span> change their cover picture
                  </p>
               </div>
               <span>1 min ago</span>
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <p>
                  <span>Jane Doe</span> change their cover picture
                  </p>
               </div>
               <span>1 min ago</span>
            </div>
         </div>
         <div className="item">
            <span>Online Friends</span>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <div className="online" />
                  <span>Jane Doe</span> 
               </div>      
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <div className="online" />
                  <span>Jane Doe</span> 
               </div>      
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <div className="online" />
                  <span>Jane Doe</span> 
               </div>      
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <div className="online" />
                  <span>Jane Doe</span> 
               </div>      
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <div className="online" />
                  <span>Jane Doe</span> 
               </div>      
            </div>
            <div className="user">
               <div className="userInfo">
                  <img src={Jane} alt="" />
                  <div className="online" />
                  <span>Jane Doe</span> 
               </div>      
            </div>
         </div>
      </div>
    </div>
   )
}

export default Rightbar