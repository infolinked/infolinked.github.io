import Container from "@/components/container"
import List from "./list"
import Navbar from "../../components/navbar"

export default async function Blogs() {
    return (
        <Container>
            <Navbar/>
            <List />
        </Container>
    )
} 