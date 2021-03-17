import React from 'react';
import { Grid, Image, Card } from 'semantic-ui-react';
import classes from './Order.module.css';

function Order() {
  return (
    <div className={classes.Order}>
       <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
       <Card>
           <Card.Content>
               <Card.Header>test</Card.Header>
               <Card.Meta>5TL</Card.Meta>
               <Card.Description>Description</Card.Description>
           </Card.Content>
       </Card>
      </Grid.Column>
      <Grid.Column>
      <Card>
           <Card.Content>
               <Card.Header>test</Card.Header>
               <Card.Meta>5TL</Card.Meta>
               <Card.Description>Description</Card.Description>
           </Card.Content>
       </Card>
      </Grid.Column>
      <Grid.Column>
      <Card>
           <Card.Content>
               <Card.Header>test</Card.Header>
               <Card.Meta>5TL</Card.Meta>
               <Card.Description>Description</Card.Description>
           </Card.Content>
       </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </div>
  );
}

export default Order;
