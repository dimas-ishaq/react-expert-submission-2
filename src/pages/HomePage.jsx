import { useEffect, useState } from 'react'
import Category from '../components/Category'
import ThreadInput from '../components/ThreadInput'
import Threads from '../components/Threads'
import Leaderboards from '../components/Leaderboards'
import { useSelector, useDispatch } from 'react-redux'
import asyncPopulateUsersAndThreads from '../states/shared/action'
import { asyncAddThread } from '../states/threads/action'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PropTypes from 'prop-types'
import Button from '../components/Button'

const HomePage = ({ signOut }) => {
  const [filteredThread, setFilteredThread] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const { threads, leaderboards } = useSelector((states) => states)
  const addThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }))
  }

  const setThreadCategory = (category = '') => {
    if (category !== '') {
      const newThread = threads.filter((thread) => thread.category === category)
      return setFilteredThread(newThread)
    }
    return setFilteredThread(threads)
  }

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col md:h-screen overflow-hidden bg-blue-950  items-center">
        <div className="flex-col flex md:flex-row w-full">
          <div
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#fafafa 0.5',
            }}
            className="flex flex-col flex-initial md:w-32 items-center bg-sky-600/80 py-2 md:justify-between overflow-y-auto"
          >
            <div className="flex flex-col">
              <Category threads={threads} onSetCategory={setThreadCategory} />
            </div>
            <div className="flex flex-col gap-y-2 mt-2 md:mt-0">
              <a
                className=" hidden md:block rounded px-3 py-2.5 bg-blue-700 text-white text-sm font-semibold"
                href="#threadInput"
              >
                Buat Thread
              </a>
              <Button variant={'red'} label={'Logout'} onClick={signOut} />
            </div>
          </div>
          <div
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#fafafa 0.5',
            }}
            className="flex flex-col flex-1 h-screen px-3 overflow-y-auto"
          >
            <ThreadInput addThread={addThread} />
            <Threads threads={filteredThread ? filteredThread : threads} />
          </div>
          <div
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#fafafa 0.5',
            }}
            className="md:flex hidden flex-col flex-initial w-68 px-3 py-2 h-screen overflow-y-auto gap-y-5"
          >
            <Leaderboards leaderboards={leaderboards} />
          </div>
        </div>
      </div>
    </>
  )
}

HomePage.propTypes = {
  signOut: PropTypes.func.isRequired,
}

export default HomePage
