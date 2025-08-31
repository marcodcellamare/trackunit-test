import classNames from 'classnames';
import Label from './Label';
import Pagination from './Pagination';

interface FooterProps {
	className?: string;
}

const Footer = ({ className }: FooterProps) => {
	return (
		<footer
			className={classNames(
				'flex flex-col lg:flex-row gap-5 items-center',
				className
			)}>
			<Label className='lg:mr-auto' />
			<Pagination />
		</footer>
	);
};
export default Footer;
