
async function incidentsApi(req, res) {
    // const requestData = JSON.parse(res.body)
    // console.log(JSON.parse(req.body))
    // res.status(200).send('OK')
    // return

    const data = await fetch(`http://18.224.29.228/api/Incidents`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: req.body
    })
	const response = await data.json()
    console.log(response)

    res.status(200).json({ response })
  }

  export default incidentsApi
  