import { useEffect, useState } from 'react';
import Button from './UI/Button';

function Counter() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('Ahmet');

  useEffect(() => {
    console.log('component ilk yüklendiğinde çalışır!');
  }, []);

  useEffect(() => {
    console.log('component dependency list`e bağlı güncellendiğinde çalışır!');
  }, [title]);

  useEffect(() => {
    console.log('component her güncellendiğinde çalışır!');
  });

  return (
    <div className="counter">
      <Button color={'success'} onClick={() => setCount(count + 1)}>
        Arttır
      </Button>
      <p className="text-3xl">{count}</p>
      <Button color={'danger'} onClick={() => setCount(count - 1)}>
        Azalt
      </Button>
      <br />
      <Button color={'primary'} onClick={() => setTitle('Emin')}>
        İsmi Değiştir
      </Button>
      <p>{title}</p>
    </div>
  );
}

export default Counter;
