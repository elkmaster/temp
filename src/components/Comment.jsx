import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (comment.length ? <li className="comment">{comment}</li> : null);

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
};

export default Comment;
