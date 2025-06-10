import { Header } from "./elements/Header";
import { Footer } from "./elements/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {

    return (
        <>
            <Header />
            <main className="flex flex-col overflow-hidden ">
                {children}
            </main>
            <Footer />
        </>
    )
}