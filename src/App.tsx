import { connect } from 'react-redux';
import { Button } from './components/Button';
import { Result } from './components/Result';
import {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
} from './redux/actions';

const App = (props: any) => {
  const {
    calculator,
    onNumberClick,
    onPlusClick,
    onMinusClick,
    onMultiplyClick,
    onDivideClick,
    onEqualClick,
    onClearClick,
  } = props;

  return (
    <>
      <div className="result">
        <Result
          result={
            calculator.showingResult
              ? calculator.resultValue
              : calculator.inputValue
          }
        />
      </div>
      <div className="button-wrapper">
        <div className="number">
          <div className="upper">
            <Button onClick={() => onNumberClick(7)}>7</Button>
            <Button onClick={() => onNumberClick(8)}>8</Button>
            <Button onClick={() => onNumberClick(9)}>9</Button>
          </div>
          <div className="middle">
            <Button onClick={() => onNumberClick(4)}>4</Button>
            <Button onClick={() => onNumberClick(5)}>5</Button>
            <Button onClick={() => onNumberClick(6)}>6</Button>
          </div>
          <div className="lower">
            <Button onClick={() => onNumberClick(1)}>1</Button>
            <Button onClick={() => onNumberClick(2)}>2</Button>
            <Button onClick={() => onNumberClick(3)}>3</Button>
          </div>
          <div className="bottom">
            <Button onClick={() => onNumberClick(0)}>0</Button>
            <Button onClick={() => onClearClick()}>AC</Button>
            <Button onClick={() => onEqualClick()}>=</Button>
          </div>
        </div>
        <div className="operator">
          <Button isOperator={true} onClick={() => onDivideClick()}>
            ÷
          </Button>
          <Button isOperator={true} onClick={() => onMultiplyClick()}>
            ×
          </Button>
          <Button isOperator={true} onClick={() => onMinusClick()}>
            -
          </Button>
          <Button isOperator={true} onClick={() => onPlusClick()}>
            +
          </Button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    calculator: state.calculator,
  };
};

export default connect(mapStateToProps, {
  onNumberClick,
  onPlusClick,
  onMinusClick,
  onMultiplyClick,
  onDivideClick,
  onEqualClick,
  onClearClick,
})(App);
