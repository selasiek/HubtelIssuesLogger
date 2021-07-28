import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Back } from '../../components/Button'
import DescriptionList, { DescriptionItem } from '../../components/DescriptionList'
import Loader from '../../components/Loader'

export default function Incident() {
	const router = useRouter()
    const { id } = router.query
	const [incident, setIncident] = useState(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		;(async () => {
			try {
				if (id) {
					const res = await fetch(`/api/incidents/${id}`)
					const { data } = await res.json()
					setIncident(data)
				}
			} catch (error) {
                console.log(error.request)
            }
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return (
			<div className='h-96 flex justify-center items-center'>
				<Loader />
			</div>
		)
	}

	return (
		<div>
			<div className='flex justify-between mb-6'>
				<Back asLink href='/incidents'>
					Back
				</Back>
			</div>
			{!incident ? (
				<div>Nothing found</div>
			) : (
				<DescriptionList heading={`Incident ${id}`} description='Incident details'>
					<DescriptionItem title='Incident ID'>{incident.id}</DescriptionItem>
					<DescriptionItem title='System App'>{incident.systemApp.name}</DescriptionItem>
					<DescriptionItem title='incidentTime'>{incident.incidentTime}</DescriptionItem>
					<DescriptionItem title='timeOfResolution'>{incident.timeOfResolution}</DescriptionItem>
					<DescriptionItem title='duration'>{incident.duration}</DescriptionItem>
					<DescriptionItem title='specificProblems'>{incident.specificProblems}</DescriptionItem>
					<DescriptionItem title='resolution'>{incident.resolution}</DescriptionItem>
					<DescriptionItem title='severity'>{incident.severity}</DescriptionItem>
					<DescriptionItem title='status'>{incident.status}</DescriptionItem>
					<DescriptionItem title='domain'>{incident.domain}</DescriptionItem>
					<DescriptionItem title='loggedBy'>{incident.loggedBy}</DescriptionItem>
				</DescriptionList>
			)}
		</div>
	)
}
