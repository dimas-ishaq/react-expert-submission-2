import LeaderboardList from './LeaderboardList'
import PropTypes from 'prop-types'
const Leaderboards = ({ leaderboards }) => {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-xl font-semibold text-white text-center p-2 bg-green-600 rounded">
          Leaderboards
        </h3>
        <LeaderboardList leaderboards={leaderboards} />
      </div>
    </>
  )
}
Leaderboards.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
      score: PropTypes.number.isRequired,
    })
  ),
}
export default Leaderboards
