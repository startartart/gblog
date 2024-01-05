import Image from './Image';
import Text from './Text';

type RouterProps = {
  type: string;
};
export default function ProjectRouter({ type }: RouterProps) {
  switch (type) {
    case 'image':
      return <Image />;
    case 'text':
      return <Text />;
    default:
      return null;
  }
}
