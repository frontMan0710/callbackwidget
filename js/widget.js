export const widgetInit = ({organizationId, language, iconColor, top, right, bottom, left, animation}) => {
    document.body.innerHTML +=
        `
        <div id="widgetWrapper">
            <button type="button" id="chatIcon">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path d="M695 4401 c-86 -21 -166 -87 -207 -169 l-23 -47 0 -1250 0 -1250 21 -46 c28 -60 93 -125 153 -152 38 -18 70 -22 184 -25 l137 -4 0 -334 c0 -356 3 -379 49 -404 30 -15 84 -12 111 7 14 10 227 178 473 375 l448 358 1188 0 c1328 0 1239 -5 1326 72 25 22 58 64 73 92 l27 51 0 1255 0 1255 -21 46 c-28 60 -93 125 -153 153 l-46 21 -1855 2 c-1020 0 -1868 -2 -1885 -6z m3736 -229 l29 -32 0 -1201 c0 -1304 3 -1241 -55 -1267 -20 -9 -319 -12 -1233 -12 -1121 0 -1209 -1 -1232 -17 -14 -9 -195 -154 -402 -320 l-378 -304 0 281 c0 305 -3 325 -55 348 -17 8 -85 12 -195 12 -110 0 -178 4 -195 12 -58 26 -55 -37 -55 1266 l0 1199 21 27 c12 15 31 32 43 36 11 5 844 8 1849 7 l1829 -2 29 -33z" />
                <path d="M1248 3631 c-27 -24 -33 -36 -33 -71 0 -35 6 -47 33 -71 l32 -29 1276 0 c1373 0 1316 -2 1344 49 26 49 4 114 -47 140 -16 8 -377 11 -1297 11 l-1276 0 -32 -29z" />
                <path d="M1259 3015 c-55 -30 -61 -110 -13 -156 l26 -24 776 -3 c572 -2 784 1 805 9 60 25 76 112 28 160 l-29 29 -784 0 c-657 -1 -787 -3 -809 -15z" />
                <path d="M3259 3015 c-55 -30 -61 -110 -13 -156 25 -24 27 -24 302 -27 300 -3 322 0 347 49 24 45 19 87 -14 120 l-29 29 -284 0 c-225 -1 -288 -4 -309 -15z" />
                <path d="M1280 2403 c-52 -19 -81 -83 -60 -134 26 -62 -54 -59 1350 -59 l1282 0 29 29 c40 40 40 89 0 133 l-29 33 -1279 2 c-703 1 -1285 -1 -1293 -4z" /></g></svg>
                <span id="notificationCount" class="notification-badge">1</span>
            </button>
            <div id="chatBody">
                <div class="chatHead">
                     <span class="chatContactName">Support</span>
                     <span class="chatContactStatus">Online</span>
                </div>
                <div class="chatMessages">
                    <p class="chatMessage">hi</p>
                    <p class="chatMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Accusamus architecto assumenda consectetur consequatur doloremque facere inventore, magni molestiae nesciunt sunt.
                      Aperiam aspernatur deleniti earum eveniet impedit magni perferendis ratione voluptatibus.
                    </p>
                </div>
                <form action="">
                    <label class="filePaste" for="fileChoose">
                        <input type="file" id="fileChoose" style="display:none;">
                        <button type="button" id="clearButton" style="display: none;">
                            <svg fill="#000000" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z" /></svg>
                        </button>
                        <svg fill="#000000" height="18" width="18" version="1.1" id="clip" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.591 330.591" xml:space="preserve"><g>\t<g>\t\t
                        <path d="M52.575,320.395c-0.693,0-1.391-0.015-2.09-0.043c-12.979-0.54-25.361-6.071-34.865-15.576
                            c-9.504-9.504-15.035-21.886-15.576-34.864c-0.549-13.213,4.115-25.456,13.133-34.475L221.581,27.033
                                c11.523-11.523,27.197-17.483,44.096-16.78c16.676,0.693,32.594,7.81,44.822,20.037c12.228,12.229,19.346,28.147,20.037,44.823
                                    c0.703,16.911-5.256,32.571-16.781,44.096L156.711,276.255c-2.928,2.927-7.676,2.928-10.607,0c-2.928-2.93-2.928-7.678,0-10.608
                                        l157.045-157.047c8.523-8.522,12.928-20.194,12.4-32.865c-0.537-12.906-6.098-25.279-15.658-34.84
                                            c-9.559-9.56-21.932-15.119-34.838-15.656c-12.67-0.533-24.344,3.876-32.865,12.399L23.784,246.044
                            c-12.596,12.594-11.498,34.184,2.443,48.125c6.836,6.837,15.672,10.813,24.881,11.195c8.975,0.349,17.229-2.734,23.244-8.752
                                l169.441-169.439c7.422-7.422,6.691-20.229-1.629-28.549c-4.113-4.114-9.414-6.505-14.924-6.733
                                    c-5.289-0.212-10.115,1.595-13.625,5.106L95.536,215.08c-2.93,2.927-7.678,2.928-10.607,0c-2.93-2.93-2.93-7.678,0-10.607
                                        L203.008,86.39c6.512-6.512,15.322-9.9,24.855-9.486c9.281,0.385,18.127,4.332,24.906,11.114
                                            c14.17,14.167,14.9,36.49,1.631,49.762L84.959,307.22C76.418,315.76,64.985,320.395,52.575,320.395z" />\t</g></g></svg>
                    </label>
                    <span id="fileName" style="display: none;">No file chosen</span>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter the message"></textarea>
                    <button type="submit">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 840.000000 864.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,864.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M310 8223 c0 -22 703 -3529 709 -3535 3 -4 168 -17 366 -28 198 -11 558 -31 800 -45 242 -14 564 -32 715 -40 151 -8 516 -29 810 -45 685 -39 762 -43 1440 -80 311 -17 580 -33 598 -36 27 -4 33 -9 30 -27 -3 -24 256 -1 -3323 -297 -1137 -94 -1449 -120 -1451 -123 -1 -1 -20 -85 -42 -187 -23 -102 -69 -306 -102 -455 -72 -316 -162 -719 -225 -1000 -25 -110 -133 -587 -239 -1060 -107 -473 -192 -862 -191 -863 3 -4 1324 659 2490 1248 248 125 918 463 1490 751 572 287 1418 713 1880 946 462 233 1129 568 1482 746 354 177 643 325 643 328 0 3 -89 49 -197 102 -248 119 -1380 666 -1568 757 -77 37 -471 227 -875 422 -832 403 -1611 779 -2680 1295 -404 196 -935 452 -1180 571 -950 459 -1372 662 -1376 662 -2 0 -4 -3 -4 -7z" /></g></svg>
                    </button>
                </form>
            </div>
        </div>
        `
    const userChange = {
        organizationId: organizationId,
        language: language,
        iconColor: iconColor,
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        animation: animation,
    }
    document.documentElement.style.setProperty("--icon-color", userChange.iconColor)
    document.documentElement.style.setProperty("--top", userChange.top)
    document.documentElement.style.setProperty("--right", userChange.right)
    document.documentElement.style.setProperty("--bottom", userChange.bottom)
    document.documentElement.style.setProperty("--left", userChange.left)
    if (userChange.animation == true) {
        document.documentElement.style.setProperty("--animation", "ease-in-out")
    }
    document.getElementById("chatIcon").addEventListener("click", function () {
        document.getElementById("chatBody").classList.toggle("active")
        document.getElementById("notificationCount").style.display = "none"
    })
    function notificationCount() {
        const chatMessages = document.getElementsByClassName("chatMessage")
        const notificationCount = document.getElementById("notificationCount")
        const count = chatMessages.length
        if (count > 0) {
            notificationCount.textContent = count
            notificationCount.style.display = "flex"
        } else {
            notificationCount.style.display = "none"
        }
    }
    notificationCount()

    const fileInput = document.getElementById("fileChoose")
    const fileName = document.getElementById("fileName")
    const clearButton = document.getElementById("clearButton")
    const chooseIcon = document.getElementById("clip")

    fileInput.addEventListener("change", function() {
        if (fileInput.files.length > 0) {
            fileName.textContent = fileInput.files[0].name
            fileName.style.display = "block"
            clearButton.style.display = "inline-block"
            chooseIcon.style.display = "none"
        } else {
            fileName.style.display = "none"
            clearButton.style.display = "none"
            chooseIcon.style.display = "block"
        }
    })
    clearButton.addEventListener("click", function() {
        fileInput.value = ""
        clearButton.style.display = "none"
        fileName.style.display = "none"
        chooseIcon.style.display = "block"
    })
}