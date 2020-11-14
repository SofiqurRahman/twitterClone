import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
import './TweetBox.css';

function TweetBox() {
  const [tweetMessage,setTweetMessage]=useState('');
  const [tweetImage,setTweetImage]=useState('');
  const sendTweet= e => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'Rafeh Qazi',
      username: 'cleverqazi',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://avatars2.githubusercontent.com/u/41986457?s=460&u=a856ca7dd8cb2ebd9b1ed3d44849259a90677806&v=4'
    })
    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars0.githubusercontent.com/u/67520676?s=400&u=5ce3e4451d58528752aa7c8eabe8b4a652f9ff5b&v=4">
          </Avatar>
          <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            type="text" 
            placeholder="What's happening..." 
          />
        </div>
        <input 
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput" 
          type="text" 
          placeholder="Optional: Enter image URL..." 
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
