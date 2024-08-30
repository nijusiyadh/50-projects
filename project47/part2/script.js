const testimonailData = [
  {
    id: 1,
    name: "Lance Jarvis",
    location: "London, UK",
    designation: "General Manager ",
    avatar: "https://testimonialapi.toolcarton.com/avatar/1.jpg",
    message:
      "We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.8,
    audio: "https://testimonialapi.toolcarton.com/audio/1.mp3",
  },
  {
    id: 2,
    name: "Juliet Wright",
    location: "Sweden",
    designation: "Technical Director",
    avatar: "https://testimonialapi.toolcarton.com/avatar/2.jpg",
    message:
      "It has changed the way I used the website. Product lets you create anything you envision and it does it so easy and flawless. I can't imagine not working with the service.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.4,
    audio: "https://testimonialapi.toolcarton.com/audio/2.mp3",
  },
  {
    id: 3,
    name: "Michael D.",
    location: "Austin, Texas",
    designation: "Investor",
    avatar: "https://testimonialapi.toolcarton.com/avatar/3.jpg",
    message:
      "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.5,
    audio: "https://testimonialapi.toolcarton.com/audio/3.mp3",
  },
  {
    id: 4,
    name: "Kylie Lutz",
    location: "Paris, France",
    designation: "Freelancer",
    avatar: "https://testimonialapi.toolcarton.com/avatar/4.jpg",
    message:
      "The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 5,
    audio: "https://testimonialapi.toolcarton.com/audio/4.mp3",
  },
  {
    id: 5,
    name: "Mark Twin",
    location: "Berlin, Germany",
    designation: "Developer",
    avatar: "https://testimonialapi.toolcarton.com/avatar/5.jpg",
    message:
      "Best company I have ever deal with online! Quick delivery and excellent customer service. Will definetly upgrade the service.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.5,
    audio: "https://testimonialapi.toolcarton.com/audio/5.mp3",
  },
  {
    id: 6,
    name: "Anne",
    location: "New York, USA",
    designation: "Content Writer & Artist",
    avatar: "https://testimonialapi.toolcarton.com/avatar/6.jpg",
    message:
      "These folks are my go-to for any design or branding services. Excellent communication and I feel like I'm always a priority for them.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
    rating: 4.7,
    audio: "https://testimonialapi.toolcarton.com/audio/6.mp3",
  },
];
const testimonialInfo = document.querySelector(".info");

let selectedTestimonialIndex = 0;

const displayTestimonial = () => {
  const testimonial = testimonailData[selectedTestimonialIndex];
  testimonialInfo.innerHTML = "";
  const html = `
    <div class="text">
              <p>
                ${testimonial.message}
              </p>
            </div>
            <div class="profile">
              <div class="image-container">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
              </div>
              <div class="user">
                <h4>l${testimonial.name}</h4>
                <h4>${testimonial.location}</h4>
              </div>
            </div>
    `;
  testimonialInfo.insertAdjacentHTML("afterbegin", html);
};

displayTestimonial(selectedTestimonialIndex);

setInterval(() => {
  console.log(selectedTestimonialIndex);

  if (selectedTestimonialIndex < testimonailData.length - 1) {
    selectedTestimonialIndex++;
  } else {
    selectedTestimonialIndex = 0;
  }

  displayTestimonial(selectedTestimonialIndex);
}, 1000 * 10);
