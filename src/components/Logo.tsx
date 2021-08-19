import LogoSvg from "../../public/logo_af-de-fionie_rgb.svg"
import Link from "next/link";

export default function Logo(){
    return (
        <div className="container">
            <Link href="/">
                <a>
                    <LogoSvg height={38} />
                </a>
            </Link>
            <style jsx>
                {`
                .container {
                    position: fixed;
                    cursor: pointer;
                    top: 1rem;
                    right: 1.25rem;
                    z-index: 2;
                    background-color: rgba(255, 255, 255, 0.7);
                    padding: 0 .2rem;
                }
                `}
            </style>
        </div>
    );
}