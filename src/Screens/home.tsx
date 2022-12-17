import { alignProperty } from '@mui/material/styles/cssUtils'
import { margin } from '@mui/system'
import TableDrawer from '../Components/tableDrawer/TableDrawer'

const Home = () => {

    const test = () => {
        alert("test")
    }
    return (
        <div>
            <h1>Home</h1>

            <TableDrawer />

            {/* <button style={{marginTop:"199%", marginLeft:"42%", padding:"30px"}} onClick={test}>Test</button> */}

        </div>
    )
}

export default Home