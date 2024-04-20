import PropTypes from 'prop-types';

function ThreadCategory({ category }) {
  return (
    <div>
      <span className="text-white text-sm font-semibold bg-blue-800 px-2 py-1 rounded-full ">
        {category}
      </span>
    </div>
  );
}
ThreadCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ThreadCategory;
