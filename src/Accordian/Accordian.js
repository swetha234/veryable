import {useState} from 'react';
import './Accordian.scss';

const Accordian = (props) => {
    const [isTrue,setIsTrue] = useState(false);
    const ShowHide = () =>{
        setIsTrue(!isTrue)   
    }
  
    return  <div class="bodyOfContainer">
                <div class="bodyOfContainer-one">
                    <div class="userIcon">
                        <svg className={`role ${props.role}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div href="/" class="listOfDetails-one">  
                        <p className="name">{props.firstname} {props.lastname}</p>
                        <p className="role">{props.role}</p>
                        <p className="email">{props.email}</p>
                    </div>
                    <div className="up-down" 
                        onClick={()=>{ShowHide()}}>{isTrue ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>
                        :<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg> }
                    </div>
                </div>

                {isTrue && 
                <div class="bodyOfContainer-two">
                    <div class="listOfDetails-two">
                        <p class="address"><span>Address</span>{props.street}, {props.city}, {props.state}, {props.zip}</p>
                        <p class="phone"><span>Phone</span>{props.phone}</p>
                        <p class="createdAt"><span>Created At</span>{props.createdat}</p>
                        <p class="lastLogin"><span>Last Logged In</span>{props.lastlogin}</p>
                    </div>
                </div>
                }      
            </div>
}

export default Accordian;
