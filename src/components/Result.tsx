export const Result = (props: any) => {
  const { result } = props;

  return (
    <div className="result-value">
      <p>{result}</p>
    </div>
  );
};
