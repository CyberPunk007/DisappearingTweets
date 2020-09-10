import * as actionTypes from './actionTypes';

export const createTweet = (tweet) => {
    return {
      type: actionTypes.CREATE_NEW_TWEET,
      tweet: tweet
    }
    
  };