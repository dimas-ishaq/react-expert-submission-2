import { useState } from 'react'
import PropTypes from 'prop-types'
const Category = ({ threads, onSetCategory }) => {
  const uniqueThreads = threads.filter((item, index) => {
    return threads.findIndex((i) => i.category === item.category) === index
  })
  const [activeCategory, setActiveCategory] = useState(null)

  const handleSetCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null)
      onSetCategory('')
    } else {
      setActiveCategory(category)
      onSetCategory(category)
    }
  }
  return (
    <>
      <div className="flex flex-col mt-2 items-center justify-center">
        <p className="text-white font-semibold">Kategori</p>
        <div className="flex md:flex-col md:gap-y-1 gap-x-2 mt-2 items-start">
          {uniqueThreads.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSetCategory(item.category)}
              className={`text-xs font-semibold rounded ${activeCategory === item.category ? 'bg-blue-800 text-white' : ' text-blue-700 bg-white'} p-1`}
            >
              {' '}
              {item.category}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
Category.propTypes = {
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
  ).isRequired,
  onSetCategory: PropTypes.func.isRequired,
}

export default Category
