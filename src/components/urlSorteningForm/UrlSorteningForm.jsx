/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUrl } from '../../features/url/urlSlice';
import UrlSorteningResult from './UrlSorteningResult';

function UrlSorteningForm() {
  const [url, setUrl] = useState('');
  const [resultURL, seResultURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const urls = useSelector((state) => state.url);

  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();

    if (url !== '') {
      seResultURL(url);
      const shoredtURL = nanoid(8);
      setShortURL(shoredtURL);

      const newUrlObject = {
        id: crypto.randomUUID(), url, shortURL: shoredtURL, edit: false
      }

      localStorage.setItem('urlsList', JSON.stringify([...urls, newUrlObject]));

      dispatch(addUrl(newUrlObject))
      setUrl('');
    }
  };

  return (
    <>
      <div className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4">
        <h2 className="font-bold text-lg text-center">Short Your URL</h2>

        <form className="flex justify-center" onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="max-w-sm w-full p-1 m-2 border-solid border-2 border-gray-500 px-3"
          />

          <input
            type="submit"
            value="Shrink"
            className="bg-black text-white p-1 m-2 border-solid px-14 text-lg rounded-md"
          />
        </form>

      </div>
      { (resultURL !== '') && (shortURL !== '') && <UrlSorteningResult url={resultURL} shortURL={shortURL} />}
    </>

  );
}

export default UrlSorteningForm;
