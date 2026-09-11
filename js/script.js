const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("header nav ul");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show-menu");

    const menuIsOpen = navMenu.classList.contains("show-menu");

    menuToggle.setAttribute("aria-expanded", menuIsOpen);
});

const serviceCategories = document.querySelectorAll(
    'input[name="Service Category"]'
);

const specificServices = document.querySelector("#specific-services");
const serviceSelection = document.querySelector("#service-selection");
const nailOptions = document.querySelector("#nail-options");
const appointmentDate = document.querySelector("#appointment-date");
const appointmentTime = document.querySelector("#appointment-time");
const nailType = document.querySelector("#nail-type");
const nailLengthOptions = document.querySelector("#nail-length-options");
const bookingForm = document.querySelector("#booking-form");
const estimatedTotal = document.querySelector("#estimated-total");
const nailLength = document.querySelector("#nail-length");
const nailShape = document.querySelector("#nail-shape");
const inspirationPhoto = document.querySelector("#inspiration-photo");
const nailAddons = document.querySelectorAll(
    'input[name="Nail Add-Ons"]'
);

const careerForm = document.querySelector("#career-form");
const licensed = document.querySelector("#licensed");
const licensedApplicantFields =
    document.querySelector("#licensed-applicant-fields");
const estimatedTotalInput =
    document.querySelector("#estimated-total-input");


const services = {
    nails: [
    { name: "Kids Manicure (Ages 8 & Under)", price: 15, displayPrice: "$15" },
    { name: "Kids Manicure (Ages 9–12)", price: 20, displayPrice: "$20" },    
    { name: "Manicure", price: 25, displayPrice: "$25" },
    { name: "Russian Manicure", price: 35, displayPrice: "$35" },
    { name: "Deluxe Manicure", price: 35, displayPrice: "$35" },
    { name: "Regular Acrylic Full Set", price: 40, displayPrice: "$40" },
    { name: "Acrylic Fill", price: 30, displayPrice: "$30" },
    { name: "Pink & White Full Set", price: 65, displayPrice: "$65" },
    { name: "Pink Fill", price: 45, displayPrice: "$45" },
    { name: "White Tip Full Set", price: 50, displayPrice: "$50+" },
    { name: "White Tip Fill", price: 35, displayPrice: "$35+" },
    { name: "Ombre Full Set", price: 65, displayPrice: "$65" },
    { name: "Gel-X Full Set", price: 65, displayPrice: "$65" },
    { name: "Gel-X Fill", price: 55, displayPrice: "$55" },
    { name: "Dip Powder", price: 45, displayPrice: "$45" },
    { name: "Dip Ombre", price: 55, displayPrice: "$55" },
    { name: "Dip Pink & White", price: 50, displayPrice: "$50" }
],

    pedicure: [
    { name: "Kids Regular Pedicure (Ages 8 & Under)", price: 25, displayPrice: "$25" },
    { name: "Kids Regular Pedicure (Ages 9–12)", price: 30, displayPrice: "$30" },
    { name: "Kids Gel Pedicure (Ages 8 & Under)", price: 40, displayPrice: "$40" },
    { name: "Kids Gel Pedicure (Ages 9–12)", price: 45, displayPrice: "$45" },    
    { name: "Classic Pedicure", price: 40, displayPrice: "$40" },
    { name: "Deluxe Pedicure", price: 50, displayPrice: "$50" },
    { name: "Premium Pedicure", price: 60, displayPrice: "$60" },
    { name: "Jelly Spa Pedicure", price: 70, displayPrice: "$70" },
    { name: "Collagen Spa Pedicure", price: 80, displayPrice: "$80" },
    { name: "Golden Spa Pedicure", price: 100, displayPrice: "$100" }
],

"brows-waxing": [
    { name: "Eyebrow Wax", price: 15, displayPrice: "$15" },
    { name: "Eyebrow Tint", price: 25, displayPrice: "$25" },
    { name: "Lip Wax", price: 10, displayPrice: "$10" },
    { name: "Chin Wax", price: 15, displayPrice: "$15+" },
    { name: "Full Face Wax", price: 40, displayPrice: "$40" },
    { name: "Underarm Wax", price: 30, displayPrice: "$30+" },
    { name: "Full Arm Wax", price: 45, displayPrice: "$45+" },
    { name: "Half Leg Wax", price: 40, displayPrice: "$40+" },
    { name: "Full Leg Wax", price: 60, displayPrice: "$60+" },
    { name: "Chest Wax", price: 60, displayPrice: "$60+" },
    { name: "Back Wax", price: 70, displayPrice: "$70+" }
],

lashes: [
    { name: "Individual Lash Full Set", price: 100, displayPrice: "$100" },
    { name: "Individual Lash 2-Week Fill", price: 45, displayPrice: "$45" },
    { name: "Individual Lash 3-Week Fill", price: 55, displayPrice: "$55" },
    { name: "Cluster Lashes", price: 50, displayPrice: "$50" },
    { name: "Lash Strips", price: 25, displayPrice: "$25" },
    { name: "Lash Lift", price: 60, displayPrice: "$60" }
    ]
};

serviceCategories.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {

const previousSelections = {};

const currentDropdowns = 
    specificServices.querySelectorAll("select");

currentDropdowns.forEach(function (select) {
    previousSelections[select.name] = select.value;
});
        specificServices.innerHTML = "";

        serviceCategories.forEach(function (category) {

            if (category.checked) {
                const selectedCategory = category.value;

                const label = document.createElement("label");

                if (selectedCategory === "nails") {
                    label.textContent = "Nail Service";
                } else if (selectedCategory === "pedicure") {
                    label.textContent = "Pedicure Service";
                } else if (selectedCategory === "brows-waxing") {
                    label.textContent = "Brows & Waxing Service";
                } else if (selectedCategory === "lashes") {
                    label.textContent = "Lash Service";
                }

                const select = document.createElement("select");

                const selectId = `${selectedCategory}-service`;
select.id = selectId;
label.htmlFor = selectId;

                if (selectedCategory === "nails") {
    select.name = "Nail Service";
} else if (selectedCategory === "pedicure") {
    select.name = "Pedicure Service";
} else if (selectedCategory === "brows-waxing") {
    select.name = "Brows & Waxing Service";
} else if (selectedCategory === "lashes") {
    select.name = "Lash Service";
}

select.required = true;

                const firstOption = document.createElement("option");
                firstOption.value = "";
                firstOption.textContent = "Select a service";

                select.appendChild(firstOption);

                services[selectedCategory].forEach(function (service) {
    const option = document.createElement("option");

    if (typeof service === "object") {
        option.value = service.name;
        option.textContent = `${service.name} - ${service.displayPrice}`;
        option.dataset.price = service.price;
    } else {
        option.value = service;
        option.textContent = service;
    }

    select.appendChild(option);
});

                specificServices.appendChild(label);
                specificServices.appendChild(select);

                if (previousSelections[select.name]) {
    select.value = previousSelections[select.name];
}

                select.addEventListener("change", calculateTotal);
            }
        });

        const nailsCheckbox = document.querySelector(
            'input[name="Service Category"][value="nails"]'
        );

        if (nailsCheckbox.checked) {
    nailOptions.style.display = "block";
} else {
    nailOptions.style.display = "none";

    nailType.value = "";
    nailLength.value = "";
    nailShape.value = "";
    inspirationPhoto.value = "";

    nailAddons.forEach(function (addon) {
        addon.checked = false;
    });

    nailLengthOptions.style.display = "none";
}

const categorySelected = Array.from(serviceCategories).some(function (category) {
    return category.checked;
});

if (categorySelected) {
    serviceSelection.style.display = "block";
} else {
    serviceSelection.style.display = "none";
}

calculateTotal();
    });
});

function calculateTotal() {
    let total = 0;

    const serviceDropdowns = specificServices.querySelectorAll("select");

    serviceDropdowns.forEach(function (select) {
        const selectedOption = select.options[select.selectedIndex];

        if (selectedOption && selectedOption.dataset.price) {
            total += Number(selectedOption.dataset.price);
        }
    });

    const nailsCheckbox = document.querySelector(
    'input[name="Service Category"][value="nails"]'
);

if (nailsCheckbox.checked) {

    if (nailLength.value) {
        const selectedLength =
            nailLength.options[nailLength.selectedIndex];

        total += Number(selectedLength.dataset.price || 0);
    }

    if (nailShape.value) {
        const selectedShape =
            nailShape.options[nailShape.selectedIndex];

        total += Number(selectedShape.dataset.price || 0);
    }

    nailAddons.forEach(function (addon) {
        if (addon.checked) {
            total += Number(addon.dataset.price || 0);
        }
    });
}

    estimatedTotal.textContent = `$${total}`;
    estimatedTotalInput.value = `$${total}`;
}

nailLength.addEventListener("change", calculateTotal);

nailShape.addEventListener("change", calculateTotal);

nailAddons.forEach(function (addon) {
    addon.addEventListener("change", calculateTotal);
});

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const todayFormatted = `${year}-${month}-${day}`;

appointmentDate.min = todayFormatted;

nailType.addEventListener("change", function () {
    if (nailType.value === "extensions") {
        nailLengthOptions.style.display = "block";
    } else {
        nailLengthOptions.style.display = "none";
        nailLength.value = "";
    }

    calculateTotal();
});

const serviceCategoryError = document.querySelector("#service-category-error");

bookingForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const selectedCategories =
        Array.from(serviceCategories).filter(function (category) {
            return category.checked;
        });

    if (selectedCategories.length === 0) {
        serviceCategoryError.hidden = false;
        serviceCategoryError.focus();
        return;
    }

    serviceCategoryError.hidden = true;

    const selectedServices = [];

    selectedCategories.forEach(function (category) {
        const select =
            document.querySelector(
                `#${category.value}-service`
            );

        if (select && select.value) {
            selectedServices.push({
                category: category.value,
                service: select.value
            });
        }
    });

    if (
        selectedServices.length !==
        selectedCategories.length
    ) {
        alert(
            "Please choose a specific service for every selected category."
        );
        return;
    }

    const selectedAddons =
        Array.from(nailAddons)
            .filter(function (addon) {
                return addon.checked;
            })
            .map(function (addon) {
                return addon.value;
            });

    document.querySelector("#services-data").value =
        JSON.stringify(selectedServices);

    document.querySelector("#nail-addons-data").value =
        JSON.stringify(selectedAddons);

    document.querySelector("#customer-name-data").value =
        document.querySelector("#full-name").value;

    document.querySelector("#phone-data").value =
        document.querySelector("#phone").value;

    document.querySelector("#email-data").value =
        document.querySelector("#email").value;

    document.querySelector("#nail-type-data").value =
        nailType.value;

    document.querySelector("#nail-length-data").value =
        nailLength.value;

    document.querySelector("#nail-shape-data").value =
        nailShape.value;

    document.getElementById("nail-tech-data").value =
    document.getElementById("nail-tech").value;

    document.querySelector("#date-data").value =
        appointmentDate.value;

    document.querySelector("#time-data").value =
        appointmentTime.value;

    document.querySelector("#details-data").value =
        document.querySelector("#appointment-notes").value;

    document.querySelector("#estimated-total-data").value =
        estimatedTotalInput.value;

    const submitButton =
        bookingForm.querySelector(".booking-submit");

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
        const photo = inspirationPhoto.files[0];

        if (photo) {
            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/webp"
            ];

            if (!allowedTypes.includes(photo.type)) {
                alert(
                    "Please upload a JPG, PNG, or WebP image."
                );

                submitButton.disabled = false;
                submitButton.textContent =
                    "Submit Booking Request";

                return;
            }

            if (photo.size > 5 * 1024 * 1024) {
                alert(
                    "Please upload an inspiration photo that is 5 MB or smaller."
                );

                submitButton.disabled = false;
                submitButton.textContent =
                    "Submit Booking Request";

                return;xx
            }

            const photoData =
                await fileToBase64(photo);

            document.querySelector("#photo-base64").value =
                photoData;

            document.querySelector("#photo-name").value =
                photo.name;

            document.querySelector("#photo-type").value =
                photo.type;
        }

const formData =
    new FormData(bookingForm);

await fetch(
    bookingForm.action,
    {
        method: "POST",
        body: formData,
        mode: "no-cors"
    }
);

window.location.href =
    "thank-you.html";
    
    } catch (error) {
        console.error(error);

        alert(
            "We couldn't submit your booking. Please try again."
        );

        submitButton.disabled = false;
        submitButton.textContent =
            "Submit Booking Request";
    }
});


function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        const reader = new FileReader();

        reader.onload = function () {
            resolve(reader.result);
        };

        reader.onerror = function () {
            reject(
                new Error(
                    "The inspiration photo could not be read."
                )
            );
        };

        reader.readAsDataURL(file);
    });
}

careerForm.addEventListener("submit", function (event) {
    if (licensed.value === "no") {
        event.preventDefault();

        licensed.setCustomValidity(
            "A current professional license is required to apply at O.P. Nails."
        );

        licensed.reportValidity();
    } else {
        licensed.setCustomValidity("");
    }
});

licensed.addEventListener("change", function () {
    licensed.setCustomValidity("");

    if (licensed.value === "yes") {
        licensedApplicantFields.style.display = "block";
    } else {
        licensedApplicantFields.style.display = "none";
    }
});

appointmentDate.addEventListener("change", function () {
    const selectedDate = new Date(appointmentDate.value + "T00:00:00");
    const dayOfWeek = selectedDate.getDay();

    // Clear any times from the previously selected date
    appointmentTime.innerHTML = '<option value="">Select a time</option>';

    let startHour;
    let startMinute;
    let lastHour;
    let lastMinute;

    if (dayOfWeek === 0) {
    // Sunday: last booking at 4:30 PM
    startHour = 11;
    startMinute = 0;
    lastHour = 16;
    lastMinute = 30;
} else {
    // Monday-Saturday: last booking at 6:30 PM
    startHour = 9;
    startMinute = 0;
    lastHour = 18;
    lastMinute = 30;
}

    let currentHour = startHour;
    let currentMinute = startMinute;

    while (
        currentHour < lastHour ||
        (currentHour === lastHour && currentMinute <= lastMinute)
    ) {
        const option = document.createElement("option");

        const hour12 =
            currentHour === 0
                ? 12
                : currentHour > 12
                ? currentHour - 12
                : currentHour;

        const minutes = String(currentMinute).padStart(2, "0");
        const period = currentHour >= 12 ? "PM" : "AM";

        const displayTime = `${hour12}:${minutes} ${period}`;

        option.value =
    `${String(currentHour).padStart(2, "0")}:${minutes}`;

option.textContent = displayTime;

        appointmentTime.appendChild(option);

        currentMinute += 30;

        if (currentMinute === 60) {
            currentMinute = 0;
            currentHour++;
        }
    }
});