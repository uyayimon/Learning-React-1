import { useState } from 'react';
import { List } from './List';

function App() {
  const [description, setDescription] = useState('クリック前の表示です');

  const changeDesctiption = () => {
    setDescription('クリック後の表示です');
  }

  return (
    <div>
      {description}
      <List title='取り扱い言語一覧' />
      <button onClick={changeDesctiption}>ボタン</button>
    </div>
  );
}

export default App;
