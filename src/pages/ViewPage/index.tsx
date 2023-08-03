import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import CodeBlock from '../../components/markdowns/CodeBlock';
import BasicTemplates from '../../templates/BasicTemplates';
import './index.css';

interface ArticleDataType {
    title: string;
    image: string;
    content: string;
}

function ViewPage(props: any) {
    const { id } = useParams();
    const [article, setArticle] = useState<ArticleDataType | null>(null);

    // 게시글 가져오기
    const getArticle = useCallback((id: string) => {
        axios.get('http://localhost:3001/articles/' + id).then((success) => {
            setArticle(success.data);
        });
    }, []);

    useEffect(() => {
        return getArticle(id || '');
    }, [getArticle, id]);

    console.log(article, 'sdf');

    return article ? (
        <BasicTemplates>
            <div className={'ViewPage'}>
                <h1 className={'ViewPage__title'}>{article.title}</h1>
                <img className={'ViewPage__image'} src={article.image} alt="thumnail" />
                <div className={'ViewPage__content'}>
                    <ReactMarkdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <CodeBlock
                                        language={match[1]}
                                        value={String(children).replace(/\n$/, '')}
                                        {...props}
                                    />
                                ) : (
                                    <code {...props} className={className}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {article.content}
                    </ReactMarkdown>
                </div>
            </div>
        </BasicTemplates>
    ) : (
        <h1>loading...</h1>
    );
}

export default ViewPage;
