import React from 'react'
import Feed from '../../components/feed/Feed'
import FeedBody from '../../components/feedbody/FeedBody'
import LeftSideBar from '../../components/leftsidebar/LeftSideBar'
import ProfilePic from '../../components/profilepic/ProfilePic'
import RightSideBar from '../../components/rightsidebar/RightSideBar'
import Topbar from '../../components/topbar/Topbar'
import './profile.scss'

export default function Profile() {
    return (
        <div className="profileContainer">
            <Topbar />
            <div className="profileBody">
                <LeftSideBar />
                <div className="profileBodyCenter">
                    <ProfilePic />
                    <div className="profileBodyCenterBottom">
                        <FeedBody />
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}