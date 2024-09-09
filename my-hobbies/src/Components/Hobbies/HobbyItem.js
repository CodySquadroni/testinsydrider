import "./HobbyItem.css";
import Card from "../UI/Card";

const HobbyItem = (props) => {
  return (
    <Card className="hobby-item">
      <div className="hobby-item__description">
        <h2>{props.title}</h2>
        <div>{props.description}</div>
      </div>
    </Card>
  );
};

export default HobbyItem;
