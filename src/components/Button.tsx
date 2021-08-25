import { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  isOperator?: boolean;
  onClick: () => void;
};

export const Button: VFC<Props> = (props: Props) => {
  const { isOperator, children, onClick } = props;

  return (
    <button
      className={`button ${isOperator ? 'button--operator' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
