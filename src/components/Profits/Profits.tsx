import React from "react";
import s from "./Profits.module.css";

export default function Profits() {
	return (
		<section id="Profits" className={s.profit}>
			<div className={`container ${s.profitContainer}`}>
				<div className={s.titleImg}>
					<picture>
						<source
							media="(min-width: 1280px)"
							srcSet="
                  ./profit-desctop.png 1x,
                  ./profit-desctop@2x.png 2x
                "
							type="image/png"
						/>
						<source
							media="(max-width:1279px)"
							srcSet="./title-profit.png 1x, ./title-profit@2x.png 2x"
							type="image/png"
						/>

						<img src="./title-profit.png" alt="фон для заголовку" />
					</picture>
					<h2 className={`title ${s.titleMob}`}>Цифры</h2>
				</div>
				<div className={s.titleDate}>
					<h2 className={`title ${s.titleDesc}`}>Цифры</h2>
					<p className={`${s.profitText} ${s.profitAfterTitle}`}>
						Cентябрь 2022
					</p>
				</div>
				<ul className={`list ${s.profitList}`}>
					<li className={s.profitItem}>
						<p className={`${s.profitText} ${s.profitQuality}`}>
							Торговой прибыли
						</p>
						<p className={s.amount}>2756%</p>
					</li>
					<li className={s.profitItem}>
						<p className={`${s.profitText} ${s.profitQuality}`}>
							фьючерсных и спотовых сделок
						</p>
						<p className={s.amount}>67</p>
					</li>
					<li className={s.profitItem}>
						<p className={`${s.profitText} ${s.profitQuality}`}>
							прибыль подписчиков
						</p>
						<p className={s.amount}>375000</p>
					</li>
				</ul>
			</div>
		</section>
	);
}
