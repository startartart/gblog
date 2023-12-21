import styled from 'styled-components';

const indexList: Array<string> = ['공백1', '공백2'];

export default function App() {
  const handleGoGame = (name: string) => {
    console.log(name);
  };

  const index = indexList.map((index, idx) => (
    <li key={idx} onClick={() => handleGoGame(index)}>
      {index}
    </li>
  ));

  return (
    <>
      <h4>안내 바</h4>
      <ul>{index}</ul>
    </>
  );
}
