import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
  if (!comments.length) return <p>No comments yet.</p>;

  return (
    <div className="comments-list">
      <p className="list-label">Comments list:</p>
      <ul>
        {comments.map(({ id, message }) => <Comment key={id} comment={message} />)}
      </ul>
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
};

export default CommentsList;
