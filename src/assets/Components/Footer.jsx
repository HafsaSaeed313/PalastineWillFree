import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Al-Quds Lana. All rights reserved.</p>
      <p>Helping Free Palestine | Supporting Justice and Equality</p>
      <p>123 Main Street, Cityville, Palestine</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #d2f4cb; // Light green background color
  color: #2c3e80; // Darker text color for contrast
  padding: 20px;
  text-align: center;
  border-top: 2px Solid Green;
`;

export default Footer;