import AboutCompany from "@/components/AboutCompany/AboutCompany";
import Deals from "@/components/Deals/Deals";
import { Faq } from "@/components/FAQ/Faq";
import Hero from "@/components/Hero/Hero";
import Profits from "@/components/Profits/Profits";
import Tariffs from "@/components/Tariffs/Tariffs";

export default function Home() {
	return (
		<>
			<Hero />
			<Profits />
			<Deals />
			<AboutCompany />
			<Tariffs />
			<Faq />
		</>
	);
}
