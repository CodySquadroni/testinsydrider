import Hobbies from "./Components/Hobbies/Hobbies";
import NewHobby from "./Components/NewHobby/NewHobby";
import NewHobbyForm from "./Components/NewHobby/NewHobbyForm";

function App() {
  const hobbies = [
    {
      id: "h1",
      title: "Skiing",
      description:
        "Skiing is an exhilarating outdoor hobby that combines adventure, exercise, and a love for nature. It involves gliding down snow-covered slopes using skis, offering a great workout for balance, strength, and coordination. Whether on groomed trails or off-piste, skiing provides an exciting way to explore mountain landscapes, enjoy fresh air, and experience the thrill of speed. It’s suitable for people of all skill levels, making it a fun and rewarding activity for individuals or families alike.",
    },
    {
      id: "h2",
      title: "Horse Riding",
      description:
        "English horse riding is a refined and disciplined equestrian hobby that emphasizes balance, control, and precision. Riders typically engage in activities like dressage, show jumping, and eventing, where posture and technique are key. This hobby fosters a deep connection between rider and horse while offering a full-body workout, improving coordination, strength, and focus. Whether riding for competition or leisure, English horse riding is both challenging and rewarding, providing a graceful way to enjoy time with horses and the outdoors.",
    },
    {
      id: "h3",
      title: "Boating",
      description:
        "Boating is a relaxing and adventurous hobby that involves navigating waterways in various types of boats, from sailboats to motorboats. It offers the chance to explore lakes, rivers, and oceans while enjoying the fresh air and tranquility of the water. Boating can be a social activity with friends and family or a peaceful solo experience. It also provides opportunities for fishing, water sports, or simply unwinding. Whether for leisure or adventure, boating is a fulfilling way to connect with nature and embrace outdoor life.",
    },
  ];

  return (
    <div>
      <h2>Lets explore some hobbies</h2>
      <Hobbies item={hobbies} />
      <NewHobbyForm />
    </div>
  );
}

export default App;
