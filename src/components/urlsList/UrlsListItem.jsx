/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUrl, editUrl } from '../../features/url/urlSlice';
import './UrlsListItem.css';

function UrlsListItem({ index, url }) {
  const dispatch = useDispatch();

  return (
    <tr className={`border-b  hover:bg-gray-100 ${(index % 2 === 0) ? 'bg-white' : 'bg-gray-50'}`}>

      <th scope="row" className={`px-6 py-4 font-medium  whitespace-nowrap ${(url.edit) ? 'bg-red-500 text-black' : ''}`}>
        <a href={url.url} target="_blank" rel="noreferrer" className={`italic mx-2 ${(url.edit) ? 'text-black' : 'text-blue-400 '}`}>{url.url}</a>
      </th>

      <td className={`${(url.edit) ? 'bg-red-500 text-black' : ''}`}>
        <a href={url.url} target="_blank" rel="noreferrer" className={`italic mx-2 ${(url.edit) ? 'text-black' : 'text-blue-400 '}`}>{url.shortURL}</a>
      </td>

      <td>
        <button
          type="button"
          className="editButton"
          onClick={() => dispatch(editUrl(url.id))}
        >
          edit
        </button>
      </td>

      <td>
        <button
          type="button"
          className="deleteButton"
          onClick={() => dispatch(deleteUrl(url.id))}
        >
          delete
        </button>
      </td>
    </tr>
  );
}

export default UrlsListItem;
