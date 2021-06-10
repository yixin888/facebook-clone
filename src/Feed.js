import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ));
  },[]);

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
              <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
              
              />
            ))}






            
            <Post 
              profilePic="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
              message="Wow, Beautiful"
              timestamp="timestamp"
              username="Lin"
              image="https://images-na.ssl-images-amazon.com/images/I/71kkMXAcLCL._AC_UL600_SR600,600_.png"
            />
            <Post 
             profilePic="https://image.shutterstock.com/image-vector/dog-logo-playing-jumping-260nw-1385247389.jpg"
             message="The Aurora borealis"
             timestamp="timestamp"
             username="Sam"
             image="https://www.w3schools.com/w3css/img_lights.jpg"
          
            />
            <Post 
              profilePic="http://www.sinaimg.cn/ent/m/2007-06-23/U105P28T3D1609834F328DT20070623192524.jpg"
              message="US"
              timestamp="timestamp"
              username="Anna"
              image="https://www.familyholiday.net/wp-content/uploads/2011/04/7-Wonders-of-the-World-Golden-Gate-Bridge-USA-_20.jpg"
           
            />
        </div>
    );
}

export default Feed;
