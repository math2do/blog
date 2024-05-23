import { redirect } from "next/navigation";

const Home = async () => {
  redirect("/content/getting-started");
};

export default Home;
