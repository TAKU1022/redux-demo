import { Button } from './components/Button';
import { Result } from './components/Result';

export const App = () => {
  return (
    <>
      <div className="result">
        <Result result={'計算機'} />
      </div>
      <div className="button-wrapper">
        <div className="number">
          <div className="upper">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
          </div>
          <div className="middle">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
          </div>
          <div className="lower">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
          </div>
          <div className="bottom">
            <Button>0</Button>
            <Button>AC</Button>
            <Button>=</Button>
          </div>
        </div>
        <div className="operator">
          <Button isOperator={true}>÷</Button>
          <Button isOperator={true}>×</Button>
          <Button isOperator={true}>-</Button>
          <Button isOperator={true}>+</Button>
        </div>
      </div>
    </>
  );
};
