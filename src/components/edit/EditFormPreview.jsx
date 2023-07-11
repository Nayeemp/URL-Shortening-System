import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUrl } from '../../features/url/urlSlice';

function EditFormPreview() {
  const urls = useSelector((state) => state.url);
  const url = urls.find((singleUrl) => singleUrl.edit);

  const [newUrl, setNewUrl] = useState({
    url: '',
    shortURL: ''
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (url) {
      setNewUrl(url);
    } else {
      setNewUrl({
        url: '',
        shortURL: ''
      });
    }
  }, [url]);

  return (
    <div className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4">
      <div>
        <span className="font-bold">Your orginal URL:   </span>
        <a href={newUrl.url} target="_blank" rel="noreferrer" className="italic mx-2 text-red-500">{newUrl.url}</a>
      </div>
      <div>
        <span className="font-bold">shorten URL:   </span>
        <a href={newUrl.url} target="_blank" rel="noreferrer" className="italic mx-2 text-blue-400 mb-2">{newUrl.shortURL}</a>
      </div>

      {url && (
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-normal py-1.5 px-8 rounded"
        onClick={() => dispatch(deleteUrl(url.id))}
      >
        delete
      </button>
      )}
    </div>
  );
}

export default EditFormPreview;
