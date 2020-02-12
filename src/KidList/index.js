import React from 'react'
import { Card } from 'semantic-ui-react'

function KidList(props) {
  const kids = props.kids.map((kid) =>{
  	return (
  		<Card key={kid.id}>
  			<Card.Content>
  				<Card.Header>
  					{ kid.name }
  				</Card.Header>
  				<Card.Description>
  					{kid.name} is a {kid.age} year old {kid.gender}
  				</Card.Description>
  			</Card.Content>
  		</Card>	
  	)	
  })

  return(
	<Card.Group>
		{ kids }
	</Card.Group>
	
  )
}

export default KidList