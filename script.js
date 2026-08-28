
document.addEventListener("DOMContentLoaded", function () {


    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });


    

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const navbarCollapse =
                document.querySelector(".navbar-collapse");

            if (
                navbarCollapse.classList.contains("show")
            ) {

                const bootstrapCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse);

                if (bootstrapCollapse) {
                    bootstrapCollapse.hide();
                }

            }

        });

    });


    

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !subject || !message) {

                formMessage.innerHTML = `
                    <div class="alert alert-danger">
                        Please fill in all fields.
                    </div>
                `;

                return;
            }


        
            formMessage.innerHTML = `
                <div class="alert alert-success">
                    Thanks, ${name}! Your message has been received.
                </div>
            `;

            contactForm.reset();

        });

    }

});
