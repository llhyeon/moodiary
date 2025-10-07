import { ClipLoader } from "react-spinners";

function Spinner() {
  return (
    <div className="w-screen mt-[300px] flex justify-center items-center">
      <ClipLoader size={80} aria-label="loading" color="#ad8b73" />;
    </div>
  );
}

export default Spinner;
