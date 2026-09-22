import {Link} from 'react-router-dom'


function Header(){

    return (
        
        <header style = {
            {display : "flex", gap:"30px", alignItems:"center", backgroundColor:"orange", width:'100%'}
            }>
            
            <Link to = '/'> Home </Link>
            <Link to = '/about'> About </Link>
            <Link to = '/careers'> Careers </Link>
            <Link to = '/contact'> Contact </Link>
            <Link to = '/me'> My Account </Link>

        </header>
        
    )
}

export default Header;