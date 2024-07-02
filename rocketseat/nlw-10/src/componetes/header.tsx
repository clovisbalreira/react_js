import { NavLink } from "./navLink";

export function Header(){
    return (
        <div className="flex items-center gap-5">
            <nav className="flex items-center gap-5 py-2">
                <NavLink href="./eventos">Eventos</NavLink>
                <NavLink href="./participantes">Participantes</NavLink>
            </nav>
        </div>
    )
}