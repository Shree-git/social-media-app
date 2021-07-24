import React from 'react'
import Feed from '../../components/feed/Feed'
import Topbar from '../../components/topbar/Topbar'
import './home.scss'

export default function Home() {
    return (
        <div className="homeContainer">
            <Topbar />
            <Feed />
        </div>
    )
}
