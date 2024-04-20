import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadList({ threads }) {
  return (
    <div className="flex flex-col gap-y-3">
      {threads.length > 0 ? (
        threads.map((item, index) => (
          <ThreadItem
            key={index}
            id={item.id}
            title={item.title}
            body={item.body}
            category={item.category}
            createdAt={item.createdAt}
            ownerId={item.ownerId}
            upVotesBy={item.upVotesBy}
            downVotesBy={item.downVotesBy}
            totalComments={item.totalComments}
          />
        ))
      ) : (
        <p className="text-white text-center font-semibold">Loading ...</p>
      )}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      ownerId: PropTypes.string.isRequired,
      totalComments: PropTypes.number.isRequired,
      upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
};

export default ThreadList;
