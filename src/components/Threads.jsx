import ThreadList from './ThreadList'
import PropTypes from 'prop-types'
const Threads = ({ threads }) => {
  return (
    <>
      <div className="flex flex-col w-full mt-5">
        <ThreadList threads={threads} />
      </div>
    </>
  )
}

Threads.propTypes = {
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
    })
  ),
}

export default Threads
