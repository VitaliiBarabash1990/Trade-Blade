import { motion } from "framer-motion";
import React from "react";
import s from "./Faq.module.css";

type FaqProps = {
	title: string;
	content_1: string;
	content_2: string;
	isOpen: boolean;
	onToggle: () => void;
};

export function FaqItem({
	content_1,
	content_2,
	isOpen,
	onToggle,
	title,
}: FaqProps) {
	return (
		<div className={s.accordionWraper}>
			<div
				// className={s.accordion__togle}
				className={isOpen ? `${s.accordionToglePurple}` : `${s.accordionTogle}`}
				onClick={onToggle}
				onKeyDown={(e) => e.key === "Enter" && onToggle()}
				role="button"
				tabIndex={0}
			>
				<h3
					className={
						isOpen
							? `${s.accordionToggleTitle}`
							: `${s.accordionToggleTitleWhite}`
					}
				>
					{title}
				</h3>
				<div>
					<svg
						className={
							isOpen ? `${s.accordionIconArrow}` : `${s.accordionIconArrowTop}`
						}
					>
						<use href="/sprite.svg#checkbox-down" />
					</svg>
				</div>
			</div>

			{isOpen && (
				<motion.div
					animate={{ height: "auto", opacity: 1 }}
					className={s.isOpen}
					exit={{ height: 0, opacity: 0 }}
					initial={{ height: 0, opacity: 0 }}
					style={{ overflow: "hidden" }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 10 }}
						transition={{ delay: 0.2, duration: 0.3 }}
					>
						<p className={s.faqContent}>{content_1}</p>
						<br />
						<p className={s.faqContent}>{content_2}</p>
					</motion.div>
				</motion.div>
			)}
		</div>
	);
}
