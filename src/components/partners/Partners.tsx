import PartnersCard from "./PartnersCard";
import forbes from "../../images/forbes.png";
import ibt from "../../images/ibt.png";
import newyork from "../../images/new-york-post.png";
import canada from "../../images/canada.png";
import msb from "../../images/msb.png";
import psl from "../../images/psl.png";

export default function Partners() {
	const mediaImages = [forbes, ibt, newyork];
	const licenseImages = [msb, canada];
	const academicImages = [psl];

	return (
		<section className="max-w-7xl mx-auto my-24">
			<h3 className="font-extrabold text-3xl mb-10">Who Trusts InvestInspire</h3>
			<div className="grid grid-cols-3 items-center gap-x-10">
				<PartnersCard
					title="Media"
					description="Recognised by global mainstream media"
					images={mediaImages}
				/>
				<PartnersCard
					title="Licenses"
					description="Certified in multiple countries, legally compliant exchange"
					images={licenseImages}
				/>
				<PartnersCard
					title="Academic Cooperation"
					description="Partnered with world renowned academic institution"
					images={academicImages}
				/>
			</div>
		</section>
	);
}
