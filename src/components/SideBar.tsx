import { useState } from 'react';
import styled from '@emotion/styled';
import { projectData } from '../data/projectData';
import SideText from '../components/SideText';
import RightArrow from '../assets/right-arrow.svg?react';

const SideBarLayout = styled.div<SideBarLayoutProps>`
  position: fixed;
  width: 10%;
  height: ${(props) => props.size * 6}%;
  right: 0;
  top: 50%;
  transform: translateY(-50%)
    ${(props) => (props.fold ? 'translateX(50%)' : '')};
  background-color: white;
  border-radius: 1rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.5s ease;

  &:not(:first-of-type) {
    transition: transform 0.5s ease;
  }

  ${(props) =>
    props.fold &&
    `
    transform: translateX(80%) translateY(-50%);
  `}
`;

const StyledArrow = styled(RightArrow)<StyledArrowProps>`
  transform: ${(props) =>
    props.fold === 'true' ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const FoldBar = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
`;

type StyledArrowProps = {
  fold: 'true' | 'false';
};

type SideBarLayoutProps = {
  fold: boolean;
  size: number;
};

type SideBarProps = {
  current: string;
  onClick: (id: number) => void;
};

export default function SideBar({ current, onClick }: SideBarProps) {
  const [fold, setFold] = useState(false);

  return (
    <SideBarLayout fold={fold} size={projectData.length}>
      <FoldBar onClick={() => setFold(!fold)}>
        <StyledArrow
          height={'1rem'}
          width={'1rem'}
          fold={fold ? 'true' : 'false'}
        />
      </FoldBar>
      {projectData.map((project) => {
        return (
          <SideText
            current={current === 'project' + project.id}
            name={project.name}
            id={project.id}
            onClick={onClick}
            key={project.id}
          ></SideText>
        );
      })}
    </SideBarLayout>
  );
}
