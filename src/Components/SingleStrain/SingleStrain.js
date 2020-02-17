import React,{ useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleStrain = () => {
  const { id, name } = useParams()
  const [strain, handleStrain] = useState()

  const getInfo = async() => {
    const apiCallRaw = await fetch(`http://strainapi.evanbusse.com/QYMhHVO/strains/data/effects/${id}`)
    const apiCallJson = await apiCallRaw.json()
    handleStrain(apiCallJson)
  }
 !strain && getInfo()

  strain && console.log(strain)

  if(strain){
    return(
      <section>
        {strain.positive.length ? <div>
          <h1>{name}</h1>
          <h3>Positive</h3>
          {strain.positive.map((item)=><p>{item}</p>)}
        </div> : null}
        {strain.negative.length ? <div>
          <h3>Negative</h3>
          {strain.negative.map((item)=><p>{item}</p>)}
        </div>:null}
        {strain.medical.length? <div>
          <h3>Effective against</h3>
          {strain.medical.map((item)=><p>{item}</p>)}
        </div> : null}
      </section>

    )
  }else{
    return(
      <div>
        <p>placeholder image</p>
      </div>
    )
  }
}

export default SingleStrain