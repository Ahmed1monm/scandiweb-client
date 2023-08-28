import InputField from "./InputField";

const Book = ({setWeight})=>{
    return (
        <>
            <InputField id='weight' label='Weight (KG)' type='number' setValue={setWeight}/>
        </>
    )
}

export default Book;