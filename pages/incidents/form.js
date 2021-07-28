import { useRouter } from 'next/router'
import { useState } from 'react'
import { Back } from '../../components/Button'
import { TextInput, FormLayout, SelectInput, TextArea } from '../../components/Form'

export default function Form() {
	const [incidentTime, setIncidentTime] = useState('')
	const [systemApp, setSystemApp] = useState('')
	const [domain, setDomain] = useState('')
	const [severity, setSeverity] = useState('')
	const [status, setStatus] = useState('')
	const [specificProblems, setSpecificProblems] = useState('')
	const [resolution, setResolution] = useState('')

	const systemApps = [
		{ text: 'Receive Money Proxy Api', value: 1 },
		{ text: 'Send Money Api', value: 2 },
	]

	const domains = [
		{ text: 'Hubtel', value: '0' },
		{ text: 'External', value: '1' },
	]

	const statuses = [
		{ text: 'Pending', value: '0' },
		{ text: 'Resolved', value: '1' },
	]

	const severities = [
		{ text: 'Low', value: '0' },
		{ text: 'Moderate', value: '1' },
		{ text: 'High', value: '2' },
	]

	const handleFormSubmit = async (e) => {
		try {
			const res = await fetch('/api/incidents/store', {
				method: 'POST',
				body: JSON.stringify({
					incidentTime,
					systemApp,
					domain,
					severity,
					status,
					specificProblems,
					resolution,
				}),
			})

			const data = await res.json()

			console.log(data)
		} catch (error) {}
	}

	return (
		<>
			<div className='flex justify-between mb-6'>
				<Back asLink href='/incidents' />
			</div>

			<FormLayout
				title='Incident Form'
				description='Provide all necessary information about this Incident'
				onSubmitForm={handleFormSubmit}
			>
				<TextInput
					label='Incident time'
					type='datetime-local'
					onInput={(e) => setIncidentTime(e.target.value)}
					value={incidentTime}
					required
				/>
				<SelectInput
					label='System App'
					onChange={(e) => setSystemApp(e.target.value)}
					value={systemApp}
					options={systemApps}
					placeholder='Select a system app'
					required
				/>
				<SelectInput
					label='Domain'
					onChange={(e) => setDomain(e.target.value)}
					value={domain}
					options={domains}
					placeholder='Select problem domain'
					required
				/>
				<SelectInput
					label='Severity'
					onChange={(e) => setSeverity(e.target.value)}
					value={severity}
					options={severities}
					placeholder='Select severity level'
					required
				/>
				<SelectInput
					label='Status'
					onChange={(e) => setStatus(e.target.value)}
					value={status}
					options={statuses}
					placeholder='Select incident status'
					required
				/>

				<span></span>

				<TextArea
					containerClasses='col-span-3'
					label='Specific Problem description'
					onInput={(e) => setSpecificProblems(e.target.value)}
					value={specificProblems}
					required
				/>

				<TextArea
					containerClasses='col-span-3'
					label='Resolution remarks'
					onInput={(e) => setResolution(e.target.value)}
					value={resolution}
				/>
			</FormLayout>
		</>
	)
}
