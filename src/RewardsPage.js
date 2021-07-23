import React from 'react'
import { useHistory } from 'react-router-dom'
// import { setLogin } from './redux/actions/loginAction'
// import { useDispatch, useSelector} from 'react-redux'

export const RewardsPage = () => {
    const history = useHistory();

    // const dispatch = useDispatch();
    // const data = useSelector((state) => state);


    const handleSignIn = async (e) => {
        e.preventDefault();
        // dispatch(setLogin({
        //     username: e.target[0].value,
        //     password: e.target[1].value
        // }))
        const username = (e.target[0].value).toString();
        const password = (e.target[1].value).toString();

        const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        const data = await response.json();
        if(data.status){
            alert("Username or password incorrect")
        }else if(data.token){
            history.push('/rewards/profile')
        }
        // var email = document.getElementById("email").value
        // var password = document.getElementById("password").value
        // console.log(email, password)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = (e.target[0].value).toString();
        const newpassword = (e.target[1].value).toString();
        const confirmpassword = (e.target[2].value).toString();

        if(newpassword != confirmpassword){
            alert("Passwords do not match.")
        }

        const response = await fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: newpassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        const data = await response.json();
        console.log("Response: ", data)
    }

    return (
        <div className="rewardpage-container">
            <div className="rewards-signup">
                <form className="rewards-form" method="GET" onSubmit={handleSignIn}>
                    <label>Sign-In</label>
                    <input name="username" type="text" placeholder="Username" id="username"/>
                    <input name="password" type="password" placeholder="Password" id="password"/>
                    <button>SIGN IN</button>
                </form>
            </div>
            <div className="rewards-signup">
                <form className="rewards-form" method="GET" onSubmit={handleSubmit}>                    
                    <label>Sign-Up</label>           
                    <input name="username" type="text" placeholder="Username"/>
                    <input name="newpassword" type="password" placeholder="New Password"/>
                    <input name="confirmpassword" type="password" placeholder="Confirm Password"/>
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
