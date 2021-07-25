import React from 'react'
import './rightsidebar.scss'

export default function RightSideBar() {
    return (
        <div className="rightsideContainer">
            <div className="rightsideTop">
                
                <span className="rightsideTopText">Anand and 3 other friends have birthdays today.</span>
            </div>
            <div className="rightsideCenter">
                
            </div>
            <div className="rightsideBottom">
                <span className="onlineText">
                    Online
                </span>
                <div className="rightsideOnlineFriend">
                    <div className="rightsideOnlineAvatar">

                        <div className="rightsideOnlineStatus">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
