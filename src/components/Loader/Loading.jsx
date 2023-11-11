import HashLoader from "react-spinners/HashLoader";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-[50vh]">
      <HashLoader color="#0067FF" />
    </div>
  );
}
