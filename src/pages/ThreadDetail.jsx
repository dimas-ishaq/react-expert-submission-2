import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { asyncSetReceiveDetailThread } from '../states/threadDetail/action'
import { asyncAddComment } from '../states/comments/action'
import ThreadDetailItem from '../components/ThreadDetailItem'
import { Link } from 'react-router-dom'

const ThreadDetail = () => {
  const { threadId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetReceiveDetailThread(threadId))
  }, [dispatch, threadId])
  const { threadDetail } = useSelector((states) => states)

  const addCommentThread = (threadId, content) => {
    dispatch(asyncAddComment(threadId, content))
    dispatch(asyncSetReceiveDetailThread(threadId))
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-blue-950/95 items-center">
        <Link
          to={'/'}
          className="text-center px-3 py-2 rounded bg-blue-500 fixed  md:top-10 md:left-10"
        >
          <span className="text-sm font-semibold text-white">Kembali</span>
        </Link>
        <div className="flex flex-col w-8/12 justify-start items-center py-10">
          {threadDetail && (
            <ThreadDetailItem
              threadDetail={threadDetail}
              addCommentThread={addCommentThread}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default ThreadDetail
