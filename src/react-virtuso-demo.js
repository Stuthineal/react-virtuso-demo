import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import "./styles.css";
import bibleVerses from "./data/bible-verse-long-list.json";
export default function ReactVirtusoDemo(){
  // Specify the index of the item you want to start from
  const initialIndex = 0; // Change this to your desired index

    const Row = ({ index, style }) => (
        <div style={style} className="bible-list-item">
            {bibleVerses.passages[index].passage}</div>
      );
    return(
<div style={{ height: 700 }}>
<p>
            Here is a list with each list item of a different length.
            When we use react-virtuso- the height of the elements can be dynamic
            </p>
            <Virtuoso
      style={{ height: '300px' }}
      totalCount={bibleVerses.passages.length}
      initialTopMostItemIndex={initialIndex}
      itemContent={(index) => 
        <div className="bible-list-item">
        {bibleVerses.passages[index].passage}</div>}
    />
   
  </div>
    )
    
}