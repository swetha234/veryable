import './App.scss';
import './responsive-topography.scss';
import Accordian from './Accordian/Accordian';
import './Accordian/Accordian.scss';
import UserLogo from './group.svg';
import Users from './users.json';
<link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>

function App() {
  return (

    <div className="container">

      {/* Header of the Page */}
      <div class="nav-bar">
        <div class="user-logo">
            <img src={UserLogo} alt="User Logo"></img>
            <h1 class="h4">Users</h1>
        </div>
      </div>

      {/* Body of the Page */}
     
        { Users.map(post => 
  
            <div >
              
              <div class="listOfDetails">

               <Accordian
                firstname={post.firstName} lastname={post.lastName} role={post.role} email={post.email}  street={post.street}  city={post.city} 
                state={post.state} zip={post.zip} phone={post.phone} createdat={post.createdAt} lastlogin={post.lastLoggedIn} 
               
               ></Accordian>
                 
              </div>
            </div>
            
          
        ) }
    </div>
  );
}

export default App;
