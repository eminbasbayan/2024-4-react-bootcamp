import Button from './UI/Button';

function Counter() {
  return (
    <div className="counter">
      <Button color={'success'}>Arttır</Button>
      <p className="text-3xl">{0}</p>
      <Button color={'danger'}>Azalt</Button>
    </div>
  );
}

export default Counter;
