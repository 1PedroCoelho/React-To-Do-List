const List = ()=>{

    const items =[
        {
        id:1,
        name: "Pedro"
        },
        {
            id:2,
            name:"João"
        },
        {
            id:3,
            name:"Igor"
    }]


    return(
        <div>
            {items.map((item)=>(
                <p key={item.id}>
                    {item.name}
                    {item.id}
                </p>
            ))}
        </div>
    )
}
export default List