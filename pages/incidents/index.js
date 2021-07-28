import { useState, useEffect } from 'react'
import moment from 'moment'
import { FiEye, FiTrash, FiPlus } from 'react-icons/fi'
import { Table, THead, TData, THeadRow, TBodyRow } from '../../components/Table'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import Link from 'next/link'

function Incidents() {
	const [incidents, setIncidents] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		;(async () => {
			try {
				const res = await fetch('/api/incidents')
				const { incidents: data } = await res.json()
				setIncidents(data)
			} catch (error) {}
			setLoading(false)
		})()
	}, [])

	if (loading) {
		return (
			<div className="h-96 flex justify-center items-center">
				<Loader />
			</div>
		)
	}

	if (!incidents.length) {
		return <div>No data found</div>
	}

	return (
		<div>
			<div className='mb-6 flex justify-between'>
				<span></span>
				<Button className='bg-green-800 text-green-50' href='/incidents/form' asLink>
					<FiPlus />
					<span>Log Incident</span>
				</Button>
			</div>
			<Table>
				<thead>
					<THeadRow>
						<THead>Time Occured</THead>
						<THead>Time Resolved</THead>
						<THead>Duration</THead>
						<THead>Logged By</THead>
						<THead>created at</THead>
						<THead>...</THead>
					</THeadRow>
				</thead>
				<tbody>
					{incidents.map((incident) => (
						<TBodyRow key={incident.id}>
							<TData>{moment(incident.incidentTime).format('lll')}</TData>
							<TData>{moment(incident.timeOfResolution).format('lll')}</TData>
							<TData>{incident.duration} hours</TData>
							<TData>{incident.loggedBy}</TData>
							<TData>{incident.createdAt}</TData>
							<TData classes='flex space-x-3'>
								<Link href={`/incidents/${incident.id}`}>
									<a className='text-green-600 hover:shadow-lg'><FiEye /></a>
								</Link>
								{/* <a href={`/incidents/${incident.id}`} className='text-red-600'>
									<FiTrash />
								</a> */}
							</TData>
						</TBodyRow>
					))}
				</tbody>
			</Table>
		</div>
	)
}

// export async function getServerSideProps(context) {
// 	const res = await fetch(`http://18.224.29.228/api/Incidents`)
// 	const incidents = await res.json()
//     console.log(incidents)
// 	if (!incidents) {
// 		return {
// 			notFound: true,
// 		}
// 	}

// 	return {
// 		props: { incidents },
// 	}
// }

export default Incidents
