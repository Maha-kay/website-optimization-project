// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
function logCRP() {
    var n = window.performance.timing,
        t = n.domContentLoadedEventStart - n.domLoading,
        e = n.domComplete - n.domLoading,
        o = document.getElementById("crp-stats");
    o.textContent = "DCL: " + t + "ms, onload: " + e + "ms"
}
window.addEventListener("load", function(n) {
        logCRP()
    }),
      // Google Analytics
      (function(w,g){w['GoogleAnalyticsObject']=g;
      w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments)};w[g].l=1*new Date();})(window,'ga');
      // Optional TODO: replace with your Google Analytics profile ID.
      ga('create', 'UA-XXXX-Y');
      ga('send', 'pageview');