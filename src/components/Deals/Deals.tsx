"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";

import s from "./Deals.module.css";
import listDeal from "./listDeal.json";

export default function Deals() {
	useEffect(() => {
		const swiper = new Swiper(".mySwiper", {
			slidesPerView: 4,
			spaceBetween: 20,
			freeMode: true,
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: true,
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});

		return () => {
			swiper.destroy();
		};
	}, []);

	return (
		<section className={s.pastTrades}>
			<div className={`container ${s.tradesContainer}`}>
				<h2 className={`title ${s.tradeTitle}`}>Прошедшие сделки</h2>
				<p className={s.tradeStatus}>Онлайн</p>
				<div className={`${s.swiper} ${s.mySwiper}`}>
					<div className={`${s.swiperWrapper} ${s.wrapperCard}`}>
						<ul className={`${s.swiperWrapper} ${s.wrapperCard}`}>
							{listDeal.map((list) => (
								<li key={list.id} className={`${s.swiperSlide} ${s.card}`}>
									<div className={s.nearSpot}>
										<h3 className={s.subTitle}>{list.currency}</h3>
										<p className={`${s.tradeText} ${s.opacityFirst}`}>
											SPOT · 1 мин. назад
										</p>
									</div>
									<div className={s.profitPercent}>
										<p
											className={`${s.tradeText} ${s.tradeProfit} ${s.opacitySecond}`}
										>
											Прибыль
										</p>
										<p className={s.tradePercent}>
											{list.procent}%
											<svg className={s.tradeIcon}>
												<use href="/sprite.svg#arrow-top"></use>
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
											Дата входа {list.date}
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
