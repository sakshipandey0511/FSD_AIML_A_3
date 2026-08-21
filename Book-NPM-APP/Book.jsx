function Book(props){
    return (
        <div className="card">
            <img src={props.image} width="200px" height="300px" />
            <h2 style={{ color: 'Red', padding: '10px' }}>Price:₹{props.price}</h2>
            <button>Add To Cart</button>
        </div>)
}