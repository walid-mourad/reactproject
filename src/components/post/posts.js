import { Card } from 'react-bootstrap';
import ProfileCard from '../cards/profileCard';
import PostCard from './postCard'
import './posts.css'

function Posts(props){
    return(
        //<ProfileCard/>
        //<PostCard/>
        <div className="blog-post">
            <div className="blog-post-header">
                <img className="profile-image" src={props.profileImage} alt="Profile Image" />
                <div className="blog-post-header-text">
                <h2>{props.username}</h2>
                <p>{props.date}</p>
                </div>
            </div>
            <div className="blog-post-content">
                <p>{props.postContent}</p>
                {props.postImage && <img className="post-image" src={props.postImage} alt="Post Image" />}
            </div>
            <div className="blog-post-footer">
                <button className="post-footer-button">Like</button>
                <button className="post-footer-button">Comment</button>
                <button className="post-footer-button">Share</button>
            </div>
        </div>
    )
}

export default Posts;