import PropTypes from 'prop-types';
import ThreadDetailCommentsList from './ThreadDetailCommentsList';

function ThreadDetailComments({ comments, threadId }) {
  return (
    <div className="flex flex-col gap-y-2">
      <p className="font-medium text-white">
        Komentar (
        {comments.length}
        )
      </p>
      <ThreadDetailCommentsList comments={comments} threadId={threadId} />
    </div>
  );
}

ThreadDetailComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  threadId: PropTypes.string.isRequired,
};

export default ThreadDetailComments;
