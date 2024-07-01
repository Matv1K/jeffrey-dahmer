import "pages/Home/Home.scss";

import { Clothes } from "img/";

import { Button, AspectRatio } from "components";

const Home = () => {
  return (
    <div>
      <Button secondary>Back to work</Button>

      <AspectRatio ratio={16 / 9}>
        <img src={Clothes} alt="Example Image" />
      </AspectRatio>
      <AspectRatio ratio={4 / 3}>
        <div style={{ background: "lightblue", height: "100%" }}></div>
      </AspectRatio>
    </div>
  );
};

export default Home;
