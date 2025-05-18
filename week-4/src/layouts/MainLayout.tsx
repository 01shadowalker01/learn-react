import AdvancedSearch from "@/components/advanced-search/AdvancedSearch"
import Header from "@/components/header/Header"
import NavBar from "@/components/header/NavBar"

const MainLayout = () => {
    return (
        <>
            <header>
                <Header />
                <NavBar />
            </header>
            <AdvancedSearch />
        </>
    )
}

export default MainLayout