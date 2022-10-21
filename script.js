function animateElement()
{
    gsap.to(".box",{
        x:'+=500',
        y:'+=200',
        // width:'+=30'
        // height:'-=10'
        // rotate:'+=360',
        duration:2,
        // transformOrigin:'100% 50%',
        // scale:1.5,
        // repeat:2'
        ease:"bounce.input"
    })
}