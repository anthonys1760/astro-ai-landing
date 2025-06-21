var creativeSize = `${template.width}x${template.height}`; // Set the width and height of the ad.
var devDynamicContent = {}; // Variable for studio invocation code.
function exitCall() {
  Enabler.exitOverride("MainClick", defaultValues.landingPage + Adlib.utmParser(defaultValues.customVariable));
}
var videoCuePoint = [
  //"cuePoint:funcName" ex. "1:firstAninmation" please do not included the parenthesis after the function name.
]
function initDynamic() {
  if (checkEnvironment() === 'tools') {
    for (var i=0;i<Object.keys(defaultValues).length;i++) {
      Object.keys(defaultValues)[i];
    }
  } else {
    // paste studio invocation code here, and delete the devDynamicContent declaration as it is already declared outside this function.
    Enabler.setProfileId(10949483);

    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1 = [{}];
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0]._id = 0;
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].id = "01b6237f-fd3c-4025-b42e-8545a3bbb8be";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].Reporting_Label = "c12989e5-0bda-4885-9218-2bea3a6d28b3-bc3862eb-15a8-4144-adf2-4bcba4dc6fc2-a4cfdab7-a8cf-41ba-ad41-7516a02878e8-zTdM-lhv4_-0a57d7ce-6f2e-4c43-a930-5af587e5c999-5658ad2899c8113f0cd1fa9d37057834f3467f9b0af951d848d4dd7020d5bfd1";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].Variant_name = "NHL 2025 Evergreen (3\/30 legal line)";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].Active = false;
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].isDefault = false;
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].logo = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].logo.Url = "https://dyle7zu5kwqf5.cloudfront.net/e430cce7-f6c8-4091-b069-e9dfc09c120f/Logo.png";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].legal = "";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].logo2 = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].logo2.Url = "https://dyle7zu5kwqf5.cloudfront.net/e430cce7-f6c8-4091-b069-e9dfc09c120f/Logo2.png";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].logo3 = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].logo3.Url = "https://dyle7zu5kwqf5.cloudfront.net/e430cce7-f6c8-4091-b069-e9dfc09c120f/logo3.png";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].ctaText = "";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].trigger = "Full Image";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].baseImage = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].baseImage.Url = "https://dyle7zu5kwqf5.cloudfront.net/e430cce7-f6c8-4091-b069-e9dfc09c120f/blank.png";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].ctaBoxColor = "#00F0FF";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Image = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Image.Url = "https://dyle7zu5kwqf5.cloudfront.net/e430cce7-f6c8-4091-b069-e9dfc09c120f/blank.png";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].landingPage = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].landingPage.Url = "https://www.max.com/sports";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].CreativeName = "NHL 2025 Evergreen (3\/30 legal line)_320x50";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Image2 = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Image2.Url = "https://dyle7zu5kwqf5.cloudfront.net/e430cce7-f6c8-4091-b069-e9dfc09c120f/blank.png";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Image3 = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Image3.Url = "https://app-direct.smartly.io/matrix/_blank.png";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].URL_Parameter = "";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].customVariable = "?utm_source=dv360&utm_medium=paid-display&utm_id=cm|dynamicCampaignIdUTM|dynamicSiteIdUTM|dynamicPlacementIdUTM|dynamicCreativeIdUTM";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Headline = "";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].customVariable2 = "Date of match";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].customVariable3 = "NHL 2025 Evergreen (3\/30 legal line)";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].customVariable4 = "C117052_ENG_SPO_SPOG_NHL_BRQ225_ANB_320X50_DCO_POST-REMOVAL";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].customVariable5 = "";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Background = {};
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Background.Url = "https://dyle7zu5kwqf5.cloudfront.net/e430cce7-f6c8-4091-b069-e9dfc09c120f/background.png";
    devDynamicContent.REBUILD__MAX__US__SPORTS_Sheet1[0].frame1Subheadline = "";
    Enabler.setDevDynamicContent(devDynamicContent);
    
    Adlib.assignInvocationCode(); // DO NOT DELETE THIS CODE, This will automatically assign invocation code to defaultValues
  }
}
function populate() {
  //Adlib.preloadDelay = 100;
  //Adlib.fpsSettings(60); // uncomment this if you want to change the FPS used in the creative          
  Adlib.populateElements(); // DO NOT DELETE THIS. automatically assign the defaultValues to the elements within the ad.
  /*****************************************
  If you need to manually assign a defaultValue to a style of an element, add it below.
  *****************************************/
};