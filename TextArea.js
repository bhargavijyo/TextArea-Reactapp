import React, { useState } from 'react';

const TextArea = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [replace, setReplace] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleReplaceChange = (e) => {
    setReplace(e.target.value);
  };

  const replaceText = () => {
    setText(text.split(search).join(replace));
  };

  const getUniqueWordsCount = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  const getCharacterCount = (text) => {
    return text.replace(/[\s\p{P}]/gu, '').length;
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} rows="10" cols="50" />
      <div>
        <p>Unique Words: {getUniqueWordsCount(text)}</p>
        <p>Characters (excluding spaces and punctuation): {getCharacterCount(text)}</p>
      </div>
      <div>
        <input type="text" value={search} onChange={handleSearchChange} placeholder="Search" />
        <input type="text" value={replace} onChange={handleReplaceChange} placeholder="Replace" />
        <button onClick={replaceText}>Replace</button>
      </div>
    </div>
  );
};

export default TextArea;
