import React, { useState } from 'react';
import {
  Search as SemanticSearch,
  SearchResultProps,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { SearchResultItem } from './types';
import './Search.css';

const ResultRenderer = (props: SearchResultProps) => {
  const { id, title, word } = props;
  return (
    <Link to={`/word/${id}/${word}`}>{title}</Link>
  );
};

function Search() {
  const [ value, setValue ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ results, setResults ] = useState([] as SearchResultItem[]);
  const onSearchChange = (e: any, { value }: { value?: string }) => {
    setLoading(true);
    setValue(value || '');

    setTimeout(() => {
      setLoading(false);
      setResults([
        {
          title: 'apple',
          word: 'apple',
          id: '0',
        },
        {
          title: 'banana',
          word: 'banana',
          id: '1',
        },
      ]);
    }, 1000);
  };
  const onResultSelect = (_: any, { result }: { result: SearchResultItem }) => {
    console.log(result);
  };

  return (
    <SemanticSearch
      loading={loading}
      onSearchChange={onSearchChange}
      onResultSelect={onResultSelect}
      className="Search"
      results={results}
      value={value}
      resultRenderer={ResultRenderer}
    />
  );
}

export default Search;
