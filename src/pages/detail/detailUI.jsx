import React from 'react'
import './detail.scss'
import { NavLink, Route } from 'react-router-dom'
//无状态组件，提供dom结构
export default function(props){

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
         
          <div className="body_in">
                <div className="banner">
                      <ul className="banner_ul swiper-wrapper">
                          <li className="swiper-slide">1</li>
                          <li className="swiper-slide">2</li>
                          <li className="swiper-slide">3</li>
                          <li className="swiper-slide">4</li>
                          <li className="swiper-slide">5</li>
                      </ul>
                      <div className="swiper-pagination fyq"></div>
                </div>
          </div>
         
         </section>
         
         
         
         <footer className="foot">
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
         </footer>
         </div>
	)
	
}




