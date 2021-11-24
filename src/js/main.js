function redirectTo(character, page, subpage = undefined) {
  if (window.location.href.contains("wizzardgame-resilia")) {
    return (window.location.href =
      window.location.origin +
      `/wizzardgame-resilia/${character}/${page}${
        subpage ? `/${subpage}.html` : ".html"
      }`);
  }
  window.location.href =
    window.location.origin +
    `/${character}/${page}${subpage ? `/${subpage}.html` : ".html"}`;
}

function activatePrompt() {
  const witcher = window.prompt("Qual bruxo você deseja?");
  if (
    witcher.toLowerCase() === "severo snape" ||
    witcher.toLowerCase() === "snape" ||
    witcher.toLowerCase() === "severo" ||
    witcher == 1
  ) {
    return redirectTo("snape", "pilot");
  } else if (
    witcher.toLowerCase() === "harry potter" ||
    witcher == 2 ||
    witcher.toLowerCase() === "harry"
  ) {
    return redirectTo("harry", "pilot");
  } else if (witcher.toLowerCase() === "dumbledore" || witcher == 3) {
    return redirectTo("dumbledore", "pilot");
  } else {
    alert("Personagem indisponível, tente novamente. ");
  }
}

function goBackToHome() {
  window.location.href = `${window.location.origin}/index.html`;
}
