const header = document.createElement("header");
header.classList.add("header");


header.innerHTML = `
    <img class="logo" src="images/DOUBLE D’S (500 x 350 px) (500 x 350 px) (500 x 250 px) (1).png" alt="logo">
    <nav class="menu">
        <a class="link" href="index.html">Home</a>
        <a class="link" href="hours.html">Hours</a>
        <a class="link" href="specials.html">Specials</a>
        <a href="https://www.skipthedishes.com/double-ds-roadhouse" target="_blank rel="noopener noreferrer">
        <img src="images/Skip_Logo.svg" alt"Order on SkipTheDishes" class="skip-logo">
        </a>
        <a class="link" href="https://www.instagram.com/ddroadhouse34?igsh=NXkxYWxrYXJ0bjR4" target="_blank">
            <i class="fa-brands fa-instagram"></i>
        </a>
    </nav>
`;

document.body.insertAdjacentElement("afterbegin", header);
