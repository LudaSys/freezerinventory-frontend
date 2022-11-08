import Navbar from "../../components/navbar/navbar";

export default function Layout(props: {children: React.ReactNode}) {
    return (
        <>
            <div className="container mx-auto">
                <Navbar/>
                <main>
                    {props.children}
                </main>
            </div>
        </>
    );
}