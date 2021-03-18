import React from 'react';
import { Card, List, ListItem } from 'semantic-ui-react';
import classes from './Order.module.css';

function Order(props) {

  const ingredients = [];

  for (let ingredientName in props.ingredients) {
      ingredients.push({
        amount: props.ingredients[ingredientName],
        name: ingredientName,
      });
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <ListItem key={ig.name}>
        <List.Icon name="food" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>{ig.name}</List.Header>
          <List.Description>{ig.amount} Piece</List.Description>
        </List.Content>
      </ListItem>
    );
  });
  return (
    <div className={classes.Order}>
      <Card color="red">
        <Card.Content>
          <Card.Header>Price: {Number.parseFloat(props.price).toFixed(2)} ₺</Card.Header>
          <Card.Meta>{props.customer.name}/{props.customer.address}/{props.customer.email}</Card.Meta>
          <Card.Description textAlign="center">
            <List divided relaxed>
              {ingredientOutput}
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Order;
