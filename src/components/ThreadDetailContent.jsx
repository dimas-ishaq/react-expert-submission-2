import PropTypes from 'prop-types'
const ThreadDetailContent = ({ id, title, body, category, owner }) => {
  return (
    <>
      <div id={id} className="flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-3">
            <img
              src={owner.avatar}
              className="object-fit w-8 rounded-full"
              alt="avatar"
            />
            <p className="text-sm text-white font-semibold">{owner.name}</p>
          </div>

          <p className="px-3 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
            {category}
          </p>
        </div>
        <h3 className="text-white">{title}</h3>
        <div
          className="text-white"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  )
}

ThreadDetailContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
}

export default ThreadDetailContent
