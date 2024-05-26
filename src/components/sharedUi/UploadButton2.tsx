import loader from "../../images/spinner2.svg";
import { FaWallet } from "react-icons/fa";

interface ApproveBtnProps {
	approveBtnClick: (userId: string) => void;
	loading: boolean;
	btnText: string;
	userId: string;
}

const UploadButton2 = ({ approveBtnClick, loading, btnText, userId }: ApproveBtnProps) => {
	const handleClick = () => {
		approveBtnClick(userId);
	};

	return (
		<button
			onClick={handleClick}
			className="min-w-[110px] rounded-md  bg-meta-3 text-white py-2 px-3 flex items-center justify-center  gap-x-1"
		>
			{loading ? <img src={loader} alt="loading icon" height={20} width={20} /> : <FaWallet />}
			{btnText}
		</button>
	);
};

export default UploadButton2;
