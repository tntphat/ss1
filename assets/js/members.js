const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const dataMembers = [
  {
    name: "Phung Quoc Luong",
    fb: "https://www.facebook.com/PhungQuocLuong25",
    SID: "18120458",
    image: "assets/img/Luong.jpg",
    role: "Leader",
    mail: "quocluong2503@gmail.com",
    phone: "0375006715",
  },
  {
    name: "Đỗ Hoàng Long",
    fb: "https://www.facebook.com/hoanglong285",
    SID: "18120443",
    image: "assets/img/Long.jpg",
    role: "Director",
    mail: "yunero2852000@gmail.com",
    phone: "0934750715",
  },
  {
    name: "Lê Nhựt Nam",
    fb: "https://www.facebook.com/lenhutnam298",
    SID: "18120061",
    image: "assets/img/Nam.jpg",
    role: "Director",
    mail: "namle1232000@gmail.com",
    phone: "0964614552",
  },
  {
    name: "Dương Vũ Quốc Sum",
    fb: "https://www.facebook.com/sumsv50",
    SID: "18120539",
    image: "assets/img/Sum.jpg",
    role: "Actor",
    mail: "sumsvpro@gmail.com",
    phone: "0924181058",
  },
  {
    name: "Phạm Thị Bích Trâm",
    fb: "https://www.facebook.com/profile.php?id=100008142194816",
    SID: "18120604",
    image: "assets/img/tram.jpg",
    role: "Actor",
    mail: "pham1942000@gmail.com",
    phone: "0365295616",
  },
  {
    name: "Phan Gia Hân",
    fb: "https://www.facebook.com/hannah226",
    SID: "18120026",
    image: "assets/img/han.jpg",
    role: "secretary",
    mail: "phanhan226@gmail.com",
    phone: "0834424304",
  },
  {
    name: "Nguyễn Viết Dũng",
    fb: "https://www.facebook.com/kaiser1038",
    SID: "18120167",
    image: "assets/img/Dung.jpg",
    role: "Editor",
    mail: "invoker1038@gmail.com",
    phone: "0972562634",
  },
  {
    name: "Nguyễn Long Nghĩa",
    fb: "https://www.facebook.com/longnghia.nguyen.5",
    SID: "18120479",
    image: "assets/img/Nghia.jpg",
    role: "Editor",
    mail: "longnghia2.00@gmail.com",
    phone: "0913314459",
  },
  {
    name: "Tô Nguyễn Tấn Phát",
    fb: "https://www.facebook.com/tanphat.tonguyen",
    SID: "18120502",
    image: "assets/img/phat.jpg",
    role: "web dev",
    mail: "tonguyentanphat@gmail.com",
    phone: "0763048400",
  },
  {
    name: "Ngô Đăng Quang",
    fb: "https://www.facebook.com/quangbap76",
    SID: "18120526",
    image: "assets/img/Quang.jpg",
    role: "web dev",
    mail: "ngoquang336@gmail.com",
    phone: "0947590546",
  },
  {
    name: "Phan Công Tuấn",
    fb: "https://www.facebook.com/tuan.phancong.2001",
    SID: "19120418",
    image: "assets/img/tuan.jpg",
    role: "Director",
    mail: "congtuan0104@gmail.com",
    phone: "0334438134",
  },
];

const mapIconRoles = {
  leader: '<i class="fas fa-flag"></i>',
  director: '<i class="fas fa-scroll"></i>',
  actor: '<i class="fas fa-user-alt"></i>',
  secretary: '<i class="fas fa-marker"></i>',
  editor: '<i class="fas fa-video"></i>',
  ["web dev"]: '<i class="fas fa-code"></i>',
};

dataMembersWithIcon = dataMembers.map((data) => ({
  ...data,
  icon: mapIconRoles[data.role.toLowerCase()],
}));

const dataConverted = dataMembersWithIcon
  .map(
    (data) => `<div class="card-member">
  <div class="card-member-image" style="background-image: url('${data.image}');"></div>
  <div class="card-member-label ">
      <span class="label-icon">${data.icon}</span>
      <span class="role">${data.role}</span>
  </div>
  <div class="card-member-infor">
      <div class="card-member-name">
      ${data.name}
      </div>
      <div class="card-member-desc">
          SID: ${data.SID}
      </div>
      <div class="divider"></div>
      <div class="socials">
          <a href="${data.fb}" class="social-item"><i
                  class="fab fa-facebook-f"></i></a>
  
          <a href="mailto:${data.mail}" class="social-item social-item--mail">
              <i class="fas fa-envelope"></i>
          </a>
          <a href="tel:${data.phone}" class="social-item social-item--phone"><i
                  class="fas fa-phone"></i></a>
      </div>
  </div>
  </div>`
  )
  .join(" ");

const wrapperMembers = $(".wrapper-members");

wrapperMembers.innerHTML = dataConverted;
