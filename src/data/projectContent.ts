type ProjectContentType = {
  [key: number]: {
    content: {
      [key: number]: {
        [key: string]: string;
      };
    };
  };
};

export const projectContent: ProjectContentType = {
  1: {
    content: {
      0: {
        data: 'https://picsum.photos/500/500',
        size: 'Large',
      },
      10: {
        data: 'https://picsum.photos/250/250',
        size: 'Medium1',
      },

      11: {
        data: '이름 : 박병권\n생년월일 : 99.03.04',
        fontColor: '#ff1234',
      },
    },
  },
  2: {
    content: {
      0: {
        data: 'https://picsum.photos/500/500',
        size: 'Large',
      },
      10: {
        data: '어디사고 어디산다',
        fontColor: '#123456',
      },

      11: {
        data: '어쩌구 저쩌구 ..',
        fontColor: '#555555',
      },
      20: {
        data: 'https://picsum.photos/200/200',
        size: 'Medium1',
      },
      21: {
        data: 'https://picsum.photos/200/200',
        size: 'Medium1',
      },

      22: {
        data: 'https://picsum.photos/200/200',
        size: 'Medium1',
      },
      23: {
        data: '나는 무슨 꿈을 꾸고있다 .',
        fontColor: '#333333',
      },
    },
  },
};
