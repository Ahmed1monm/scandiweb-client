import InputField from "./InputField";

const Dvd = ({setSize})=>{
    return (
        <>
        <InputField id='size' label='Size (MB)' type='number' setValue={setSize}/>
    </>
    )
}

export default Dvd;