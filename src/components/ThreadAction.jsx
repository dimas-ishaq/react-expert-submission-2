import { useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  asyncSetUpVote,
  asyncSetDownVote,
  asyncSetNeutralizeVote,
} from '../states/votes/action';

function ThreadAction({ upVotesBy, downVotesBy, id }) {
  const [isUpvote, setUpVote] = useState(upVotesBy.length);
  const [isDownVote, setDownVote] = useState(downVotesBy.length);
  const dispatch = useDispatch();
  const { authUser } = useSelector((states) => states);
  const userUpVote = upVotesBy.findIndex((user) => user === authUser.id);
  const userDownVote = downVotesBy.findIndex((user) => user === authUser.id);
  const [thumbUp, setThumbUp] = useState(userUpVote);
  const [thumbDown, setThumbDown] = useState(userDownVote);
  const handleVote = (id, type) => {
    if (type === 'up' && thumbDown > -1) {
      setDownVote(isDownVote - 1);
      setThumbUp(0);
      setUpVote(isUpvote + 1);
      setThumbDown(-1);
    }
    if (type === 'down' && thumbUp > -1) {
      setUpVote(isUpvote - 1);
      setThumbUp(-1);
      setDownVote(isDownVote + 1);
      setThumbDown(0);
    }
    if (type === 'up' && thumbUp > -1) {
      dispatch(asyncSetNeutralizeVote(id));
      setUpVote(isUpvote - 1);
      return setThumbUp(-1);
    }
    if (type === 'up' && thumbUp < 0) {
      dispatch(asyncSetUpVote(id));
      setUpVote(isUpvote + 1);
      return setThumbUp(0);
    }
    if (type === 'down' && thumbDown > -1) {
      dispatch(asyncSetNeutralizeVote(id));
      setDownVote(isDownVote - 1);
      return setThumbDown(-1);
    }
    if (type === 'down' && thumbDown < 0) {
      dispatch(asyncSetDownVote(id));
      setDownVote(isDownVote + 1);
      return setThumbDown(0);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-5">
        <div>
          <button type="button" onClick={() => handleVote(id, 'up')}>
            <FaRegThumbsUp />
          </button>
          <span className="text-xs">{isUpvote}</span>
        </div>
        <div>
          <button type="button" onClick={() => handleVote(id, 'down')}>
            <FaRegThumbsDown />
          </button>
          <span className="text-xs">{isDownVote}</span>
        </div>
      </div>
    </div>
  );
}

ThreadAction.propTypes = {
  id: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThreadAction;
