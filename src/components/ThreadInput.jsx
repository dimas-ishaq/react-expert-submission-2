import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './Button';

function ThreadInput({ addThread }) {
  const [title, onTitleChange, setTitle] = useInput('');
  const [category, onCategoryChange, setCategory] = useInput('');
  const [body, onBodyChange, setBody] = useInput('');

  const handleAddThread = () => {
    addThread({ title, category, body });
    setTitle('');
    setCategory('');
    setBody('');
  };
  return (
    <div
      id="threadInput"
      className="flex flex-col mt-4 bg-sky-600 rounded-lg p-10"
    >
      <h3 className="font-semibold text-sm text-white text-center">
        Buat Threads Baru
      </h3>
      <form className="flex flex-col gap-y-1">
        <div className="flex flex-col w-full gap-y-1">
          <label className="text-white text-sm" htmlFor="title">
            Judul
          </label>
          <input
            className="rounded px-2 py-1"
            type="text"
            value={title}
            name="title"
            id="title"
            onChange={onTitleChange}
            placeholder="Title"
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="text-white text-sm" htmlFor="category">
            Kategori
          </label>
          <input
            className="rounded px-2 py-1"
            type="text"
            value={category}
            name="category"
            id="category"
            onChange={onCategoryChange}
            placeholder="Category"
          />
        </div>
        <div className="flex flex-col w-full gap-y-1">
          <label className="text-white text-sm" htmlFor="content">
            Content
          </label>
          <textarea
            className="rounded px-2 py-1"
            name="content"
            value={body}
            id="content"
            rows="1"
            onChange={onBodyChange}
            placeholder="Content"
          />
        </div>
        <div className="mt-3 w-full">
          <Button variant="blue" label="Buat" onClick={handleAddThread} />
        </div>
      </form>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
