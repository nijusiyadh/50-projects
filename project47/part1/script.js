const testimonials = [
  {
    name: "Renee Sims",
    postion: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/81.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolo dolore ab fuga nam vitae ea officiis impedit quas totam! Magnam exobcaecati iure dignissimos cumque laudantium nisi deserunt tenetur.",
  },
  {
    name: "Renee Sims",
    postion: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/81.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolo dolore ab fuga nam vitae ea officiis impedit quas totam! Magnam exobcaecati iure dignissimos cumque laudantium nisi deserunt tenetur.",
  },
  {
    name: "Renee Sims",
    postion: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/81.jpg",
    text: "Lorem ipsum dolor adipisicing elit. Incidunt dolo dolore ab fuga nam vitae ea officiis impedit quas totam! Magnam exobcaecati iure dignissimos cumque laudantium nisi deserunt tenetur.",
  },
  {
    name: "Renee Sims",
    postion: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/81.jpg",
    text: "Lorem i dolor sit ar adipisicing elit. Incidunt dolo dolore ab fuga nam vitae ea officiis impedit quas totam! Magnam exobcaecati iure dignissimos cumque laudantium nisi deserunt tenetur.",
  },
  {
    name: "Renee Sims",
    postion: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/81.jpg",
    text: "Lorem i dolo dolore ab fuga nam vitae ea officiis impedit quas totam! Magnam exobcaecati iure dignissimos cumque laudantium nisi deserunt tenetur.",
  },
];

const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

let idx = 1;

function updateTestimonial() {
  const { name, postion, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = postion;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(() => {
  updateTestimonial();
}, 1000 * 10);
