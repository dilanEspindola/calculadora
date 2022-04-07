window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body')?.classList.add("active-1");  
});

document.querySelector(".uno")?.addEventListener('click', () => {
    document.querySelector('body')?.classList.add("active-1");
    document.querySelector('body')?.classList.remove("active-2");
    document.querySelector('body')?.classList.remove("active-3");
});


document.querySelector(".dos")?.addEventListener('click', () => {
    document.querySelector('body')?.classList.add("active-2");
    document.querySelector('body')?.classList.remove("active-3");
    document.querySelector('body')?.classList.remove("active-1")    
});

document.querySelector(".tres")?.addEventListener('click', () => {
    document.querySelector('body')?.classList.add("active-3"); 
    document.querySelector('body')?.classList.remove("active-1");   
    document.querySelector('body')?.classList.remove("active-2");
});