import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ThreadInputComments({ id, addCommentThread }) {
  const [content, setContent] = useState(null);
  const handleThreadInputComments = () => {
    addCommentThread(id, content);
  };

  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="text-white font-medium text-lg">Beri Komentar</h3>
      <div
        className="w-full h-32 bg-white p-3 rounded "
        data-testid="comment"
        contentEditable
        onInput={(e) => setContent(e.target.innerHTML)}
      />
      <Button
        variant="sky"
        label="Kirim"
        onClick={handleThreadInputComments}
      />
    </div>
  );
}

ThreadInputComments.propTypes = {
  id: PropTypes.string.isRequired,
  addCommentThread: PropTypes.func.isRequired,
};

export default ThreadInputComments;
