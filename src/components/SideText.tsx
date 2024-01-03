import { useState } from 'react';
import styled from '@emotion/styled';

const SideTextBarLayout = styled.div<SideTextBarBoxProps>`
  color: ${(props) => (props.current ? '#27374D' : '#000000')};
  position: relative;
`;

const TextBar = styled.div`
  position: absolute;
  border-top: 3px;
  border-top-style: solid;
  width: 100%;
  height: 100%;
`;

const Text = styled.p<TextProps>`
  margin: 0;
  color: ${(props) => (props.isHover ? '#750E21' : 'inherit')};
`;

type TextProps = {
  isHover: boolean;
};

type SideTextBarProps = {
  current: boolean;
  name: string;
  id: number;
  onClick: (id: number) => void;
};

type SideTextBarBoxProps = {
  current: boolean;
};
export default function SideTextBar({
  current,
  name,
  id,
  onClick,
}: SideTextBarProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <SideTextBarLayout
      current={current}
      onClick={() => onClick(id)}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <Text isHover={isHover}>{name}</Text>
      {current && <TextBar />}
    </SideTextBarLayout>
  );
}
