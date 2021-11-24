let navbar = `
<div id="navbarMobil" class="d-none">
<ul class="nav" style="background-color: blue;">

        <li class="nav-item">
            <a class="nav-link" href="#" onclick="renderDashboard()">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" onclick="renderColecte()">Colecte</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" onclick="renderDonatii()"  href="#">Donatii</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" onclick="renderZeciuieli()">Zeciuieli</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" onclick="renderCheltuieli()">Cheltuieli</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#" onclick="renderAddData()">Adauga</a>
    </li>
    </ul>
    </div>
    <img src="./Hamburger_icon.svg" onclick="toggleMenu()" alt="">
`;
document.getElementById("navbarWrap").innerHTML = navbar;