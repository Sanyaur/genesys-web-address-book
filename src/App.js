import { Container } from "react-bootstrap";
import "./App.css";
import DetailsBody from "./components/profile/DetailsBody";
import PersonList from "./components/sidebar/PersonList";

function App() {
  console.log(
    fetch("http://localhost:8080/api/people").then((res) =>
      res.json().then((data) => console.log(data))
    )
  );

  return (
    <Container>
      <PersonList />
      <DetailsBody />
    </Container>
  );
}

export default App;
