import React from 'react'
import './feedbody.scss'
import { Photo, Theaters, Label, EmojiEmotions, Favorite } from '@material-ui/icons'
import { Button } from '@material-ui/core'

export default function FeedBody() {
    return (
        <div className="feedbodyContainer">
            <div className="feedTop">
                <div className="feedShareCard">
                    <div className="feedShareCardTop">
                        <img className="feedShareProfilePic" alt="" src="https://lh3.googleusercontent.com/a-/AOh14GiZymR5820okEQXhDuS7RKQWsjAZj_4OdTudtOocA?height=180&width=180" />
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
                            <EmojiEmotions htmlColor="goldenrod" className="feedShareBottomIcon" />
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
                        <img className="feedPostPic" alt="" src="https://www.valpo.edu/university-programming-council/files/2019/05/17098033_1343225165737748_7888563682922187930_o-Shreedhar-Pandey.jpg" />
                        <span className="feedPostUsername">
                            Shree Pandey
                        </span>
                        <span className="feedPostTimeago">
                            1 week ago
                        </span>
                    </div>
                    <div className="feedPostCenter">
                        <img className="feedPostCenterPic" alt="" src="https://uploads-ssl.webflow.com/5f53d096e630c342b720e573/5f6071021a8bf12cee176245_technical-hiring-process.png" />
                    </div>
                    <div className="feedPostBottom">
                        <div className="feedPostBottomLeft">
                            <Favorite htmlColor="red" className="feedPostFavoriteIcon" />
                            <span className="feedPostLikes">
                                3 people like this
                            </span>
                        </div>
                        <div className="feedPostBottomRight">   
                            <span className="feedPostComments">
                                2 comments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="feedBottom">
                feedbottom
            </div> */}
        </div>
    )
}
