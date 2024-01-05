import styled from '@emotion/styled';
import ProjectRouter from './projects/ProjectRouter';
import { projectTypeData } from '../data/projectTypeData';
import { projectContent } from '../data/projectContent';

const ProjectTemplateBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 90%;
  overflow: hidden;
  gap: 1%;
`;

const Area = styled.div`
  border: 1px black solid;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1%;
  overflow: clip;
`;

type TemplateProps = {
  id: number;
  name: string;
  color: string;
  template: number[];
};

export default function ProjectTemplate({
  project,
}: {
  project: TemplateProps;
}) {
  return (
    <ProjectTemplateBox>
      {project.template.map((area, idx1) => (
        <Area key={idx1}>
          {Array.from({ length: area }).map((_, idx2) => (
            <Area key={idx1 * 10 + idx2}>
              <ProjectRouter
                type={projectTypeData[project.id][idx1][idx2]}
                content={projectContent[project.id].content[idx1 * 10 + idx2]}
              />
            </Area>
          ))}
        </Area>
      ))}
    </ProjectTemplateBox>
  );
}
