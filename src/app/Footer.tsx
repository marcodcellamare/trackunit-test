import Label from './Label';
import Pagination from './Pagination';

interface FooterProps {
	className?: string;
}

const Footer = ({ className }: FooterProps) => {
	return (
		<footer className={className}>
			<div className='flex flex-col lg:flex-row gap-5 items-center'>
				<Label className='lg:mr-auto' />
				<Pagination />
			</div>
			<p className='flex-1 text-xs opacity-50 mt-5'>
				Made by Marco D. Cellamare
			</p>
		</footer>
	);
};
export default Footer;
