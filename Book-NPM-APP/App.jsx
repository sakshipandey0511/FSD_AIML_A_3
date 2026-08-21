const bookdata = [
    {
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        price: "₹500"
       
    },
    {
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        price: "₹600"
        
    },
    {
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        price: "₹700"
        
    }
];
function App(){
    return(
    <div className="App">{
     bookdata.map((book) => {
        return <Book {...book} />;
     })
    }
    </div>)}

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App />);