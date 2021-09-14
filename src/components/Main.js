import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';

const Main = (props) => {
    const [age, setAge] = useState(false);

    return (
        <div  >
          
            <Card  style={{width: '300px', margin: '40px', padding:'40px', boxShadow:'0 0 10px 0 purple'}}>
                <Card.Img variant="top" src= {props.image} />
                <Card.Body>
                    <Card.Title>Contact Name</Card.Title>
                    <Card.Text>
                        <p>Name:  {props.name}</p>
                        <p>Email:{props.email} </p>
                        <p>Nationality:{props.nationality} </p>
                        {age && <p>Age: {props.age}</p>}
                    </Card.Text>
                    <Button variant="primary" onClick={() => setAge(!age)}>Show Age</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
  
        
export default Main;



