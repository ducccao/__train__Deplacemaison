// handle cookie

function setCookie(ck__name, ck__value, expire__days) {
  // function: set cookie when browser was loading
  // input: cookies name, cookies value, expire days
  // output: set a cookie for browser

  var d = new Date();
  d.setTime(d.getTime() + expire__days * 24 * 60 * 60 * 1000);
  var expries = "expries=" + d.toUTCString();
  document.cookie = ck__name + "=" + ck__value + ";" + expries + ";path=/";
}

function getCookie(ck__name) {
  // function: get the cookie
  // input: cookie name
  // output: cookies

  var cookie__name = ck__name + "=";
  var decoded__cookie = decodeURIComponent(document.cookie);
  var cookie__after__decode = decoded__cookie.split(";");

  for (let i = 0; i < cookie__after__decode.length; i++) {
    var c = cookie__after__decode[i];
    while (c.charAt[0] == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookie__name) == 0) {
      return c.substring(cookie__name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cookie__notification) {
  // function: set the cookie to browser when user admitted
  // input:
  // output: cookies were setted or not

  var is__allowed = getCookie("isUserAllowed");
  if (is__allowed != "") {
    // do somthing
    cookie__notification.classList.remove("ck-appear");

    // footer hover bug
    cookie__notification.classList.add("d-none");
  } else {
    cookie__notification.classList.add("ck-appear");

    if (is__allowed != "" && user != null) {
      setCookie("username", is__allowed, 30);
    }
  }
}

function btnDenyClickHandle(e, cookie__notification) {
  // function: handle button deny when it was clicked
  // input: event, element cookie notification
  // output: close the element father

  cookie__notification.classList.remove("ck-appear");
}

function btnAllowClickHandle(e, cookie__notification) {
  // function: handle button allow when it was clicked
  // input: event, element cookie notification
  // output: close the element father, save cookie

  setCookie("isUserAllowed", "accepted", 3);
  cookie__notification.classList.remove("ck-appear");
  // cookies dissapear
  cookie__notification.classList.add("d-none");
}

function cookieBtnOnClick() {
  const btn__deny = document.querySelector(".btn-deny");
  const btn__allow = document.querySelector(".btn-allow");
  const cookie__notification = document.querySelector("#cookie-notification");

  // deny clicked
  btn__deny.addEventListener("click", (e) => {
    btnDenyClickHandle(e, cookie__notification);
  });

  // allow clicked
  btn__allow.addEventListener("click", (e) => {
    btnAllowClickHandle(e, cookie__notification);
  });
}

// handle animation

function goUpEffect(y__axis, element, style) {
  // function: create go up effect
  // input:  y axis, element, base style (has been created)
  // output: animation go up

  // create style

  style.innerHTML = `.go-up  {transform: translateY(-${y__axis}%)!important;  }`;

  // add new style tag to header
  element.classList.add("go-up");
}

function goUpForLoader(y__axis, loader, style) {
  // function: animation close the element loader
  // input: y axis, element loader, base style
  // output: animation close it

  style.textContent += `.go-up-loader  {transform: translateY(-${y__axis}%)!important;  }`;

  loader.classList.add("go-up-loader");
}

function handleLoad(e, loading, y__axis, style) {
  // function: handle animation loading when browser loading
  // input: event, array loading, y axis, base style
  // output: animation loading - go up for it

  // first child
  goUpEffect(0, loading[0], style);

  setTimeout(() => {
    goUpEffect(y__axis, loading[1], style);
    goUpEffect(y__axis, loading[2], style);
    goUpEffect(y__axis, loading[3], style);
  }, 500);

  setTimeout(() => {
    goUpEffect(200, loading[1], style);
    goUpEffect(200, loading[2], style);
    goUpEffect(200, loading[3], style);
  }, 900);

  setTimeout(() => {
    goUpEffect(300, loading[3], style);
  }, 1300);

  setTimeout(() => {
    goUpEffect(400, loading[3], style);
  }, 1700);

  // close  85% the loader
  setTimeout(() => {
    let loader = document.querySelector("#loader");
    goUpForLoader(85, loader, style);
  }, 2100);

  // close the 15 percent remain
  setTimeout(() => {
    let loader = document.querySelector("#loader");
    goUpForLoader(100, loader, style);
  }, 2700);
}

function createLoadHeader() {
  // function: create image svg for loade header
  // output: load header image
  const content = `   <svg

  version="1.1"
  id="loader-img"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  viewBox="0 0 100 100"
  style="enable-background: new 0 0 100 100"
  xml:space="preserve"
  width="100px"
  height="100px"
>
  <g>
    <g>
      <path
        style="fill: #ff6900"
        d="M89.8,85.7l-2.4-12.2l-4.8-31c0,0-2.7-18.2-3.3-22c-0.6-3.8-1.8-7.3-1.9-7.6
       c-0.2-0.3-0.3-0.6-0.9-1.3c-0.7-0.7-1.3-0.1-1.5,0c-0.3,0.1-0.6,1-0.6,1c-0.2,1-0.6,2.5-0.9,4.3c-0.8,4.3-1.2,7.6-1.4,9.9
       c-0.5,4.7-1.1,9.9-1.5,12.8c-0.5,4.5-1.2,10-2.4,16.8c-0.7,4-1.8,9.7-1.9,9.6c-0.2-0.2-0.2-0.3-0.2-0.3l-1.5-8.8L62,41.4
       c0,0-4.9-30.4-5.2-31.5c-0.3-1.1-0.8-2-1.7-2.1c-0.8-0.1-1.3,0.7-1.4,1.1c-0.1,0.4-0.6,2.9-0.6,2.9s-1.9,10.4-2.3,12
       c-0.3,1.5-1.9,11.7-2.1,12.9C48.5,38,45.1,56,45.1,56L43,65.6c0,0-1-7.6-1.2-9.7c-0.2-2.1-1.9-13-1.9-13s-2.4-12.8-2.8-16.2
       c-0.3-3.5-1.4-9.1-1.4-9.1s-1.6-6.3-2-7.8c-0.4-1.5-0.8-2.1-0.8-2.1c-0.4-0.6-1-0.3-1.4-0.2C31.1,7.7,30.6,9,30.6,9
       s-2,5.8-2.2,6.7c-0.3,0.9-3.9,12.1-3.9,12.1s-3,10.9-3.2,11.6c-0.2,0.6-2.6,11.9-2.9,13c-0.3,1.1-3.9,15.3-3.9,15.3
       s-2.5,11.7-2.9,13.7c-0.4,2.1-1.5,9.7-1.5,10.5c0,0.8,0.1,0.8,0.3,1.4c0.2,0.6,1.8,0.5,3.4,0.6c1.6,0.1,5.2-0.1,8-0.1
       c2.7-0.1,6.1-0.5,6.1-0.5s13.9-1.4,14.8-1.5c0.9-0.1,18.8-1.3,19.8-1.4c1-0.1,12.1-0.8,15.1-0.9c3-0.1,9.2-1,11.2-1.2
       C90.7,88,89.8,85.7,89.8,85.7 M73.7,29.7c0,0,1.3-10.3,1.5-11c0.2-0.7,0.8-4,0.8-4s0.9,3.5,1.3,5.6c0.4,2.1,1.9,12.5,1.9,12.5
       l0.7,4.4l-6.9,0.5L73.7,29.7z M82.6,87.1c-1.3,0.1-14.1,0.8-14.1,0.8s-15,1.1-18.1,1.3c-3.1,0.2-22.3,1.9-22.3,1.9
       s-7.5,0.8-9.8,0.8h-5.6c0,0-0.6-0.1-0.6-0.4c0-0.3,0.2-2.7,0.6-5.3c0.4-2.5,3.8-18.3,3.8-18.3s4.4-18.1,4.8-19.4
       c0.4-1.3,3.9-16.1,4.4-17.8C26.3,29,30,17.3,30,17.3l1.9-5.9l0.7,2.2l-3.1,11.6L24,46.6c0,0-6.4,26.2-6.9,29.1
       c-0.5,2.9-2.6,11.6-2.6,11.6s-0.2,1.8-0.2,2c0,0.2,0.8,0.2,0.8,0.2s2.7-0.3,3.1-0.2c0.4,0,6.2,0,9.5-0.2
       c3.3-0.2,21.5-1.4,22.5-1.5c1.1-0.1,30.4-2.1,30.4-2.1s5.8-0.5,6.1-0.6c0.3-0.1,0.5-0.1,0.5-0.1l0.5,1.6
       C87.8,86.3,83.9,87,82.6,87.1"
      />
    </g>
    <g>
      <path
        style="fill: #110202"
        d="M27.1,74c0,0-0.1,0.2-0.3,0.2c-0.2,0-0.2-0.2-0.2-0.4c0-0.2,0.4-2,0.6-2.4c0.1-0.5,0.5-1.6,0.5-1.6
       s0.1-0.2,0.3-0.2c0.2,0,0.2,0,0.3,0.1c0.1,0.1,0.1,1,0.1,1.1c0,0.1,0,0.6,0.1,0.8c0,0.2,0.1,0.2,0.1,0.2s0.1,0,0.2-0.1
       c0.1-0.1,0.8-1.5,0.8-1.5s0.1-0.2,0.1-0.2c0,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0.1c0,0.1,0.1,0.1,0,0.2c0,0.1-0.1,0.7-0.1,0.8
       c0,0.1-0.1,1.1-0.1,1.4c0,0.2,0,1,0,1s-0.1,0.3-0.2,0.3c-0.2,0-0.2-0.3-0.2-0.3s0-0.4,0-0.7c0-0.3,0.1-1.2,0.1-1.2s0-0.2,0-0.2
       c0,0-0.3,0.6-0.3,0.6s-0.3,0.4-0.3,0.5c0,0.1-0.2,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.4-0.3c-0.1-0.2-0.1-1.1-0.1-1.1s0-0.1,0-0.1
       c0,0-0.3,0.8-0.4,1.2c-0.1,0.4-0.4,1.7-0.4,1.7S27.1,73.9,27.1,74"
      />
      <path
        style="fill: #110202"
        d="M38.3,71.8c0,0-0.2,0-0.2,0c0,0,0-0.4,0-0.4s0-0.8,0-0.9c0-0.1,0-0.5,0-0.6c0-0.1-0.1-0.2-0.3-0.3
       c-0.2,0-0.3,0.2-0.3,0.2l-0.3,0.7L36.6,72c0,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1l0,0.4c0,0-0.2,0.6-0.3,0.9
       c0,0.4,0.2,0.4,0.2,0.4c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1-0.2,0.1-0.2s0.1-0.5,0.2-0.6c0-0.1,0.2-0.5,0.2-0.5l0.6,0
       c0,0-0.1,0.7-0.1,0.8c0,0.1,0.1,0.3,0.1,0.3s0.1,0.1,0.2,0c0.1,0,0.2-0.2,0.2-0.2l0-1l0.2,0c0,0,0.2,0,0.2-0.2
       C38.4,71.9,38.3,71.8,38.3,71.8 M37.5,71.9l-0.4,0c0,0,0.2-0.5,0.2-0.6c0-0.1,0.2-0.4,0.2-0.4l0,0L37.5,71.9z"
      />
      <path
        style="fill: #110202"
        d="M44.3,69.8c0,0,0.1-0.2,0.3-0.2c0.2,0,0.2,0.1,0.2,0.4c0,0.3-0.3,3.1-0.3,3.1s0,0.4-0.3,0.4
       c-0.3,0-0.3-0.3-0.3-0.3L44.3,69.8"
      />
      <path
        style="fill: #110202"
        d="M51.7,70.2c0.2-0.2,0.5-0.2,0.7-0.1c0.2,0.1,0.2,0.3,0.2,0.3c0,0.1-0.1,0.1-0.2,0.1
       c-0.1,0-0.2,0-0.2,0c0,0-0.1,0-0.2,0.1c-0.1,0.1-0.2,0.4-0.3,0.5c-0.1,0.2,0,0.6,0,0.7c0,0.1,0.2,0.7,0.2,0.8c0,0.2,0,0.8-0.1,1
       c-0.1,0.2-0.4,0.4-0.6,0.5c-0.2,0.1-0.4,0.1-0.6,0.1c-0.1,0-0.3-0.2-0.3-0.2c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.2,0,0.2,0
       c0.1,0,0.2,0,0.2,0s0.3,0,0.4-0.2c0.1-0.2,0.2-0.3,0.2-0.5c0-0.2-0.2-0.7-0.2-0.9c0-0.2-0.1-0.5-0.1-0.7c0-0.2,0-0.6,0.2-0.8
       C51.5,70.5,51.7,70.2,51.7,70.2"
      />
      <path
        style="fill: #110202"
        d="M60.7,70.9c-0.3-0.7-0.8-0.6-0.8-0.6c-0.2,0-0.8,0.2-1,1c-0.1,0.2-0.1,0.6-0.2,0.8
       c-0.1,0.8-0.1,1,0.1,1.7c0.2,0.6,1,0.5,1.1,0.5c0.1,0,0.5-0.2,0.9-1C61.1,72.4,61,71.6,60.7,70.9 M60.2,73.3
       c-0.2,0.3-0.4,0.5-0.4,0.6c-0.1,0-0.3,0.1-0.3,0c-0.1-0.1-0.3-0.3-0.3-0.8c0-0.5,0.1-1,0.1-1.3c0.1-0.3,0.2-0.6,0.3-0.8
       c0.2-0.2,0.3-0.2,0.3-0.2c0,0,0.1,0,0.2,0.1c0.1,0.1,0.3,0.4,0.3,0.9C60.5,72.2,60.4,72.9,60.2,73.3"
      />
      <path
        style="fill: #110202"
        d="M66.5,72c0,0,0.4,1.5,0.5,1.9c0.1,0.4,0.3,0.5,0.4,0.5c0.1,0,0.4,0,0.6-1.2
       c0.2-1.2,0.6-2.6,0.6-2.6s0.2-0.6,0.2-0.7c0-0.1-0.1-0.2-0.2-0.2c0,0-0.2,0-0.2,0.1c0,0-0.2,0.5-0.2,0.7c0,0.2-0.4,1.7-0.5,1.8
       c-0.1,0.1-0.2,1.2-0.2,1.2l0,0.1l-0.2-0.8c0,0-0.2-1-0.3-1.2c0-0.1-0.1-0.5-0.2-0.5c0,0-0.1-0.2-0.3-0.2c-0.2,0-0.2,0.1-0.3,0.4
       c-0.1,0.3-0.2,0.6-0.3,0.9c-0.1,0.3-0.3,1.4-0.3,1.7c0,0.3-0.1,0.7-0.1,0.9c0,0.1,0.1,0.3,0.2,0.3c0.1,0,0.1,0,0.2-0.1
       c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.2-1.2,0.2-1.4C66.1,73,66.4,72.1,66.5,72C66.4,71.9,66.5,72,66.5,72"
      />
      <path
        style="fill: #110202"
        d="M25.7,80.3c0,0-0.1-0.6-0.3-1.1c0,0-0.1-0.2-0.3-0.4c-0.2-0.1-0.2-0.1-0.3-0.1
       c-0.1,0-0.2,0.1-0.2,0.1c-0.4,0.5-1.5,6.6-1.6,7c0,0-0.1,0.2,0,0.3c0,0.1,0.1,0.1,0.1,0.2c0.3,0.1,1-0.8,1.1-0.9
       c0.4-0.4,0.7-0.9,1-1.6c0.3-0.6,0.3-1.1,0.4-1.5C25.6,81.8,25.7,81.1,25.7,80.3 M25.1,81.6c-0.1,0.9-0.3,1.6-0.5,1.9
       c-0.2,0.4-0.3,0.6-0.3,0.7c-0.2,0.4-0.5,0.6-0.7,0.8v-0.1l1.2-5.2c0,0,0-0.1,0.1-0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.2,0.1,0.4,0.2,0.7
       C25.1,80.5,25.2,80.8,25.1,81.6"
      />
      <path
        style="fill: #110202"
        d="M31.8,79.9c0-0.1,0.1-0.2,0.2-0.3c0,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.6,0,0.8-0.1
       c0,0,0.1-0.1,0.3-0.1c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.1,0.1c0,0,0,0.1,0,0.2c0,0.1-0.1,0.1-0.1,0.1C33.4,79.9,33,80,33,80
       c-0.1,0-0.3,0-0.6,0c0,0-0.1,0.1-0.1,0.2c0,0.1-0.2,1.3-0.2,1.3L32,82.4c0,0,0,0.1,0,0.1c0,0,0.3,0,0.4,0c0.1,0,0.5,0,0.5,0l0.3,0
       c0,0,0.1,0.1,0.1,0.2c0,0.1-0.1,0.2-0.1,0.3c-0.1,0-0.6,0.1-0.6,0.1l-0.6,0.1c0,0-0.2,0-0.2,0c0,0-0.1,0.1-0.1,0.1
       c0,0-0.2,1.8-0.2,1.8l0,0.3v0.1l0,0l0.6-0.1c0,0,0.2-0.1,0.2-0.1c0,0,0.2,0,0.3,0c0.1,0,0.2,0,0.2,0.1c0,0,0,0.2,0,0.2
       c0,0.1-0.5,0.2-0.5,0.2S32.1,86,31.9,86c-0.3,0-0.5,0-0.5-0.1c-0.1-0.1-0.2-0.1-0.2-0.3c0-0.2,0.3-3.2,0.3-3.2l0.3-2.4
       C31.8,80,31.8,79.9,31.8,79.9"
      />
      <path
        style="fill: #110202"
        d="M32.7,77.9c0,0-0.1-0.2,0-0.3c0.1-0.2,0.4-0.4,0.5-0.5c0.1-0.1,0.4-0.4,0.4-0.4s0.1-0.1,0.2-0.1
       c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2,0,0.2c0,0.1-0.5,0.6-0.5,0.6l-0.4,0.4c0,0-0.1,0.1-0.2,0.1C32.9,78,32.7,77.9,32.7,77.9"
      />
      <path
        style="fill: #110202"
        d="M41.2,80.2c-0.1-0.3-0.6-0.7-0.8-0.9c-0.3-0.1-0.6-0.1-0.7,0.1c-0.2,0.1-0.2,0.4-0.2,0.4l-0.7,5.3
       c0,0,0,0.4,0.3,0.4c0.3,0,0.3-0.3,0.3-0.3l0.1-0.9c0,0,0.1-0.8,0.1-0.9c0-0.1,0.2-0.1,0.2-0.1s0.3-0.1,0.7-0.6
       c0.3-0.3,0.6-0.9,0.8-1.3C41.4,81.1,41.3,80.4,41.2,80.2 M40.6,81.5c-0.4,0.6-0.7,1-0.7,1s0,0.1-0.2,0.1l0.3-2.7
       c0,0,0-0.1,0.1-0.1c0,0,0.2,0,0.5,0.3C40.7,80.4,41,80.9,40.6,81.5"
      />
      <path
        style="fill: #110202"
        d="M46.2,83.7c-0.1,0.3-0.2,1.5,0.2,1.6c0.1,0,0.1,0,0.3,0c0.3-0.1,0.6-0.1,0.8-0.3
       c0.1-0.1,0.3-0.2,0.3-0.3c0-0.1-0.1-0.2-0.2-0.2c0,0-0.1,0-0.3,0.1c-0.2,0.1-0.3,0.2-0.4,0.1c-0.1,0-0.1-0.1-0.2-0.1l0.6-4.2
       c0,0,0.1-0.5,0.1-0.8c0-0.3-0.1-0.5-0.2-0.5c-0.2,0-0.2,0.1-0.4,1.1C46.5,81,46.2,83.7,46.2,83.7"
      />
      <path
        style="fill: #110202"
        d="M56.5,78.7c0-0.3-0.1-0.5-0.3-0.6c0,0-0.1,0-0.2,0c-0.2,0-0.5,0.2-0.6,0.5c0,0-0.5,1.2-0.8,1.9
       c-0.8,2.3-1.6,3.7-1.6,3.7s-0.2,0.4,0.1,0.5c0.3,0.1,0.5-0.3,0.7-0.7c0.2-0.4,0.8-1.8,0.8-1.8l1.3-0.1l-0.1,1.1
       c0,0-0.1,0.6-0.1,0.8c0,0.3,0.5,0.7,0.6-0.4C56.6,81.4,56.5,78.7,56.5,78.7 M56,80.2c0,0.9,0,1.2,0,1.2l-0.6,0.1c0,0-0.2,0-0.4,0
       c-0.2,0,0.6-1.8,0.6-1.8l0.3-0.6c0,0,0.1-0.2,0.1-0.2C56,79,56,79.3,56,80.2"
      />
      <path
        style="fill: #110202"
        d="M64.3,77.8c0,0,0-0.1-0.2-0.1c-0.1,0-0.3,0.1-0.3,0.1c0,0-0.8,0.4-1.4,2.2
       c-0.6,1.8-0.1,2.6-0.1,2.6s0.2,0.6,0.7,0.7c0.5,0.2,0.6,0.1,0.7,0c0.1-0.1,0-0.3,0-0.3s-0.5-0.2-0.7-0.3c-0.2-0.2-0.5-1.3,0-2.6
       c0.5-1.3,1.1-1.7,1.1-1.7s0.3-0.1,0.3-0.4C64.4,77.9,64.3,77.8,64.3,77.8"
      />
      <path
        style="fill: #110202"
        d="M70.8,75.5c0,0-0.2-0.2,0-0.4c0.1-0.1,0.9-0.8,0.9-0.8s0.2-0.1,0.4,0c0.1,0.1,0.2,0.3,0,0.5
       c-0.1,0.1-0.9,0.8-0.9,0.8S71,75.6,70.8,75.5"
      />
      <path
        style="fill: #110202"
        d="M69.4,83c-0.1,0-0.1-0.3-0.1-0.6c0-0.1,0-0.2,0-0.3c0,0,0.5-3.3,0.6-4c0.2-0.7,0.2-1,0.4-1.2
       c0.2-0.2,0.8-0.4,0.8-0.4l0.6-0.1c0,0,0.1,0,0.2,0.2c0.1,0.2,0,0.3-0.2,0.4c-0.2,0.1-0.6,0.1-0.6,0.1s-0.4,0.1-0.5,0.9
       c-0.1,0.8-0.2,1.5-0.2,1.5s0,0.1,0.1,0.1c0.1,0,1.3-0.3,1.3-0.3s0.3-0.1,0.3,0.1c0.1,0.2,0,0.3-0.4,0.5c-0.4,0.2-1.5,0.4-1.5,0.4
       l-0.3,1.8c0,0-0.1,0.2,0,0.3c0.1,0,1-0.2,1-0.2l0.5-0.1c0,0,0.2,0,0.3,0.2c0.1,0.2-0.1,0.4-0.5,0.5c-0.4,0.1-1.3,0.2-1.3,0.2
       S69.6,83.1,69.4,83"
      />
    </g>
  </g>
</svg>`;
  const load__header = document.getElementsByClassName("load-header")[0];
  load__header.innerHTML = content;
}

//  loader main
function loader() {
  // create load-header
  createLoadHeader();

  // nodelist give us permision to control like an array
  let loading = document.querySelectorAll(".loading");

  // base style
  var style = document.createElement("style");
  style.type = "text/css";

  // add it to head tag
  document.getElementsByTagName("head")[0].appendChild(style);

  // handle cookie
  var user = getCookie("isUserAllowed");
  const cookie__notification = document.querySelector("#cookie-notification");

  if (user != "") {
    const loader = document.querySelector("#loader");
    loader.style.display = "none";
    // footer hover bug
    cookie__notification.classList.add("d-none");
  } else {
    // dom on load
    window.addEventListener("load", (e) => {
      // default y axis
      let y__axis = 100;

      // handle load
      handleLoad(e, loading, y__axis, style);

      // check cookie
      setTimeout(() => {
        checkCookie(cookie__notification);
      }, 3500);
    });
  }
}

// active it
loader();

// cookie btn on click handle
cookieBtnOnClick();
