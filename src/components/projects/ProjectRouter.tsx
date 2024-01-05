import Image from './Image';
import Text from './Text';

type RouterProps = {
  type: string;
  content: {
    [key: string]: string;
  }
};
export default function ProjectRouter({ type, content }: RouterProps) {
  switch (type) {
    case 'image':
      return <Image data={content.data} size={content.size} />;
    case 'text':
      return <Text data={content.data} fontColor={content.fontColor} />;
    default:
      return null;
  }
}
