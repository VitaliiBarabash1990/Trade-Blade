import React from "react";
import s from "./AboutCompany.module.css";

export default function AboutCompany() {
	return (
		<section id="AboutCompany" className={s.about}>
			<div className={`container ${s.aboutContainer}`}>
				<div>
					<div className={s.wrapperImg}>
						<picture>
							<source
								media="(min-width: 1200px)"
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
					</div>
					<h2 className={s.titleDesc}>О компании</h2>
					<p className={s.text}>
						Мы опытная команда, для которой трейдинг – профессия. TradeBlade
						является авторизованным официальным брокером биржи Binance.
						<span className={s.textSecondary}>
							Он представляет пользователям множество преимуществ, таких как
							более високая скорость синхронизации API и возможность создать
							учетную запись Binance через платформу TradeBlade всего в 1 клик.
						</span>
					</p>
				</div>
				<form className={s.aboutForm} name="about_form">
					<strong className={s.formText}>
						Попробуйте сейчас и получите 5 дней бесплатного пользования
					</strong>
					<div className={s.inputForm}>
						<input
							type="email"
							placeholder="ваш e-mail"
							className={`${s.inputEmail} ${s.inputAbout}`}
						/>
						<button type="submit" className={s.buttonForm}>
							попробовать
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
