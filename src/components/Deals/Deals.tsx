"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

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
				320: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 25,
				},
			},
		});

		return () => swiper.destroy();
	}, []);

	return (
		<section id="Deals" className={s.pastTrades}>
			<div className={`container ${s.tradesContainer}`}>
				<h2 className={`title ${s.tradeTitle}`}>Прошедшие сделки</h2>
				<p className={s.tradeStatus}>Онлайн</p>
				<div className={`swiper mySwiper`}>
					<div className="swiper-wrapper">
						{listDeal.map((list) => (
							<div key={list.id} className="swiper-slide">
								<div className={s.card}>
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
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="swiper-scrollbar"></div>
			</div>
		</section>
	);
}
