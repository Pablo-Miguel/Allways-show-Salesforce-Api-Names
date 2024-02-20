function searchMavenRevealFieldApiNameOption(event) {
    const mavenRevealFieldApiNameNode = document.querySelector('span[title="Reveal Field API Names"]');
    if (mavenRevealFieldApiNameNode && !mavenRevealFieldApiNameNode.parentNode.classList.contains("scanOn")) {
        mavenRevealFieldApiNameNode.click();
    }
}

searchMavenRevealFieldApiNameOption();

document.addEventListener("load", searchMavenRevealFieldApiNameOption);
document.addEventListener("click", searchMavenRevealFieldApiNameOption);
