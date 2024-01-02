import { useState } from 'react';
import styled from '@emotion/styled';
import { projectData } from '../constants/projectData';
import SideText from '../components/SideText';

const SideBarLayout = styled.div`
  position: fixed;
  width: 10%;
  height: 20%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 1rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

type SideBarProps = {
  current: string;
  onClick: (id: number) => void;
};

export default function SideBar({ current, onClick }: SideBarProps) {
  // const [fold, setFold] = useState(false);

  return (
    <SideBarLayout>
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
