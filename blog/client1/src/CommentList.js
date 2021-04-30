import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({postId}) => {
    const [comments, setComments] = useState([]);

    const fetchdata = async () => {
        const res = await axios.get(`http://posts.com/posts/${postId}/comments`);

        setComments(res.data);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const renderedComments = comments.map(comment => {
        let content;

        if(comment.status === 'approved'){
            content = comment.content;
        }

        if(comment.status === 'pending'){
            content = 'This comment is awating moderation';
        }

        if(comment.status === 'rejected'){
            content = 'This comment has been rejected';
        }

        return <li key={comment.id}>{content}</li>
    })
    return<ul>{renderedComments}</ul>;
}
