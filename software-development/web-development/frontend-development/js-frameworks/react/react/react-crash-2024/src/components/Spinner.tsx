import { DotLoader } from 'react-spinners'

type TSpinner = {
    loading: boolean
}

const override = {
    display: 'block',
    margin: '100px auto',
}

function Spinner({ loading }: TSpinner) {
    return (
        <DotLoader color="#2563EB" loading={ loading } size={ 50 } cssOverride={ override } />
    )
}
export default Spinner