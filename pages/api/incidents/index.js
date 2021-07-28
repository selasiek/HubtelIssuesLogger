// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function incidentsApi(req, res) {
    const data = await fetch(`http://18.224.29.228/api/Incidents`)
	const incidents = await data.json()
    // console.log(incidents)

    res.status(200).json({ incidents })
  }

  export default incidentsApi
  