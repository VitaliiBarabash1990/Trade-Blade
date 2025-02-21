import AboutCompany from "@/components/AboutCompany/AboutCompany";
import Deals from "@/components/Deals/Deals";
import Faq from "@/components/FAQ/Faq";
import Hero from "@/components/Hero/Hero";
import Profits from "@/components/Profits/Profits";
import Reviews from "@/components/Reviews/Reviews";
import SingUp from "@/components/SingUp/SingUp";
import Tariffs from "@/components/Tariffs/Tariffs";
import TradeBlade from "@/components/TradeBlade/TradeBlade";
import UseServise from "@/components/UseServise/UseServise";

export default function Home() {
	return (
		<>
			<Hero />
			<Profits />
			<Deals />
			<AboutCompany />
			<TradeBlade />
			<UseServise />
			<Tariffs />
			<Reviews />
			<Faq />
			<SingUp />
		</>
	);
}
