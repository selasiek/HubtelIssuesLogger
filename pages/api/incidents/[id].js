// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const data = await fetch(`http://18.224.29.228/api/Incidents/${req.query.id}`)
	const incident = await data.json()

    res.status(200).json({data: incident})
  }