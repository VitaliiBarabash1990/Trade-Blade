"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Імпорт React-компонентів
import { Pagination, Scrollbar } from "swiper/modules"; // Окремий імпорт модулів
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import s from "./Deals.module.css";
import listDeal from "./listDeal.json";

export default function Deals() {
	return (
		<section id="Deals" className={s.pastTrades}>
			<div className={`container ${s.tradesContainer}`}>
				<h2 className={`title ${s.tradeTitle}`}>Прошедшие сделки</h2>
				<p className={s.tradeStatus}>Онлайн</p>
				<Swiper
					modules={[Pagination, Scrollbar]}
					slidesPerView={4}
					spaceBetween={20}
					freeMode={true}
					scrollbar={{ draggable: true }}
					observer={true}
					observeParents={true}
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 10 },
						640: { slidesPerView: 2, spaceBetween: 15 },
						1024: { slidesPerView: 3, spaceBetween: 20 },
						1280: { slidesPerView: 4, spaceBetween: 25 },
					}}
					className={s.swiper}
				>
					{listDeal.map((list) => (
						<SwiperSlide key={list.id} className={s.swiperWrapCard}>
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
						</SwiperSlide>
					))}

					<div className="scrollbar"></div>
				</Swiper>
			</div>
		</section>
	);
}
