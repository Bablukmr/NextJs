import Image from "next/image"
import Load from '../../../public/load.gif'

function loader() {
  return (
    <div>
        <h1>Loading....</h1>
        <Image priority={true} alt="IMG" src={Load} width={200} height={200} />
    </div>
  )
}

export default loader