import style from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="relative flex flex-wrap px-12 m-16">
            <div className="basis basis-2/12">TITLE</div>
            <div className="basis-10/12">
                <div className="flex float-right top-0">
                    <div className="ml-5"><Link href="/inventory">Inventory</Link></div>
                    <div className="ml-5"><Link className="ml-5" href="/">Nutrition</Link></div>
                    <div className="ml-5"><Link className="ml-5" href="/">Other</Link></div>
                </div>
            </div>
        </nav>
    );
}