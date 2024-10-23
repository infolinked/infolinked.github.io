import Container from "@/components/container"
import List from "./list"
import Navbar from "../../components/navbar"
//import SearchComponent from "@/components/search-component"

export default async function MindMaps() {
    return (
        <Container>
            <Navbar/>
            <List />
        </Container>
    )
} 