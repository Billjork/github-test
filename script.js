document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  var count = 0;
  var btn = document.getElementById("btn");
  var out = document.getElementById("out");
  var tips = ["上传成功！", "Git 工作正常", "推送到 GitHub 了", "这只是个测试 :)"];

  btn.addEventListener("click", function () {
    count = count + 1;
    var msg = tips[count % tips.length];
    out.textContent = "点击次数：" + count + " · " + msg;
  });
});
