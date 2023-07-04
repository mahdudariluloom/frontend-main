function Card({style, children}:{style:string, children:any}) {
    return (
        <>
        <div className={`px-5 py-10 rounded-bl-lg rounded-tr-lg ${style}`}>
            {children}
        </div>
        </>
    )
}
export default Card;