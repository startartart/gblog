import styled from '@emotion/styled';

const H1 = styled.p<H1Props>`
  color: ${(props) => props.fontColor};
`;

type H1Props = {
  fontColor?: string;
};
type TextProps = {
  data: string;
  fontColor: string;
};

export default function Text({ data, fontColor }: TextProps) {
  return (
    <>
      {data.split('\n').map((line, index) => (
        <H1 fontColor={fontColor} key={index}>
          {line}
        </H1>
      ))}
    </>
  );
}
