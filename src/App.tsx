import styled from 'styled-components';

const GameList: Array<string> = ['가위바위보'];

export default function App() {
  const handleGoGame = (name: string) => {
    console.log(name);
  };

  const games = GameList.map((game, idx) => (
    <li key={idx} onClick={() => handleGoGame(game)}>
      {game}
    </li>
  ));

  return (
    <>
      <h4>게임 리스트</h4>
      <ul>{games}</ul>
    </>
  );
}
