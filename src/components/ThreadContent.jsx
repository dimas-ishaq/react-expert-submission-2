import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const ThreadContent = ({ id, title, body, avatar }) => {
  return (
    <>
      <div className="flex flex-col mt-2">
        <img
          src={avatar}
          className="object-fit w-8 rounded-full"
          alt="avatar"
        />
        <Link to={`/threads/${id}`} className="text-lg text-blue-700">
          {title}
        </Link>
        <div
          className="text-sm line-clamp-4"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  )
}
ThreadContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default ThreadContent
