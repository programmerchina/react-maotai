import React from 'react'
import './detail.scss'
import { NavLink, Route, Router} from 'react-router-dom'
//无状态组件，提供dom结构
export default function(props){
	
	console.log(props)
	return (
		<div className="detail">
		<header className="head">
		     <div className="head_left">
		         <span className="iconfont icon-zuojiantou"></span>	
		         <span>返回</span>	
		     </div>
		     <div className="head_center">
		         <span>商品详情</span>	
		     </div>
		     <div className="head_right">
		         <span>首页</span>	
		     </div>
		</header>
		
		
         <nav className="detail_nav">
		        {props.nav.navList.map((item,index)=>{
		        	return <NavLink exact className="tab" activeClassName="active" to={props.nav.navListPath[index]} key={index}>{item}</NavLink>
		        })}
         </nav>
         
         
         
         <section className="body">
         
         
         </section>
         
         
         
         <foot className="foot">
             <div className="foot_left">
                  <div>
                       <span className="iconfont icon-dianpu"></span>
                       <span>店铺</span>
                  </div>
                  <div>
                       <span className="iconfont icon-shoucang"></span>
                       <span>收藏</span>
                  </div>
                  <div>
                       <span className="iconfont icon-gouwuche1"></span>
                       <span>购物车</span>
                  </div>
             </div>
         
         
             <div className="foot_right">
                      立即预约
             </div>
         </foot>
         </div>
	)
	
}




