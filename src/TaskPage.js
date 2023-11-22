import { useParams } from "react-router-dom";

export const TaskPage = () => {
  const params = useParams();
  return (
    <>
      {JSON.stringify(params)}
    </>
  );
};
