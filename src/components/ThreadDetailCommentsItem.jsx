import PropTypes from 'prop-types';
import ThreadDetailCommentsContent from './ThreadDetailCommentsContent';
import ThreadDetailCommentsAction from './ThreadDetailCommentsAction';

function ThreadDetailCommentsItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  threadId,
}) {
  return (
    <div id={id} className="flex flex-col bg-slate-50 rounded p-3">
      <ThreadDetailCommentsContent
        content={content}
        createdAt={createdAt}
        owner={owner}
      />
      <ThreadDetailCommentsAction
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        id={id}
        threadId={threadId}
      />
    </div>
  );
}

ThreadDetailCommentsItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  threadId: PropTypes.string.isRequired,
};

export default ThreadDetailCommentsItem;
