import styled from '@emotion/styled';

const SideTextBarLayout = styled.div<SideTextBarBoxProps>`
  color: ${(props) => (props.current ? '#27374D' : '#000000')};
`;

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
  return (
    <SideTextBarLayout current={current} onClick={() => onClick(id)}>
      {name}
    </SideTextBarLayout>
  );
}
