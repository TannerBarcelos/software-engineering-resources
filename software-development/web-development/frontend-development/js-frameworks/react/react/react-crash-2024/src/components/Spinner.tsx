import { DotLoader } from 'react-spinners'

type TSpinner = {
    loading: boolean
}

const cssOverrides = {
    display: 'block',
    margin: '100px auto',
}

function Spinner({ loading }: TSpinner) {
    return (
        <DotLoader color="#2563EB" loading={ loading } size={ 50 } cssOverride={ cssOverrides } />
    )
}
export default Spinner