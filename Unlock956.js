alert("Make Code By Girlkun75 ~.~ - fb.com/xaunfong");
var spinr = require("SiteData").__spin_r;
var spint = require("SiteData").__spin_t;
var jazoest = require("SprinkleConfig").jazoest;
var fb_dtsg = require("DTSGInitialData").token;
var uid = require("CurrentUserInitialData").ACCOUNT_ID;
var lsd = require("LSD").token;
var s = require("SiteData").s;
var hsi = require("SiteData").hsi;
var dyn = require("SiteData").dyn;
var csr = require("SiteData").csr;
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x19721e) {
    var _0x4e99e8 = Math.random() * 16 | 0;
    var _0x8f2289 = _0x19721e === 'x' ? _0x4e99e8 : _0x4e99e8 & 3 | 8;
    return _0x8f2289.toString(16);
  });
}
var triggerSessionId = generateUUID();
fetch("https://www.facebook.com/api/graphql/", {
  'method': "POST",
  'headers': {
    'Content-Type': "application/x-www-form-urlencoded",
    'Accept': "*/*"
  },
  'body': new URLSearchParams({
    'av': uid,
    '__user': uid,
    '__a': '1',
    '__req': 'f',
    '__hs': "19947.HYP:comet_pkg.2.1..2.1",
    'dpr': '1',
    '__ccg': "EXCELLENT",
    '__rev': "1015585054",
    '__s': s,
    '__hsi': hsi,
    '__dyn': dyn,
    '__csr': csr,
    '__comet_req': '15',
    'fb_dtsg': fb_dtsg,
    'jazoest': jazoest,
    'lsd': lsd,
    '__spin_r': spinr,
    '__spin_b': "trunk",
    '__spin_t': spint,
    'fb_api_caller_class': "RelayModern",
    'fb_api_req_friendly_name': "CometIXTFacebookAuthenticityWizardTriggerRootQuery",
    'variables': JSON.stringify({
      'input': {
        'authenticity_product': "CHECKPOINT_EPSILON_SELFIE",
        'country': null,
        'location': "CHECKPOINT_FRAMEWORK",
        'logger_session_id': null,
        'msite_handoff_id': null,
        'next_uri': null,
        'security_token': null,
        'trigger_event_type': "AUTHENTICITY_WIZARD_TRIGGER",
        'nt_context': null,
        'trigger_session_id': triggerSessionId
      },
      'scale': 0x1
    }),
    'server_timestamps': "true",
    'doc_id': "8364505146892945"
  })
}).then(_0x128f20 => _0x128f20.json()).then(_0x2c17ff => {
  console.log("Response Data:", _0x2c17ff);
  if (_0x2c17ff && _0x2c17ff.data && _0x2c17ff.data.ixt_authenticity_wizard_trigger && _0x2c17ff.data.ixt_authenticity_wizard_trigger.screen && _0x2c17ff.data.ixt_authenticity_wizard_trigger.screen.view_model && _0x2c17ff.data.ixt_authenticity_wizard_trigger.screen.view_model.serialized_state) {
    var _0x130671 = _0x2c17ff.data.ixt_authenticity_wizard_trigger.screen.view_model.serialized_state;
    console.log("Serialized State:", _0x130671);
    var _0x5a7156 = "https://m.facebook.com/ixt/renderscreen/msite/?serialized_state=" + _0x130671;
    console.log("Generated URL:", _0x5a7156);
  } else {
    console.log("Không tìm thấy serialized_state trong phản hồi.");
  }
})["catch"](_0x4487d9 => console.error("Error:", _0x4487d9));