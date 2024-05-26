interface PartnerCardProps {
	title: string;
	description: string;
	images: string[];
}

export default function PartnersCard({ title, description, images }: PartnerCardProps) {
	return (
		<div className="bg-gray-100 py-6 px-6 h-[230px] rounded-lg">
			<h3 className="font-extrabold text-2xl mb-2">{title}</h3>
			<p className="mb-6">{description}</p>
			<div className="flex items-center gap-x-10">
				{images.map((brand) => {
					return <img src={brand} alt="" className="h-auto w-[35%]" />;
				})}
			</div>
		</div>
	);
}
