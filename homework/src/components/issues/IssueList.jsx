import React, { useEffect, useState, useCallback } from 'react';
import { fetchIssues } from '../../api/githubApi';
import IssueItem from './IssueItem';
import AdBanner from './adBanner';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  // 데이터를 불러오는 함수
  const loadIssues = useCallback(async () => {
    setIsLoading(true);
    const newIssues = await fetchIssues(page);
    setIssues(prev => [...prev, ...newIssues]);
    setIsLoading(false);
  }, [page]);

  // 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    setPage(prevPage => prevPage + 1);
  }, [isLoading]);

  useEffect(() => {
    loadIssues();
  }, [loadIssues]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  //5번째에 adBanner가 올 수 있도록!
  return (
    <ListContainer>
      {issues.map((issue, index) => (
        <React.Fragment key={issue.id}>
          <IssueItem issue={issue} />
          {((index + 1) % 5 === 0) && <AdBanner />}
        </React.Fragment>
      ))}
      {isLoading && <LoadingIndicator>Loading more issues...</LoadingIndicator>}
    </ListContainer>
  );
};

export default IssueList;