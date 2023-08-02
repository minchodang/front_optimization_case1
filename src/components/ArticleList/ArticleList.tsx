import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Article from '../Article/Article';
import './index.css';

interface DataType {
  id: string;
  createdTime: string | number | Date;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  content: any;
  image: string;
}

const ArticleList = (props: any) => {
  const [articles, setArticles] = useState<DataType[]>([]);

  // 게시글 리스트 가져오기
  const getArticles = useCallback(() => {
    axios.get('http://localhost:3001/articles').then((success) => {
      return setArticles([...success.data]);
    });
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <ul className={'ArticleList'} style={{ listStyle: 'none', padding: 0 }}>
      {articles.map((item) => (
        <li key={item.id}>
          <Link
            to={`/view/${item.id}`}
            style={{ textDecoration: 'none', color: 'initial' }}
          >
            <Article {...item} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
