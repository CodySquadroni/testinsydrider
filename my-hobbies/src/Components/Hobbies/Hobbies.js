import HobbyItem from "./HobbyItem";
import "./Hobbies.css";
import Card from "../UI/Card";

function Hobbies(props) {
  return (
    <Card className="hobbies">
      <HobbyItem
        title={props.item[0].title}
        description={props.item[0].description}
      />
      <HobbyItem
        title={props.item[1].title}
        description={props.item[1].description}
      />
      <HobbyItem
        title={props.item[2].title}
        description={props.item[2].description}
      />
    </Card>
  );
}

export default Hobbies;
