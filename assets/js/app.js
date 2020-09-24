const textIntro = document.getElementById("textIntro");



const tl = new TimelineLite();
tl.set("#hide", {color: "#133b5c", fontSize: "5rem"}, 1.5)
.to("#hide",1,{color: "#fcdab7", fontSize: "3rem", stagger: 0.3, x: "300"});


tl.to(".slider",{y: "-100%", backgroundColor: "#1d2d50", duration:1.5, delay: 0.5});

tl.to(textIntro,{y: "-100%", backgroundColor: "#fcdab7"}, "-=1");
tl.fromTo("nav",{opacity: 0},{opacity: 1, duration: 1});
tl.fromTo(".header-logo",{opacity: 0, x: "-500%"},{opacity: 1, duration: 1, x: "0%"});
