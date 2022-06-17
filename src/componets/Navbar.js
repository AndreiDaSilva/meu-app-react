import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <Link className="nav-link active" id="pills-home-tab" data-toggle="pill" to="/" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                </li>
                <li className="nav-item">
                <Link  className="nav-link" id="pills-profile-tab" data-toggle="pill" to="/empresa" role="tab" aria-controls="pills-profile" aria-selected="false">Empresa</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" id="pills-contact-tab" data-toggle="pill" to="/contato" role="tab" aria-controls="pills-contact" aria-selected="false">Contato</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar