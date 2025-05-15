document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    const textColor = document.getElementById("textColor").value;
    const bgColor = document.getElementById("bgColor").value;
    const content = document.getElementById("content").value;

    const result=document.getElementById("result");
    result.textContent = content;
    result.style.color = textColor;
    result.style.backgroundColor = bgColor;
});