import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUrl } from '../../features/url/urlSlice';

function EditForm() {
  const urls = useSelector((state) => state.url);
  const url = urls.find((singleUrl) => singleUrl.edit);

  const [newUrl, setNewUrl] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (url) {
      setNewUrl(url.url);
    } else {
      setNewUrl('');
    }
  }, [url]);

  const formHandler = async (e) => {
    e.preventDefault();
    dispatch(updateUrl({ id: url.id, url: newUrl }))
    setNewUrl('');
  };

  return (
    <div className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4">
      <h2 className="font-bold text-lg text-center">Update Your original URL</h2>

      <form className="flex justify-center" onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Url"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          required
          className="max-w-sm w-full p-1 m-2 border-solid border-2 border-gray-500 px-3"
        />

        <input
          type="submit"
          value="Update"
          className="bg-black text-white p-1 m-2 border-solid px-14 text-lg rounded-md"
        />
      </form>

    </div>

  );
}

export default EditForm;
