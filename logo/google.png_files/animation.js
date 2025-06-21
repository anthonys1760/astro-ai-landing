// call Adlib.screenshotterEnd() on the last animation code.
// do not delete initAnimation function since this is the first function that will be called after initialization of defaultValues.
// if ever there is a video for this ad, you can use myVideo as the variable to play the video.
// sample tween codes:
// tween.to("#disclaimerWrapper", {opacity:0.99,duration: 1,ease: "power2.out"},"-=1");
// tween.set("#frame1HeadlineWrapper",{opacity:1})
let tween;
removeClass = (v) => {
     v.forEach(val => {
          defaultValues[val] = Adlib.remove_pclass(defaultValues[val]);
     })     
}
checkEmpty = (val) => {
     val.forEach(x => {
          if (Adlib.isEmpty(defaultValues[x])) {
               e("#"+x+"Container").style.display = "none";
          }
     })
}
function initAnimation() {
     // removeClass(["trigger","ctaColor1","frame1Headline","frame1Headline2","frame1Subheadline","ctaText","legal"]);
     checkEmpty(["frame1Headline","frame1Subheadline","ctaText","legal"]);
     // if (defaultValues.frame1Subheadline.indexOf("[")<0) {
     //      e("#frame1SubheadlineContent").style.top = "-1.5px";
     // }
     e("#ctaTextContainer").style.backgroundColor = defaultValues.ctaBoxColor;
     let firstCheck = checkSquareBracket(defaultValues.frame1Headline,/\[\[/g,/\]\]/g,"<sup>","</sup>");
     e("#frame1HeadlineContent").innerHTML = firstCheck;
     e("#frame1HeadlineContent").innerHTML = checkSquareBracket(firstCheck,/\[/g,/\]/g,"<span class='headlineDemi'>","</span>");;
     // e("#frame1SubheadlineContent").innerHTML = checkSquareBracket(defaultValues.frame1Subheadline,/\[/g,/\]/g,"<span class='subHeadlineSup'>","</span>");
     if (checkBlankImage(`logo2`)) {
          e("#partnerLogo1").style.display = "none";
     }
     if (checkBlankImage(`logo`)) {
          e("#maxLogoContent").style.display = "none";
     }
     if (Adlib.isEmpty(defaultValues.frame1Headline)) {
          e("#frame1HeadlineContainer").style.display = "none";
     }
     if (Adlib.isEmpty(defaultValues.frame1Subheadline)) {
          e("#frame1SubheadlineContainer").style.display = "none";
     }
     if (Adlib.isEmpty(defaultValues.ctaText)) {
          e("#ctaTextContainer").style.display = "none";
     }
     if (Adlib.isEmpty(defaultValues.ctaText) && checkBlankImage(`logo`)) {
          e("#logoCTAContainer").style.display = "none";
     }
     if (Adlib.isEmpty(defaultValues.legal)) {
          e("#legalContainer").style.display = "none";
     }
     // place all fluid elements before text resize and css attrib.
     Adlib.textResize(); // This is optional if your build doesn't use text resize you can delete this
     Adlib.templateCSS(this); // DO NOT DELETE THIS
     startAnimation();
}
function checkSquareBracket(dv,open,close,startTag,endTag) {
     let headlineStart = dv.replace(open,startTag);
     return headlineStart.replace(close,endTag)     
}
function startAnimation() {  
     tween = gsap.timeline();
     tween.set("#fullImageContent",{opacity:0});
     if (defaultValues.trigger == "Animated") {
          // ANIMATED
          tween.set("#innerFrame",{opacity:0})
          tween.set("#partnerLogo1,#frame1HeadlineContainer,#frame1SubheadlineContainer,#logoCTAContainer,#legalContainer",{opacity:0})
          tween.set("#logoCTAContainer,#frame1HeadlineContainer,#frame1SubheadlineContainer",{y:20});
          tween.to("#xContent",{scale:2.7,x:110,delay:1,duration:0.8,ease: "power4.inOut",onStart:function(){takeScreenshot()}});  
          tween.to("#xContent",{opacity:0,duration:0.4,ease: "power4.inOut"},"-=0.6");  
          tween.to("#aContent",{scale:32,y:-550,duration:1,ease: "power4.inOut",onStart:function() {
               gsap.to("#innerFrame",{opacity:1,duration:0.5,delay:-0.2})
          }},"-=0.6");  
          tween.to("#mContent",{scale:1.3,x:-150,duration:1,ease: "power4.inOut"},"-=1.2");  
          tween.to("#mContent",{opacity:0,duration:0.4,ease: "power4.inOut"},"-=1");  

          tween.to("#innerFrame",{css:{"clip-path":"circle(140% at 49% -109.5%)"},duration:1, ease: "power4.inOut",onStart:function() {
               setTimeout(function(){
                    tween.killTweensOf("#innerFrame");
                    tween.killTweensOf("#aContent");
                    tween.to("#aContent",{scale:6.3,y:-120,duration:1,ease: "power4.inOut"},"-=2.0");
                    tween.to("#innerFrame",{css:{"clip-path":"circle(40% at 52.1% 0%)"},duration:0.2, ease: "power4.inOut",onStart:function() {
                         setTimeout(function() {
                         tween.to("#aContent",{scale:50,x:-750,duration:1,ease: "power4.inOut"},"-=1.0");
                         tween.to("#innerFrame",{css:{"clip-path":"circle(200% at 52.1% 0%)"},duration:1, ease: "power4.inOut"},"-=1.8");
                         },20)                         
                    }},"-=1.8");
               },300)
               
          }},"-=1.02"); 
          
          tween.to("#logoCTAContainer",{opacity:1,y:0,duration:0.5},"-=0.65");
          tween.to("#frame1SubheadlineContainer",{opacity:1,y:0,duration:0.5},"-=0.55");
          tween.to("#frame1HeadlineContainer",{opacity:1,y:0,duration:0.5},"-=0.51");
          tween.to("#partnerLogo1",{opacity:1,y:0,duration:0.5},"-=0.25");



          tween2 = gsap.timeline();
          tween2.to("#legalContainer",{opacity:1,duration:0.5},"+=2.1");


          tween.to(this,{onComplete:animationEnd})
     } else if (defaultValues.trigger == "Static"){
          // STATIC
          tween.set("#introContrainer",{display:"none"});
          tween.set("#innerFrame",{css:{"clip-path":"circle(232.2% at 50.75% 50%)"}});          
          setTimeout(animationEnd,1000);
     } else {
          // FULL IMAGE
          tween.set("#introContrainer",{display:"none"});
          tween.set("#innerFrame",{css:{"clip-path":"circle(232.2% at 50.75% 50%)", display:"none"}});
          tween.set("#fullImageContent",{opacity:1,zIndex:12});    
          setTimeout(animationEnd,1000);
     }
     setTimeout(showMainContent,500);
}
function showMainContent() {
     e("#mainContent").style.opacity = 1;
}
function animationEnd() {
     // call this function on the very end of the last animation.     
     takeScreenshot();
     setTimeout(function() {adlibEnd();},1000);
}
function e(obj) {
     return document.querySelector(obj);
}
function checkBlankImage(element) { return (defaultValues[element].indexOf("blank") !== -1 || defaultValues[element] === "" || defaultValues[element] === null || defaultValues[element] === undefined); }
