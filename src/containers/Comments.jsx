import React, { Component } from 'react';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addComment } from '../actions/comments';

import CommentsForm from '../components/forms/CommentsForm';
import CommentsList from '../components/CommentsList';

export class Comments extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
    comments: PropTypes.shape({
      isProcessing: PropTypes.bool,
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        message: PropTypes.string,
      })),
    }).isRequired,
  };

  handleSubmit = async ({ comment }) => {
    const { addComment, reset } = this.props;
    await addComment(comment);
    reset('commentsForm');
  };

  render() {
    const { comments: { data } } = this.props;
    return (
      <div className="container">
        <p className="description">This is an example route component which demonstrates a simple comment form.</p>
        <p className="description">It handles under react & redux. Form based on Redux-form library.</p>
        <CommentsForm onSubmit={this.handleSubmit} />
        <CommentsList comments={data} />
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps, { addComment, reset })(Comments);
