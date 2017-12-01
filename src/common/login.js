/**
 * login or callback
 */
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
    return null;
  }
  var cookie = document.cookie
  if(!getCookie('user_id')){
    var host = location.host
    location.href = 'http://' + host + '/?callback=' + encodeURIComponent(location.href)
  }
  