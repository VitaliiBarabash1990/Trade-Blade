import React from "react";
import s from "./UseServise.module.css";
import Servises from "./Servises.json";

export default function UseServise() {
	return (
		<section id="Use" className={`section ${s.sectionUse}`}>
			<div className="container">
				<ul className={s.useWraper}>
					<li className={s.useItem}>
						<h2 className={`title ${s.useTitle}`}>
							Как начать пользоваться сервисом
						</h2>
					</li>
					<li className={s.useItem}>
						<ul className={s.useCard}>
							{Servises.map((servise) => (
								<li key={servise.id} className={s.useCardItem}>
									<h3>{servise.task}</h3>
									<p>{servise.description}</p>
								</li>
							))}
						</ul>
					</li>
					<li className={s.useItem}>
						<button type="button" className={`button ${s.useButton}`}>
							Загрузить больше отзывов
						</button>
					</li>
				</ul>
			</div>
		</section>
	);
}
