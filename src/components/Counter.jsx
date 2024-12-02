import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import { arttir, azalt } from '../redux/slices/counterSlice';

function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <Button color={'success'} onClick={() => dispatch(arttir())}>
        Arttır
      </Button>
      <p className="text-3xl">{count}</p>
      <Button color={'danger'} onClick={() => dispatch(azalt())}>
        Azalt
      </Button>
    </div>
  );
}

export default Counter;
