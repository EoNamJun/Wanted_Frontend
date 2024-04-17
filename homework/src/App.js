import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import IssueList from './components/issues/IssueList';
import IssueDetail from './components/issues/IssueDetail';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<IssueList />} />
          <Route path="/issues/:issueNumber" element={<IssueDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;