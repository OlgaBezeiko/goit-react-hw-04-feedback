
import styled from '@emotion/styled';

export const NotificationText = styled.p`
  text-align: center;
  color: #333; 
  font-size: 20px; 
 
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

  &:hover,
  &:focus {
    animation: fadeIn 3s linear; 
  }

  @keyframes fadeIn {
    0% {
      opacity: 0; 
    }
    100% {
      opacity: 1; 
    }
  }
`;