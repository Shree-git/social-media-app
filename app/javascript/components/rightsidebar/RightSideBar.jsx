import React from 'react'
import './rightsidebar.scss'
import { Cake } from '@material-ui/icons'

export default function RightSideBar() {
    return (
        <div className="rightsideContainer">
            <div className="rightsideTop">
                <Cake className="rightsideTopIcon" />
                <span className="rightsideTopText">Wes and 3 other wovers have birthdays today.</span>
            </div>
            <div className="rightsideCenter">
                
            </div>
            <div className="rightsideBottom">
                <span className="onlineText">
                    Online Wovers
                </span>
                <div className="rightsideOnlineFriend">
                    <div className="rightsideOnlineAvatar">
                    
                        <img src="https://lh3.googleusercontent.com/a-/AOh14Gi_spsir9Oja6c_R1W8FtE0vCSaLtVH-87g3e1k?height=180&width=180" alt="" className="rightsideOnlinePic" />
                        <div className="rightsideOnlineStatus">
                        </div>
                    </div>
                    <div className="rightsideOnlineUsername">Anthony Panozzo</div>
                </div>
            </div>
        </div>
    )
}
