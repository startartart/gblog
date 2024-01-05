type ProjectTypeDataType = {
  [key: number]: string[][];
};

export const projectTypeData: ProjectTypeDataType = {
  1: [['image'], ['image', 'text']],
  2: [['image'], ['text', 'text'], ['image', 'image', 'image', 'text']],
  3: [['text', 'text', 'text', 'text'], ['image']],
  4: [['text', 'text', 'text', 'text'], ['image']],
  5: [
    ['image', 'image'],
    ['text', 'text'],
  ],
  6: [
    ['text', 'text'],
    ['image', 'image'],
  ],
  7: [
    ['image', 'image'],
    ['text', 'text'],
  ],
};
