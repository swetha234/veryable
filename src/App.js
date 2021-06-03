import './App.scss';
import Accordian from './Accordian/Accordian';
import './Accordian/Accordian.scss';
import UserLogo from './images/group.svg';
import Users from './users.json';


const App = () => (
  <div className="container">
    {/* Header of the Page */}
    <div className="nav-bar">
      <div className="user-logo">
          <img src={UserLogo} alt="User Logo"></img>
          <h1 className="h4">Users</h1>
      </div>
    </div>

    {/* Body of the Page */}
    { Users.map(user => 
      <div >
        <Accordian
          firstname = {user.firstName} 
          lastname  = {user.lastName} 
          role = {user.role}
          email = {user.email}  
          street = {user.street}  
          city = {user.city} 
          state = {user.state} 
          zip = {user.zip} 
          phone = {user.phone} 
          createdat = {user.createdAt} 
          lastlogin = {user.lastLoggedIn} 
        /> 
      </div>
    )}
  </div>
);

export default App;
