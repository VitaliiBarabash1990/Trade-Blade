import React from "react";
import s from "./TradeBlade.module.css";

export default function TradeBlade() {
	return (
		<section className={`section ${s.tradeSection}`}>
			<div className={`container`}>
				<ul className={s.tradeWraper}>
					<li className={s.left}>
						<h2 className={`title ${s.tradeTitle}`}>tradeblade это</h2>
					</li>
					<li className={s.right}>
						<svg className={s.tradeIcon}>
							<use href="/sprite.svg#icon-frame_1"></use>
						</svg>
					</li>
				</ul>
			</div>
		</section>
	);
}
