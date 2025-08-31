import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const App = () => {
	return (
		<div className='absolute inset-0 flex justify-center'>
			<div className='container flex flex-col px-5 md:px-10 lg:px-20'>
				<Header className='py-5' />
				<Main className='flex-1 border-y-2 border-y-base-300' />
				<Footer className='py-5' />
			</div>
		</div>
	);
};
export default App;
