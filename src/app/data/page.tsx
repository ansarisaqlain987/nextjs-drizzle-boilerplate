import { getData } from "../actions/getData";

const Page = async () => {
  const data = await getData();
  console.log(data);
  return <h1>data</h1>;
};

export default Page;
