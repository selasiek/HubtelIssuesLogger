import ClipLoader from 'react-spinners/ClipLoader'


export default function Loader() {
    return (
        <div>
            <ClipLoader color='#047857' loading={true} size={50} />
        </div>
    )
}
