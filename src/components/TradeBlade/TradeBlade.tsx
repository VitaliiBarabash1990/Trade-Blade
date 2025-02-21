import React from "react";
import s from "./TradeBlade.module.css";
import trades from "./Trades.json";
import { li } from "framer-motion/client";

export default function TradeBlade() {
	return (
		<section className={`section ${s.tradeSection}`}>
			<div className={`container`}>
				<ul className={s.tradeWraper}>
					<li className={s.left}>
						<h2 className={`title ${s.tradeTitle}`}>tradeblade это</h2>
					</li>
					<li className={s.right}>
						<ul className={s.rightItems}>
							{trades.map((trade) => (
								<li className={s.rightList}>
									<svg className={s.tradeIcon}>
										<use href={trade.src}></use>
									</svg>
									<div className={s.rightListWrap}>
										<h3 className={`title ${s.rightListTitle}`}>
											{trade.title}
										</h3>
										<p className={`p ${s.rightListText}`}>
											{trade.description}
										</p>
									</div>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>
		</section>
	);
}
