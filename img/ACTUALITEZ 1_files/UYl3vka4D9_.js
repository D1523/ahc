;/*FB_PKG_DELIM*/

__d("IGDSCheckPanoFilledIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:h.jsx("polyline",{fill:"none",points:"21.648 5.352 9.002 17.998 2.358 11.358",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("AboutThisAccountRefererTypes",[],(function(a,b,c,d,e,f){"use strict";a={ACCOUNT_SETTINGS:"AccountSettings",FEED:"Feed",FEED_ADS:"FeedAds",PROFILE_MORE:"ProfileMore",PROFILE_USERNAME:"ProfileUsername",QUICK_PROMOTION:"QuickPromotion",SHOPPING_HOME_ADS:"ShoppingHomeAds",SHOPPING_PDP:"ShoppingPDP",STORY:"Story"};b=a;f["default"]=b}),66);
__d("PolarisHighlightsConstants",[],(function(a,b,c,d,e,f){"use strict";a=15;b=600;c=445;f.REQUEST_NUM_STORIES=a;f.POST_PICKER_HEIGHT=b;f.POST_PICKER_MAX_WIDTH=c}),66);
__d("PolarisNewHighlightsStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__k0GbfnYZ_gL__JHASH__");b=h._("__JHASH__ouM9-c3XIVT__JHASH__");c=h._("__JHASH__hGF6bnvFGOa__JHASH__");d=h._("__JHASH__q4X2-T9O6x2__JHASH__");e=h._("__JHASH__UImOFDVXwD5__JHASH__");f=h._("__JHASH__1i05hAKkx58__JHASH__");var i=h._("__JHASH__K7x9CAqyL0U__JHASH__"),j=h._("__JHASH__O5KKwfu0DYS__JHASH__"),k=h._("__JHASH__okD2NZBdw10__JHASH__"),l=h._("__JHASH__ZKtY8bMoXSJ__JHASH__"),m=h._("__JHASH__QHggAUvDoFs__JHASH__");h=h._("__JHASH__8pNR3KLgotf__JHASH__");g.STORIES_TITLE_TEXT=a;g.STORY_ALT_TEXT=b;g.NEW_HIGHLIGHT_TEXT=c;g.EDIT_HIGHLIGHT_TEXT=d;g.HIGHLIGHT_NAME_TEXT=e;g.NO_ARCHIVES_TITLE_TEXT=f;g.NO_ARCHIVES_BODY_TEXT=i;g.NEW_HIGHLIGHT_BUTTON_ALT_TEXT=j;g.NEW_HIGHLIGHT_BUTTON_TEXT=k;g.SELECTED_TAB_TITLE_TEXT=l;g.NEW_HIGHLIGHT_COVER_TEXT=m;g.HIGHLIGHT_COVER_ALT_TEXT=h}),98);
__d("usePolarisStoryGridData",["PolarisReactRedux","nullthrows","polarisStorySelectors","polarisUserSelectors"],(function(a,b,c,d,e,f,g){"use strict";a=function(){var a=d("PolarisReactRedux").useSelector(function(a){return c("nullthrows")(d("polarisUserSelectors").getViewer(a))}),b=d("PolarisReactRedux").useSelector(function(a){return d("polarisStorySelectors").getUserArchivedStories(a)}).sort(function(a,b){return parseFloat(b.postedAt)-parseFloat(a.postedAt)}),e=d("PolarisReactRedux").useSelector(function(a){return(a=a.stories.archiveReelsInfo)==null?void 0:a.isLoading}),f=d("PolarisReactRedux").useSelector(function(a){return a.stories.loadedStoryArchives}),g=b.length===0&&f;return{archivedStories:b,endOfArchives:f,isLoading:e,noArchives:g,user:a}};g.usePolarisStoryGridData=a}),98);
__d("PolarisAddHighlightsPreviewOverlay.react",["fbt","IGDSBox.react","IGDSCheckPanoFilledIcon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={activeOverlay:{backgroundColor:"xb4gq0b",$$css:!0},baseOverlay:{bottom:"x1ey2m1c",display:"x78zum5",end:"xds687c",flexDirection:"xdt5ytf",justifyContent:"xl56j7k",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},circleSelector:{alignItems:"x6s0dn4",borderTop:"x1rmk8rf",borderEnd:"xhjfva7",borderBottom:"x6y76el",borderStart:"xmezrkt",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",bottom:"x7ofzsv",display:"x78zum5",end:"xfg7zyn",height:"xmix8c7",justifyContent:"xl56j7k",position:"x10l6tqk",width:"x1xp8n7a",$$css:!0},selectedCircleSelector:{backgroundColor:"x1tu34mt",$$css:!0}};function a(a){var b=a.isActive;a=a.isSelected;b=b||a;return i.jsx("div",{className:c("stylex")(j.baseOverlay,b&&j.activeOverlay),children:i.jsx("div",{className:c("stylex")(j.circleSelector,a&&j.selectedCircleSelector),children:i.jsx(c("IGDSBox.react"),{alignItems:"center",justifyContent:"center",position:"relative",children:a&&i.jsx(c("IGDSCheckPanoFilledIcon"),{alt:h._("__JHASH__94YxxXYI3FR__JHASH__"),color:"web-always-white",size:13})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisAddHighlightsStoryDateOverlay.react",["PolarisUA","polarisFormatDate","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={archivesMarginDesktop:{marginStart:"x17adc0v",marginTop:"xqui205",$$css:!0},archivesMarginMobile:{marginStart:"xnfveip",marginTop:"x1xmf6yo",$$css:!0},dateBlock:{backgroundColor:"xz3rzyy",borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",color:"x175jnsf",paddingTop:"x1nn3v0j",paddingEnd:"xg83lxy",paddingBottom:"x1120s5i",paddingStart:"x1h0ha7o",pointerEvents:"x47corl",position:"x10l6tqk",textAlign:"x2b8uid",top:"x13vifvy",userSelect:"x87ps6o",width:"x1npj6m0",$$css:!0},dateText:{fontWeight:"x117nqv4",$$css:!0},modalMargin:{marginStart:"x1i64zmx",marginTop:"x1xmf6yo",$$css:!0},monthText:{marginTop:"x1198e8h",$$css:!0},yearText:{fontSize:"x1pg5gke",marginTop:"x1198e8h",$$css:!0}};function a(a){var b=a.hasYearInOverlay,e=a.inArchivePage;a=a.postedAt;return h.jsxs("div",{className:c("stylex")(i.dateBlock,e===!0?d("PolarisUA").isMobile()?i.archivesMarginMobile:i.archivesMarginDesktop:i.modalMargin),children:[h.jsx("div",{className:"x117nqv4",children:c("polarisFormatDate")(a,"j")}),h.jsx("div",{className:"x1198e8h",children:c("polarisFormatDate")(a,"M")}),b&&h.jsx("div",{className:"x1pg5gke x1198e8h",children:c("polarisFormatDate")(a,"Y")})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisAddHighlightsStoryPreview.react",["IGDSBox.react","IGDSSpinner.react","PolarisAddHighlightsPreviewOverlay.react","PolarisAddHighlightsStoryDateOverlay.react","PolarisAspectRatio.react","PolarisDateHelpers","PolarisIGCorePressable","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j=9/16,k=3,l=134;function m(a,b,c,e){return!a&&(b===0||d("PolarisDateHelpers").dateTypeToString(d("PolarisDateHelpers").pyTimestampToDateType(c))!==d("PolarisDateHelpers").dateTypeToString(d("PolarisDateHelpers").pyTimestampToDateType(Number(e))))}function n(a,b,c,e){return!a&&(b===0||d("PolarisDateHelpers").dateTypeToString(d("PolarisDateHelpers").pyTimestampToDateType(Number(c))).split("-")[0]!==d("PolarisDateHelpers").dateTypeToString(d("PolarisDateHelpers").pyTimestampToDateType(Number(e))).split("-")[0])}function a(a){var b=a.index,d=a.isEditing,e=a.isLoading,f=a.posts,g=a.selectedStoryIds;a=a.updateSelectedStoryIds;var i=b===f.length;if(i===!0&&e===!0)return h.jsx(c("IGDSBox.react"),{alignItems:"center",display:"flex",marginBottom:4,marginTop:8,minWidth:"100%",position:"relative",children:h.jsx(c("IGDSSpinner.react"),{size:"medium"})},b);i=f[b];e=m(d,b,(e=(e=f[b])==null?void 0:e.postedAt)!=null?e:0,(e=(e=f[b-1])==null?void 0:e.postedAt)!=null?e:0);b=e?n(d,b,(d=(d=f[b])==null?void 0:d.postedAt)!=null?d:0,(f=(d=f[b-1])==null?void 0:d.postedAt)!=null?f:0):!1;return h.jsx(c("IGDSBox.react"),{height:"auto",maxWidth:"calc(100%/"+k+")",minWidth:"calc(100%/"+k+")",position:"relative",children:h.jsx("div",{className:"x1j85h84 x1m6msm",children:h.jsx(o,{hasDateOverlay:e,hasYearInOverlay:b,post:i,selectedStoryIds:g,updateSelectedStoryIds:a})})},i.id)}a.displayName=a.name+" [from "+f.id+"]";function b(a){return h.jsx(c("IGDSBox.react"),{height:l,padding:12,position:"relative",width:l},a)}b.displayName=b.name+" [from "+f.id+"]";function o(d){var a=d.hasDateOverlay,b=d.hasYearInOverlay,e=d.post,f=d.selectedStoryIds,g=d.updateSelectedStoryIds;d=e.thumbnailSrc;var k=i(!1),l=k[0],o=k[1];return h.jsxs(c("PolarisIGCorePressable"),{className:"x1ypdohk x5yr21d x1a2a7pz",onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onPress:function(){return g(e.id)},children:[d!=null?h.jsx(c("PolarisAspectRatio.react"),{aspectRatio:j,className:"x1lvsgvq x18d0r48 x47corl x87ps6o",style:{backgroundImage:"url("+d+")"}}):null,h.jsx(c("PolarisAddHighlightsPreviewOverlay.react"),{isActive:l,isSelected:f.includes(e.id)}),a&&h.jsx(c("PolarisAddHighlightsStoryDateOverlay.react"),{hasYearInOverlay:b,postedAt:Number(e.postedAt)})]})}o.displayName=o.name+" [from "+f.id+"]";g.hasDateOverlay=m;g.hasYearInOverlay=n;g.renderAddHighlightsStoryPreview=a;g.renderAddHighlightsPlaceholder=b}),98);
__d("PolarisAddHighlightsCover.react",["IGCoreDialog","IGCoreModal","IGDSBox.react","PolarisAddHighlightsStoryPreview.react","PolarisGenericStrings","PolarisHighlightsConstants","PolarisIGCoreModalHeader","PolarisIGTheme.react","PolarisIGVirtualGrid.react","PolarisNewHighlightsStrings","PolarisReactRedux","nullthrows","polarisStorySelectors","polarisUserSelectors","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j={darkModeOverlay:{boxShadow:"xy29bcn",$$css:!0},gradientBackground:{backgroundPosition:"x1lvsgvq",backgroundSize:"x18d0r48",filter:"xtea3wc",height:"x5yr21d",width:"xh8yej3",$$css:!0},gradientBackgroundWrapper:{height:"x5yr21d",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x10l6tqk",width:"xh8yej3",$$css:!0},gridContainer:{marginStart:"x39eecv",$$css:!0},imageContainer:{display:"x78zum5",height:"x5yr21d",justifyContent:"xl56j7k",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},imageContainerPadding:{overflowX:"x6ikm8r",overflowY:"x10wlt62",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",$$css:!0},imageOverlay:{alignSelf:"xamitd3",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x78zum5",end:"xds687c",marginEnd:"xkrivgy",marginStart:"x1gryazu",paddingBottom:"x132ws97",position:"x10l6tqk",start:"x17qophe",width:"x76zr16",$$css:!0},imageStyling:{height:"x5yr21d",objectFit:"xl1xv1r",width:"xh8yej3",$$css:!0},lightModeOverlay:{boxShadow:"xp047v6",$$css:!0}};function a(a){var b=a.editing;b=b===void 0?!1:b;var e=a.highlightThumbnailUrl,f=a.onBack,g=a.onClose,k=a.onDone,l=a.requestInFlight,m=a.selectedStoryIds,n=c("nullthrows")(d("PolarisReactRedux").useSelector(function(a){return d("polarisUserSelectors").getViewer(a)})),o=d("PolarisReactRedux").useSelector(function(a){return d("polarisStorySelectors").getStoriesbyUser(a,n).filter(function(a){return m.includes(a.id)})}).sort(function(a,b){return parseFloat(b.postedAt)-parseFloat(a.postedAt)});a=i(b&&e!=null?null:o[0]);var p=a[0],q=a[1],r=function(a){(p==null||(p==null?void 0:p.id)!==a)&&q(o.filter(function(b){return b.id===a})[0])};b=d("PolarisIGTheme.react").useTheme();a=b.getTheme()===d("PolarisIGTheme.react").IGTheme.Dark;return h.jsxs(c("IGCoreModal"),{"aria-label":d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_COVER_TEXT,fixedWidth:!1,onClose:g,children:[h.jsx(c("PolarisIGCoreModalHeader"),{onBack:f,onClose:g,children:h.jsx(c("IGDSBox.react"),{padding:4,position:"relative",children:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_COVER_TEXT})}),h.jsxs(c("IGDSBox.react"),{flex:"shrink",maxHeight:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,maxWidth:d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,minWidth:d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,overflow:"auto",position:"relative",children:[h.jsxs(c("IGDSBox.react"),{height:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT/10*6.6,position:"relative",children:[h.jsx("div",{className:"x5yr21d x6ikm8r x10wlt62 x10l6tqk xh8yej3",children:h.jsx("div",{className:"x1lvsgvq x18d0r48 xtea3wc x5yr21d xh8yej3",style:{backgroundImage:"\n                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n                url("+((f=(b=p==null?void 0:p.thumbnailSrc)!=null?b:e)!=null?f:"")+")\n              "}})}),h.jsx("div",{className:"x6ikm8r x10wlt62 x1pi30zi x1swvt13",children:h.jsx(c("IGDSBox.react"),{height:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT/10*6.6,position:"relative",children:h.jsxs("div",{className:"x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62",children:[h.jsx("img",{alt:d("PolarisNewHighlightsStrings").HIGHLIGHT_COVER_ALT_TEXT,className:"x5yr21d xl1xv1r xh8yej3",src:(g=p==null?void 0:p.thumbnailSrc)!=null?g:e}),h.jsx("div",{className:c("stylex")(j.imageOverlay,a?j.darkModeOverlay:j.lightModeOverlay)})]})})})]}),h.jsx(c("PolarisIGVirtualGrid.react"),{containerSize:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT/10*3.4,itemCount:m.length,itemsPerRow:3,onScroll:function(){},renderer:function(a){a=a.index;return d("PolarisAddHighlightsStoryPreview.react").renderAddHighlightsStoryPreview({index:a,isEditing:!0,isLoading:!1,posts:o,selectedStoryIds:p!=null?[p.id]:[],updateSelectedStoryIds:r})},rendererPlaceholder:d("PolarisAddHighlightsStoryPreview.react").renderAddHighlightsPlaceholder,rowClassName:"x39eecv"})]}),h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",loading:l,onClick:function(){return k(p==null?void 0:p.id)},children:d("PolarisGenericStrings").DONE_TEXT})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisAddHighlightsStoryPicker.react",["IGDSBox.react","IGDSSpinner.react","PolarisAddHighlightsStoryPreview.react","PolarisHighlightsConstants","PolarisIGVirtualGrid.react","PolarisReactRedux","PolarisStoryActions","polarisStorySelectors","react","usePolarisStoryGridData","useWindowSize"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useEffect,k=3,l=.1;function a(a){var b=a.editing,e=b===void 0?!1:b,f=a.existingSelectedStories,g=a.selectedStoryIds,m=a.updateSelectedStoryIds,n=d("PolarisReactRedux").useDispatch();b=d("usePolarisStoryGridData").usePolarisStoryGridData();var o=b.archivedStories,p=b.endOfArchives,q=b.isLoading,r=b.user,s=d("PolarisReactRedux").useSelector(function(a){return d("polarisStorySelectors").getStoriesbyUser(a,r).filter(function(a){var b;return((b=f)!=null?b:[]).includes(a.id)})}).sort(function(a,b){return parseFloat(b.postedAt)-parseFloat(a.postedAt)}),t=i(function(){return d("PolarisStoryActions").requestArchivedStories(d("PolarisHighlightsConstants").REQUEST_NUM_STORIES)},[]);a=function(a){q!==!0&&(a.numScreensFromEnd<l&&a.numScreensFromStart>0&&!p&&n(t()))};j(function(){n(t())},[n,t]);b=o.length>0;var u=q===!0?1:0,v=c("useWindowSize")();v=v.innerHeight;v=Math.min(v-150,d("PolarisHighlightsConstants").POST_PICKER_HEIGHT);return h.jsx(h.Fragment,{children:b?h.jsx(c("IGDSBox.react"),{position:"relative",children:h.jsx(c("PolarisIGVirtualGrid.react"),{containerSize:v,itemCount:e?s.length+u:o.length+u,itemsPerRow:k,onScroll:e?function(){}:a,renderer:function(a){a=a.index;return d("PolarisAddHighlightsStoryPreview.react").renderAddHighlightsStoryPreview({index:a,isEditing:e,isLoading:q,posts:e?s:o,selectedStoryIds:g,updateSelectedStoryIds:m})},rowClassName:"x1a02dak x39eecv"})}):h.jsx(c("IGDSBox.react"),{alignItems:"center",height:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,marginTop:4,position:"relative",children:h.jsx(c("IGDSSpinner.react"),{size:"medium"})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisEditHighlightsStoryPickerTabs.react",["IGDSText.react","PolarisAddHighlightsStoryPicker.react","PolarisIGCoreTabV2","PolarisIGCoreTabsV2","PolarisNewHighlightsStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a.currentHighlightStoryIds;var b=a.selectedTabStoryIds,e=a.storiesTabStoryIds;a=a.updateSelectedStoryIds;return h.jsxs(c("PolarisIGCoreTabsV2"),{children:[h.jsx(c("PolarisIGCoreTabV2"),{node:h.jsx(c("PolarisAddHighlightsStoryPicker.react"),{editing:!0,existingSelectedStories:b,selectedStoryIds:e,updateSelectedStoryIds:a}),children:h.jsx(c("IGDSText.react").Section,{color:"primaryText",children:d("PolarisNewHighlightsStrings").SELECTED_TAB_TITLE_TEXT})}),h.jsx(c("PolarisIGCoreTabV2"),{node:h.jsx(c("PolarisAddHighlightsStoryPicker.react"),{editing:!1,selectedStoryIds:e,updateSelectedStoryIds:a}),children:h.jsx(c("IGDSText.react").Section,{color:"primaryText",children:d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisAddHighlightsModal.react",["IGCoreDialog","IGCoreModal","IGDSBox.react","PolarisAddHighlightsStoryPicker.react","PolarisEditHighlightsStoryPickerTabs.react","PolarisGenericStrings","PolarisHighlightsConstants","PolarisIGCoreModalHeader","PolarisNewHighlightsStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState;function a(a){var b=a.allowEmptySelection;b=b===void 0?!0:b;var e=a.disablePopInAnimation,f=a.editing;f=f===void 0?!1:f;var g=a.onBack,j=a.onClose,k=a.onDone,l=a.onUpdateStoryIds,m=a.requestInFlight;a=a.currentHighlightStoryIds;a=a===void 0?[]:a;var n=i(a),o=n[0],p=n[1];n=function(a){o.includes(a)||p(function(b){return[].concat(b,[a])}),l(a)};b=a.length===0&&!b||m;return h.jsxs(c("IGCoreModal"),{"aria-label":d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT,disablePopInAnimation:e,fixedWidth:!1,onClose:j,children:[h.jsx(c("PolarisIGCoreModalHeader"),{onBack:g,onClose:j,children:h.jsx(c("IGDSBox.react"),{padding:4,position:"relative",children:d("PolarisNewHighlightsStrings").STORIES_TITLE_TEXT})}),h.jsxs(c("IGDSBox.react"),{flex:"shrink",maxHeight:f?d("PolarisHighlightsConstants").POST_PICKER_HEIGHT+41:d("PolarisHighlightsConstants").POST_PICKER_HEIGHT,maxWidth:d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,minWidth:d("PolarisHighlightsConstants").POST_PICKER_MAX_WIDTH,overflow:"auto",position:"relative",children:[f&&h.jsx(c("PolarisEditHighlightsStoryPickerTabs.react"),{currentHighlightStoryIds:a,selectedTabStoryIds:o,storiesTabStoryIds:a,updateSelectedStoryIds:n}),!f&&h.jsx(c("PolarisAddHighlightsStoryPicker.react"),{editing:f,selectedStoryIds:a,updateSelectedStoryIds:n})]}),h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",disabled:b,loading:m,onClick:function(){return k()},children:d("PolarisGenericStrings").NEXT})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisNewHighlightsModal.react",["IGCoreDialog","IGCoreModal","IGDSBox.react","IGDSSpinner.react","IGDSText.react","PolarisIGCoreModalHeader","PolarisIGCoreTextInput","PolarisIGCoreThumbnail","PolarisNewHighlightsStrings","isStringNullOrWhitespaceOnly","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=100;function a(a){var b=a.actionText,e=a.editing,f=a.errorMessage,g=a.highlightName,j=a.onActionClick,k=a.onClose,l=a.onUpdateHighlightsName,m=a.requestInFlight;a=a.thumbnailSrc;var n=c("isStringNullOrWhitespaceOnly")(g);return h.jsxs(c("IGCoreModal"),{"aria-label":e?d("PolarisNewHighlightsStrings").EDIT_HIGHLIGHT_TEXT:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_TEXT,onClose:k,children:[h.jsx(c("PolarisIGCoreModalHeader"),{onClose:k,children:h.jsx(c("IGDSBox.react"),{padding:4,position:"relative",children:e?d("PolarisNewHighlightsStrings").EDIT_HIGHLIGHT_TEXT:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_TEXT})}),h.jsxs(c("IGDSBox.react"),{margin:5,position:"relative",children:[a!=null&&h.jsx(c("IGDSBox.react"),{alignItems:"center",marginBottom:4,position:"relative",width:"100%",children:h.jsx(c("PolarisIGCoreThumbnail"),{alt:d("PolarisNewHighlightsStrings").STORY_ALT_TEXT,dimension:i,shape:"rounded",src:a})}),h.jsx(c("PolarisIGCoreTextInput"),{autoComplete:"off",autoFocus:!0,name:"highlightName",onChange:function(a){l(a.target.value)},placeholder:d("PolarisNewHighlightsStrings").HIGHLIGHT_NAME_TEXT,value:g}),f!=null&&f.toString()!==""&&h.jsx(c("IGDSBox.react"),{marginBottom:2,marginTop:1,position:"relative",children:h.jsx(c("IGDSText.react").Footnote,{color:"errorOrDestructive",children:f})})]}),h.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-primary-button",disabled:n,onClick:j,children:m===!0?h.jsx(c("IGDSBox.react"),{alignItems:"center",position:"relative",children:h.jsx(c("IGDSSpinner.react"),{size:"small"})}):b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisCreateAndAddHighlightsModal.react",["$InternalEnum","PolarisAddHighlightsCover.react","PolarisAddHighlightsModal.react","PolarisGenericStrings","PolarisNewHighlightsModal.react","PolarisReactRedux","PolarisStoryActions","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState,j=b("$InternalEnum").Mirrored(["Name","Stories","Cover"]);function a(a){var b=a.currentHighlightStoryIds,e=a.editing;e=e===void 0?!1:e;var f=a.highlightId,g=a.highlightName,k=a.highlightThumbnailUrl,l=a.onClose,m=a.user,n=d("PolarisReactRedux").useDispatch();g=i((a=g)!=null?a:"");var o=g[0],p=g[1];a=i(!1);g=a[0];var q=a[1];a=i((a=b)!=null?a:[]);var r=a[0],s=a[1];a=function(a){p(a)};var t=function(a){r.includes(a)?s(function(b){return[].concat(b).filter(function(b){return b!==a})}):s(function(b){return[].concat(b,[a])})},u=i(j.Name),v=u[0],w=u[1];u=function(){w(j.Stories)};var x=function(){w(j.Cover)},y=function(a){q(!0);n(d("PolarisStoryActions").addNewHighlight(r,m.id,o,(a=a)!=null?a:r[0]));l()},z=function(a){var c;q(!0);n(d("PolarisStoryActions").editHighlightAction(r,(c=b)!=null?c:[],(c=f)!=null?c:"",m.id,o,a));l()};if(v===j.Name)return h.jsx(c("PolarisNewHighlightsModal.react"),{actionText:d("PolarisGenericStrings").NEXT,editing:e,highlightName:o,onActionClick:u,onClose:l,onUpdateHighlightsName:a});if(v===j.Stories)return h.jsx(c("PolarisAddHighlightsModal.react"),{allowEmptySelection:!1,currentHighlightStoryIds:r,disablePopInAnimation:!0,editing:e,onBack:function(){return w(j.Name)},onClose:l,onDone:x,onUpdateStoryIds:t,requestInFlight:g});if(v===j.Cover)return h.jsx(c("PolarisAddHighlightsCover.react"),{editing:e,highlightThumbnailUrl:k,onBack:function(){return w(j.Stories)},onClose:l,onDone:e?z:y,requestInFlight:g,selectedStoryIds:r})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisHasAddHighlightEnabled",["PolarisConfig","PolarisUA"],(function(a,b,c,d,e,f,g){"use strict";function a(){return d("PolarisUA").isDesktop()&&d("PolarisConfig").isLoggedIn()}g.hasAddHighlightEnabled=a}),98);
__d("PolarisProfileStoryHighlightsTrayItem.react",["fbt","IGDSAddOutline24Icon","IGDSCheckPanoFilledIcon","IGDSText.react","PolarisAvatarWithStoriesContainer.react","PolarisIGCorePressable","PolarisNewHighlightsStrings","PolarisStoryRing.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=0;function k(){return"ProfileStoryHighlightsTrayItem"+j++}function l(a){var b=a.highlightLabel;a=a.isSmallScreen;return a?i.jsx(c("IGDSText.react").Body2,{maxLines:1,zeroMargin:!0,children:b}):i.jsx(c("IGDSText.react").Body2Emphasized,{maxLines:1,zeroMargin:!0,children:b})}l.displayName=l.name+" [from "+f.id+"]";function a(a){var b,e=a.addNewHighlight,f=a.avatarSize,g=a.hasOverlay,j=a.isSmallScreen,m=a.onClick,n=a.reel,o=k();a=function(){var a;m((a=n==null?void 0:n.id)!=null?a:"",o)};var p={height:f,width:f};b=(b=n==null?void 0:n.title)!=null?b:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_BUTTON_TEXT;b=i.jsx(l,{highlightLabel:b,isSmallScreen:j});return i.jsxs(c("PolarisIGCorePressable"),{className:"x6s0dn4 x9f619 x78zum5 xdt5ytf xwzhuwn x19xppfw x1lvlso5 x1hqdklf x4js05n xm4az7 x1jo5dny x5zefxq x1u2d83q x1lvagci x11853ko",onPress:a,role:"menuitem",children:[n!=null&&i.jsx(c("PolarisAvatarWithStoriesContainer.react"),{canTabFocus:!1,clickTargetElementId:o,entrypoint:"reel_profile_highlights",highlightReelId:n.highlightReelId,size:f,children:i.jsxs("div",{className:"xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x1lliihq x6ikm8r x10wlt62 x1n2onr6",style:p,children:[g===!0&&i.jsx("div",{className:"x6s0dn4 x1t43zwg x78zum5 x5yr21d xl56j7k x10l6tqk xh8yej3",children:i.jsx(c("IGDSCheckPanoFilledIcon"),{alt:h._("__JHASH__dWDQDyjcEnv__JHASH__"),color:"ig-primary-background"})}),i.jsx("img",{alt:h._("__JHASH__B2hKC5spJyT__JHASH__",[h._param("username",n.title)]),className:"x6umtig x1b1mbwd xaqea5y xav7gou xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3","data-testid":void 0,src:n.thumbnailUrl})]})}),e===!0&&i.jsxs("div",{className:"xamitd3 x1ypdohk x1lliihq x1n2onr6 x87ps6o",children:[i.jsx(c("PolarisStoryRing.react"),{isCenterOnAvatar:!0,seen:!0,showRing:!0,size:f}),i.jsx("div",{className:"xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x6ikm8r x10wlt62 x1n2onr6 x6s0dn4 x78zum5 xl56j7k",style:p,children:i.jsx(c("IGDSAddOutline24Icon"),{alt:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_BUTTON_ALT_TEXT,color:"ig-tertiary-icon",size:j?30:44})})]}),i.jsx("div",{className:"x1ypdohk x2b8uid xh8yej3 x1ldzjpm xpzf5u2",children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisUserAvatarWithStoriesPlaceholder.react",["cx","PolarisStoryRing.react","joinClasses","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.className,d=a.hideAvatarBorder;a=a.size;return i.jsxs("div",{className:c("joinClasses")("_acop",b),children:[i.jsx(c("PolarisStoryRing.react"),{className:"_acoq",isLoading:!1,seen:!0,showRing:!1,size:a}),i.jsx("div",{className:"_acor"+(d?"":" _acos"),style:{height:a,width:a}})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisProfileStoryHighlightsTrayItemPlaceholder.react",["cx","PolarisUserAvatarWithStoriesPlaceholder.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.avatarSize;return i.jsxs("div",{className:"_aa-u",children:[i.jsx(c("PolarisUserAvatarWithStoriesPlaceholder.react"),{className:"_aa-v",size:a}),i.jsx("div",{className:"_aa-w"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisProfileStoryLoggedOutHighlightsTrayItem.react",["fbt","IGDSAddOutline24Icon","IGDSCheckPanoFilledIcon","IGDSText.react","PolarisAvatarWithStoriesContainer.react","PolarisIGCorePressable","PolarisIGCoreText","PolarisNewHighlightsStrings","PolarisReactRedux","PolarisStoryRing.react","polarisStorySelectors","qex","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");d("react").useMemo;var j={addButton:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",$$css:!0},avatar:{backgroundColor:"xnz67gz",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",display:"x1lliihq",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",$$css:!0},blurOverlay:{opacity:"xqzmdpo",$$css:!0},pic:{borderTop:"x6umtig",borderEnd:"x1b1mbwd",borderBottom:"xaqea5y",borderStart:"xav7gou",fontSize:"xk390pu",height:"x5yr21d",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",verticalAlign:"x11njtxf",width:"xh8yej3",$$css:!0},root:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",flexDirection:"xdt5ytf","@media (max-width: 735px)_marginTop":"xwzhuwn","@media (max-width: 735px)_marginEnd":"x19xppfw","@media (max-width: 735px)_marginBottom":"x1lvlso5","@media (max-width: 735px)_marginStart":"x1hqdklf","@media (max-width: 735px)_paddingTop":"x4js05n","@media (max-width: 735px)_width":"xm4az7","@media (min-width: 736px)_paddingTop":"x1jo5dny","@media (min-width: 736px)_paddingEnd":"x5zefxq","@media (min-width: 736px)_paddingBottom":"x1u2d83q","@media (min-width: 736px)_paddingStart":"x1lvagci","@media (min-width: 736px)_width":"x11853ko",$$css:!0},selectedOverlay:{alignItems:"x6s0dn4",backgroundColor:"x1t43zwg",display:"x78zum5",height:"x5yr21d",justifyContent:"xl56j7k",position:"x10l6tqk",width:"xh8yej3",$$css:!0},storyRingWrapper:{alignSelf:"xamitd3",cursor:"x1ypdohk",display:"x1lliihq",position:"x1n2onr6",userSelect:"x87ps6o",$$css:!0},titleContainer:{cursor:"x1ypdohk",textAlign:"x2b8uid",width:"xh8yej3","@media (max-width: 735px)_paddingTop":"x1ldzjpm","@media (min-width: 736px)_paddingTop":"xpzf5u2",$$css:!0}},k=0;function l(){return"ProfileStoryHighlightsTrayItem"+k++}function m(a){var b=a.highlightLabel;a=a.isSmallScreen;return a?i.jsx(c("PolarisIGCoreText").Body2,{display:"truncated",zeroMargin:!0,children:b}):i.jsx(c("IGDSText.react").Body2Emphasized,{maxLines:1,zeroMargin:!0,children:b})}m.displayName=m.name+" [from "+f.id+"]";function a(a){var b,e=a.addNewHighlight,f=a.avatarSize,g=a.hasOverlay,k=a.isSmallScreen,n=a.onClick,o=a.reel,p=l();a=function(){var a;n((a=o==null?void 0:o.id)!=null?a:"",p)};var q={height:f,width:f};b=(b=o==null?void 0:o.title)!=null?b:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_BUTTON_TEXT;b=i.jsx(m,{highlightLabel:b,isSmallScreen:k});var r=d("PolarisReactRedux").useSelector(function(a){return d("polarisStorySelectors").getFitGreenHighlightReels(a)}),s=c("qex")._("862")===2,t=r.includes(o==null?void 0:o.id)&&s;r=!r.includes(o==null?void 0:o.id)&&s;return i.jsxs(c("PolarisIGCorePressable"),{className:"x6s0dn4 x9f619 x78zum5 xdt5ytf xwzhuwn x19xppfw x1lvlso5 x1hqdklf x4js05n xm4az7 x1jo5dny x5zefxq x1u2d83q x1lvagci x11853ko",onPress:a,role:"menuitem",children:[o!=null&&i.jsxs(c("PolarisAvatarWithStoriesContainer.react"),{canTabFocus:!1,clickTargetElementId:p,entrypoint:"reel_profile_highlights",highlightReelId:o.highlightReelId,size:f,children:[t&&i.jsx(c("PolarisStoryRing.react"),{isCenterOnAvatar:!0,showRing:!0,size:f}),i.jsxs("div",{className:"xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x1lliihq x6ikm8r x10wlt62 x1n2onr6",style:q,children:[g===!0&&i.jsx("div",{className:"x6s0dn4 x1t43zwg x78zum5 x5yr21d xl56j7k x10l6tqk xh8yej3",children:i.jsx(c("IGDSCheckPanoFilledIcon"),{alt:h._("__JHASH__dWDQDyjcEnv__JHASH__"),color:"ig-primary-background"})}),i.jsx("img",{alt:h._("__JHASH__B2hKC5spJyT__JHASH__",[h._param("username",o.title)]),className:c("stylex")(j.pic,r&&j.blurOverlay),src:o.thumbnailUrl})]})]}),e===!0&&i.jsxs("div",{className:"xamitd3 x1ypdohk x1lliihq x1n2onr6 x87ps6o",children:[i.jsx(c("PolarisStoryRing.react"),{isCenterOnAvatar:!0,seen:!0,showRing:!0,size:f}),i.jsx("div",{className:"xnz67gz x14yjl9h xudhj91 x18nykt9 xww2gxu x6ikm8r x10wlt62 x1n2onr6 x6s0dn4 x78zum5 xl56j7k",style:q,children:i.jsx(c("IGDSAddOutline24Icon"),{alt:d("PolarisNewHighlightsStrings").NEW_HIGHLIGHT_BUTTON_ALT_TEXT,color:"ig-tertiary-icon",size:k?30:44})})]}),i.jsx("div",{className:c("stylex")(j.titleContainer,r&&j.blurOverlay),children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("shouldDisplayLoggedOutHighlights",["PolarisLoggedOutLoginConstants","PolarisUA","polarisIsUserLoggedIn","qex"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return!d("polarisIsUserLoggedIn").isUserLoggedIn()&&!d("PolarisUA").isDesktop()&&a!=null&&a>=d("PolarisLoggedOutLoginConstants").MIN_FOLLOWERS_LOGGED_OUT_HIGHLIGHTS&&c("qex")._("648")===!0}g["default"]=a}),98);
__d("PolarisProfileStoryHighlightsTray.react",["cx","IGDSBox.react","PolarisConfig","PolarisCreateAndAddHighlightsModal.react","PolarisHasAddHighlightEnabled","PolarisLinkBuilder","PolarisLogger","PolarisProfileQEHelpers","PolarisProfileStoryHighlightsTrayItem.react","PolarisProfileStoryHighlightsTrayItemPlaceholder.react","PolarisProfileStoryLoggedOutHighlightsTrayItem.react","PolarisReactRedux","PolarisStoryActions","PolarisVirtualHSnapScroll.react","browserHistory","immutable-4.0.0-rc.9","nullthrows","polarisStorySelectors","polarisUserSelectors","react","shouldDisplayLoggedOutHighlights"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");h=d("react");var j=h.useMemo,k=h.useState,l={cardWidth:70,gapWidth:5,gutterWidth:0},m={cardWidth:120,gapWidth:10,gutterWidth:24},n={cardWidth:115,gapWidth:10,gutterWidth:0},o=56,p=77;function a(a){var b=a.highlightReelCount,e=a.highlightReelIdsWithOverlay,f=a.isSmallScreen,g=a.onClick,h=a.onLoadReel,q=a.reels,r=a.storyEntrypoint,s=a.user,t=a.userFollowerCount,u=a.userId,v=a.viewer;a=k(!1);var w=a[0],x=a[1];a=r!==!0&&d("PolarisProfileQEHelpers").hasCondensedStoryTrayOnDesktop();var y=function(a){d("browserHistory").browserHistory.push(d("PolarisLinkBuilder").buildHighlightStoryLink(a))},z=function(){d("PolarisLogger").logAction("addHighlightIconClick"),x(!0)},A=a?8:7,B=f?l:a?n:m;a=j(function(){return Array.from({length:Math.min(b,A)},function(a,b){return i.jsx(c("IGDSBox.react"),{alignItems:"center",justifyContent:"center",position:"relative",width:B.cardWidth+B.gapWidth/2,children:i.jsx(c("PolarisProfileStoryHighlightsTrayItemPlaceholder.react"),{avatarSize:f?o:p},b)},b)})},[A,b,f,B.cardWidth,B.gapWidth]);var C=j(function(){var a=function(a,b){if(r===!0){var e;e=[].concat(Array.from((e=q)!=null?e:[]));e=e.find(function(b){return b.id===a});e!=null&&g(e)}else v||c("shouldDisplayLoggedOutHighlights")(t)?h(d("immutable-4.0.0-rc.9").Seq.Indexed(c("nullthrows")(q)),a,b,function(){return y(a)}):y(a)};return q!=null?q.map(function(b){var g;return i.jsx(c("IGDSBox.react"),{alignItems:"center",justifyContent:"center",position:"relative",width:B.cardWidth+B.gapWidth/2,children:d("PolarisConfig").isLoggedIn()?i.jsx(c("PolarisProfileStoryHighlightsTrayItem.react"),{avatarSize:f?o:p,hasOverlay:(g=e==null?void 0:e.includes(b.id))!=null?g:!1,isSmallScreen:f,onClick:a,reel:b}):i.jsx(c("PolarisProfileStoryLoggedOutHighlightsTrayItem.react"),{avatarSize:f?o:p,hasOverlay:(g=e==null?void 0:e.includes(b.id))!=null?g:!1,isSmallScreen:f,onClick:a,reel:b})},b.id)}).toArray():[]},[e,f,g,h,q,B.cardWidth,B.gapWidth,r,t,v]),D=function(){return i.jsx(c("IGDSBox.react"),{alignItems:"center",justifyContent:"center",position:"relative",width:B.cardWidth+B.gapWidth/2,children:i.jsx(c("PolarisProfileStoryHighlightsTrayItem.react"),{addNewHighlight:!0,avatarSize:f?o:p,isSmallScreen:f,onClick:z})},"newHighlight")},E=q!=null;u=u===(v==null?void 0:v.id);return i.jsxs("div",{className:r!==!0?"_ab05":"x1phlbz0","data-testid":void 0,role:"menu",children:[r===!0&&i.jsx("div",{className:"x78zum5 x1a02dak",children:q==null?a:C}),r==null&&i.jsx(c("PolarisVirtualHSnapScroll.react"),{gutterWidth:B.gutterWidth,itemWidth:B.cardWidth+B.gutterWidth/2,overscan:7,pagerDisabled:f||!E,children:q==null?u&&d("PolarisHasAddHighlightEnabled").hasAddHighlightEnabled()?a.concat(D()):a:u&&d("PolarisHasAddHighlightEnabled").hasAddHighlightEnabled()?C.concat(D()):C},E?"highlights":"placeholder"),w&&i.jsx(c("PolarisCreateAndAddHighlightsModal.react"),{onClose:function(){return x(!1)},user:s})]})}a.displayName=a.name+" [from "+f.id+"]";function b(a,b){var e=d("polarisStorySelectors").getHighlightReelsByUserId(a,b.userId),f=c("nullthrows")(a.users.users.get(b.userId)).highlightReelCount;a=d("polarisUserSelectors").getUserById(a,b.userId);return{highlightReelCount:f==null?0:f,reels:e,userFollowerCount:(b=a.counts)==null?void 0:b.followedBy}}function e(a){return{onLoadReel:function(b,c,e,f){a(d("PolarisStoryActions").openReelsMedia(b,"reel_profile_highlights",c,e,void 0,!0,f))}}}h=d("PolarisReactRedux").connect(b,e)(a);g["default"]=h}),98);
__d("PolarisAboutThisAccountUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.showAccountTransparencyDetails;a=a===void 0?!1:a;return a}f.getIsEligibleForATA=a}),66);