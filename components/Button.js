import Link from 'next/link'
import {FiArrowLeft} from 'react-icons/fi'


export default function Button({ children, className, href, asLink, onButtonPress }) {
	if (href) {
		if (asLink) {
			return (
				<Link href={href}>
					<a className={`inline-flex items-center space-x-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}>{children}</a>
				</Link>
			)
		}
		return (
			<a href={href} className={`inline-flex items-center space-x-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}>
				{children}
			</a>
		)
	}
	return (
		<button onClick={onButtonPress} className={`inline-flex items-center space-x-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}>
			{children}
		</button>
	)
}

export function Back({ asLink, href }) {
	return (
		<Button asLink={asLink} href={href} className="bg-transparent text-gray-800">
			<FiArrowLeft />
			<span>Back</span>
		</Button>
	)
}
