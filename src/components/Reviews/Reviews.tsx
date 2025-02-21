import React from "react";
import s from "./Reviews.module.css";
import Members from "./Members.json";

export default function Reviews() {
	return (
		<section id="Reviews" className={`section ${s.sectionReviews}`}>
			<div className="container">
				<ul className={s.reviewsWraper}>
					<li className={s.reviewsItem}>
						<h2 className={`title ${s.reviewsTitle}`}>
							Отзывы учасников комьюнити
						</h2>
					</li>
					<li className={s.reviewsItem}>
						<ul className={s.reviewsCard}>
							{Members.map((member) => (
								<li key={member.id} className={s.reviewsCardItem}>
									<img src={member.src} alt={`member_${member.id}`} />
									<ul className={s.reviewsMember}>
										<li className={s.memberItem}>
											<h3 className={s.reviewsMemberTitle}>{member.name}</h3>
										</li>
										<li className={s.memberItem}>
											<span className={s.reviewsMemberProfitText}>
												{member.profit}
											</span>
										</li>
										<li className={s.memberItem}>
											<span className={s.reviewsMemberText}>
												{member.description}
											</span>
										</li>
									</ul>
								</li>
							))}
						</ul>
					</li>
					<li className={s.reviewsItem}>
						<button type="button" className={`button ${s.reviewsButton}`}>
							Загрузить больше отзывов
						</button>
					</li>
				</ul>
			</div>
		</section>
	);
}
