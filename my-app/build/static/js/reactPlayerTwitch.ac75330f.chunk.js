(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[216],{6741:function(e,t,n){var a,r=n(2122).default,l=n(6690).default,o=n(9728).default,u=n(6115).default,i=n(1655).default,p=n(6389).default,s=n(4704).default,c=Object.create,y=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,h=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,m=function(e,t,n,a){if(t&&"object"===typeof t||"function"===typeof t){var r,l=s(f(t));try{var o=function(){var l=r.value;v.call(e,l)||l===n||y(e,l,{get:function(){return t[l]},enumerable:!(a=d(t,l))||a.enumerable})};for(l.s();!(r=l.n()).done;)o()}catch(u){l.e(u)}finally{l.f()}}return e},P=function(e,t,n){return function(e,t,n){t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},E={};!function(e,t){for(var n in t)y(e,n,{get:t[n],enumerable:!0})}(E,{default:function(){return L}}),e.exports=(a=E,m(y({},"__esModule",{value:!0}),a));var g=function(e,t,n){return n=null!=e?c(h(e)):{},m(!t&&e&&e.__esModule?n:y(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),b=n(135),k=n(365),L=function(e){"use strict";i(n,e);var t=p(n);function n(){var e;return l(this,n),e=t.apply(this,arguments),P(u(e),"callPlayer",b.callPlayer),P(u(e),"playerID",e.props.config.playerId||"".concat("twitch-player-").concat((0,b.randomString)())),P(u(e),"mute",(function(){e.callPlayer("setMuted",!0)})),P(u(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),e}return o(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var n=this,a=this.props,l=a.playsinline,o=a.onError,u=a.config,i=a.controls,p=k.MATCH_URL_TWITCH_CHANNEL.test(e),s=p?e.match(k.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(k.MATCH_URL_TWITCH_VIDEO)[1];t?p?this.player.setChannel(s):this.player.setVideo("v"+s):(0,b.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((function(t){n.player=new t.Player(n.playerID,r({video:p?"":s,channel:p?s:"",height:"100%",width:"100%",playsinline:l,autoplay:n.props.playing,muted:n.props.muted,controls:!!p||i,time:(0,b.parseStartTime)(e)},u.options));var a=t.Player,o=a.READY,c=a.PLAYING,y=a.PAUSE,d=a.ENDED,f=a.ONLINE,h=a.OFFLINE,v=a.SEEK;n.player.addEventListener(o,n.props.onReady),n.player.addEventListener(c,n.props.onPlay),n.player.addEventListener(y,n.props.onPause),n.player.addEventListener(d,n.props.onEnded),n.player.addEventListener(v,n.props.onSeek),n.player.addEventListener(f,n.props.onLoaded),n.player.addEventListener(h,n.props.onLoaded)}),o)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return g.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}]),n}(g.Component);P(L,"displayName","Twitch"),P(L,"canPlay",k.canPlay.twitch),P(L,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.ac75330f.chunk.js.map