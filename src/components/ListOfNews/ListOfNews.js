import React from 'react';
import Card from '../Card/Card';

const ListOfNews = ({ news }) => {
  return (
    <>
      {news && news.map(item => (
        <Card key={item.publishedAt} item={item} />
      ))}
    </>
  )
}

export default ListOfNews
