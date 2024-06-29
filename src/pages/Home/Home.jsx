import "./Home.scss";

import { Clothes } from "../../img/";

import { Button } from "../../components";

const Home = () => {
  return (
    <div>
      <img className="home-img" alt="shop" src={Clothes} />

      <Button secondary>Back to work</Button>
    </div>
  );
};

export default Home;
