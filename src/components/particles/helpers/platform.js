export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const isIOS = () => {
  return !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent)
}

export const isIE = () => {
  const userAgent = navigator.userAgent
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1
}

export const getCurrentBrowser = () => {
  const userAgent = navigator.userAgent
  let name = "Unknown"
  if (userAgent.indexOf("MSIE") !== -1 || userAgent.match(/edge\//i)) {
    name = "Edge"
  } else if (userAgent.indexOf("MSIE") !== -1 || userAgent.match(/trident\//i)) {
    name = "MSIE"
  } else if (userAgent.indexOf("Firefox") !== -1) {
    name = "Firefox"
  } else if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) {
    name = "Opera"
  } else if (userAgent.indexOf("Chrome") !== -1) {
    name = "Chrome"
  } else if (userAgent.indexOf("Safari") !== -1) {
    name = "Safari"
  }
  return name
}

export const getBrowserVersion = function(){
  let tem
  const ua= navigator.userAgent
  let M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
      tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return {
    full: M.join(' '),
    browser: M.join(' ').split(" ")[0],
    version: parseInt(M.join(' ').split(" ")[1])
  };
};

export const isPortrait = () => {
  return window.matchMedia("(orientation: portrait)").matches
}

export const isLandscape = () => {
  return window.matchMedia("(orientation: landscape)").matches
}
