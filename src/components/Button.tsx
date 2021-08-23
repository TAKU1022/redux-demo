import { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  isOperator?: boolean;
};

export const Button: VFC<Props> = (props: Props) => {
  const { isOperator, children } = props;

  return (
    <button className={`button ${isOperator ? 'button--operator' : ''}`}>
      {children}
    </button>
  );
};
