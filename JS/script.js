const allPostContainer = document.getElementById("all-post-container");
const latestPostContainer = document.getElementById("latest-card-container");
const postContainer = document.getElementById("post-container");
let countPost = 0;

const fetchAllPosts =async() =>{
  document.getElementById("loading-spinner").style.display = "block";
  const url = "https://openapi.programming-hero.com/api/retro-forum/posts";
  const response = await fetch(url); 
  const data = await response.json();
  // console.log(data.posts);
  const allPosts = data.posts;
  allPosts.forEach((item)=>{
    // console.log(item);
    document.getElementById("loading-spinner").style.display = "none";
    const div = document.createElement("div");
    div.classList=`flex bg-[#12132D0D] rounded-2xl px-2 py-4 shadow-lg`
    div.innerHTML = `
    <!--card left-->
    <div class="w-1/6 mt-4 ml-2 bg-white  relative">
      <img class="rounded-3xl" src="${item.image}">
      <div id="indicator" class="absolute bg-red-600 rounded h-3 w-3 top-0 right-0"></div>
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
            <p>${item.posted_time} min</p>
          </div>
        </div>
        <button onclick="showPostValue()" class="bg-[#10B981] btn btn-circle">
          <i class="fa-regular fa-envelope-open text-white text-2xl"></i>
         </button>
      </div>
    </div>
    `;
    allPostContainer.appendChild(div);
  });
}

// show post values
const showPostValue = () =>{
  const showPostValues = document.getElementById("show-post-values");
  // console.log('clicked');
  let div = document.createElement("div");
  div.classList = `flex justify-between font-extrabold my-2 bg-[#12132D0D] rounded-lg px-2 py-4 shadow-lg`;
  div.innerHTML = `
  <div>10 Kids Unaware of Their Halloween Costume</div>
  <div class="flex items-center gap-2">
    <i class="fa-regular fa-eye"></i>
    <p>560</p>
  </div>
  `;
  const countNumber = document.getElementById("count-posts");
  countPost = countPost + 1;
  countNumber.innerText = countPost;
  showPostValues.appendChild(div);
}

// latest post section
const fetchLatestPosts = async()=>{
  document.getElementById("loading-spinner").style.display = "block";
  const url = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
  const response = await fetch(url); 
  const data = await response.json();
  // console.log(data);
  let latestAllPosts = data;
  latestAllPosts.forEach((item)=>{
    document.getElementById("loading-spinner").style.display = "none";
    const div = document.createElement("div");
    div.classList = `space-x-4 space-y-4`;
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
  const cat = document.getElementById("search-box");
  const catValue = cat.value;
  if(catValue){
    loadPostByCategory(catValue);
  }
  else{
    alert("Please Enter a Valid Category");
  }
  // cat.innerText = '';
}

const loadPostByCategory =async(category) =>{
  document.getElementById("loading-spinner").style.display = "block";
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`;
  const response = await fetch(url); 
  // console.log(response);
  const data = await response.json();
  console.log(data);
  const allPosts = data.posts;
  allPostContainer.innerHTML = '';
  allPosts.forEach((item)=>{
    // console.log(item);
    document.getElementById("loading-spinner").style.display = "none";
    const div = document.createElement("div");
    div.classList=`flex bg-[#12132D0D] rounded-2xl px-2 py-4 shadow-lg`
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
            <p>${item.posted_time} min</p>
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
  // console.log(cat);
}
fetchAllPosts();
fetchLatestPosts();

