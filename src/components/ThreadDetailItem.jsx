import PropTypes from 'prop-types';
import ThreadDetailContent from './ThreadDetailContent';
import ThreadInputComments from './ThreadInputComments';
import ThreadDetailComments from './ThreadDetailComments';
import ThreadDetailAction from './ThreadDetailAction';
import { postedAt } from '../utils';

function ThreadDetailItem({ threadDetail, addCommentThread }) {
  return (
    <div className="flex flex-col border-2 p-5 rounded gap-y-2">
      <ThreadDetailContent
        id={threadDetail.id}
        title={threadDetail.title}
        body={threadDetail.body}
        category={threadDetail.category}
        owner={threadDetail.owner}
      />
      <div className="flex items-center gap-x-3 ">
        <ThreadDetailAction
          upVotesBy={threadDetail.upVotesBy}
          downVotesBy={threadDetail.downVotesBy}
          id={threadDetail.id}
        />
        <p className="text-xs text-white">
          Dibuat oleh:
          {' '}
          {threadDetail.owner.name}
        </p>
        <p className="text-xs text-white">
          {postedAt(threadDetail.createdAt)}
        </p>
      </div>
      <ThreadInputComments
        id={threadDetail.id}
        addCommentThread={addCommentThread}
      />
      <ThreadDetailComments
        comments={threadDetail.comments}
        threadId={threadDetail.id}
      />
    </div>
  );
}

ThreadDetailItem.propTypes = {
  threadDetail: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  addCommentThread: PropTypes.func.isRequired,
};

export default ThreadDetailItem;
