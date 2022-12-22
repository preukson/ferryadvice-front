
const Mobilekit = {
    version: "s2.9", // Mobilekit version
    //-------------------------------------------------------------------
    // PWA Settings
    PWA: {
        enable: true, // Enable or disable PWA
    },

    //-------------------------------------------------------------------
}
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Elements
//-----------------------------------------------------------------------
var pageBody = document.querySelector("body");
var appSidebar = document.getElementById("sidebarPanel")
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Service Workers
//-----------------------------------------------------------------------
/*if (Mobilekit.PWA.enable) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('service worker registered'))
            .catch(err => console.log('service worker not registered - there is an error.', err));
    }
}*/



//-----------------------------------------------------------------------
// Copyright Year
var date = new Date();
var nowYear = date.getFullYear();
var copyrightYear = document.querySelectorAll('.yearNow');
copyrightYear.forEach(function(el){
    el.innerHTML = nowYear
})
//-----------------------------------------------------------------------

// OS Detection
var osDetection = navigator.userAgent || navigator.vendor || window.opera;
var windowsPhoneDetection = /windows phone/i.test(osDetection);
var androidDetection = /android/i.test(osDetection);
var iosDetection = /iPad|iPhone|iPod/.test(osDetection) && !window.MSStream;

var detectionWindowsPhone = document.querySelectorAll(".windowsphone-detection");
var detectionAndroid = document.querySelectorAll(".android-detection");
var detectioniOS = document.querySelectorAll(".ios-detection");
var detectionNone = document.querySelectorAll(".non-mobile-detection");

if (windowsPhoneDetection) {
    // Windows Phone Detected
    detectionWindowsPhone.forEach(function (el) {
        el.classList.add("is-active");
    })
}
else if (androidDetection) {
    // Android Detected
    detectionAndroid.forEach(function (el) {
        el.classList.add("is-active");
    })
}
else if (iosDetection) {
    // iOS Detected
    detectioniOS.forEach(function (el) {
        el.classList.add("is-active");
    })
}
else {
    // Non-Mobile Detected
    detectionNone.forEach(function (el) {
        el.classList.add("is-active");
    })

}


//-----------------------------------------------------------------------
// Carousel
// Splide Carousel
document.addEventListener('DOMContentLoaded', function () {

    // Full Carousel
    document.querySelectorAll('.carousel-full').forEach(carousel => new Splide(carousel, {
        perPage: 1,
        rewind: true,
        type: "loop",
        gap: 0,
        arrows: false,
        pagination: false,
    }).mount());

    // Single Carousel
    document.querySelectorAll('.carousel-single').forEach(carousel => new Splide(carousel, {
        perPage: 3,
        rewind: true,
        type: "loop",
        gap: 16,
        padding: 16,
        arrows: false,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1
            },
            991: {
                perPage: 2
            }
        }
    }).mount());

    // Multiple Carousel
    document.querySelectorAll('.carousel-multiple').forEach(carousel => new Splide(carousel, {
        perPage: 4,
        rewind: true,
        type: "loop",
        gap: 16,
        padding: 16,
        arrows: false,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 2
            },
            991: {
                perPage: 3
            }
        }
    }).mount());

    // Small Carousel
    document.querySelectorAll('.carousel-small').forEach(carousel => new Splide(carousel, {
        perPage: 9,
        rewind: false,
        type: "loop",
        gap: 16,
        padding: 16,
        arrows: false,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 5
            },
            991: {
                perPage: 7
            }
        }
    }).mount());

    // Slider Carousel
    document.querySelectorAll('.carousel-slider').forEach(carousel => new Splide(carousel, {
        perPage: 1,
        rewind: false,
        type: "loop",
        gap: 16,
        padding: 16,
        arrows: false,
        pagination: true
    }).mount());

    // Stories Carousel
    document.querySelectorAll('.story-block').forEach(carousel => new Splide(carousel, {
        perPage: 16,
        rewind: false,
        type: "slide",
        gap: 16,
        padding: 16,
        arrows: false,
        pagination: false,
        breakpoints: {
            500: {
                perPage: 4
            },
            768: {
                perPage: 7
            },
            1200: {
                perPage: 11
            }
        }
    }).mount());
});
//-----------------------------------------------------------------------


//-----------------------------------------------------------------------
// Offline Mode / Online Mode Detection

// You can change the text here
var OnlineText = "Connected to Internet";
var OfflineText = "No Internet Connection";

// Online Mode Toast Append
function onlineModeToast() {
    var check = document.getElementById("online-toast");
    if (document.body.contains(check)) {
        check.classList.add("show")
    }
    else {
        pageBody.appendChild(document.createElement("div")).id = "online-toast";
        var toast = document.getElementById("online-toast");
        toast.className = "toast-box bg-success toast-top tap-to-close";
        toast.innerHTML =
            "<div class='in'><div class='text'>"
            +
            OnlineText
            +
            "</div></div>"
        setTimeout(() => {
            toastbox('online-toast', 3000);
        }, 500);
    }
}

// Offline Mode Toast Append
function offlineModeToast() {
    var check = document.getElementById("offline-toast");
    if (document.body.contains(check)) {
        check.classList.add("show")
    }
    else {
        pageBody.appendChild(document.createElement("div")).id = "offline-toast";
        var toast = document.getElementById("offline-toast");
        toast.className = "toast-box bg-danger toast-top tap-to-close";
        toast.innerHTML =
            "<div class='in'><div class='text'>"
            +
            OfflineText
            +
            "</div></div>"
        setTimeout(() => {
            toastbox('offline-toast', 3000);
        }, 500);
    }
}

// Online Mode Function
function onlineMode() {
    var check = document.getElementById("offline-toast");
    if (document.body.contains(check)) {
        check.classList.remove("show")
    }
    onlineModeToast();
    var toast = document.getElementById("online-toast")
    toast.addEventListener("click", function () {
        this.classList.remove("show")
    })
    setTimeout(() => {
        toast.classList.remove("show")
    }, 3000);
}

// Online Mode Function
function offlineMode() {
    var check = document.getElementById("online-toast");
    if (document.body.contains(check)) {
        check.classList.remove("show")
    }
    offlineModeToast();
    var toast = document.getElementById("offline-toast")
    toast.addEventListener("click", function () {
        this.classList.remove("show")
    })
    setTimeout(() => {
        toast.classList.remove("show")
    }, 3000);
}

// Check with event listener if online or offline
window.addEventListener('online', onlineMode);
window.addEventListener('offline', offlineMode);
//-----------------------------------------------------------------------



//-----------------------------------------------------------------------
// Add to Home
function iosAddtoHome() {
    var offcanvas = new bootstrap.Offcanvas(document.getElementById('ios-add-to-home-screen'))
    offcanvas.toggle();
}
function androidAddtoHome() {
    var offcanvas = new bootstrap.Offcanvas(document.getElementById('android-add-to-home-screen'))
    offcanvas.toggle();
}
function AddtoHome(time, once) {
    if (once) {
        var AddHomeStatus = localStorage.getItem("MobilekitAddHomeStatus");
        if (AddHomeStatus === "1" || AddHomeStatus === 1) {
            // already showed up
        }
        else {
            localStorage.setItem("MobilekitAddHomeStatus", 1)
            window.addEventListener('load', () => {
                if (navigator.standalone) {
                    // if app installed ios home screen
                }
                else if (matchMedia('(display-mode: standalone)').matches) {
                    // if app installed android home screen
                }
                else {
                    // if app is not installed
                    if (androidDetection) {
                        setTimeout(() => {
                            androidAddtoHome()
                        }, time);
                    }
                    if (iosDetection) {
                        setTimeout(() => {
                            iosAddtoHome()
                        }, time);
                    }
                }
            });
        }
    }
    else {
        window.addEventListener('load', () => {
            if (navigator.standalone) {
                // app loaded to ios
            }
            else if (matchMedia('(display-mode: standalone)').matches) {
                // app loaded to android
            }
            else {
                // app not loaded
                if (androidDetection) {
                    setTimeout(() => {
                        androidAddtoHome()
                    }, time);
                }
                if (iosDetection) {
                    setTimeout(() => {
                        iosAddtoHome()
                    }, time);
                }
            }
        });
    }

}