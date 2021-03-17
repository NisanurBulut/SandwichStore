import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import classes from './Order.module.css';

function Order() {
  return (
    <div className={classes.Order}>
       <Card>
           <Card.Content>
               <Card.Header>test</Card.Header>
               <Card.Meta>5TL</Card.Meta>
               <Card.Description>Description</Card.Description>
           </Card.Content>
       </Card>
    </div>
  );
}

export default Order;
