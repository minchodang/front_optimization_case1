import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import ListPage from './pages/ListPage/index';
// import ViewPage from './pages/ViewPage/index';

const ListPage = lazy(() => import('./pages/ListPage/index'));
const ViewPage = lazy(() => import('./pages/ViewPage/index'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<h1>로딩중....</h1>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ListPage />} />
                        <Route path="/view/:id" element={<ViewPage />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
