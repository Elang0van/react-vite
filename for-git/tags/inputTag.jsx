
function InputTag({ names, value, name, onChange }) {

    return (
        <>
            <label>{names}</label>
            <input value={value} type="text" name={name} onChange={onChange} />
        </>
    )
}
export default InputTag;