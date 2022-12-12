import { Button } from "@mui/material"
import Input from "../Components/input/Input"

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Input />
            <Button variant="contained" sx={{bgcolor:"myColor.main"}}>Outlined</Button>
            <Button variant="contained" sx={{bgcolor:"primary"}}>Outlined</Button>
        </div>
    )
}

export default Home