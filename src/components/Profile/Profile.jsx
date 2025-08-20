import React from 'react'
import './profile.css'
import profilePic from "../../assets/profile.png";
import camera from "../../assets/camera.svg";
function Profile() {
    return (
        <>
            <div className="container m-auto">
                <div className='h m-auto'>
                    <div className="card">
                        <h2>Account Settings</h2>
                    </div>
                    <div className="center">
                        <div className="profile">
                            <div className="profile-pic">
                                <img src={profilePic} alt="Profile Picture" />
                            </div>
                            <div className="profile-info">
                                <h3>Marry Doe</h3>
                                <p>Marry@Gmail.Com</p>
                            </div>
                        </div>
                        <div className="camera">
                            <img src={camera} alt="" srcset="" className="camera-icon" />
                        </div>
                        <p className="description">
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
                        </p>
                    </div>
                   <div className="parent-bottom">
                     <div className="border-bottom"></div>
                   </div>
                </div>
                
            </div>
        </>
    )
}

export default Profile