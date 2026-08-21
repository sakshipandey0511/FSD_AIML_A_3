const data=[
    { image: "https://miro.medium.com/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg", price: "₹500" },
    { image: "https://i.pinimg.com/564x/71/3f/f2/713ff2828de8fd471369fed7991d9cc7.jpg", price: "₹750" },
    { image: "https://i.pinimg.com/originals/11/ae/e8/11aee8055be8960a2fd0024057c7fa8f.jpg", price: "₹1000" }
];



function Book(props) {
    const image=React.createElement("img",{src:props.image,width:"200px",height:"200px",align:"center"});
    const h2=React.createElement("h2",{color:"Blue"},"Price: "+props.price);
    const child=React.createElement("div",{className:"card"},[image,h2]);
    return child;
}
const booklist=React.createElement("div",{className:"booklist"},
    data.map((b)=>Book(b))
);
const parent=document.getElementById("root");
ReactDOM.render(booklist,parent);