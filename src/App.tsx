import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListPage from './pages/ListPage/index';
import ViewPage from './pages/ViewPage/index';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ListPage />} />
                    <Route path="/view/:id" element={<ViewPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
