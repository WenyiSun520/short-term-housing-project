import React from 'react';
import {useSelector} from 'react-redux'
import TimeStamp from '../../util/timestamp';

const RenderComment = ({postId})=>{
    const comments = useSelector((state)=> state.comments.filter((comment)=>comment.postId === postId))

    return (
      <>
        {comments.map((comment)=>(
        <div className='commentPost' key={comment.id}>
            <p className="commentPoster">{comment.creator}, <TimeStamp date={comment.create_date} /></p>
            <p>{comment.content}</p>
        </div>))}
      </>
    );

}

export default RenderComment;