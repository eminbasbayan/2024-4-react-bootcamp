import { useSelector } from 'react-redux';
import Button from './UI/Button';

function Counter() {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="counter">
      <Button color={'success'}>Arttır</Button>
      <p className="text-3xl">{count}</p>
      <Button color={'danger'}>Azalt</Button>
    </div>
  );
}

export default Counter;
