import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cardd() {
    return (
      <Card style={{ width: '18rem' , bgcolor:"#E4C59E"}}>
        <Card.Body>
          <Card.Title>
Vintage Business Cards Bundle</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
          Easy to modify, change colors, texts. Fully Layered PSD files, Fully Customizable and Editable, CMYK Colors, 5 color versions, 300 DPI High Resolution, 3.5” x 2” (3.75” x 2.25” with bleed setting), Print Ready Format, Only Free Fonts Used.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }


export default Cardd