import React from 'react'
import { Redirect } from 'react-router'

export const Profile = ({authorized}) => {
    if (!authorized) {
        return <Redirect to="/rewards" />;
    }
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}
