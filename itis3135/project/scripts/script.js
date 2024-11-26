document.addEventListener("DOMContentLoaded", () => {
    // Client info. to dynamically load
    const clientName = "Ethan Orange";
    const clientCompany = "Ethanphotojuice";
    const clientEmail = "ethanorange@gmail";
    const clientPhone = "1+ (***) ***-****";

    // Insert into footer or contact section
    const footerElement = document.querySelector("footer");
    const contactSection = document.querySelector("#contact-info");

    if (footerElement) {
        footerElement.innerHTML += `<p>Contact: ${clientName} | ${clientEmail} | ${clientPhone}</p>`;
    }

    if (contactSection) {
        contactSection.innerHTML += `
        <p><strong>${clientName}</strong><br>${clientCompany}<br>
        Email: <a href="mailto:${clientEmail}">${clientEmail}</a><br>
        Phone: ${clientPhone}</p>`;
    }
})