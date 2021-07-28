import Head from 'next/head'
import Image from 'next/image'
// import Clock from 'react-live-clock'
import moment from 'moment'

export default function layout({ children }) {
	return (
		<div className='min-h-screen bg-gray-100'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='bg-gray-900 text-gray-200 '>
				<div className='max-w-screen-xl mx-auto p-6 flex'>
					<a href='/'>
						<Image src='/hubtel-logo.jpeg' height='70' width='70' className='rounded-lg' />
					</a>
					<div className='flex-1 ml-6'>
						<h1 className='text-xl font-bold uppercase text-gray-500 tracking-widest'>Hubtel PPE Projects</h1>
						<h1 className='text-3xl font-semibold uppercase tracking-wide'>Issues & Incident Logger </h1>
					</div>
					<div className=''>
						<span>{moment().format('lll')}</span> {'  '}
						{/* <Clock format={'HH:mm:ss'} ticking={true} /> */}
					</div>
				</div>
			</div>
			<div className='bg-white shadow'>
				<nav className='max-w-screen-xl mx-auto px-6 py-4'>
					<ul className='uppercase tracking-widest font-semibold text-gray-300'>
						<li>Issue Logs</li>
					</ul>
				</nav>
			</div>

			<main className='max-w-screen-xl mx-auto p-6'>{children}</main>
		</div>
	)
}
