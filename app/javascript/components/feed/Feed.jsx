import React from 'react'
import './feed.scss'
import FeedBody from '../feedbody/FeedBody'
import LeftSideBar from '../leftsidebar/LeftSideBar'
import RightSideBar from '../rightsidebar/RightSideBar'

export default function Feed() {
    return (
        <div className="feedContainer">
            <LeftSideBar />
            <FeedBody />
            <RightSideBar />
        </div>
    )
}
