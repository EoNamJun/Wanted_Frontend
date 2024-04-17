import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIssueDetail } from '../../api/githubApi';
import styled from 'styled-components';

const DetailContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  background: #fff;
`;

const HeaderSection = styled.div`
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  float: left;
  margin-right: 20px;
`;

const IssueTitle = styled.h1`
  font-size: 20px;
  margin: 0;
  color: #333;
`;

const IssueMeta = styled.div`
  font-size: 12px;
  color: #586069;
  margin-bottom: 20px;
`;

const BodyText = styled.div`
  clear: both;
  white-space: pre-wrap;
  margin-top: 20px;
`;

const UsernameMention = styled.span`
  color: #0366d6;
  cursor: pointer;
`;

const IssueDetail = () => {
  const { issueNumber } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    fetchIssueDetail('angular', 'angular-cli', issueNumber).then(setIssue);
  }, [issueNumber]);

  if (!issue) {
    return <div>Loading issue details...</div>;
  }

  // Regex to match GitHub username mentions (e.g., @username)
  const mentionRegex = /@([a-zA-Z0-9_-]+)/g;
  const renderedBody = issue.body.replace(mentionRegex, (match) => {
    return `<UsernameMention>${match}</UsernameMention>`;
  });

  return (
    <DetailContainer>
      <HeaderSection>
        <Avatar src={issue.user.avatar_url} alt={`${issue.user.login}'s avatar`} />
        <IssueTitle>#{issue.number} {issue.title}</IssueTitle>
        <IssueMeta>
          작성자: {issue.user.login}, 작성일: {new Date(issue.created_at).toLocaleDateString()} 코멘트: {issue.comments}
        </IssueMeta>
      </HeaderSection>
      <BodyText dangerouslySetInnerHTML={{ __html: renderedBody }} />
    </DetailContainer>
  );
};

export default IssueDetail;