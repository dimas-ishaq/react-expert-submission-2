import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetailCommentsContent({ content, createdAt, owner }) {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-2">
          <img
            className="object-fit rounded-full w-8"
            src={owner.avatar}
            alt="owner-avatar"
          />
          <p className="text-gray-800 text-sm">{owner.name}</p>
        </div>
        <p className="text-gray-800 font-medium text-sm">
          {postedAt(createdAt)}
        </p>
      </div>
      <div
        className="text-gray-800 font-medium"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
ThreadDetailCommentsContent.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThreadDetailCommentsContent;
