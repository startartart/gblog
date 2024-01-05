import styled from '@emotion/styled';

const ImageBox = styled.img<ImageBoxProps>`
  object-fit: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

type ImageBoxProps = {
  width: string;
  height: string;
};
type ImageProps = {
  data: string;
  size: string;
};

export default function Image({ data, size }: ImageProps) {
  // 이후, 디바이스 환경에 따라 조정 예정
  // 현재는 1920 x 1080 사이즈만 지원
  let width = '300px',
    height = '300px';

  switch (size) {
    case 'Large':
      width = '800px';
      height = '800px';
      break;
    case 'Medium1':
      width = '800px';
      height = '350px';
      break;
    default:
      break;
  }
  return <ImageBox src={data} width={width} height={height}></ImageBox>;
}
