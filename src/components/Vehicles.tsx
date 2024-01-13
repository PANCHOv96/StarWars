import { Link } from 'react-router-dom'
import { useVehicles } from '../hooks/useVehicles'


export function Vehicles () {
    const { vehicles } = useVehicles()

  return (
        <>
            <h2>VEHICLES</h2>
            {vehicles?.map(vehicle => {
              return (
                <div key={vehicle.name} className='Personaje'>
                    {vehicle.name}
                    <Link to={'info'} state={vehicles} >+</Link>
                </div>
              )
            })}
        </>
  )
}
