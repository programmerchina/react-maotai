import React,{Component} from 'react'
import './detail.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import DetailUI from './detailUI'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'


class Detail extends Component {
	constructor(...props){
		super()
		this.state = {
			navList: ['商品','评价','详情'],
			navListPath: ['/commodity','/evaluate','/detail']
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
	componentDidMount(){
    var mySwiper = new Swiper('.banner', {
    	autoplay: true,
    	loop: true,
    	pagination: {
	        el: '.swiper-pagination',
	  },
    })
  }
}

export default Detail