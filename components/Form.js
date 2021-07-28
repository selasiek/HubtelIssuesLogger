import Button from '../components/Button'
import { FiSave } from 'react-icons/fi'

export function TextInput({
	label,
	type,
	onInput,
	value,
	required,
	inputClasses,
	containerClasses,
}) {
	return (
		<div className={`col-span-3 ${containerClasses}`}>
			<label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
				{label || 'label'}
			</label>
			<input
				type={type || 'text'}
				onInput={onInput}
				value={value}
				className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${inputClasses}`}
				required={required}
			/>
		</div>
	)
}

export function TextArea({
	label,
	type,
	onInput,
	value,
	required,
	inputClasses,
	containerClasses,
}) {
	return (
		<div className={`col-span-3 ${containerClasses}`}>
			<label htmlFor='first-name' className='block text-sm font-medium text-gray-700'>
				{label || 'label'}
			</label>
			<textarea
				type={type || 'text'}
				onInput={onInput}
				value={value}
				type='datetime-local'
				className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${inputClasses}`}
				required={required}
			/>
		</div>
	)
}
export function SelectInput({
	label,
	onChange,
	value,
	options,
	required,
	placeholder,
	inputClasses,
	containerClasses,
}) {
	return (
		<div className={`col-span-3 ${containerClasses}`}>
			<label htmlFor='country' className='block text-sm font-medium text-gray-700'>
				{label || 'label'}
			</label>
			<select
				value={value}
				onChange={onChange}
				className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${inputClasses}`}
				required={required}
			>
				<option value={null}>{placeholder || 'placeholder'}</option>
				{options.map((option, index) => {
					if (typeof option == 'object') {
						return (
							<option key={index} value={option.value}>
								{option.text}
							</option>
						)
					}
					return (
						<option key={index} value={option}>
							{option}
						</option>
					)
				})}
			</select>
		</div>
	)
}

function FormHeader({ title, description }) {
	return (
		<div className='md:col-span-1'>
			<div className='px-4 sm:px-0'>
				<h3 className='text-lg font-medium leading-6 text-gray-900'>{title}</h3>
				<p className='mt-1 text-sm text-gray-600'>{description}</p>
			</div>
		</div>
	)
}

export function FormLayout({ children, title, description, onSubmitForm, method }) {
    
	const onSubmit = (e) => {
		e.preventDefault()
		onSubmitForm(e)
    }
    
	return (
		<div className='md:grid md:grid-cols-3 md:gap-6'>
			<FormHeader title={title} description={description} />

			<div className='mt-5 md:mt-0 md:col-span-2'>
				<form method={method} onSubmit={onSubmit}>
					<div className='shadow overflow-hidden sm:rounded-md'>
						<div className='px-4 py-5 bg-white sm:p-6'>
							<div className='grid grid-cols-6 gap-6'>
								{children}
								{/* <TextInput /> */}
							</div>
						</div>
						<div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
							<Button>
								<FiSave /> 
                                <span>Save</span>
							</Button>
							{/* <button
								type='submit'
								className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								Save
							</button> */}
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
