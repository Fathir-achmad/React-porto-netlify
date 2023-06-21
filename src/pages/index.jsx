import{Link} from "react-router-dom";
import "../style/style.css";

export default function Index() {
    return(
        <div>
            <input type="text" />
            <div class="home" id="home">
            <div class="home-left">Halo, saya <br /> Fathir achmad sabiilah
                <div class="kontak"><a href="mailto:fathir17.fa@gmail.com" target="_blank" rel="noreferrer">fathir17.fa@gmail.com</a>
                </div>
                <div class="kontak">+62 822 1011 9007</div>
                <div class="kontak">Indonesia</div>
            </div>
        </div>
        </div>
    )
}