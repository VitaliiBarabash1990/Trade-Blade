import React from "react";
import s from "./Deals.module.css";
import listDeal from "./listDeal.json";

export default function Deals() {
	return (
		<section className={s.pastTrades}>
			<div className={`container ${s.tradesContainer}`}>
				<h2 className={`title ${s.tradeTitle}`}>минулі угоди</h2>
				<p className={s.tradeStatus}>Онлайн</p>
				<div className={`${s.swiper} ${s.mySwiper}`}>
					<div className={`${s.swiperWrapper} ${s.wrapperCard}`}>
						<ul className={`${s.swiperWrapper} ${s.wrapperCard}`}>
							{listDeal.map((list) => (
								<li key={list.id} className={`${s.swiperSlide} ${s.card}`}>
									<div className={s.nearSpot}>
										<h3 className="sub-title">{list.currency}</h3>
										<p className={`${s.tradeText} ${s.opacityFirst}`}>
											SPOT · 1 хв. тому
										</p>
									</div>
									<div className={s.profitPercent}>
										<p
											className={`${s.tradeText} ${s.tradeProfit} ${s.opacitySecond}`}
										>
											ПРИБУТОК
										</p>
										<p className={s.tradePercent}>
											{list.procent}%
											<svg className="trade-icon">
												<use href="./sprite.svg#arrow-top"></use>
											</svg>
										</p>
									</div>
									<div className={s.goalDate}>
										<p className={`${s.tradeText} ${s.opacitySecond}`}>
											{list.goal}
										</p>
										<p
											className={`${s.tradeText} ${s.opacityFirst} ${s.tradeWeight}`}
										>
											Дата входу {list.date}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={s.swiperScrollbar}></div>
			</div>
		</section>
	);
}
