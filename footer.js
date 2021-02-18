try {
document.getElementsByClassName('styled-footer')[0].innerHTML = "<div class='page-specific-disclaimer'></div><div class='prerelease-disclaimer'></div>Something not right? Reach out to us at <a href='mailto:it-doesnt-work@thehelpdesk.app' class='footer-link'>it-doesnt-work@thehelpdesk.app</a><hr><div class='universal-footer'><div class='universal-footer-mini-copyright-disclaimer'>Copyright &copy; 2020-2021 The Helpdesk. All rights reserved.</div><div class='universal-footer-info-links'><a href='/index.html' class='footer-link'>Home</a>&nbsp;| <a href='/learn-more/learn-more.html' class='footer-link'>Learn More</a>&nbsp;| <a href='/legal/legal.html' class='footer-link'>Legal</a>&nbsp;|<span class='region-lang'> English</span></div> "
} catch(err) {
window.alert("Uh-Oh. Looks like we've run into an error. Try reloading the page. If this error persists, please reach out to us at: \n it-doesnt-work@thehelpdesk.app")
}
//Learn More Footer
if (pageID == 'learnMore') {
document.getElementsByClassName("page-specific-disclaimer")[0].innerHTML = "The Helpdesk is not affiliated or endorsed by Apple, Cisco, Microsoft, Opera, or Google. Android and Chrome are trademarks of Google LLC and this website is not endorsed by or affiliated with Google in any way. The Android robot is from work created and shared by Google and used according to terms described in the <a target='_blank' href='https://creativecommons.org/licenses/by/3.0/' class='footer-link'>Creative Commons</a> 3.0 Attribution License. Windows is the sole property of Microsoft Inc. iPadOS&circledR;, Safari&circledR;, Mac&circledR; MacOS&circledR;, &amp; the App Store&circledR; are registered trademarks of Apple Inc. IOS is a registered trademark of Cisco Systems, Inc. and/or its affiliates in the United States and certain other countries.</div><hr>"
}
//Prerelease disclaimer
if (pageID == 'learnMore' || pageID == 'home') {
document.getElementsByClassName("prerelease-disclaimer")[0].innerHTML = "Feature set, supported devices, and launch schedule are all subject to change without prior notice. Features are still being developed and the final product may vary from any prelease info found on this site including videos, images, &amp; text.<hr>"
}