const allPostContainer = document.getElementById("all-post-container");
const latestPostContainer = document.getElementById("latest-card-container");

const fetchAllPosts =async() =>{
  const url = "https://openapi.programming-hero.com/api/retro-forum/posts";
  const response = await fetch(url); 
  const data = await response.json();
  // console.log(data.posts);
  const allPosts = data.posts;
  allPosts.forEach((item)=>{
    // console.log(item);
    const div = document.createElement("div");
    div.classList.add("flex");
    div.innerHTML = `
    <!--card left-->
    <div class="w-1/6 h-24 mt-4 ml-2 bg-white rounded-2xl relative">
      <img src="${item.image}">
      <div class="absolute bg-red-600 rounded h-3 w-3 top-0 right-0"></div>
    </div>
    <!--card right-->
    <div class="card-body text-start w-5/6">
      <div class="flex font-medium">
        <p># ${item.category}</p>
        <p>Author : ${item.author.name}</p>
      </div>
      <div>
        <p  class="text-xl font-bold text-[#12132D]">${item.title}</p>
        <p class="mt-4">${item.description}</p>
      </div>
      <hr class="my-4 w-4/5">
      <div class=" flex justify-between">
        <div class="card-actions flex flex-row items-center gap-6">
          <div class="flex items-center gap-4">
            <p><i class="fa-regular fa-message"></i></p>
            <p>${item.comment_count}</p>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-regular fa-eye"></i>
            <p>${item.view_count}</p>
          </div>
          <div class="flex items-center gap-2">
            <i class="fa-regular fa-clock"></i>
            <p>${item.posted_time}</p>
          </div>
        </div>
        <button class="bg-[#10B981] btn btn-circle">
          <i class="fa-regular fa-envelope-open text-white text-2xl"></i>
         </button>
      </div>
    </div>
    `;
    allPostContainer.appendChild(div);
  });
}

// latest post section
const fetchLatestPosts = async()=>{
  const url = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
  const response = await fetch(url); 
  const data = await response.json();
  // console.log(data);
  let latestAllPosts = data;
  latestAllPosts.forEach((item)=>{
    const div = document.createElement("div");
    // div.classList = "";
    div.innerHTML = `
    
    <figure class="px-10 pt-10">
      <img src="${item.cover_image}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body text-start">
      <div>
        <p class="space-x-3"><span><i class="fa-solid fa-calendar-days"></i></span><span>${item.author.posted_date}</span></p>
      </div>
      <h2 class="card-title text-lg font-extrabold">${item.title}</h2>
      <p class="text-[#0C0D2D99]">${item.description}</p>
      <div class="card-actions flex">
        <img src="${item.profile_image}" alt="" class="rounded-full h-12 w-12">
        <div>
          <p>${item.author.name}</p>
          <p class="text-[#0C0D2D99]">${item.author.designation}</p>
        </div>
      </div>
    </div>
    `;
    latestPostContainer.appendChild(div);
  })

}

const handleSearch=() =>{
  const value = document.getElementById("search-box").value;
  if(value){
    
  }
  else{
    alert("Please Enter a Valid Category");
  }
}
fetchAllPosts();
fetchLatestPosts();

