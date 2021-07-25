import React from 'react'
import Feed from '../../components/feed/Feed'
import Topbar from '../../components/topbar/Topbar'
import './profile.scss'

export default function Profile() {
    return (
        <div className="homeContainer">
            <Topbar />
            <Feed />
        </div>
    )
}