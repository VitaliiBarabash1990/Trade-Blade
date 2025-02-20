import React from "react";
import s from "./Deals.module.css";
import listDeal from "./listDeal.json";

export default function Deals() {
	return (
		<section className="past-trades">
			<div className="container trades-container">
				<h2 className="title trade-title">минулі угоди</h2>
				<p className="trade-status">Онлайн</p>
				<div className="swiper mySwiper">
					<div className="swiper-wrapper wrapper-card">
						<ul className="swiper-wrapper wrapper-card">
							{listDeal.map((list) => (
								<li key={list.id} className="swiper-slide card">
									<div className="near-spot">
										<h3 className="sub-title">{list.currency}</h3>
										<p className="trade-text opacity-first">
											SPOT · 1 хв. тому
										</p>
									</div>
									<div className="profit-percent">
										<p className="trade-text trade-profit opacity-second">
											ПРИБУТОК
										</p>
										<p className="trade-percent">
											{list.procent}%
											<svg className="trade-icon">
												<use href="./img/sprite.svg#arrow-top"></use>
											</svg>
										</p>
									</div>
									<div className="goal-date">
										<p className="trade-text opacity-second">{list.goal}</p>
										<p className="trade-text opacity-first trade-weight">
											Дата входу {list.date}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="swiper-scrollbar"></div>
			</div>
		</section>
	);
}
