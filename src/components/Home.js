import React from 'react'

function Home() {
    return (
        <div>
        <div className="add-to-cart">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg" />
                </div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn.thenerdystudent.com/wp-content/uploads/2018/10/4A59CE8A-FE38-4CFE-B544-D340CBD5AF67.jpeg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    // onClick={
                    //     ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                    //     }
                        >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home