import ThreadCategory from './ThreadCategory'
import ThreadContent from './ThreadContent'
import ThreadAction from './ThreadAction'
import { postedAt } from '../utils'
import { useSelector } from 'react-redux'
import { FaRegComments } from 'react-icons/fa'
import PropTypes from 'prop-types'

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  upVotesBy,
  downVotesBy,
  totalComments,
}) => {
  const { user } = useSelector((states) => states)
  const userFilter = user.filter((u) => u.id === ownerId)[0]
  return (
    <>
      <div
        className="flex flex-col px-3 py-2 rounded-lg shadow-md bg-white"
        id={id}
      >
        <ThreadCategory category={category} />
        <ThreadContent
          id={id}
          title={title}
          body={body}
          avatar={userFilter.avatar}
        />
        <div className="flex items-center gap-x-3 ">
          <ThreadAction
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
            id={id}
          />
          <div className="flex gap-x-2">
            <FaRegComments />
            <span className="text-xs">{totalComments}</span>
          </div>
          <p className="text-xs">{postedAt(createdAt)}</p>
          <p className="text-xs">Dibuat oleh: {userFilter.name}</p>
        </div>
      </div>
    </>
  )
}
ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  ownerId: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ThreadItem
