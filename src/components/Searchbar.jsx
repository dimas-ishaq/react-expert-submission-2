const Searchbar = () => {
  return (
    <>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Search threads .."
          className="w-full px-4 py-2 rounded text-xs font-semibold "
        />
      </div>
    </>
  )
}

export default Searchbar
