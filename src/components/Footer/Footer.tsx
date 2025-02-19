import Link from "next/link";
import s from "./Footer.module.css";
import links from "./links.json";

const Footer = () => {
	return (
		<div className={`section ${s.footerSection}`}>
			<div className={s.footerDescr}>
				<div className={s.footerInfo}>
					<h3 className={`p ${s.footerTitle}`}>Быстрая навигация</h3>
				</div>
				<ul className={s.footerNav_item}>
					{links.map((linkData) => (
						<li key={linkData.id} className={s.navlink_link}>
							<Link
								href={linkData.link}
								className={`navlink ${s.footerNav_item}`}
							>
								{linkData.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className={s.footerLine}></div>
			<div className={s.footerLogo_block}>
				<Link href="/" className={s.footer_logo}>
					<svg className={s.footer_logo_icon}>
						<use href="/sprite.svg#icon-logo"></use>
					</svg>
				</Link>
				<p>© 2022 TradeBlade. All rights reserved</p>
			</div>
		</div>
	);
};

export default Footer;
