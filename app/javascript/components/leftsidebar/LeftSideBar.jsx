import React from 'react'
import './leftsidebar.scss'
import { People, Description, Event } from '@material-ui/icons'

export default function LeftSideBar() {
    return (
        <div className="leftsideContainer">
            <div className="leftTop">
                <div className="leftItem">
                    <People className="leftIcon" />
                    <div className="leftText">Wovers</div>
                </div>
                <div className="leftItem">
                    <Description className="leftIcon" />
                    <div className="leftText">Wovenews</div>
                </div>
                <div className="leftItem">
                    <Event className="leftIcon" />
                    <div className="leftText">Wovents</div>
                </div>
            </div>
            <div className="leftBottom">

            </div>
        </div>
    )
}
