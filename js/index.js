const shareButton = document.querySelector("#share__button");
const containerActive = document.querySelector("#container_active_state");

document.addEventListener("click", (event) => {
    const elementClicked = event.target.closest("#share__button");

    const delayAnimation = () => {
        setTimeout(() => {
            containerActive.classList.toggle("container--opacity-full");
        }, 0);
    };

    if (elementClicked) {
        containerActive.classList.toggle("container--visible");
        delayAnimation();
    } else if (containerActive.classList.contains("container--visible")) {
        containerActive.classList.remove("container--visible");
        delayAnimation();
    }
});
