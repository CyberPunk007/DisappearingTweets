import React, { useState } from 'react';
import { Input, Form } from 'antd';
import Dtpicker from './Dtpicker';
import { Button } from 'react-bootstrap';
// import { connect } from 'react-redux';
// import * as tweetAction from './actions/tweetAction';


function Post(props) {
    const [tweet, setTweet] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // let tweet ={
        //     tweet : useState.setTweet
        // }
        // props.createTweet(tweet);
        alert(`You tweeted : ${tweet}`)
        // alert(`tweet is : ${date}`)
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <Form.Item>
                <p> </p>
            </Form.Item>
            <Form.Item label="Your Space">
                <Input value={tweet} onChange={e => setTweet(e.target.value)} placeholder="What's on your mind!" />
            </Form.Item>
            <Form.Item>
                <Dtpicker/><Button variant="success" type="submit" value="Post Tweet">Post Tweet</Button>
            </Form.Item>
        </form>
        {/* <div>
            <hr />
        { <ul className="list-group">
          {props.tweets.map((tweet, i) => <li key={i}>{tweet.tweet}</li> )}
        </ul> }
            </div> */}
    </div>
    );

}

// const mapStateToProps = (tweet, props) => {
//     return {
//         tweets : useState.tweet
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return{
//         createTweet : tweet =>dispatch(tweetAction.createTweet(tweet))
//     }
// };

export default Post