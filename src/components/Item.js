import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import { totalCost, capitalize } from '../helpers'

function Item({ item }) {
  const { name, category, amount, unitMeasurement, image } = item

  function cardColor({ category }) {
    switch(category) {
      case 'meat':
        return 'red';
      case 'poultry':
        return 'yellow';
      case 'seafood':
        return 'blue';
      case 'dairy':
        return 'orange'
      case 'produce':
        return 'green';
      case 'bakery':
        return 'black';
      case 'supplies':
        return 'purple';
      case 'beverages':
        return 'olive'
      case 'pantry':
        return 'brown'
      default :
        return null;
    }
  }

  return (
    <Card color={cardColor(item)}>
      <Image src={image} size="massive"/>
      <Card.Content>
        <Card.Header>
          {capitalize(name)}
            {/*Link will go here for edit*/}
            <Icon name="write" size="small" color="black"/>
        </Card.Header>
        <Card.Description content={`Category: ${category}`} />
        <Card.Description content={`Amount: ${amount}${unitMeasurement}`} />
        <Card.Description content={`Total Cost: $${totalCost(item)}`} />
      </Card.Content>
    </Card>
  )
}

export default Item