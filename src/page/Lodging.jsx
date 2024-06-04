import { useParams } from "react-router-dom"

const Lodging = () => {
    const { id } = useParams()
    // const id = useParams().id

    return (
        <div>{id}</div>
    )


}

export default Lodging