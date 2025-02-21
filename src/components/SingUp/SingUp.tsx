import { div } from "framer-motion/client";
import React from "react";
import s from "./SingUp.module.css";

export default function SingUp() {
	return (
		<section className={`section ${s.singUpSection}`}>
			<div className="container">
				<ul className={s.containerWraper}>
					<li className={s.left}>
						<h2 className={s.textSingUp}>
							Начните прямо сейчас с бесплатным 5–и дневным пробным периодом!
						</h2>
					</li>
					<li className={s.right}>
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
					</li>
				</ul>
			</div>
		</section>
	);
}
