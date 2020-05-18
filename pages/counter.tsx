import Button from '../src/components/Button';

export const Counter = () => {

  return (
    <div>
      <h1>
        Count: <span>{1}</span>
      </h1>
      <Button text="ADD" click={() => {}}></Button>
      <Button
        text="SUBTRACT"
        click={() => {}}
      ></Button>
    </div>
  );
};

export default Counter;
