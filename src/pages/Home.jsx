import { useState } from "react";
import Header from "../components/header/Header";
import PropertyList from "../components/PropertyList";

const Home = () => {
  const [params, setSearchParams] = useState({});

  const searchQuery = (query) => {
    setSearchParams(query);
  };

  return (
    <div className="relative">
      <Header updateSearchQuery={searchQuery} />
      <PropertyList searchParams={params} />
    </div>
  );
};

export default Home;
