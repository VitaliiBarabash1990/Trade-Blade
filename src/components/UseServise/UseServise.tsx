import React from "react";
import s from "./UseServise.module.css";
import Servises from "./Servises.json";

export default function UseServise() {
	return (
		<section id="Use" className={`section ${s.sectionUse}`}>
			<div className="container">
				<ul className={s.useWraper}>
					<svg className={s.useRectangle}>
						<use href="/sprite.svg#icon-Rectangle-purple"></use>
					</svg>

					<li className={s.useItem}>
						<h2 className={`title ${s.useTitle}`}>
							Как начать пользоваться сервисом
						</h2>
					</li>
					<li className={s.useItem}>
						<ul className={s.useCard}>
							{Servises.map((servise) => (
								<li key={servise.id} className={s.useCardItem}>
									<h3 className={s.useItemTitle}>{servise.task}</h3>
									<p className={`text ${s.useItemText}`}>
										{servise.description}
									</p>
								</li>
							))}
						</ul>
					</li>
					<li className={s.useItem}>
						<button type="button" className={`button ${s.useButton}`}>
							Попробовать бесплатно
						</button>
					</li>
				</ul>
			</div>
		</section>
	);
}

{
	/* <div className={s.wrapperImg}>
	<picture>
		<source
			media="(min-width: 1280px)"
			srcSet="
                    ./profit-desctop.png    1x,
                    ./profit-desctop@2x.png 2x
                  "
			type="image/png"
		/>
		<source
			media="(min-width: 375px)"
			srcSet="
                    ./title-profit.png    1x,
                    ./title-profit@2x.png 2x
                  "
			type="image/png"
		/>

		<img src="./title-profit.png" alt="фон для заголовка" />
	</picture>
	<h2 className={s.title}>О компании</h2>
</div>; */
}
