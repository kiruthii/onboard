
export const Button=({label,onClick,type='button'})=>{
    return(
        <>
            <button type={type} onClick={onClick}>{label}</button>
        </>
    )
}