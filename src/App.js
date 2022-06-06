// Bootstrap
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import "./App.css";
import DetailsBody from "./components/profile/DetailsBody";
import PersonList from "./components/sidebar/PersonList";
import UsersProvider from "./store/UsersProvider";

function App() {
  return (
    <UsersProvider>
      <Container fluid>
        <Row>
          <PersonList />
          <DetailsBody />
        </Row>
      </Container>
    </UsersProvider>
  );
}

export default App;
