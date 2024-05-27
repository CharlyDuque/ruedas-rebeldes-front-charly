// src/components/metodologiaStyled.js
import styled from 'styled-components';

// Main container for the page
export const StyledPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

// Title styling
export const StyledTitle = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 0.5em;
  text-align: center;
`;

// Subtitle styling
export const StyledSubtitle = styled.h2`
  font-size: 1.8em;
  color: #555;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
`;

// Paragraph styling
export const StyledParagraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1em;
`;

// Link styling
export const StyledLink = styled.a`
  color: #1e90ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Pin styles
export const PinGreen = styled.span`
  color: green;
  font-weight: bold;
`;

export const PinYellow = styled.span`
  color: yellow;
  font-weight: bold;
`;

export const PinRed = styled.span`
  color: red;
  font-weight: bold;
`;