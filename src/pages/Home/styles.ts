import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 1rem;

  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  transition: 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const ButtonStart = styled(BaseButton)`
  color: ${(props) => props.theme['gray-100']};
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const ButtonStop = styled(BaseButton)`
  color: ${(props) => props.theme['gray-900']};
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
