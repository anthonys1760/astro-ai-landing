var template = {
  version: "1.0.0",
  width: 300,
  height: 250,
  elements: {
    logo: {
      name: "Max Logo",
      reportingDimension: "logo",
      image: { src: "Logo.png" },
      width: 702,
      height: 336
    },
    logo2: {
      name: "Partner Logo 1",
      reportingDimension: "logo2",
      image: { src: "Logo2.png" },
      width: 846,
      height: 98
    },
    logo3: {
      name: "Partner Logo 2",
      reportingDimension: "logo3",
      image: { src: "logo3.png" },
      width: 110,
      height: 62
    },
    baseImage: {
      name: "Divider",
      reportingDimension: "baseImage",
      image: { src: "vs.png" },
      width: 24,
      height: 123
    },
    frame1Image: {
      name: "Team Image 1",
      reportingDimension: "frame1Image",
      image: { src: "team1.png" },
      width: 150,
      height: 123
    },
    frame1Image2: {
      name: "Team Image 2",
      reportingDimension: "frame1Image2",
      image: { src: "team2.png" },
      width: 150,
      height: 123
    },
    frame1Headline: {
      name: "Headline",
      reportingDimension: "frame1Headline",
      text: { value: "LOREM IPSUM [O] DOLOR SITAS" },
      style: { content: "normal" }
    },
    frame1Subheadline: {
      name: "Subheadline",
      reportingDimension: "frame1Subheadline",
      text: { value: "LOREM IPSUM DOLOR SI" },
      style: { content: "normal" }
    },
    ctaText: {
      name: "CTA Text",
      reportingDimension: "ctaText",
      text: { value: "LOREM IPSUMA" },
      style: { content: "normal" }
    },
    ctaBoxColor: {
      name: "CTA Button Color",
      reportingDimension: "ctaBoxColor",
      text: { value: "#00F0FF" }
    },
    legal: {
      name: "Disclaimer",
      reportingDimension: "legal",
      text: { value: "Lorem ipsum dolor sit amet, id modo forensibus pro, duo omnis tacimates ea. Sed ne summo volutpat imperdiet. Assum dicta placerat et mea, soluta postea laoreet et per. Qui ea nominavi iracundia assentior, affert atomorum et eam. Brute eligendi assent" },
      style: { content: "normal" }
    },
    frame1Image3: {
      name: "Full Bleed Image",
      reportingDimension: "frame1Image3",
      image: { src: "blank.png" }
    },
    frame1Background: {
      name: "Background Image",
      reportingDimension: "frame1Background",
      image: { src: "background.png" }
    },
    trigger: {
      name: "Animation Trigger",
      reportingDimension: "trigger",
      text: { value:"Animated" },
      enum: [
        { label: "Animated", value: "Animated" },
        { label: "Static", value: "Static" },
        { label: "Full Image", value: "Full Image" }
      ]
    },
    customVariable: {
      name: "customVariable",
      reportingDimension: "customVariable",
      text: { value: "?UTM_HERE" }
    },
    customVariable2: {
      name: "customVariable2",
      reportingDimension: "customVariable2",
      text: { value: "/*Custom Variable 2*/" }
    },
    customVariable3: {
      name: "customVariable3",
      reportingDimension: "customVariable3",
      text: { value: "/*Custom Variable 3*/" }
    },
    customVariable4: {
      name: "customVariable4",
      reportingDimension: "customVariable4",
      text: { value: "/*Custom Variable 4*/" }
    },
    customVariable5: {
      name: "customVariable5",
      reportingDimension: "customVariable5",
      text: { value: "/*Custom Variable 5*/" }
    },
    landingPage: {
      name: "landingPage",
      reportingDimension: "landingPage",
      url: { value: "https://www.hbomax.com/" }
    }
  }
};

var runtime = new TemplateRuntime(template).start();