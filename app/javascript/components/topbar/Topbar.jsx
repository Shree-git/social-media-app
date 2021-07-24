import React from 'react'
import './topbar.scss'
import { Search, PersonAdd, Chat, Notifications } from '@material-ui/icons'
import { Button } from '@material-ui/core'

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="topbarLogo">Woven</span>
            </div>
            <div className="topbarCenter">
                <div className="searchMenu">
                    <Search className="searchIcon" />
                    <input type="text" placeholder="Search for people, posts, videos...."  className="searchInput"></input>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarRightLinks">
                    <Button className="linkBtn">Feed</Button>
                    <Button className="linkBtn">Timeline</Button>
                </div>
                <div className="topbarRightIcons">
                    <div className="iconItems">
                        <PersonAdd className="iconItem" />
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="iconItems">
                        <Chat className="iconItem" />
                        <span className="iconBadge">1</span>
                    </div>
                    <div className="iconItems">
                        <Notifications className="iconItem" />
                        <span className="iconBadge">4</span>
                    </div>
                </div>
                <div className="topbarRightAvatar">
                    shree
                </div>
            </div>
        </div>
    )
}
