"use client";
import s from "./Hero.module.css";
import { motion } from "framer-motion";
import {
	slideInFromBot,
	slideInFromLeft,
	slideInFromRight,
} from "@/components/UI/motion/motion";

const Hero = () => {
	return (
		<section className={`section ${s.heroSection}`}>
			<div className="container">
				<div className={s.imgTitle}>
					<motion.div
						exit="exit"
						initial="hidden"
						animate="visible"
						variants={slideInFromBot(1)}
						className={s.animateDesktop}
					>
						<picture className={`${s.heroImg} ${s.animationImg}`}>
							<source
								media="(min-width: 1200px)"
								srcSet="./img-hero-desk.webp 1x, ./img-hero-desk@2x.webp 2x"
								type="image/webp"
							/>
							<source
								media="(min-width: 1200px)"
								srcSet="./img-hero-desk.png 1x, ./img-hero-desk@2x.png 2x"
								type="image/png"
							/>
							<img
								src="./img-hero-desk.png"
								alt="сделки професиональных трейдеров"
							/>
						</picture>
					</motion.div>

					<div className={s.wrapperText}>
						<h1 className={s.heroTitle}>
							моментально копируй сделки профи трейдеров
						</h1>
						<p className={s.heroText}>
							Начни копировать сделки с успешной командой профессиональных
							трейдеров в автоматическом режиме.
						</p>
						<form name="form_hero" className={s.heroForm}>
							<input
								type="email"
								name="email"
								className={s.inputEmail}
								placeholder="Ваш e–mail"
							/>
							<button type="submit" className={`button ${s.buttonForm}`}>
								попробовать
							</button>
						</form>
						<p className={s.afterForm}>5 дней бесплатного пользования</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
