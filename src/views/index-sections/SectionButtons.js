
import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";
import * as firebase from 'firebase';
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

const SectionButtons = (props) => {
  return (
    <>
      <div className="section section-buttons">
          



            
            <Row>
            <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Row>
         
        
      </div>
    </>
  );
}

export default SectionButtons;
