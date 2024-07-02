import Image from 'next/image';
import Link from 'next/link';
import avatar from '../img/juan-perez.png';

const header = () => {
    return (
        <header>
            <Image src={avatar} alt="Imagen de perfil de Juan Pérez" width={150} height={150} className="perfil-img" />
            <h1>Juan Pérez</h1>
            <nav>
                <ul>
                    <li><Link href="/">Perfil</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default header;
