import axios from 'axios';

const baseURL = 'https://api.github.com/repos/angular/angular-cli/issues';

export const fetchIssues = async () => {
  try {
    const response = await axios.get(baseURL, {
      params: {
        state: 'open',
        sort: 'comments',
        direction: 'desc'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching issues:', error);
    return [];
  }
};

export const fetchIssueDetail = async (owner, repo, issueNumber) => {
    try {
      const url = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching issue details:', error);
      return null;
    }
  };