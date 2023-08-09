import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;

  margin-top: 20px;
  padding: 0;
`;

export const OptionsItem = styled.li``;


export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  padding: 0.25em 1em;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  background-color: #4CAF50; 
  color: #fff; 

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1); 
    background-color: #56b95d; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  }

  &:focus {
    outline: none; 
    transform: scale(1.1); 
    background-color: #56b95d; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  }

    }
`;