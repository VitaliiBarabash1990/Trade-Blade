import AboutCompany from "@/components/AboutCompany/AboutCompany";
import Deals from "@/components/Deals/Deals";
import Hero from "@/components/Hero/Hero";
import Profits from "@/components/Profits/Profits";

export default function Home() {
	return (
		<>
			<Hero />
			<Profits />
			<Deals />
			<AboutCompany />
		</>
	);
}
