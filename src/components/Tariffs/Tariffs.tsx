import React from "react";
import s from "./Tariffs.module.css";
import Standarts from "./Standarts.json";
import Vips from "./Vips.json";

export default function Tariffs() {
	return (
		<section id="Tariffs" className={s.tariffs}>
			<div className={`container ${s.tariffsContainer}`}>
				<div className={s.wraperContainer}>
					<h2 className={`title ${s.tarrifsTitle}`}>тарифы</h2>
					<ul className={`list ${s.buttonsWrapper}`}>
						<li className={s.itemSpot}>
							<button
								type="button"
								className={`button ${s.buttonBasic} ${s.buttonSpot}`}
							>
								спот
							</button>
						</li>
						<li className={s.itemSpot}>
							<button type="button" className={`button ${s.buttonBasic}`}>
								фьючерс
							</button>
						</li>
					</ul>
					<ul className={`list ${s.tariffsList}`}>
						<li className={s.tariffsItem}>
							<h3 className={s.subTitle}>Standart</h3>
							<ul className={`list ${s.standartList}`}>
								{Standarts.map((standart, index) => (
									<li key={index} className={s.standartItem}>
										<svg width="12" height="12" className={s.standartIcon}>
											<use href="/sprite.svg#checkbox"></use>
										</svg>
										<p className={s.tariffsText}>{standart}</p>
									</li>
								))}
							</ul>
							<div className={s.priceButton}>
								<p className={s.tariffsPrice}>
									$234<span className={s.tarrifsDiscount}>-35%</span>
								</p>
								<button type="button" className={`button ${s.tariffsButton}`}>
									12 месяцев
									<svg className={`${s.icon} ${s.monthIcon}`}>
										<use href="/sprite.svg#checkbox-down"></use>
									</svg>
								</button>
							</div>
							<a href="" className={s.tariffsLink}>
								<p className={s.textTry}>Попробовать</p>
								<p className={s.textFree}>5 дней бесплатно</p>
							</a>
						</li>
						<li className={`${s.tariffsItem} ${s.vip}`}>
							<h3 className={s.subTitle}>Vip</h3>
							<ul className={`${s.list} ${s.vipList}`}>
								{Vips.map((vip, index) => (
									<li key={index} className={s.vipItem}>
										<svg width="12" height="12" className={s.vipIcon}>
											<use href="/sprite.svg#checkbox"></use>
										</svg>
										<p className={s.tariffsText}>{vip}</p>
									</li>
								))}
							</ul>
							<div className={s.priceButton}>
								<p className={s.tariffsPrice}>
									$585
									<span className={s.tarrifsDiscount}>-35%</span>
								</p>
								<button type="button" className={`button ${s.tariffsButton}`}>
									12 месяцев
									<svg className={`${s.icon} ${s.monthIcon}`}>
										<use href="/sprite.svg#checkbox-down"></use>
									</svg>
								</button>
							</div>
							<a href="" className={s.tariffsLink}>
								<p className={s.textTry}>Попробовать</p>
								<p className={s.textFree}>5 дней бесплатно</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
