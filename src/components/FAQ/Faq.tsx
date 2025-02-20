"use client";

import { useState } from "react";

import s from "./Faq.module.css";
import { FaqItem } from "./FaqItem";

export function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const sections = [
		{
			title: "Что такое TradeBlade",
			content_1:
				"Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.",
			content_2:
				"Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.",
		},
		{
			title: "Что TradeBlade предлагает инвесторам",
			content_1:
				"Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.",
			content_2:
				"Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.",
		},
		{
			title: "Должен ли я перевести свои средства на TradeBlade",
			content_1:
				"Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.",
			content_2:
				"Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.",
		},
	];

	function handleToggle(index: number) {
		setOpenIndex(openIndex === index ? null : index);
	}

	return (
		<div id="FAQ" className={`container ${s.accordionContainer}`}>
			<div className={s.accordionSection}>
				<h2 className={s.accordionTitle}>часто задаваемые вопросы</h2>
				{sections.map((section, index) => (
					<FaqItem
						key={index}
						content_1={section.content_1}
						content_2={section.content_2}
						isOpen={openIndex === index}
						onToggle={() => handleToggle(index)}
						title={section.title}
					/>
				))}
			</div>
		</div>
	);
}
