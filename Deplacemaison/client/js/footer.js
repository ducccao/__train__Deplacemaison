function createSocialSVG() {
  // function: create social icon
  const fb_content = `<?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
    <g>
      <path style="fill:#141414;" d="M366.4,35.3l-57.3-0.1c-64.3,0-105.9,42.6-105.9,108.7V194h-57.6c-5,0-9,4-9,9v72.6c0,5,4,9,9,9
        h57.6v183.2c0,5,4,9,9,9h75.1c5,0,9-4,9-9V284.6h67.3c5,0,9-4,9-9l0-72.6c0-2.4-1-4.7-2.6-6.4c-1.7-1.7-4-2.6-6.4-2.6h-67.3v-42.5
        c0-20.4,4.9-30.8,31.5-30.8l38.6,0c5,0,9-4,9-9V44.3C375.3,39.4,371.3,35.4,366.4,35.3z"/>
    </g>
    </svg>
    `;

  const ins_content = `<?xml version="1.0" encoding="utf-8"?>
  
    <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:#141414;}
    </style>
    <g>
      <g>
        <g>
          <path class="st0" d="M337.7,38H174.3C99,38,38,99,38,174.3v163.5C38,413,99,474,174.3,474h163.5C413,474,474,413,474,337.7V174.3
            C474,99,413,38,337.7,38z M433.1,337.7c0,52.6-42.8,95.4-95.4,95.4H174.3c-52.6,0-95.4-42.8-95.4-95.4V174.3
            c0-52.6,42.8-95.4,95.4-95.4h163.5c52.6,0,95.4,42.8,95.4,95.4V337.7z"/>
        </g>
      </g>
      <g>
        <g>
          <path class="st0" d="M256,147c-60.2,0-109,48.8-109,109s48.8,109,109,109s109-48.8,109-109S316.2,147,256,147z M256,324.1
            c-37.6,0-68.1-30.6-68.1-68.1c0-37.6,30.6-68.1,68.1-68.1s68.1,30.5,68.1,68.1C324.1,293.6,293.6,324.1,256,324.1z"/>
        </g>
      </g>
      <g>
        <g>
          <circle class="st0" cx="373.2" cy="138.8" r="14.5"/>
        </g>
      </g>
    </g>
    </svg>
    `;

  const fb = document.getElementsByClassName("fb")[0];
  const ins = document.getElementsByClassName("ins")[0];

  fb.innerHTML = fb_content;
  ins.innerHTML = ins_content;
}

function createArrowSVG() {
  // function: create an arrow for the circle
  // output: arrow icon
  const content = `<?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
    <g>
      <path d="M473,230.2c2.1-0.4,3.8,1.3,5.5,1.3c-0.1-1.4-2.2-1.3-2.8-2.3c1.2-0.1,1.6-0.4,2.6,0c-0.2-2-2.9-1.9-3.4-3.6
        c0.2-0.4,0.8,0.1,0.9-0.4c-0.9-0.6-2.1-0.9-3.2-0.4c-0.5-0.1-0.8-0.5-0.9-0.9c-2.6-0.7-4.7-1.8-7.5-2.4c-2.5-0.6-5.8-1.2-8.4-1.7
        c-0.5-0.1-1.3-0.2-1.8-0.2c-0.3,0-0.5,0-0.8-0.1c-0.4-0.3-0.7-0.7-0.8-1.1c0.8,0.3,1.8,1.5,2.5,1.1c-0.2-0.6-1.1-1-1-1.7
        c0.5-0.6,1.1,0,1.7,0.3c0.4-0.4-0.2-0.4-0.1-0.8c0.2-0.1,0.5,0.3,0.7,0c-0.5-0.6-1.1-1.2-1.8-1.7c0-0.2,0.1-0.3,0.2-0.6
        c-1.4-2.3-4.4-4.1-6.4-6.3c0.9-0.4-0.1-1,0.7-1.4c-0.3-0.8-1.1-0.3-1.6-0.7c-0.2-0.2,0.2-0.6,0-0.9c-2.4-1.8-4.5-4-7-5.7
        c-5.9-4.1-11.8-8.3-17.9-12.6c-1.4-1-2.8-2-4.2-3c-2-1.4-4.1-2.6-6.1-4.1c-3.3-2.4-6.5-4.8-9.5-6.7c-10.8-7-20.6-14.8-30.6-22.3
        c0.1-1.4-1.7-1-2.6-1.9c-0.3-0.4-0.3-0.8-0.6-1c-0.3-0.2-0.7-0.1-1.1-0.3c-0.8-0.4-1.4-1.2-2.1-1.4c-0.3-0.2,0-0.7-0.3-0.9
        c-0.4,0.2-1.1-0.2-1.5-0.4c-0.9-0.6-1.6-1.6-2.7-2.1c0.2-1.5-1.6-1.5-2.3-1.9c-1.7-1-3.4-2.9-4.9-3.9c-3.7-2.3-6.7-5.5-10.3-7.8
        c-0.2-1-1.5-1.3-2.5-2c-0.5-0.4-0.9-1-1.4-1.3c-7.7-5.2-14.4-12.1-21.8-16.3c-1.4-1.8-3.4-3.7-5.6-5.1c-2.7-1.7-5-4.3-7.9-5.3
        c0.1-1.1-0.9-0.9-1.5-1.3c-0.5-0.4-0.6-1.3-1.4-1.2c-0.5-2-3.3-3-4.6-4.4c-0.3-0.2-0.5,0.1-0.8,0c-0.4-1.5-2.1-2-2.9-2.8
        c-1.8,0.3-2.4-1.8-4-2.3c0.2-0.5-0.1-0.7-0.5-0.9c0.2-0.2,0.3-0.4,0.3-0.5c-0.3-0.2-0.7-0.1-1-0.3c0.4-1-1.2-1.4-1.7-1
        c0.1-0.7-0.8-1-1.3-1c-0.3-0.2,0.4-0.7,0.1-0.9c-0.3,0.3-0.6,0.5-0.9,0.4c-0.4-0.1,0-0.4-0.3-0.5c-0.8-0.1-1.5-1.3-2.2-1.7
        c0-0.6-0.2-1.6-1-1.9c-0.2-0.2-0.4,0.6-0.6,0.4c-0.2-0.2-0.3-0.2-0.5-0.2c-0.1-0.4,0.7-0.5,0.4-0.8c-0.4-0.3-0.8,0.6-1.2,0.3
        c-0.2-0.3,0.2-0.8,0-1.1c-1.2,0.6-1.6-1-2.6-1.4c-0.7-0.3-1.3,0-1.9-0.4c0-0.5,0.4-0.2,0.5-0.7c-0.7-0.3-0.9-0.8-1.4-1.3
        c-0.4,0.3,0.2,0.7-0.4,0.8c-0.8-0.9-1.7-1.7-2.7-2c-0.5,0.9,0.6,0.8,0.8,1.1c-0.4,0.8-0.8-0.1-1.1-0.2c-2.6-1.8-4.3-3.8-6.8-5.6
        c-0.1-0.2,0.2-0.5-0.2-0.6c-0.2,0.3-0.5,0.1-0.7,0.5c0.9,0.9,2.1,2.4,3.2,3.2c0.6,0.4,1.8,0.4,1.1,1.5c-1.4,0-2.1-2.3-3.4-2.4
        c-0.3,0.4,0.3,0.7-0.2,0.9c-0.9,0.2-0.6-1.2-1.4-1c-0.1,0.3,0.6,0.4,0.4,0.8c-2-0.1-2.1-2.7-3.9-2.8c0.4,1.4,3,2.2,3.2,3.6
        c-0.5-0.2-1,0.1-1.4-0.1c-1.9-2.2-3.9-4-6.3-5.9c1.4,1.8,3.8,3.4,4.2,5.7c0.2-0.2,0.4-0.3,0.6-0.3c-0.2,0.7,0.3,1.3,0.5,2
        c0.5,0,1.1-0.3,1.6,0c0.1,0.4-0.5,0.7-0.5,1c1-0.2,1.6,0.8,1.5,1.7c0.4,0.2,0.8,0.2,1.1,0.5c0.3-0.4,0.3-0.6,0.7-0.5
        c1,0.6,1.1,1.4,2,1.7c0.2,0.2-0.2,0.5-0.1,0.7c0.5,0.2,1-0.1,1.5,0.6c-0.3,0.5-0.2,0.9-0.4,1.4c1.1,0.1,1.7,0.9,2.4,1.3
        c0,1.2,0.8,1.4,1.3,2.3c-0.7,0.1-1.3-0.5-2,0c-0.4-0.2,0.3-0.6,0.1-0.9c-0.6-0.6-1.2,0-1.7-0.8c0-0.3,0.4-0.3,0.4-0.6
        c-1.1-0.7-1.6-1.7-2.7-2c0,0.2,0.2,0.3-0.1,0.6c-0.3-0.7-0.6-0.5-1.2-0.8c-0.3-0.3-0.3-0.7-0.5-1c-1,0.1-0.9-1-1.3-1.3
        c-0.4-0.4-1.5-0.4-1.8-1.2c0.2-0.3,0.3-0.2,0.5-0.4c-0.6-0.4-0.6-1-1.2-1.4c-0.5,0.1,0.2,0.5-0.1,0.8c-0.5,0.4-1.2,0.9-1.5,0.2
        c0.2-0.2,0.4,0,0.5-0.3c-0.4-0.6,0.4-0.9,0.2-1.4c-0.3-0.3-0.7,0.5-1,0.1c-1.2-0.6-1.5-1.7-2.7-2.2c0-0.6-1.3-1.9-1.9-1.5
        c0.4,0.7,1.2,1.4,2,1.9c-0.1,0.4-0.2,1.2,0.5,1.3c-0.3-0.2-0.3-0.7,0-0.8c0.7,0.7,0.1,1.2,0.5,2c-0.6,0.5-0.8-0.4-1.1-0.7
        c-0.5-0.6-1.3-1.2-1.7-1.7c-0.5-0.6-1.2-0.9-1.8-1.5c-0.7-0.7-1-1.9-2-2c-0.1,0.8,1.2,0.9,1.1,1.6c-0.1,0.3-0.7,0.9-1,0.6
        c-0.1-0.3-0.2-0.6,0.2-1c-1.5-0.3-2.1-2.6-3.6-2.5c-0.1-0.2,0.3-0.5-0.1-0.7c-0.3-0.1-0.2,0.6-0.5,0.3c-0.2-0.3,0.6-0.8,0.1-1
        c-0.6,0.5-1.3,0.1-1.9-0.3c0.5,0.9,1.1,2.1,2,2.6c-0.4,0.7,1,0.8,0.5,1.6c-2.1-2-4.3-4.3-6.3-6.5c0,1.8,3,2.9,2.1,4.8
        c-1.5-0.9-2.7-2.5-3.8-3.6c-0.3,0-0.2,0.6-0.5,0.5c-0.7,0.1-0.6-0.6-1.2-1c-0.2,0,0.2,0.7-0.3,0.7c-0.6-0.7-1-1.4-1.5-2
        c-0.5,0.8,1.1,1.2,0.6,2.1c-0.3,0.1-0.5-0.5-0.8-0.3c0,0.3,0.2,0.5-0.2,0.8c-1.4-1-1.4-2.3-2.8-3.6c-0.5,0.9-1.1,0.7-1.7,1.6
        c-0.3-0.4-0.9-1.1-1.4-1.8c-0.5,0.2-0.7,0.1-1.1,0.5c-0.1-0.2-0.1-0.4-0.3-0.6c-0.2,0.2-0.2,0.5-0.5,0.4c-0.5-0.2-0.2-0.8-0.8-0.8
        c-0.6,0.6,0.5,0.9-0.1,1.5c-0.4-0.1-0.6-0.7-1.1-0.6c0-0.3,0-1.1-0.6-0.8c0.1,0.5,0.7,0.9,0.2,1.6c-0.6,0.2-1-0.2-1.4-0.7
        c-0.2,0.1-0.4,0.6-0.5,0.5c-0.3-0.2-0.2-0.4-0.5-0.6c-0.5,0.5-1,0-1.5,1c-0.1,0.7,0.7,1.2,0.4,1.9c-1.3-0.7-1-2.6-1.8-3.4
        c-0.9,1.1,0.2,1.9-0.2,3c-0.7-0.4-1-0.4-1.2-1.2c-1.3,1.6,0.1,2.7-0.7,4.2c-0.4,0.2-0.3-0.5-0.7-0.1c0,0.8,0.4,1.6,1.3,1.7
        c0.2,0.3,0.1,0.7-0.2,1.1c0.8,1.7,1.1,3.4,2,5.1c0.8,1.6,2,3.5,3,5c0.2,0.3,0.5,0.7,0.8,0.9c0.8,0.9,0.8,1.2,1.2,2
        c1.1,1.9,3.5,3.1,4.5,5.2c2.2,0.8,3.7,4,5.9,5.8c2.5,2,4.7,4.5,7.3,6.8c3.9,3.4,8,7.4,11.5,10.4c2.2,1.9,4.4,3.6,6.4,5.5
        c0.3,0.2,0.5-0.1,0.8,0.1c0.4,0.8,1.3,1.5,2.1,1.8c0.6,1.4,2.5,2.2,3.8,3.3c1.2,1,2.1,2.6,3.6,2.7c0.1,0.9,0.9,1,1.5,1.5
        c1.9,1.6,3.9,3.6,5.9,5.1c1.4,1.1,3.2,2.1,4.4,3.4c0.3,0.3,0.4,0.6,0.7,0.8c0.4,0.2,0.9,0.1,1.2,0.3c0.6,0.3,0.6,0.8,1.2,1.4
        c0.5,0.6,1.4,0.9,1.8,1.5c0.6-0.4,2,0.4,1.8,1.2c0.3,0.2,0.5-0.1,0.8,0.1c1.5,2.3,5.1,4.8,7,6c0.4-0.2,0-0.7,0.3-0.6
        c0.7,0.5,1.2,1.7,2.4,2.2c0.5,0.9,1.2,1.9,2.1,2.5c2.6,1.7,5.1,4,7.3,5.7c0.2,0,0.5-0.1,0.7,0.1c0.6,0.7,1.2,0.6,2,1.3
        c0,1.2,2.1,2.3,3.2,2.4c0,0.3,0,0.6,0.3,0.8c1.6,0.2,2.6,1.6,3.9,2.8c0.4,0.4,1,0.5,1.4,0.7c0.8,0.5,1.2,1.1,1.8,1.6
        c0.3,0.2,0.8,0.3,1.1,0.5c0.9,0.7,1.4,1.9,2.8,2c0.4,1.1,1.6,1.3,2.5,1.9c1.1,0.8,2,2,3.1,2.7c0.1,0.1,0.4,0,0.5,0.1
        c0.4,0.3,0.5,0.9,0.9,1.2c0.8,0.7,1.9,0.9,2.7,1.3c0.5,0.9,1.5,1.2,2.4,1.8c-0.2,0.2-0.2,0.4-0.3,0.5c1.2,0.1,2,1.7,3.2,1.8
        c0.2,0.2,0.2,0.5,0.3,0.8c0.8,0,0.9,0.6,1.6,1.1c0.3,0.1,0.5,0,0.8,0.1c2.7,2.1,4.5,4,7.7,5.9c0.2,0.3,0.2,0.7,0.3,1
        c2.1,1.3,4.9,2.2,6.3,4.3c0.2,0,0.5-0.1,0.7,0.2c0.2,0.2-0.2,0.5,0.1,0.7c0.3,0.3,0.5-0.2,0.8,0.1c0.3,0.9,1.6,1.2,2.4,1.8
        c0.9,0.7,1.6,1.4,2.5,2c0.2,0.2,0.1,0.5,0.4,0.7c1.3,0,1.5,1.8,2.9,1.5c-0.3,0.9,0.7,1.1,1.3,1.1c0.1,0.2-0.2,0.5,0.2,0.6
        c1-0.1,1.3,1.4,2.3,1.1c0.2,0.2-0.3,0.5,0.1,0.6c1.8,0.8,3.1,2.2,5,3.6c1.7,1.3,4.1,1.7,4.9,3.2c0.2,0.1,0.4-0.1,0.7,0
        c0,0.3,0.3,0.5,0.3,0.8c1.2,0.5,2.5,2.3,4,2.5c1.9,1.5,4.4,3.4,6.6,4.3c0.1,0.3,0.2,0.4,0.4,0.5c-1.2,0-2.4,0-3.6,0
        c-4.4,0-8.7,0.2-12.9,0c-0.5,0-0.5,0.4-1,0.4c-1.2-0.3-2.9-0.3-4.2,0c-2-0.7-5.2,0-7.6,0c-2.4,0-5-0.6-6.8,0.2
        c-1-0.6-2-0.1-3.2-0.1c-3.7,0-8-0.2-11.8-0.1c-2.8,0.1-5.8,0.4-8.5,0.3c-0.6,0-1-0.2-1.5-0.2c-0.7,0.1-1.2,0.5-1.6,0.5
        c-1,0.1-1.5-0.2-2.7-0.3c-1.2-0.1-2.5,0.2-3.6,0c-0.4,0.7-2.7,1-3.3,0.2c-0.5,0-0.5,0.4-1,0.4c-4-0.8-10.6-0.4-14-0.2
        c-0.2,0.4,0.7,0.5,0.2,0.7c-1.2,0.1-3-0.6-5-0.2c-1.4-0.4-3.2-0.7-4.9-0.6c-4.7,0.3-9.8,0.1-14.1,0.2c-0.3,0.1-0.4,0.4-0.9,0.4
        c-1.4-0.2-2,0.3-3.6,0.2c-1.1-1-4.7-0.5-6.1,0.1c-0.3-0.2-0.6-0.4-1.1-0.4c-2.1,0.9-4.6,0.3-7.3,0.2c-0.9,0-1.6,0.3-2.4,0.3
        c-1.5,0.1-2.4-0.1-3.6-0.1c-0.6,0-1.2,0.3-1.8,0.3c-1.7,0-3.5-0.6-5.2,0.2c-1.5-0.7-3.1,0-4.9,0c-2.1,0.1-4.2-0.4-6.2-0.3
        c-0.3,0-0.5,0.2-0.7,0.3c-0.8,0.1-1.4-0.4-2.1-0.4c-1.6,0-3.1,0.4-4.5,0.6c-1.5-0.4-3,0-4.5,0c0-0.3,0-0.5-0.2-0.6
        c-1.5,0.7-4-0.1-5.6,0.5c-0.4-0.1-0.7-0.3-1.1-0.4c-1,0.5-1.6,0-2.9,0.1c-0.4,0.1-0.6,0.3-1.1,0.4c-5.2,0-9.2-0.5-14.7,0
        c-0.5-0.2-0.9-0.4-1.2-0.7c-3.8,0.3-8,1.2-11.7,0.4c-0.2,0.2-0.5,0.3-1.1,0.3c-0.4,0-0.2-0.6-0.8-0.5c-0.7-0.1-0.5,0.4-1.1,0.4
        c-1.2-0.6-3.1,0-4.5,0c-1.6,0-3.2-0.2-4.9-0.1c-0.4-0.1-0.6-0.3-1.1-0.3c-1.6,0.8-3.5-0.6-5,0.5c-0.4-0.9-1.8-0.5-2.6-0.2
        c-0.3-0.1-0.2-0.5-0.8-0.3c-1.2,0.6-2.9-0.4-3.8,0.5c-0.4,0-0.1-0.6-0.6-0.5c-2.9,0.4-5.8,0.1-9.4,0.1c-3.3,0-6.6,1.1-8.9,0.3
        c-0.4,0.1-0.4,0.4-0.9,0.4c-0.3-0.2-0.8-0.3-1.1-0.4c-2,0.3-5.1-0.4-7.1,0.3c-3.6-0.1-8.4-0.3-12,0.4c-0.7-0.4-1.3,0-2.1-0.3
        c-0.3,0.3-1.1,0.3-1.5,0.5c-4.1-0.6-10-0.5-14.9-0.4c-13.7,0.5-27.2,0.2-40.7-0.3c-12.9-0.4-25.5-1.9-38.3-1.4
        c-0.7,0.5-2.5,0.5-3.2,0.5c-0.4,0.2-0.7,0.6-0.7,1.1c1.6,1-0.4,1.8-0.4,3c0,1.1,1.7,1.7,2.5,2.6c0.5,0.5,0.4,1.3,0.8,1.9
        c0.6,0.9,1.8,0.8,2.3,1.5c0.1,1,1.1,1.2,1.1,2.2c0.6,0.2,1.6,0,1.8,0.5c-0.7,0.9,0.6,1,0.8,1.8c-1,1.7,0.8,4.2-0.7,5.4
        c0.3,0.1,0.5,0.2,0.5,0.6c-0.2,0.2-0.6,0.3-0.7,0.6c0.3,0.1,0.6,0.2,0.6,0.6c-0.5,0.3-1.3,0.4-1.2,1.1c-0.1,0.6,0.8,0.4,0.8,0.9
        c-0.1,1.9,1,2.7,2.1,3.9c0.2,0.6-0.7,0.7-0.3,1.1c0.5,0.1,1.7-0.2,2.1,0.3c-0.4,0.7-0.9,0.7-0.4,1.6c-0.4,0.5-1.6,0.3-1.8,0.9
        c0.7,0.6,2.9-0.5,3.4,0.5c-0.2,0.3-1,0.1-1,0.5c2.8-0.1,4.6,0.6,7.2,0.7c-1,0.1-2.2,0-2.7,0.4c1.7,0.5,4.5,0,5.8,0.9
        c-1.4,0.2-3.6-0.2-4.2,0.5c0.8,0.4,2.2,0.2,2.8,0.9c-0.1,0.8-1.5,0.6-2.6,0.7c-0.2,0.6,0.7,0.2,0.8,0.6c-0.2,0.2-0.9,0-0.9,0.4
        c1.2,0.2,2.4,0.4,3.8,0.4c0.1,0.1,0.2,0.3,0.2,0.6c3.7,1.2,9.2,1,13.6,1.6c-0.8,0.8,1,0.8,0.2,1.5c1.1,0.4,1.7-0.4,2.7-0.3
        c0.4,0.1,0.3,0.6,0.8,0.7c4.7,0.1,9.2,0.7,14,0.8c11.1,0.1,22.5,0.1,34,0.1c2.7,0,5.3,0,8,0c3.8,0,7.6-0.2,11.4-0.2
        c6.3,0,12.6,0.1,18-0.1c20-0.7,39.4-0.3,58.8-0.4c1.2,1.1,3.1-0.3,5,0c0.8,0.1,1.1,0.4,1.7,0.4c0.5,0,1.1-0.3,1.7-0.4
        c1.4-0.2,2.9,0.1,3.9-0.1c0.7,0,0.6,0.6,1.2,0.6c0.4-0.4,1.5-0.5,2.3-0.5c1.6-0.1,3.5,0.3,5.3,0c1.1,1.3,3.4,0.2,4.7,0.1
        c3.1-0.3,6.9,0.2,9.7,0.1c6.8-0.4,13.5,0.3,20.2-0.3c1.2,0.6,3.1,0,5,0c1,0,2,0.2,2.9,0.1c14.5-0.7,29.2,0.3,42.4-1.1
        c3.5,0.5,7.8,0.7,11.8,0.3c5-0.4,10.2,0.1,14.8-0.9c1,0.9,2,0.1,3,0c1,0,2,0.6,2.9,0c2.5,1.2,6.9,0.2,9.9,0.4
        c0.5,0,0.5-0.4,0.9-0.5c1.9,0.9,4.5,0.2,6.2,0.3c1.4-1.1,3.4-0.6,5.3-0.6c-0.1,0.1-0.2,0.2-0.4,0.4c-0.2,0-0.4,0-0.6,0
        c0,0.2,0,0.3,0,0.5c0,0,0.1,0,0.1,0c-2.6,2.6-5.1,5.2-7.2,7.5c-8.7,9.9-18.1,18.8-27.2,27.8c-1.4-0.2-1.3,1.6-2.3,2.3
        c-0.4,0.3-0.8,0.2-1.1,0.5c-0.2,0.2-0.3,0.7-0.5,1c-0.5,0.8-1.5,1.3-1.8,1.9c-0.3,0.3-0.7-0.1-1,0.2c0.1,0.5-0.3,1.1-0.7,1.4
        c-0.7,0.8-1.8,1.4-2.5,2.5c-1.5-0.5-1.8,1.4-2.3,2.1c-1.3,1.6-3.5,3-4.7,4.4c-2.9,3.4-6.7,5.9-9.5,9.3c-1,0.1-1.5,1.4-2.4,2.3
        c-0.5,0.5-1.1,0.8-1.5,1.2c-6.5,7-14.4,12.8-19.9,19.7c-2.1,1.2-4.3,2.9-6.1,4.9c-2.2,2.5-5.1,4.4-6.7,7.2c-1.1-0.2-1,0.8-1.5,1.3
        c-0.5,0.5-1.4,0.4-1.5,1.2c-2.1,0.2-3.5,2.9-5.2,4c-0.3,0.2,0,0.5-0.1,0.8c-1.5,0.2-2.4,1.8-3.3,2.5c0,1.8-2.3,2.2-3,3.7
        c-0.5-0.3-0.7,0-1,0.4c-0.2-0.2-0.3-0.3-0.5-0.4c-0.3,0.3-0.2,0.6-0.5,0.9c-0.9-0.6-1.6,1-1.3,1.5c-0.7-0.2-1.1,0.7-1.2,1.2
        c-0.3,0.2-0.6-0.5-0.9-0.2c0.3,0.3,0.4,0.7,0.2,1c-0.2,0.3-0.4,0-0.6,0.2c-0.2,0.8-1.6,1.3-2.1,2c-0.7-0.1-1.7,0-2,0.7
        c-0.2,0.2,0.6,0.5,0.3,0.7c-0.2,0.1-0.3,0.3-0.3,0.4c-0.4,0.1-0.3-0.8-0.7-0.5c-0.4,0.4,0.4,0.9,0.1,1.2c-0.4,0.1-0.7-0.3-1.1-0.1
        c0.4,1.3-1.3,1.5-1.9,2.4c-0.4,0.6-0.2,1.3-0.8,1.8c-0.5-0.1-0.1-0.5-0.6-0.6c-0.5,0.6-1,0.7-1.6,1.3c0.3,0.4,0.7-0.1,0.7,0.5
        c-1,0.6-2,1.5-2.5,2.4c0.8,0.6,0.9-0.5,1.2-0.6c0.7,0.6-0.2,0.8-0.4,1c-2.3,2.4-4.5,3.7-6.7,6c-0.2,0-0.4-0.3-0.6,0.1
        c0.3,0.3,0.1,0.5,0.4,0.8c1-0.8,2.8-1.7,3.7-2.7c0.5-0.5,0.7-1.7,1.7-0.9c-0.2,1.4-2.7,1.7-3,3.1c0.3,0.4,0.8-0.2,0.9,0.4
        c0,0.9-1.3,0.5-1.3,1.3c0.3,0.1,0.5-0.6,0.8-0.3c-0.5,1.9-3.1,1.6-3.5,3.5c1.4-0.2,2.8-2.6,4.2-2.7c-0.2,0.5-0.1,1-0.3,1.4
        c-2.5,1.5-4.7,3.3-7,5.4c2-1.2,4.1-3.4,6.4-3.3c-0.2-0.2-0.3-0.5-0.2-0.6c0.7,0.4,1.4-0.1,2.1-0.2c0.1-0.5-0.1-1.1,0.3-1.6
        c0.4-0.1,0.6,0.6,0.9,0.7c0-1.1,1.1-1.5,2-1.3c0.3-0.4,0.4-0.7,0.6-1.1c-0.4-0.4-0.6-0.4-0.4-0.8c0.7-0.9,1.6-0.9,2.1-1.7
        c0.2-0.1,0.5,0.3,0.7,0.2c0.3-0.5,0.1-1,0.9-1.4c0.5,0.4,0.9,0.4,1.3,0.6c0.3-1.1,1.2-1.5,1.8-2.2c1.2,0.2,1.6-0.6,2.5-1
        c0,0.7-0.7,1.2-0.4,2c-0.3,0.4-0.6-0.4-0.9-0.2c-0.7,0.5-0.2,1.2-1.1,1.6c-0.3,0-0.2-0.4-0.6-0.5c-0.9,1-1.9,1.3-2.4,2.4
        c0.2,0,0.4-0.2,0.5,0.2c-0.7,0.2-0.6,0.5-1,1.1c-0.4,0.2-0.7,0.2-1.1,0.3c-0.1,1-1.1,0.8-1.6,1.1c-0.4,0.3-0.7,1.4-1.6,1.6
        c-0.3-0.2-0.1-0.3-0.3-0.5c-0.5,0.5-1.1,0.4-1.7,1c0,0.5,0.5-0.1,0.8,0.3c0.3,0.5,0.7,1.4-0.1,1.5c-0.1-0.2,0.1-0.4-0.2-0.6
        c-0.7,0.3-0.9-0.5-1.3-0.4c-0.4,0.3,0.4,0.7,0,1c-0.8,1.1-2,1.3-2.7,2.4c-0.5-0.1-2.1,1-1.9,1.7c0.7-0.3,1.6-1,2.3-1.7
        c0.4,0.1,1.1,0.4,1.4-0.3c-0.2,0.3-0.7,0.2-0.8-0.1c0.8-0.6,1.2,0.1,2.1-0.2c0.4,0.7-0.6,0.7-0.9,1c-0.7,0.4-1.4,1.1-2,1.5
        c-0.7,0.4-1.1,1.1-1.8,1.6c-0.8,0.6-2.1,0.7-2.3,1.8c0.8,0.2,1.1-1,1.8-0.8c0.3,0.1,0.7,0.8,0.4,1.1c-0.3,0.1-0.6,0.1-0.9-0.3
        c-0.5,1.5-2.9,1.7-3.2,3.3c-0.2,0.1-0.5-0.4-0.7,0c-0.1,0.3,0.5,0.3,0.2,0.6c-0.3,0.2-0.7-0.7-1-0.2c0.4,0.7-0.2,1.3-0.7,1.8
        c1-0.4,2.3-0.8,3-1.7c0.7,0.5,0.9-0.9,1.7-0.2c-2.4,1.8-5.1,3.7-7.7,5.3c1.7,0.2,3.4-2.5,5.2-1.4c-1.2,1.3-3,2.4-4.3,3.3
        c-0.1,0.3,0.5,0.3,0.4,0.6c-0.1,0.7-0.7,0.6-1.2,1.1c-0.1,0.2,0.7-0.1,0.6,0.4c-0.8,0.5-1.5,0.8-2.3,1.2c0.7,0.6,1.4-0.9,2.2-0.3
        c0.1,0.3-0.6,0.4-0.5,0.7c0.3,0,0.5-0.1,0.8,0.3c-1.2,1.2-2.6,1.1-4.1,2.2c0.8,0.6,0.5,1.2,1.3,1.9c-0.5,0.3-1.3,0.7-2.1,1.2
        c0.1,0.5-0.1,0.8,0.3,1.1c-0.2,0.1-0.4,0.1-0.6,0.2c0.2,0.2,0.5,0.2,0.3,0.5c-0.3,0.5-0.9,0.1-0.9,0.6c0.5,0.7,1-0.4,1.5,0.3
        c-0.1,0.4-0.8,0.5-0.8,1c-0.3,0-1.1-0.1-0.9,0.5c0.5,0,1.1-0.6,1.6,0c0.1,0.6-0.3,0.9-0.9,1.3c0.1,0.2,0.5,0.5,0.4,0.6
        c-0.2,0.3-0.5,0.1-0.7,0.4c0.4,0.6-0.2,1,0.7,1.6c0.7,0.2,1.3-0.5,2-0.2c-0.9,1.2-2.8,0.6-3.7,1.3c1,1,2,0.1,2.9,0.6
        c-0.6,0.6-0.6,0.9-1.4,1c1.4,1.5,2.7,0.3,4.1,1.4c0.2,0.4-0.5,0.2-0.2,0.7c0.8,0.1,1.7-0.2,1.9-1c0.4-0.1,0.7,0,1.1,0.3
        c1.8-0.5,3.6-0.6,5.5-1.3c1.7-0.6,3.8-1.4,5.5-2.2c0.3-0.2,0.8-0.4,1.1-0.6c1-0.7,1.4-0.6,2.2-0.9c2.1-0.8,3.7-3,6-3.7
        c1.2-2.1,4.7-3.2,6.8-5.1c2.4-2.2,5.4-4,8.1-6.3c4.1-3.3,8.8-7.1,12.5-10.1c2.3-1.9,4.4-3.9,6.6-5.7c0.3-0.2,0-0.5,0.3-0.8
        c0.8-0.3,1.7-1.1,2.2-1.9c1.5-0.4,2.7-2.3,3.9-3.3c1.2-1.1,3-1.8,3.4-3.2c1,0,1.1-0.8,1.7-1.3c1.9-1.7,4.3-3.4,6.1-5.2
        c1.3-1.3,2.7-2.9,4.1-4c0.3-0.2,0.7-0.3,0.9-0.5c0.3-0.4,0.3-0.9,0.5-1.1c0.4-0.6,0.9-0.5,1.6-1c0.7-0.5,1.1-1.3,1.8-1.6
        c-0.3-0.7,0.7-1.9,1.5-1.7c0.2-0.2,0-0.5,0.3-0.8c2.6-1.2,5.6-4.5,7.2-6.2c-0.2-0.4-0.7-0.1-0.6-0.4c0.6-0.6,1.9-1,2.7-2.1
        c1-0.4,2.1-1,2.8-1.8c2.2-2.4,4.9-4.5,6.9-6.6c0.1-0.2,0-0.5,0.2-0.7c0.8-0.5,0.8-1.2,1.6-1.8c1.2,0.2,2.7-1.8,3-2.8
        c0.3,0,0.6,0,0.8-0.2c0.4-1.6,2.1-2.3,3.5-3.5c0.4-0.4,0.6-0.9,1-1.3c0.6-0.8,1.3-1,1.9-1.6c0.3-0.3,0.4-0.8,0.7-1
        c0.8-0.8,2.1-1.2,2.4-2.5c1.2-0.2,1.6-1.4,2.4-2.3c1-1,2.3-1.7,3.3-2.7c0.1-0.1,0.1-0.4,0.2-0.5c0.3-0.4,1-0.4,1.3-0.7
        c0.8-0.7,1.2-1.8,1.8-2.6c1-0.4,1.5-1.4,2.2-2.1c0.2,0.2,0.3,0.3,0.5,0.3c0.3-1.2,2-1.8,2.4-3c0.3-0.2,0.6-0.1,0.8-0.2
        c0.2-0.8,0.8-0.8,1.3-1.4c0.2-0.3,0.1-0.5,0.2-0.8c2.5-2.5,4.8-4,7.2-7c0.4-0.1,0.7-0.1,1.1-0.1c1.6-2,2.9-4.7,5.4-5.8
        c0-0.2,0-0.5,0.3-0.7c0.2-0.2,0.5,0.3,0.7-0.1c0.4-0.2-0.1-0.5,0.2-0.8c1-0.2,1.4-1.5,2.2-2.2c0.8-0.8,1.7-1.4,2.4-2.3
        c0.2-0.1,0.5-0.1,0.7-0.3c0.2-1.3,2.1-1.3,2-2.8c0.8,0.4,1.2-0.6,1.3-1.1c0.2-0.1,0.4,0.2,0.6-0.1c0.1-1,1.6-1.2,1.5-2.1
        c0.2-0.2,0.5,0.3,0.6,0c1.1-1.7,2.7-2.8,4.4-4.6c1.6-1.6,2.3-3.9,4-4.5c0.1-0.2-0.1-0.5,0.1-0.7c0.3,0,0.6-0.2,0.8-0.2
        c0.7-1.2,2.7-2.2,3.1-3.7c1.8-1.7,4.1-3.9,5.3-6c0.6-0.1,0.6-0.6,1.2-0.8c-0.1-0.4,0.3-0.7,0.3-1.1c2.3-1.5,5-4.3,7-6.6
        c5.9-6.5,12.2-12.1,18.6-16.7c4.1-2.9,8.4-5.2,12.4-7.4c1.7,1.3,3.5,2.4,5.3,3.5c0.7-0.2,1.6,0.4,2,0.8c0.4,0,0.7-0.2,1-0.7
        c-0.4-1.5,1.2-1.4,1.8-2.4c0.6-1-0.1-2.1,0-3.1c0-0.6,0.5-1.3,0.6-1.9c0.1-1-0.6-1.3-0.5-2.1c0.3-0.6,0.2-1.1,0.3-1.6
        c1.2,0.1,2.3,0.1,3.4,0.2c-0.7-0.5-2-0.7-3.3-0.8c0-0.1,0-0.1,0.1-0.1c-0.3-0.4-0.9-0.6-0.7-1.1c0.1-0.1,0.2-0.1,0.2-0.2
        c1.6,0,3.1,0.1,4.4,0.2c0.4-0.2-0.3-0.5,0.1-0.7c0.8-0.5,1.4,0,2.4-0.1c0.3-0.1-0.9-0.3-0.3-0.7c1.3,0.1,2.6,0.3,3.8,0.5
        c-0.3-0.9-2.5-0.2-2.8-1.1c0.2-0.3,1.1,0,1.2-0.3c-0.3-0.2-0.7-0.2-0.6-0.7c2.6-0.2,4,0.8,6.9,0.7c-0.4-1,0.6-1.3,0.4-2.3
        c0.9,0.1,2.1,0.3,3.5,0.4c0.4-0.5,0.8-0.6,0.7-1.1c0.3,0.1,0.6,0.2,0.9,0.2c-0.1-0.3-0.3-0.5,0.1-0.6c0.8-0.2,1.1,0.4,1.7,0.1
        c0.1-0.9-1.5-0.3-1.4-1.2c0.5-0.2,1.3,0.1,1.8-0.3c0.3,0.2,1.2,0.8,1.5,0.2c-0.6-0.3-1.8-0.2-1.9-1c0.5-0.5,1.3-0.5,2.3-0.4
        c0.1-0.2-0.2-0.7,0.1-0.7c0.6-0.1,0.7,0.2,1.2,0.1c0-0.7,1.1-0.7,0.7-1.7C474.9,230.8,473.5,230.9,473,230.2z M260.8,72.2
        c0.8,0.2,0.8,0.9,1.5,1.5C261.6,73.6,260.8,72.8,260.8,72.2z M262.4,73.2c0.3-0.4,0.6,0.1,0.6,0.3
        C262.8,73.9,262.3,73.5,262.4,73.2z M266.1,73.9c-0.2,0.4-0.8,0-0.6-0.3C265.6,73.2,266.1,73.8,266.1,73.9z M266.5,78l-1.1-0.9
        c0.1-0.4,0.4-0.4,0.4-0.8c-0.2-0.2-0.4,0.4-0.7,0.4c-0.7-0.5-1-1.1-1.8-1.6c0-0.3,0.2-0.7,0.4-1c0.1,0.1,0.2,0,0.3,0.1
        c-0.2,0.6,0.5,2.2,1.4,1.6c0.2,0.7,1.2,0.4,1.2,1.1c-0.1,0.2-0.3,0.2-0.5,0.1C266.3,77.4,267,77.6,266.5,78z M266.9,75.1
        c-0.4-0.3-0.7-0.5-0.7-0.9C266.6,73.9,267.2,74.7,266.9,75.1z M268.4,79.6c-0.4-0.2-0.4-0.3-0.8-0.6c0.2-0.6,0.9-0.6,1.4-0.1
        L268.4,79.6z M226.8,70.2c-0.3-0.2-0.5-0.5-0.2-0.8C227,69.6,227.1,69.9,226.8,70.2z M226.9,61.5c0.4,0.3,0.4,0.6,0.1,1
        C226.6,62.5,226.6,61.9,226.9,61.5z M227.2,70.5c0.5-0.1,1.2,0.9,1.3,1.4C227.9,72.3,227.4,71,227.2,70.5z M231,63.1
        c0.7-0.2,0.6,1-0.1,1C230.7,63.8,230.7,63.5,231,63.1z M230.9,71.4c-0.4,0.4-0.7-0.1-0.7-0.4C230.4,70.9,231,71.1,230.9,71.4z
         M232.2,76.8c-0.8-0.9-2.3-1.7-2-2.9c0.8,0.9,1.3,1.5,2.2,2.4C232.4,76.5,232.3,76.6,232.2,76.8z M233.5,78
        c-0.2-0.2-0.7-0.4-0.7-0.7c0.2-0.2,0.5-0.2,0.7-0.2C233.6,77.3,233.8,77.6,233.5,78z M234.9,79.3c0.3,0.1,0.2,0.3,0.4,0.5
        C235.1,80,234.5,79.7,234.9,79.3z M235.2,66l-0.2,0.2c-0.1-0.1-0.1,0-0.2,0l-0.1-0.1c0.1-0.1,0-0.1,0-0.2l0.2-0.2
        c0.1,0.1,0.1,0,0.2,0l0.1,0.1C235.1,65.9,235.2,65.9,235.2,66z M237.2,65.4c-0.3,0.2-0.4-0.3-0.5-0.4
        C237,64.5,237.4,65.2,237.2,65.4z M245.9,90.4c-0.5-0.1-1.2-0.8-0.6-1.4C246,89.1,246,90,245.9,90.4z M245.5,69.9
        c-0.2,0-0.3,0-0.5-0.2C245.1,69.3,245.8,69.6,245.5,69.9z M245.7,68.2c0.3-0.5,0.6-0.4,0.7-0.1C246.1,68.4,245.9,68.4,245.7,68.2z
         M247.1,88.5c0.3-0.1,0.2,0.2,0.3,0.4C247.2,89.1,246.7,88.8,247.1,88.5z M255.1,73.3c0.3-0.3,0.9,0.3,0.5,0.6
        C255.4,74,255.1,73.6,255.1,73.3z M256.4,74.6c-0.4-0.2-0.4-0.4-0.6-0.6C256,73.7,256.8,74.3,256.4,74.6z M258.6,74.8
        c0.3,0.1,0.7,0.2,0.2,0.6C258.6,75.2,258.3,75,258.6,74.8z M258.7,76.4c0.6,0.5,1.1,1,1.5,1.4C259.5,78,258.7,77.1,258.7,76.4z
         M261,78.6c0.2,0.2,0.5,0.3,0.5,0.6C261,79.7,260.6,79.1,261,78.6z M266.2,83.5c-0.2-0.1-0.7-0.2-0.3-0.6
        C266.1,82.9,266.4,83.2,266.2,83.5z M267.4,84.7c0.3-0.2,0.5,0.1,0.6,0.3C267.8,85.3,267.4,84.9,267.4,84.7z M272.8,87.1
        c-0.4-0.2-0.3-0.4-0.3-0.7c0.3-0.3,0.8,0.1,0.8,0.4C273.1,86.9,273,87,272.8,87.1z M272,75.6c0.2-0.2,0.4,0,0.5-0.2
        c0.2,0.5,0.8,1,1.1,1.5C272.9,77,272.4,76,272,75.6z M274.7,88l0.3,0.2C274.8,88.6,274.4,88.3,274.7,88z M276.8,114.8
        c-0.3-0.2-0.4-0.4-0.1-0.7C276.8,114.3,277,114.5,276.8,114.8z M276.6,90.5c0,0.1-0.1,0.3-0.2,0.4l-0.2-0.2
        c0.4-0.3,0.5-0.5,0.3-0.8c-0.3-0.2-0.5-0.1-0.8,0.3c0.2-0.4,0.2-0.7,0.4-1.1c1,0.5,2,1.2,2.2,2.2C277.5,92,277.3,90.2,276.6,90.5z
         M278.2,90.3c-0.4-0.2,0.1-0.7,0.3-0.4C278.3,90.2,278.5,90.2,278.2,90.3z M278.7,92.1c-0.2-0.2-0.2-0.4,0-0.6
        C279,91.4,279.1,91.7,278.7,92.1z M281.6,84.1c-0.1-0.2-0.5-0.2-0.4-0.5C281.4,83.3,282,83.9,281.6,84.1z M284.6,96.9
        c-0.4,0-0.5-0.6-0.8-0.9c0.4-0.3,0.9,0.2,1,0.6L284.6,96.9z M288.3,86.5c0.2,0.1,0.3,0.2,0.3,0.4C288.4,87.1,287.9,86.8,288.3,86.5
        z M288.6,92.4l0.2-0.3C289.7,92.1,288.9,93.2,288.6,92.4z M288.4,89.7c0.4-0.3,0.6,0.3,0.8,0.5C288.9,90.3,288.5,90,288.4,89.7z
         M289.4,89c0.4-0.3,1,0.2,1,0.6C290.1,89.9,289.5,89.3,289.4,89z M291.1,90.3c-0.4,0.1-0.5-0.3-0.5-0.6c0.2-0.3,0.5-0.2,0.8,0
        C291.2,89.9,291.3,90.1,291.1,90.3z M356.1,230.4c0.5-0.1,0.9,0,0.8,0.5C356.5,230.8,356.1,230.8,356.1,230.4z M363.5,255.2
        c0,0.1,0,0.2,0,0.4C362.5,256.1,362.5,254.7,363.5,255.2z M362.9,258.9c-0.1-0.2-0.3-0.3-0.3-0.6c0.4-0.3,0.9,0,1.2,0.1
        C363.8,258.8,363.4,258.9,362.9,258.9z M234,393.8c0.3,0.3-0.2,0.7-0.4,0.6C233.2,394,233.7,393.8,234,393.8z M232.3,395.9
        c0.3-0.8,1-0.7,1.7-1.2C233.9,395.3,232.9,396,232.3,395.9z M236.2,390.2c-0.3,0.3-0.6,0.6-1,0.6
        C235.1,390.3,235.9,389.9,236.2,390.2z M235,390.9c0.3,0.3-0.2,0.8-0.4,0.6C234.2,391.2,234.8,390.8,235,390.9z M238.1,391.9
        c-0.4-0.1-0.3-0.5-0.7-0.5c-0.2,0.2,0.3,0.5,0.3,0.7c-0.6,0.6-1.2,0.9-1.9,1.5c-0.3-0.1-0.6-0.3-0.9-0.6c0.1-0.1,0.1-0.2,0.1-0.3
        c0.6,0.3,2.2-0.1,1.8-1.2c0.7-0.2,0.6-1.1,1.3-1.1c0.2,0.2,0.2,0.3,0,0.5c0.3,0,0.6-0.6,1-0.1L238.1,391.9z M237.6,385.2
        c-0.1-0.2,0-0.4-0.1-0.6c0.6-0.1,1.1-0.7,1.7-0.9C239.2,384.4,238.1,384.8,237.6,385.2z M240.3,390c-0.5-0.3-0.5-1,0.1-1.4l0.6,0.7
        C240.7,389.7,240.7,389.8,240.3,390z M232.4,401.7c-0.2-0.3,0.4-0.8,0.7-0.4C233.1,401.6,232.7,401.8,232.4,401.7z M225.7,410.4
        c-0.4-0.4-0.3-0.6,0.1-0.7C225.9,410,225.9,410.2,225.7,410.4z M215.6,428.2c0.3-0.3,0.7-0.3,1,0.1
        C216.6,428.7,215.9,428.6,215.6,428.2z M217.9,424.4c-0.1-0.7,1.1-0.4,1,0.2C218.6,424.8,218.2,424.8,217.9,424.4z M220.8,419
        c-0.4-0.5,0.3-0.7,0.5-0.5C221.5,418.8,221,418.9,220.8,419z M221.7,420.9l-0.1,0.1c-0.1-0.1-0.1-0.1-0.2,0l-0.2-0.2
        c0.1,0,0-0.1,0-0.2l0.1-0.1c0.1,0.1,0.1,0.1,0.2,0l0.2,0.2C221.6,420.8,221.7,420.9,221.7,420.9z M223.5,429.7
        c0.3-0.3,0.6-0.4,0.9-0.1C224,429.9,223.7,430,223.5,429.7z M224.7,429.3c0-0.5,1.1-1.1,1.6-1.1
        C226.6,428.9,225.2,429.2,224.7,429.3z M225.7,426.3c-0.1-0.2,0.3-0.7,0.5-0.6C226.6,426.1,226,426.3,225.7,426.3z M227,411.3
        c-0.4-0.2,0.1-0.8,0.3-0.4C227.3,411.1,227.2,411.2,227,411.3z M228.6,426.8c1-0.7,1.7-1.1,2.8-1.9c0.1,0,0.3,0.1,0.4,0.3
        C230.8,425.9,229.7,427.3,228.6,426.8z M232.4,424.7c-0.2-0.3-0.1-0.5-0.1-0.7c0.3-0.2,0.6-0.3,0.9,0.1
        C233,424.3,232.7,424.7,232.4,424.7z M233.2,401.2c-0.2-0.3,0.5-1,0.8-0.5C233.7,401,233.4,401,233.2,401.2z M234.9,422.9
        c0.2-0.3,0.4-0.2,0.5-0.3C235.5,422.8,235.2,423.3,234.9,422.9z M234.5,398.4c0.1-0.3,0.4-0.6,0.7-0.1
        C234.9,398.5,234.7,398.8,234.5,398.4z M236.2,398.6c0.6-0.5,1.2-1,1.6-1.3C237.9,398,236.8,398.7,236.2,398.6z M238.7,396.7
        c0.2-0.2,0.4-0.5,0.7-0.5C239.8,396.8,239.1,397.1,238.7,396.7z M243.9,392.4c0-0.3,0.4-0.5,0.6-0.2
        C244.4,392.4,244.3,392.8,243.9,392.4z M246.3,390.5c0.2,0.3-0.2,0.6-0.4,0.6C245.8,390.8,246.1,390.6,246.3,390.5z M246.6,411.8
        c0.2,0.3-0.2,0.6-0.5,0.2C246.2,411.7,246.4,411.8,246.6,411.8z M246.5,413.8c0.2-0.6,1-0.5,1.5-0.3
        C247.7,414,246.9,414.6,246.5,413.8z M247.3,377.1c-0.4-0.3,0.4-0.7,0.5-0.3C247.7,376.8,247.5,377.3,247.3,377.1z M248.5,386.2
        c-0.3-0.4,0.2-0.8,0.6-0.7c0.1,0.2,0.1,0.3,0.2,0.5C249.1,386.3,248.8,386.3,248.5,386.2z M250.5,384.2l0.3-0.3
        C251.2,384.2,250.8,384.6,250.5,384.2z M254.8,368.7c0.2,0.3-0.5,0.9-0.8,0.9C253.8,369.2,254.4,368.7,254.8,368.7z M253.1,380.7
        c0.2,0.2,0.3,0.1,0.3,0.4C253.2,381.4,252.8,380.9,253.1,380.7z M251.8,370.1c0.2,0.3-0.2,0.6-0.4,0.3
        C251.5,370.2,251.6,370.2,251.8,370.1z M253.4,382.7c0.1,0,0.3,0.1,0.4,0.3l-0.2,0.2c-0.3-0.5-0.4-0.6-0.8-0.4
        c-0.2,0.2-0.1,0.5,0.2,0.8c-0.3-0.2-0.7-0.3-1-0.5c0.7-0.9,1.5-1.8,2.6-1.9C255,382,253.2,382,253.4,382.7z M254.7,380.7
        c0-0.3,0.4-0.3,0.6,0.1C255.1,381,254.9,380.9,254.7,380.7z M254.6,370.8c-0.2-0.4,0.4-0.6,0.6-0.8
        C255.3,370.4,254.9,370.7,254.6,370.8z M255,368.6c-0.3-0.3-0.1-0.5,0.1-0.8c0.2,0.1,0.4,0.1,0.6,0.3
        C255.7,368.5,255.2,368.6,255,368.6z M257.3,370.9l-0.2-0.3C257.2,369.8,258.1,370.8,257.3,370.9z M260.1,376.3
        c-0.2-0.5,0.4-0.9,0.8-0.9l0.2,0.3C261.1,376,260.5,376,260.1,376.3z M277,386c0.2-0.1,0.5-0.3,0.7,0
        C277.5,386.3,277.2,386.4,277,386z M365.8,249.3c-0.2,0.5-1.3,0.4-1.8,0.2c0-0.1,0-0.2,0-0.4C364.5,248.8,365.2,249.2,365.8,249.3z
         M366.5,257c-0.2,0.5-1.1,0.2-1.5,0.2C365.2,256.9,366,256.9,366.5,257z M364.1,258.4c0.1-0.4,1.5-0.3,1.8-0.2
        C365.7,258.7,364.5,258.7,364.1,258.4z M451.5,241.3c0.2-0.3,0.8,0,1.1,0C452.6,241.9,451.6,241.6,451.5,241.3z M453.7,239.7
        c-0.1,0-0.2,0-0.3,0c0-0.1-0.1-0.1-0.2-0.1c0-0.1,0-0.2,0-0.2c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.3,0c0,0.1,0.1,0.1,0.2,0.1
        c0,0.1,0,0.2,0,0.2C453.8,239.5,453.7,239.6,453.7,239.7z M455.1,230.7C455.1,230.7,455.1,230.7,455.1,230.7
        c0.4-0.7,2.3-0.1,2.9,0.1C457.5,231.2,455.7,231,455.1,230.7z M458.8,230.8c0.6-0.1,1.1,0,1.1,0.4
        C459.2,231.3,458.8,231.2,458.8,230.8z M460.2,238c0.5,0.1,0.9,0.3,0.9,0.8C460.6,239.4,459.5,238.5,460.2,238z M466.4,236.5
        c0.5-0.3,1.1,0.2,1.1,0.7C466.8,237.3,466.4,237,466.4,236.5z"/>
      <path d="M233.4,387.6c0.3,0.1,0.9,0.2,0.9-0.3l-0.3-0.4c-0.4,0.2-1.7,0.9-1,1.6C233.5,388.3,233.4,388,233.4,387.6z"/>
      <path d="M253.8,368.1l-0.3-0.3c-0.4,0.5-0.6,0.8-0.9,1C253.1,369.1,253.2,368.4,253.8,368.1z"/>
      <path d="M235,385.1c0.2-0.1,0.4-0.1,0.6-0.4C235.4,384.4,234.9,385,235,385.1z"/>
      <path d="M232,388.7c0.2,0.5,0.8,0.2,0.5-0.2C232.4,388.6,232.2,388.4,232,388.7z"/>
      <path d="M240.4,392.4c-0.3-0.5-0.7-0.2-0.7,0.1C240,392.8,240.3,392.7,240.4,392.4z"/>
      <path d="M228.6,404.6c0.3,0.3,0.5,0.2,0.8,0C229.1,404.2,228.8,404.4,228.6,404.6z"/>
      <path d="M228.7,396.2c0.5,0.4,0.8-0.1,0.6-0.5C229.1,395.9,228.7,395.8,228.7,396.2z"/>
      <path d="M224.3,402.4c-0.6,0.4-1.6,0.8-1.9,1.5C223.3,403.5,223.8,403.1,224.3,402.4z"/>
      <path d="M227.5,393.5l-0.4,0.3c0.3,0.2,0.5,0.5,0.8,0.3C228.1,394,227.6,393.7,227.5,393.5z"/>
      <path d="M229.2,400.2c0.2,0.4,0.4,0.2,0.5,0C229.6,400,229.4,400,229.2,400.2z"/>
      <path d="M269.1,71.9c-0.1,0.3,0,0.9,0.5,0.8l0.3-0.4c-0.3-0.4-1.2-1.5-1.7-0.7C268.4,72.1,268.7,71.9,269.1,71.9z"/>
      <path d="M272.1,73.6c0.3-0.2-0.3-0.6-0.5-0.5C271.8,73.2,271.8,73.4,272.1,73.6z"/>
      <path d="M267.8,70.7c-0.4,0.3-0.1,0.8,0.2,0.5C267.9,71,268.1,70.8,267.8,70.7z"/>
      <path d="M290.9,88.5l0.3-0.4c-0.6-0.3-0.9-0.4-1.1-0.7C289.8,88,290.5,88,290.9,88.5z"/>
      <path d="M262.4,67.2l-0.4-0.3c-0.1,0.3-0.4,0.6-0.1,0.8C262,67.8,262.2,67.3,262.4,67.2z"/>
      <path d="M265.1,78.9c-0.3,0.4-0.1,0.6,0.2,0.6C265.8,79.2,265.4,78.8,265.1,78.9z"/>
      <path d="M260.6,69.2c-0.2-0.2-0.3-0.6-0.6-0.5C259.7,69.3,260.2,69.6,260.6,69.2z"/>
      <path d="M256.1,69.9c-0.3,0.2-0.1,0.4,0.1,0.5C256.4,70.2,256.3,70.1,256.1,69.9z"/>
      <path d="M251.7,70.1c-0.2,0.3-0.1,0.5,0.2,0.7C252.3,70.5,252,70.3,251.7,70.1z"/>
      <path d="M253.3,65.5c-0.5-0.5-1-1.4-1.7-1.6C252.1,64.8,252.6,65.1,253.3,65.5z"/>
    </g>
    </svg>
    `;

  const arrow = document.getElementsByClassName("arrow");

  for (let i = 0; i < arrow.length; i++) {
    arrow[i].innerHTML = content;
  }
}

function createCircleSVG() {
  // function: create a circle icon
  // output: circle icon
  const content = `<?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 70 70" style="enable-background:new 0 0 70 70;" xml:space="preserve">
    <path style="fill:#141414;" d="M64.4,18.9l-0.4-0.8l0,0c-2.3-4.6-8.3-9.3-15.5-12c-9.1-3.4-18.7-3.2-26.3,0.5
      C19.6,7.8,7.6,18.1,3.6,30c-1.9,5.7-1.7,10.9,0.6,15.5c7.1,14,16.2,20.9,28,20.9c4.9,0,10.4-1.2,16.3-3.6c0.3-0.1,0.7-0.3,1-0.4
      c7.4-3.2,12.8-8.6,15.7-15.6C68.7,38.6,68.4,28.4,64.4,18.9z M47.9,60.9c-19,7.7-31.4,2.7-41.2-16.7c-2-4-2.2-9.1-0.4-14.3
      C10,18.9,20.7,9.5,23.1,8.4c0.3-0.1,0.6-0.3,0.9-0.4c6.9-3,15.6-3,23.8,0c7,2.6,12.7,8.8,14.6,13.3c4.1,9.8,4.4,19.2,0.8,25.3
      C59.9,52.1,55.7,57.8,47.9,60.9z"/>
    </svg>
    `;

  const circle = document.getElementsByClassName("circle");
  // create a circle
  for (let i = 0; i < circle.length; i++) {
    circle[i].innerHTML = content;
  }

  // create an arrow for it
  const arr__arrow = [];
  for (let i = 0; i < 3; i++) {
    let arrow = document.createElement("div");
    arrow.classList.add("arrow");
    arr__arrow.push(arrow);
  }
  // log(arr__arrow);

  // append specific
  for (let i = 0; i < circle.length; i++) {
    circle[i].appendChild(arr__arrow[i]);
  }
}

function createLetterSVG() {
  // function: create the letter icon
  // output: letter icon
  const content = `<?xml version="1.0" encoding="utf-8"?>
  
    <!-- Generator: Adobe Illustrator 23.0.4, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 55.2 35.6" style="enable-background:new 0 0 55.2 35.6;" xml:space="preserve">
    <g>
      <g>
        <g>
          <path style="fill:#141414;" d="M52.4,1.8H2.8c-0.7,0-1.2,0.4-1.2,1v30c0,0.6,0.5,1,1.2,1h49.7c0.7,0,1.2-0.4,1.2-1v-30
            C53.6,2.2,53.1,1.8,52.4,1.8z M51.3,29.4L36.6,17l-1.7,1.4l15.8,13.4H4.4l15.8-13.4L18.6,17L3.9,29.4V3.8h47.3V29.4z"/>
        </g>
      </g>
      <g>
        <g>
          <path style="fill:#141414;" d="M48.9,3.8l-21.3,18L6.3,3.8H3.9v0.8l22.8,19.3c0.5,0.4,1.2,0.4,1.7,0L51.3,4.6V3.8H48.9z"/>
        </g>
      </g>
    </g>
    </svg>
    `;

  const letter = document.getElementsByClassName("letter")[0];
  letter.innerHTML = content;
}

function createSpecialCSS(data_content) {
  // function: create an special css for list element
  // input: array element
  // output: special css

  // get position
  const special__ele = document.getElementsByClassName("special-ele");
  const arr_data_content = [];

  // how it work
  for (let i = 0; i < special__ele.length; i++) {
    const content = `<div class="special-wrapper">
      <a href="#" class="special-active">${data_content[i]}</a>
      <a href="#" class="special-active">${data_content[i]}</a>
    </div>`;
    arr_data_content.push(content);
  }

  // active it
  for (let i = 0; i < special__ele.length; i++) {
    //  log(special__ele[i].children);
    special__ele[i].children[0].innerHTML = arr_data_content[i];
  }
}

function handleBtnTopClicked() {
  // function: back to top when button got clicked
  let btn_top = document.querySelector("footer .circle");
  btn_top.addEventListener("click", (e) => {
    document.documentElement.scrollTop = 0;
  });
}
function footer() {
  // function: everything about footer would be created in here

  // create letter icon
  createLetterSVG();

  // create circle icon
  createCircleSVG();

  // create arrow icon
  createArrowSVG();

  // create social icon
  createSocialSVG();

  // create special css
  const data_content = [
    "faq",
    "returns",
    "contact",
    "terms",
    "privacy",
    "cookie",
  ];
  createSpecialCSS(data_content);

  // btn top got clicked
  handleBtnTopClicked();
}

footer();
