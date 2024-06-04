import avatar from "../../public";
import Card from "./Card";

const Main = () => {
  return (
    <section className="card-section h-screen grid items-center justify-center">
      <div className="container">
        <Card
          avatar={avatar}
          name={"Abdisalam Hussein"}
          location={"SanFrancisco, California"}
          job={"Front-end developer and avid reader."}
        />
      </div>
    </section>
  );
};

export default Main;
