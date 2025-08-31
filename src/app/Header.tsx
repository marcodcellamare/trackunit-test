import classNames from 'classnames';
import Search from './Search';

interface HeaderProps {
	className?: string;
}

const Header = ({ className }: HeaderProps) => {
	return (
		<header className={classNames(['flex gap-5 items-center', className])}>
			<h1 className='mr-auto text-2xl text-primary'>Giphy.com search</h1>
			<Search />
		</header>
	);
};
export default Header;
