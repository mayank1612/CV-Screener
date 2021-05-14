const data = [
  {
    name: "Rohan Das",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },

  {
    name: "Shubham Sharma",
    age: 28,
    city: "Bangalore",
    language: "JavaScript",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },

  {
    name: "Camella Cabello",
    age: 18,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/55.jpg"
  },

  {
    name: "Aishwariya Rai",
    age: 45,
    city: "Mumbai",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/57.jpg"
  },

  {
    name: "Rohit Sharma",
    age: 34,
    city: "Jharkhand",
    language: "Go",
    framework: "Go Framework",
    image: "https://randomuser.me/api/portraits/men/61.jpg"
  }
];

function cvIterator(profiles) {
  let index = 0;
  return {
    next: function () {
      return index < profiles.length
        ? { value: profiles[index++], data: false }
        : { data: true };
    }
  };
}

let candidate = cvIterator(data);

let next = document.getElementById("next");

nextCv();

next.addEventListener("click", nextCv);

function nextCv(e) {
  //e.preventDefault();
  let imagesec = document.getElementById("image");
  let profile = document.getElementById("profile");
  currentCandidate = candidate.next();
  if (!currentCandidate.data) {
    imagesec.innerHTML = `<img src="${currentCandidate.value.image}"</img>`;
    profile.innerHTML = `
                        <ul class="list-group">
                          <li class="list-group-item">Name: ${currentCandidate.value.name}</li>
                          <li class="list-group-item">Age: ${currentCandidate.value.age}</li>
                          <li class="list-group-item">City: ${currentCandidate.value.city}</li>
                          <li class="list-group-item">Launguage: ${currentCandidate.value.language}</li>
                          <li class="list-group-item">Framework: ${currentCandidate.value.framework}</li>
                        </ul>
                      `;
  } else {
    alert("All CV's are completed");
    window.location.reload();
  }
}
