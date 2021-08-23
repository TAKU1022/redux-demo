export const Result = (props: any) => {
  const { result } = props;

  return (
    <div className="resultValue">
      <p>{result}</p>
    </div>
  );
};
