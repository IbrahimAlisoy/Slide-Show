const navbar = document.querySelector(".navbar");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const photoDiv1 = document.querySelector(".photo-div1");
const photoDiv2 = document.querySelector(".photo-div2");
var animation = () =>{
    var controller = new ScrollMagic.Controller;

    let t1 = gsap.timeline({defaults:{
        ease:Expo.Inout
    }})
t1.fromTo(
        content1,
        4,
        { x: "-60rem", opacity: 0 },
        { x: 0, opacity: 1 },
        
      );
    t1.fromTo(navbar,0.5,{y:"-5rem"},{y:"0"});
    
      t1.fromTo(
        photoDiv1,
        0.5,
        { x: "5rem", opacity: 0 },
        { x: 0, opacity: 1 }
      );
      t1.fromTo(".photo-div1 img", 0.5, { scale: 1.1 }, { scale: 1 });


      let t2 = gsap.timeline({defaults:{
        ease:Expo.Inout
    }})

    t2.fromTo(
        content2,
        0.5,
        { x: "-10rem", opacity: 0 },
        { x: 0, opacity: 1 },
    )
    t2.fromTo(
        photoDiv2,
        0.5,
        { x: "5rem", opacity: 0 },
        { x: 0, opacity: 1 }
      );
      t2.fromTo(".photo-div2 img", 0.5, { scale: 1.1 }, { scale: 1 });"+=+0.5"

      new ScrollMagic.Scene({
        triggerElement:".contain2",
        triggerHook: 0.5,
        reverse: false,
      }).setTween(t2).addTo(controller)

      const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });
      t3.fromTo(
        ".card",
        1,
        { y: "-3rem", opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3 }
      );
      t3.set(".card", { clearProps: "all" });
    
      new ScrollMagic.Scene({
        triggerElement: "#vid",
        triggerHook: 0.5,
        reverse: false,
      })
        .setTween(t3)
        .addTo(controller);

}
animation()

var firstPage = [`        <div class="loader">
<div class="loader-inner">
  <div class="loader-line-wrap">
    <div class="loader-line"></div>
  </div>
  <div class="loader-line-wrap">
    <div class="loader-line"></div>
  </div>
  <div class="loader-line-wrap">
    <div class="loader-line"></div>
  </div>
  <div class="loader-line-wrap">
    <div class="loader-line"></div>
  </div>
  <div class="loader-line-wrap">
    <div class="loader-line"></div>
  </div>
</div>
</div>`];

for(var i=0; i<firstPage.length; ++i){
    $(".new").append(firstPage[i]);

    setTimeout(function() {
        $( ".new" ).empty();
    }, 3000);
}
