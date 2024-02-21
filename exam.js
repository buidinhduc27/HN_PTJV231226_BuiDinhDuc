// lấy ra element trong form
let addJob = document.querySelector(".add-job");
let inputElement = document.querySelector("#input");
let error = document.querySelector(".error");
let taskJob = document.querySelector(".job-list");

let listJob = JSON.parse(localStorage.getItem("jobs")) || [];

// lắng nghe sự kiện submit
inputElement.addEventListener("submit", function (event) {
  // ngăn chặn sự kiện mặc định của form
  event.preventDefault();
  if (!addJob.value) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
  //   tạo đối tượng để chạy
  if (addJob.value) {
    // tạo đối tượng job
    let job = {
      id: Math.ceil(Math.random() * 100000000000),
      name: addJob.value,
      status: false,
    };

    // pushjob vào mảng
    listJob.push(job);
    console.log(listJob);
    // lưu mảng lên local

    localStorage.setItem("jobs", JSON.stringify(listJob));
    // clear giá trị trong ô input
    addJob.value = "";
    addJob.focus();
  }
  render();
});
// hiển thị listJob
function render() {
    let jobInHtmls = listJob.map(function (job) {
      return `
      <div class="task">
            <div class="inputTask">
              <input type="checkbox" />
              <label>${job.name}</label>
            </div>
            <i onclick ="handleDelete(${job.id})" class="fa-solid fa-trash"></i>
          </div>
          <div class="line"></div>
          `;
    });
  
    let jobConvert = jobInHtmls.join("");
    taskJob.innerHTML = jobConvert;
  }
  // Gọi lại
  render();