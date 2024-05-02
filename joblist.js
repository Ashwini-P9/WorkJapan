 // Function to open the modal and display job details
function openModal(job) {
    var modal = document.getElementById("job-modal");
    var title = document.getElementById("modal-title");
    var location = document.getElementById("modal-location");
    var description = document.getElementById("modal-description");
    var image =document.getElementById("modal-image");

    title.textContent = job.title;
    location.textContent = job.location;
    description.textContent = job.description;
    image.textContent=job.image;

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("job-modal");
    modal.style.display = "none";
}

// Function to display job listings
function displayJobListings(listings) {
    var container = document.getElementById("job-listings-container");
    container.innerHTML = ""; // Clear previous listings

    listings.forEach(function(listing) {
        var jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
          <img src="${listing.image}" alt="${listing.title}" class="job-image">
            <h3>${listing.title}</h3>
            <p><strong>Location:</strong> ${listing.location}</p>
            <p>${listing.description}</p>
        `;
        jobCard.addEventListener("click", function() {
            openModal(listing);
        });
        container.appendChild(jobCard);
    });
}

var jobListings = [
    { 
        title: "Software Engineer", 
        location: "Tokyo", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "software.png" // Replace with the path to your image file
    },
    { 
        title: "English Teacher", 
        location: "Osaka", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "english_teacher.jpg" // Replace with the path to your image file
    },
    { 
        title: "Frontend Developer", 
        location: "Osaka", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "english_teacher.jpg" // Replace with the path to your image file
    },
    { 
        title: "Java Developer", 
        location: "Osaka", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "english_teacher.jpg" // Replace with the path to your image file
    },
    { 
        title: "Trainer", 
        location: "Osaka", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "english_teacher.jpg" // Replace with the path to your image file
    },
    { 
        title: "English Teacher", 
        location: "Osaka", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "english_teacher.jpg" // Replace with the path to your image file
    },
     
];


// Initial display of job listings
displayJobListings(jobListings);

// Function to handle the button click and open the application form in a new window/tab
function openApplicationForm() {
    window.open("Applicationform.html", "_blank");
}

 

///Search job listing
// Function to filter job listings based on search query
function filterJobListings(searchQuery) {
    const filteredListings = jobListings.filter((job) => {
        return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
               job.description.toLowerCase().includes(searchQuery.toLowerCase());
    });
    displayJobListings(filteredListings);
}

// Event listener for search input
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (event) => {
    const searchQuery = event.target.value.trim();
    filterJobListings(searchQuery);
});
