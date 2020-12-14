import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import './gifs.module.css';

export interface GifsProps {
  apiKey: string;
}

export const Gifs = (props: GifsProps) => {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('');
  const getFetchUrl = useCallback(
    () =>
      `https://api.giphy.com/v1/gifs/search?api_key=${props.apiKey}&q=${query}`,
    [query, props.apiKey]
  );

  useEffect(() => {
    const fetcData = async () => {
      const result = await axios(getFetchUrl());
      setGifs(
        result.data.data.map((x) => ({
          id: x.id,
          preview: x.images.preview_gif,
          url: x.url,
        }))
      );
    };

    fetcData();
  }, [getFetchUrl]);

  return (
    <>
      <h1>GIF Search</h1>
      <input
        className="gif-search-input"
        autoFocus
        placeholder="Start typing...."
        onChange={(evt) => setQuery(evt.target.value)}
      />
      <div className="gif-list">
        {gifs.map((gif) => (
          <div className="gif-list-item" key={gif.id}>
            <a href={gif.url} target="_blank" rel="noreferrer">
              <img src={gif.preview.url} alt="url"></img>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

 