import InputField from "./InputField";

const Furniture = ({setH, setW, setL})=>{
    return (
        <>
            <InputField id='height' label='Height (CM)' type='number' setValue={setH}/>
            <InputField id='width' label='Width (CM)' type='number' setValue={setW}/>
            <InputField id='lenght' label='Length (CM)' type='number' setValue={setL}/>
        </>
    )
}

export default Furniture;