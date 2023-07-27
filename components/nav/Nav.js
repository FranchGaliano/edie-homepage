import Image from 'next/image';
import "components/nav/nav.css";

function Nav() {
  return (
    <nav>
        <h3>Edie</h3>
        <div>
            <Image src="./menu.svg" alt="Menu" width={30} height={30} />
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Our Works</li>
                <li>Clients</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav