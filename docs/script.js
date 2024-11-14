// تأثير الكتابة في التيرمينال
const loadingText = document.getElementById("loading-text");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");

// عرض تحميل النص
const loadingMessages = [
  "Loading AbdulrahmanRadan's Profile...",
  "Fetching data...",
  "Initializing...",
  "Ready!",
];
let messageIndex = 0;

function typeTerminalAnimation() {
  const command = document.querySelector(".terminal-command");
  let text = "sudo AbdulrahmanRadan";
  let index = 0;

  function type() {
    if (index < text.length) {
      command.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 100);
    } else {
      setTimeout(showLoading, 500);
    }
  }
  command.innerHTML = "";
  type();
}

function showLoading() {
  if (messageIndex < loadingMessages.length) {
    loadingText.innerHTML = loadingMessages[messageIndex];
    loadingText.style.color = "#f1fa8c"; // تغيير لون النص
    messageIndex++;
    setTimeout(showLoading, 1000);
  } else {
    setTimeout(() => {
      popup.style.display = "block";
      closePopupButton.style.display = "none"; // إخفاء زر الإغلاق
      showTypedText();
    }, 500);
  }
}

// تأثير الكتابة التلقائية في الصفحة المنبثقة
function showTypedText() {
  new Typed("#typed-text", {
    strings: [
      "Full-Stack Developer",
      "AI Enthusiast",
      "Open Source Contributor",
      "Welcome to my profile!",
    ],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
    onComplete: () => {
      setTimeout(() => {
        popup.style.display = "none"; // إغلاق الصفحة المنبثقة عند انتهاء الكتابة
      }, 2000); // تأخير لإعطاء وقت للنهاية
    },
  });
}

// بدء أنيميشن التيرمينال
typeTerminalAnimation();

// إغلاق الصفحة المنبثقة
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});
