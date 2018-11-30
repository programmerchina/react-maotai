import React,{Component} from 'react'
import './detail.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailUI from './detailUI'


class Detail extends Component {
	constructor(...props){
		super()
		this.state = {
			navList: ['商品','评价','详情'],
			navListPath: ['commodity','evaluate','detail']
		}
	}
	render(){
		let { navList, navListPath } = this.state
		return(
		  <Router>
			<DetailUI nav={{navList, navListPath}}></DetailUI>
		  </Router>
		)
	}
}

export default Detail