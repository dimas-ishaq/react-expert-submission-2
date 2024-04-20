import PropTypes from 'prop-types'
const LeaderboardItem = ({ user, score }) => {
  return (
    <>
      <div className="flex flex-col" id={user.id}>
        <div className="flex gap-x-3 items-center">
          <img
            className="rounded-full w-10"
            src={user.avatar}
            alt="user-avatar"
          />
          <div className="flex flex-col">
            <p className="text-xs text-white">{user.name}</p>
            <p className="text-xs text-white">{user.email}</p>
            <p className="text-xs text-white">Score: {score}</p>
          </div>
        </div>
      </div>
    </>
  )
}
LeaderboardItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
}

export default LeaderboardItem
