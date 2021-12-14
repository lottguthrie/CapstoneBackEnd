import React from 'react';
import axios from 'axios';


    function Registration() {
        async function handleSubmitClick(){
            console.log("hi")
            let _firstName = document.getElementById("firstname").value
            let _lastName = document.getElementById("lastname").value
            let _username = document.getElementById("username").value
            let _password = document.getElementById("password").value
            let _email = document.getElementById("email").value
            let _phoneNumber = document.getElementById("phonenumber").value
            let _badgeNumber = document.getElementById("badgenumber").value
            let _officerId = document.getElementById("officerid").value
            let _supervisorId = document.getElementById("supervisorid").value
            let _middleName = document.getElementById("middlename").value
            let _lastLogin = document.getElementById("lastlogin").value
            let _isSuperuser = document.getElementById("issuperuser").value



            let payload =  { 
                FirstName: _firstName,
                LastName: _lastName,
                UserName: _username,
                Password: _password,
                Email: _email,
                PhoneNumber: _phoneNumber,
                MiddleName: _middleName,
                LastLogin: _lastLogin,
                IsSuperuser: _isSuperuser,
                BadgeNumber: _badgeNumber,
                OfficerId: _officerId,
                SupervisorId: _supervisorId

            }
            let res = await axios.post('https://localhost:44394/api/authentication/register', payload);
            console.log(res)
            return res.data
        }
    
        return(
            <div className="registration">
                <form>
                    <input type="text" id="firstname"  placeholder="Enter your first name" />
                    <input type="text" id="lastname"  placeholder ="Enter your last name" />
                    <input type="text" id="username"  placeholder ="Enter your username" />
                    <input type="text" id="password"  placeholder ="Enter your password (must be 8 characters and must contain number)" />
                    <input type="text" id="email"  placeholder ="Enter your email" />
                    <input type="text" id="phonenumber" placeholder="Enter your phonenumber" />
                    <input type="text" id="middlename"  placeholder="Enter your middle name" />
                    <input type="text" id="badgenumber"  placeholder ="Enter your badge number" />
                    <input type="text" id="username"  placeholder ="Enter your username" />
                    <button type="submit" onClick={handleSubmitClick}>Register</button>
                </form>
            </div>
        )
    }
    
export default Registration;