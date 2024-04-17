import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const AdImage = styled.img`
  max-width: 100%;
  cursor: pointer;
`;

const AdBanner = () => (
  <BannerContainer>
    <AdImage src="https://efficient-xylophone-730.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1bee5da4-77bf-44b1-ac2e-63189f3e8f3e%2Fc5070070-adde-4ae8-9f40-c7dff1fa8610%2FIMG_2126.jpg?table=block&id=44a500d0-9e21-4ae2-af23-f918b14bbd98&spaceId=1bee5da4-77bf-44b1-ac2e-63189f3e8f3e&width=1250&userId=&cache=v2g" onClick={() => window.location.href = 'https://www.wanted.co.kr'} alt="Advertisement" />
  </BannerContainer>
);

export default AdBanner;