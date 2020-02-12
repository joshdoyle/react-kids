import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

class KidNew extends Component {
	constructor(props){
		super(props)

		this.state = {
			name: '',
			age: '',
			gender: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createKid(this.state)
		this.setState({
			name: '',
			age: '',
			gender: ''
		})
	}

  render() {
    return(
      <Segment>
      	<h4>Add new kid</h4>
      	<Form onSubmit={this.handleSubmit}>
      		<Label>Name:</Label>
      		<Form.Input
      			type='text'
      			name='name'
      			value={this.state.name}
      			onChange={this.handleChange}
      		/>
      		<Label>Age:</Label>
      		<Form.Input
      			type='text'
      			name='age'
      			value={this.state.age}
      			onChange={this.handleChange}
      		/>
      		<Label>Gender:</Label>
      		<Form.Input
      			type='text'
      			name='gender'
      			value={this.state.gender}
      			onChange={this.handleChange}
      		/>
      		<Button type='Submit'>Add</Button>
      	</Form>
      </Segment>
    )
  }

}

export default KidNew