import Container from "../componentes/Container";
import Card from "../componentes/Card";
import Header from "../componentes/Header";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="w-screen h-[85vh] bg-background flex justify-center">
                <Container title="Minha Lista">
                    <Card title="Lorem Ipsum" />
                    <Card title="Item 2" />
                </Container>
                <Container title="Minha Lista">
                    <Card title="Item 1" />
                    <Card title="Item 2" />
                </Container>
                <Container title="Minha Lista">
                    <Card title="Item 1" />
                    <Card title="Item 2" />
                </Container>
            </div>
        </div>
    )
}