import { connect } from 'react-redux'
import Home from '../components/Home'
import {addToCart} from '../Services/Actions/actions'

const mapStatetoProps = state=>({
    data:state.cardItem
})

const mapDispatchtoProps = dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStatetoProps,mapDispatchtoProps)(Home)








// export default Home