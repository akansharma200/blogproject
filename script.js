

    let showPopup = function() {
        let btn = document.getElementById('soverlay');
        btn.style.display = "block";
    };

    let hidePopup = function() {
        let btn = document.getElementById('soverlay');
        btn.style.display = "none";
    };

    let hideReplies = function(){
    let btn = document.getElementById('replyContent');
    btn.classList.toggle('hideElement');
    console.log(btn.classList);
    };

    let anotherHide = function(){
    let btn = document.getElementById('replyHide');
    btn.classList.toggle('hideElement');
    console.log(btn.classList);
    };

    let oneMore = function(){
    let btn = document.getElementById('moreHide');
    btn.classList.toggle('hideElement');
    console.log(btn.classList);
    };

    let scrollToTop = function(){
    window.scrollTo(0,0);
    };

    let likeBtn = function(){
    let btn = document.getElementById('hideLike');
    let btn1 = document.getElementById('like1');
    btn1.style.display = "none";
    btn.style.display = "block";
    };

    let likeBtn1 = function(){
    let btn = document.getElementById('hideLike1');
    let btn1 = document.getElementById('like2');
    btn1.style.display = "none";
    btn.style.display = "block";
    };

    let likeBtn2 = function(){
    let btn = document.getElementById('hideLike2');
    let btn1 = document.getElementById('like3');
    btn1.style.display = "none";
    btn.style.display = "block";
    };

   
