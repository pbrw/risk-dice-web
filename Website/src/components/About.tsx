import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function About(): JSX.Element {
  return (
    <div style={{ width: "350px", margin: "auto", marginTop: "20px" }}>
      <h3 className="text-center">Risk Dice</h3>
      <p className="text-center text-muted">
        Risk: Global Domination dice simulator. Uses official game source code.
      </p>
    </div>
  );
}
