import React from "react";
import s from "./Tariffs.module.css";

export default function Tariffs() {
	return (
		<section id="Tariffs" className={s.tariffs}>
			<div className={`container ${s.tariffsContainer}`}>
				<h2 className={`title ${s.tarrifsTitle}`}>тарифи</h2>
				<ul className={`list ${s.buttonsWrapper}`}>
					<li className={s.itemSpot}>
						<button
							type="button"
							className={`button ${s.buttonBasic} ${s.buttonSpot}`}
						>
							спот
						</button>
					</li>
					<li>
						<button type="button" className={`button ${s.buttonBasic}`}>
							Ф'ючерс
						</button>
					</li>
				</ul>
				<ul className={`list ${s.tariffsList}`}>
					<li className={s.tariffsItem}>
						<h3 className={s.subTitle}>Standart</h3>
						<ul className={`list {s.standartList}`}>
							<li className={s.standartItem}>
								<svg width="12" height="12" className={s.standartIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>Ручний трейдинг</p>
							</li>
							<li className={s.standartItem}>
								<svg width="12" height="12" className={s.standartIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>
									Автоматичне або напівавтоматичне копіювання угод
								</p>
							</li>
							<li className={s.standartItem}>
								<svg width="12" height="12" className={s.standartIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>
									Особистий кабінет зі статистикою
								</p>
							</li>
							<li className={s.standartItem}>
								<svg width="12" height="12" className={s.standartIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>
									Середньострокові угоди з рівнями набору портфеля
								</p>
							</li>
						</ul>
						<div className={s.priceButton}>
							<p className={s.tariffsPrice}>
								$234<span className={s.tarrifsDiscount}>-35%</span>
							</p>
							<button type="button" className={`button ${s.tariffsButton}`}>
								12 місяців
								<svg className={`${s.icon} ${s.monthIcon}`}>
									<use href="/sprite.svg#checkbox-down"></use>
								</svg>
							</button>
						</div>
						<a href="" className={s.tariffsLink}>
							<p className={s.textTry}>Спробувати</p>
							<p className={s.textFree}>5 днів безкоштовно</p>
						</a>
					</li>
					<li className={`${s.tariffsItem} ${s.vip}`}>
						<h3 className={s.subTitle}>Vip</h3>
						<ul className={`${s.list} ${s.vipList}`}>
							<li className={s.vipItem}>
								<svg width="12" height="12" className={s.vipIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>Ручний трейдинг</p>
							</li>
							<li className={s.vipItem}>
								<svg width="12" height="12" className={s.vipIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>
									Автоматичне або напівавтоматичне копіювання угод
								</p>
							</li>
							<li className={s.vipItem}>
								<svg width="12" height="12" className={s.vipIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>
									Особистий кабінет зі статистикою
								</p>
							</li>
							<li className={s.vipItem}>
								<svg width="12" height="12" className={s.vipIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>
									Короткострокові, середньострокові та інвест угоди
								</p>
							</li>
							<li className={s.vipItem}>
								<svg width="12" height="12" className={s.vipIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>Доступ до Vip чату з командою</p>
							</li>
							<li className={s.vipItem}>
								<svg width="12" height="12" className={s.vipIcon}>
									<use href="/sprite.svg#checkbox"></use>
								</svg>
								<p className={s.tariffsText}>Наш авторський курс з трейдингу</p>
							</li>
						</ul>
						<div className={s.priceButton}>
							<p className={s.tariffsPrice}>
								$585
								<span className={s.tarrifsDiscount}>-35%</span>
							</p>
							<button type="button" className={`button ${s.tariffsButton}`}>
								12 місяців
								<svg className={`${s.icon} ${s.monthIcon}`}>
									<use href="/sprite.svg#checkbox-down"></use>
								</svg>
							</button>
						</div>
						<a href="" className={s.tariffsLink}>
							<p className={s.textTry}>Спробувати</p>
							<p className={s.textFree}>5 днів безкоштовно</p>
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}
