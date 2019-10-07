
import React, {useState} from "react";
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

function SectionButtons() {

  const [books, setBooks] = useState([]);

  const storage = firebase.firestore();
  const booksDb = storage.collection('Books');

  booksDb.get().then((docs) => 
  {
    let allBooks = [];
    docs.forEach(doc => {
      allBooks.push(doc.data())
      console.log(doc.data())
    });
    if(books.length < allBooks.length)
      setBooks(allBooks);
  })

  return (
    <>
      <div className="section section-buttons">
        <Row>
          {books.map( (book) =>
          (<Card>
            <CardBody>
              <CardTitle>{book.title}</CardTitle>
              <CardSubtitle>{book.genre}</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>)
          )}
        </Row>
      </div>
    </>
  );
}

export default SectionButtons;
