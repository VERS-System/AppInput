const stacks = document.querySelectorAll(".stack");

stacks.forEach(stack => {
    stack.addEventListener("mouseenter", () => {
        stacks.forEach(s => s.classList.remove("active")); // fecha todas
        stack.classList.add("active"); // abre somente a ativa
    });
});
    