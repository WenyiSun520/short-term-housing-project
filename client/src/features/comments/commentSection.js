import RenderComment from "./renderComment";
import PostComment from "./addComment";

const CommentSection = ({postId})=>{
    return (
      <div className="commentSection">
        <h2>Comment</h2>
        <PostComment postId={postId} />
        <RenderComment postId={postId} />
      </div>
    );
}

export default CommentSection;