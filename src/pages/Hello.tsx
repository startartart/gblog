import styled from '@emotion/styled';
import Speech from '../assets/speech.svg?react';
import { reactUserSize } from '../utils/reactUserSize';
import { Link } from 'react-router-dom';

const HelloLayout = styled.div`
  background-color: #dde6ed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HelloBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SpeechBox = styled.div`
  position: absolute;
  top: -17%;
  right: -17%;
`;

type HelloTextProps = {
  size: number;
};

type UserSizeProps = {
  userSize: number[];
};

const HelloText = styled.h1<HelloTextProps>`
  color: #27374d;
  font-size: ${(props) => props.size}rem;
  margin: 0 0 calc(${(props) => props.size}rem / 2) 0;

  transition: transform 0.3s ease; /* 변형 애니메이션을 추가합니다. */

  &:hover {
    transform: translateY(-5px); /* hover 시 아래로 5px 이동하는 효과 */
  }
`;

export default function Hello({ userSize }: UserSizeProps) {
  const currentSize = reactUserSize(userSize);

  return (
    <HelloLayout>
      <HelloBox>
        <SpeechBox>
          <Speech
            height={currentSize - 1 + 'rem'}
            width={currentSize - 1 + 'rem'}
          />
        </SpeechBox>
        <HelloText size={currentSize}>Hello, visitor</HelloText>
        <Link to={'/gblog/project'}>
          <HelloText size={currentSize - 1.5}>Project Home</HelloText>
        </Link>
        <Link to={'https://github.com/startartart'}>
          <HelloText size={currentSize - 1.5}>GitHub</HelloText>
        </Link>
      </HelloBox>
    </HelloLayout>
  );
}
