import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 import 합니다.

const IssueContainer = styled(Link)` // styled.div 대신 styled(Link)를 사용합니다.
  border-bottom: 1px solid #e1e4e8;
  padding: 16px;
  display: block; // Link는 기본적으로 inline이므로 block으로 설정합니다.
  text-decoration: none; // 기본 링크 스타일을 제거합니다.
  color: inherit; // 텍스트 색상을 상속받도록 합니다.

  &:hover {
    background-color: #f6f8fa;
  }
`;

const IssueTitle = styled.h2`
  font-size: 16px;
  margin: 0;
`;

const IssueMeta = styled.div`
  font-size: 12px;
  color: #586069;
  margin-top: 8px;
`;

const IssueItem = ({ issue }) => (
  <IssueContainer to={`/issues/${issue.number}`}> {/* div 대신 Link 컴포넌트를 사용하고, to 속성으로 경로를 지정합니다. */}
    <IssueTitle>#{issue.number} {issue.title}</IssueTitle>
    <IssueMeta>
      작성자: {issue.user.login}, 작성일: {new Date(issue.created_at).toLocaleDateString()} 코멘트: {issue.comments}
    </IssueMeta>
  </IssueContainer>
);

export default IssueItem;