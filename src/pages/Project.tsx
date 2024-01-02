import styled from '@emotion/styled';
import SideBar from '../components/SideBar';
import { useEffect, useRef, useState } from 'react';

const ProjectLayout = styled.div`
  background-color: ${(props) => props.color};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectBox = styled.div`
  position: relative;
  background-color: ${(props) => props.color};
  width: 100vw;
`;

const projectData = [
  {
    id: 1,
    name: 'Project1',
    color: '#dde6ed',
  },
  {
    id: 2,
    name: 'Project2',
    color: '#dde6e2',
  },
  {
    id: 3,
    name: 'Project3',
    color: '#dde6fd',
  },
];

export default function Project() {
  const [current, setCurrent] = useState('project1');
  const projectsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

  useEffect(() => {
    const callback = (observedProject: IntersectionObserverEntry[]) => {
      observedProject.forEach((project) => {
        projectsRef.current[project.target.id] = project;
      });

      const currentProject = Object.values(projectsRef.current).filter(
        (project) => project.isIntersecting
      );

      setCurrent(currentProject[0].target.id);
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px',
      threshold: [0, 1],
    });

    //2. DOM 요소 찾고 Observer달아주기
    const projects = [...document.querySelectorAll('.project')];

    projects.forEach((project) => observer.observe(project));

    //3. 언 마운트시 옵저버 해제
    return () => observer.disconnect();
  }, [setCurrent]);

  console.log(current);
  return (
    <ProjectBox>
      <SideBar></SideBar>
      {projectData.map((project) => {
        return (
          <ProjectLayout
            color={project.color}
            id={'project' + project.id}
            className="project"
          >
            <>{project.name}</>
          </ProjectLayout>
        );
      })}
    </ProjectBox>
  );
}
