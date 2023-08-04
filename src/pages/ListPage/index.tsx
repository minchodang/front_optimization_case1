import ArticleList from '../../components/ArticleList/ArticleList';
import BasicTemplates from '../../templates/BasicTemplates';
import './index.css';

function ListPage() {
    return (
        <BasicTemplates>
            <div style={{ width: '700px', margin: 'auto' }}>
                <ArticleList />
            </div>
        </BasicTemplates>
    );
}

export default ListPage;
