export default function NavLink({target, label}: {target: string, label:string}): JSX.Element {
    return(
        <li><a href={target}>{label}</a></li>
    )
}