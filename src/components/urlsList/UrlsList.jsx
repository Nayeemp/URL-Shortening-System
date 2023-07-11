/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import UrlsListItem from './UrlsListItem';

function UrlsList() {
  const urls = useSelector((state) => state.url);
  return (
    <div className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4">

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Orginal URL
              </th>
              <th scope="col" className="px-6 py-3">
                Shorten URL
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {urls.map((url, index) => <UrlsListItem url={url} index={index} key={url.id} />)}

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default UrlsList;
