import React from 'react'
import './feedbody.scss'
import { Photo, Theaters, Label, EmojiEmotions } from '@material-ui/icons'
import { Button } from '@material-ui/core'

export default function FeedBody() {
    return (
        <div className="feedContainer">
            <div className="feedTop">
                <div className="feedShareCard">
                    <div className="feedShareCardTop">
                        <div className="feedShareProfilePic">

                        </div>
                        <div className="feedShareInputDiv">
                            <input type="text" placeholder="What's on your mind today?" className="feedShareInput" />
                        </div>
                    </div>
                    <hr />
                    <div className="feedShareCardBottom">
                        <div className="feedShareBottomItem">
                            <Photo htmlColor="tomato" className="feedShareBottomIcon" />
                            <div className="feedShareBottomText">
                                Photo
                            </div>
                        </div>
                        <div className="feedShareBottomItem">
                            <Theaters htmlColor="limegreen" className="feedShareBottomIcon" />
                            <div className="feedShareBottomText">
                                Video
                            </div>
                        </div>
                        <div className="feedShareBottomItem">
                            <Label htmlColor="lightblue" className="feedShareBottomIcon" />
                            <div className="feedShareBottomText">
                                Tag
                            </div>
                        </div>
                        <div className="feedShareBottomItem">
                            <EmojiEmotions htmlColor="yellow" className="feedShareBottomIcon" />
                            <div className="feedShareBottomText">
                                Feeling
                            </div>
                        </div>
                        <div className="feedShareBottomItem">
                            <Button className="feedShareButton">Share</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feedCenter">
                <div className="feedPost">
                    <div className="feedPostTop">
                        <div className="feedPostPic">

                        </div>
                        <span className="feedPostUsername">
                            Shree Pandey
                        </span>
                        <span className="feedPostTimeago">
                            1 week ago
                        </span>
                    </div>
                    <div className="feedPostCenter">
                         
                    </div>
                    <div className="feedPostBottom">
                        <div className="feedPostBottomLeft">

                            <span className="feedPostLike">
                                3 people like this
                            </span>
                        </div>
                        <div className="feedPostBottomRigth">   
                            <span className="feedPostLike">
                                2 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feedBottom">

            </div>
        </div>
    )
}
