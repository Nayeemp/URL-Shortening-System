import React from 'react';

function UrlSorteningResult({ url, shortURL }) {
  return (
    <div className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4">
      <div>
        <span className="font-bold">Your orginal URL:   </span>
        <a href={url} target="_blank" rel="noreferrer" className="italic mx-2 text-blue-400">{url}</a>
      </div>
      <div>
        <span className="font-bold">shorten URL:   </span>
        <a href={url} target="_blank" rel="noreferrer" className="italic mx-2 text-blue-400">{shortURL}</a>
      </div>
    </div>
  );
}

export default UrlSorteningResult;
