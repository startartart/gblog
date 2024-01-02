import styled from '@emotion/styled';

const SideBarLayout = styled.div<SideBarLayoutProps>`
  position: fixed;
  width: 20%;
  height: 80%;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
`;

type SideBarLayoutProps = {
  projects: number;
};

export default function SideBar() {
  return <SideBarLayout projects={3}></SideBarLayout>;
}
