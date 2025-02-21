"use client";

import { useState } from "react";

import s from "./Faq.module.css";
import { FaqItem } from "./FaqItem";
import sections from "./Sections.json";

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

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
