const fl=gsap.timeline({defaults:{duration: 0.75,ease:"Power3.easeOut"},
}
);



fl.fromTo(".header",{y:-90 ,opacity:0},{y:0, opacity:1},"<20%")
fl.fromTo(".logo",{x:-90 ,opacity:0},{x:0, opacity:1},"<")