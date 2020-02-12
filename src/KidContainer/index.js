import React, { Component } from 'react'
import KidList from '../KidList'
import KidNew from '../KidNew'

class KidContainer extends Component {
	constructor(props){
		super(props)

		this.state = {
			kids: []
		}
	}

	componentDidMount() {
		this.getKids()
	}

	getKids = async () => {
		try {
			const kidResponse = await fetch(process.env.REACT_APP_API_URL + "/api/v1/kids/")
			const kidsJson = await kidResponse.json()
			console.log("here is the data we got for kids")
			console.log(kidsJson)
			this.setState({
				kids: kidsJson.data
			})

		} catch(err) {
			console.log(err)	
		}
	}

	createKid = async (kidToAdd) => {
		try {
			const createKidResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/kids/', {
				method: 'POST',
				body: JSON.stringify(kidToAdd),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('here is createKidResponse', createKidResponse)
			const createKidJson = await createKidResponse.json()
			console.log("here is our create kid in createKid in KidContainer")
			console.log(createKidJson)

			if(createKidResponse.status === 201) {
        
        		this.setState({
          			kids: [...this.state.kids, createKidJson.data]
        		})
        	}

		} catch(err) {
			console.log(err)	
		}
	}

  	render() {
  		console.log('here is kidslist from state in render')
  		console.log(this.state.kids)
    	return(
    		<div>
	    	  	<h2>KidContainer</h2>
    			<KidList kids={ this.state.kids }/>
    			<KidNew createKid={this.createKid}/>
    		</div>
    )
  }

}

export default KidContainer