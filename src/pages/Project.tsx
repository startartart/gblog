import styled from '@emotion/styled';
import SideBar from '../components/SideBar';
import ProjectTemplate from '../components/ProjectTemplate';
import { useEffect, useRef, useState } from 'react';
import { projectData } from '../data/projectData';

const ProjectBox = styled.div`
  position: relative;
  background-color: ${(props) => props.color};
  width: 100vw;
  overflow-x: hidden;
`;

const ProjectLayout = styled.div`
  background-color: ${(props) => props.color};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

      if (currentProject[0].target) {
        setCurrent(currentProject[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-50%',
      threshold: [0, 1],
    });

    const projects = [...document.querySelectorAll('.project')];

    projects.forEach((project) => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  const moveLayoutHandler = (id: number) => {
    const moveLayout: string = 'project' + id;

    const element = document.getElementById(moveLayout);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <ProjectBox>
      <SideBar current={current} onClick={moveLayoutHandler}></SideBar>
      {projectData.map((project) => {
        return (
          <ProjectLayout
            color={project.color}
            key={project.id}
            id={'project' + project.id}
            className="project"
          >
            <ProjectTemplate project={project}></ProjectTemplate>
          </ProjectLayout>
        );
      })}
    </ProjectBox>
  );
}
