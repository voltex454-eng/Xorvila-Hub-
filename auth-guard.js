// Xorvila Auth Guard & URL Cleaner
(function() {
    // 1. Check Login Status
    const currentPath = window.location.pathname;
    
    // Agar banda auth page pe hai, to loop mat karo
    if (currentPath.includes('auth') || currentPath === '/auth') return;

    const isLoggedIn = localStorage.getItem('xorvila_user');

    if (!isLoggedIn) {
        // Login nahi hai to Auth page pe bhejo
        console.log("Access Denied: Redirecting to Login");
        // Return URL set karo taaki login ke baad wapas yahin aaye
        window.location.href = '/auth.html?returnUrl=' + encodeURIComponent(window.location.href);
    }
})();