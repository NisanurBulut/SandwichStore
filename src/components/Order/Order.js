import React from 'react';
import { Card, List, Icon, ListItem } from 'semantic-ui-react';
import classes from './Order.module.css';

function Order(props) {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    if (props.ingredients[ingredientName] > 0) {
      ingredients.push({
        amount: props.ingredients[ingredientName],
        name: ingredientName,
      });
    }
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
      <Card>
        <Card.Content>
          <Card.Header>Price: {Number.parseFloat(props.price)} ₺</Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>
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
