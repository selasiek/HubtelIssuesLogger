/* This example requires Tailwind CSS v2.0+ */
// import { PaperClipIcon } from '@heroicons/react/solid'
export function DescriptionItem({ children, title }) {
	return (
		<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
			<dt className='text-sm font-medium text-gray-500'>{title}</dt>
			<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>{children}</dd>
		</div>
	)
}

export default function DescriptionList({ heading, description, children }) {
	return (
		<div className='bg-white shadow overflow-hidden sm:rounded-lg'>
			<div className='px-4 py-5 sm:px-6 bg-gray-50'>
				<h3 className='text-lg leading-6 font-medium text-gray-900'>{heading}</h3>
				<p className='mt-1 max-w-2xl text-sm text-gray-500'>{description}</p>
			</div>
			<div className='border-t border-gray-200'>
				<dl className='divide-y'>
                    {children}
				</dl>
			</div>
		</div>
	)
}
