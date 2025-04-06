
document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggler = document.getElementById("sidebarToggler");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("closeSidebar");
    const mainContent = document.getElementById("mainContent");
    const darkModeToggler = document.getElementById("darkModeToggler");
    const header = document.querySelector("header");
    const logoText = document.querySelector(".logo-text"); 
	const logoImage = document.querySelector(".logo-image");
	

    let darkMode = false;
    let lastScrollTop = 0; // Variable to store the last scroll position
    document.body.classList.remove("dark-mode");
    darkModeToggler.innerHTML = "🌙";

    sidebarToggler.addEventListener("click", () => {
        const isOpen = sidebar.style.left === "0%";

        if (isOpen) {
            gsap.to(sidebar, { left: "-100%", duration: 0.3 });
            gsap.to(mainContent, { filter: "none", duration: 0.3 });
            gsap.to(header, { top: "0", duration: 0.3 });
            sidebarToggler.innerHTML = "&#9776;";
            closeSidebar.style.display = "none";
        } else {
            gsap.to(sidebar, { left: "0%", duration: 0.3 });
            gsap.to(mainContent, { filter: "blur(5px)", duration: 0.8 });
            gsap.to(header, { top: "0", duration: 0.3 });
            sidebarToggler.style.display = "none";
            closeSidebar.style.display = "block";
        }
    });

    closeSidebar.addEventListener("click", () => {
        gsap.to(sidebar, { left: "-100%", duration: 0.3 });
        gsap.to(mainContent, { filter: "none", duration: 0.3 });
        gsap.to(header, { top: "0", duration: 0.3 });
        sidebarToggler.style.display = "block";
        closeSidebar.style.display = "none";
    });

    darkModeToggler.addEventListener("click", () => {
        darkMode = !darkMode;
        document.body.classList.toggle("dark-mode", darkMode);
        darkModeToggler.innerHTML = darkMode ? "🌞" : "🌙";
    });

    const menuItem1 = document.getElementById("menuItem1");
    const submenu1 = document.getElementById("submenu1");
    const arrow1 = document.getElementById("arrow1");

    menuItem1.querySelector('.submenu-toggle').addEventListener("click", () => {
        const isOpen = submenu1.style.display === "block";
        if (isOpen) {
            submenu1.style.display = "none";
            arrow1.innerHTML = "&#8593;";
        } else {
            submenu1.style.display = "block";
            arrow1.innerHTML = "&#8595;";
        }
    });

    // Scroll detection to hide/show logo-text
    window.addEventListener("scroll", function () {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            logoText.style.transform = "translateY(-400%)";
			logoImage.style.transform = "translateY(-400%)";// Hide the logo text
        } else {
            // Scrolling up
            logoText.style.transform = "translateY(0)";
			logoImage.style.transform = "translateY(0)";
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Prevent negative scroll value
    });
});

    