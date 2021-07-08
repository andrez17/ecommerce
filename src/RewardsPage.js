import React from 'react'

export const RewardsPage = () => {
    return (
        <div className="rewardpage-container">
            <div className="rewards-signup">
                <h1>Sign-In</h1>
                <form className="rewards-form">
                    <input value="Email"/>
                    <input value="Password"/>
                    <button>SIGN IN</button>
                </form>
            </div>
            <div className="rewards-signup">
                <h1>Sign-Up</h1>
                <form className="rewards-form">
                    
                    <input value="Email"/>
                    <input value="New Password"/>
                    <input value="Confirm Password"/>
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
