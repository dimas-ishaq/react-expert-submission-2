import PropTypes from 'prop-types';
import ThreadDetailCommentsItem from './ThreadDetailCommentsItem';

function ThreadDetailCommentsList({ comments, threadId }) {
  return (
    <div className="flex flex-col gap-y-2">
      {comments
          && comments.map((item, index) => (
            <ThreadDetailCommentsItem
              key={index}
              id={item.id}
              content={item.content}
              createdAt={item.createdAt}
              owner={item.owner}
              upVotesBy={item.upVotesBy}
              downVotesBy={item.downVotesBy}
              threadId={threadId}
            />
          ))}
    </div>
  );
}

ThreadDetailCommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  threadId: PropTypes.string.isRequired,
};

export default ThreadDetailCommentsList;
