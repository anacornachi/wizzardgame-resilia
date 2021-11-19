function redirectTo(character, page, subpage = undefined) {
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
    console.log("indisponivel");
  }
}

function goBackToHome() {
  window.location.href = `${window.location.origin}/index.html`;
}
