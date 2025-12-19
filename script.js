function ambilTikTok() {
  let link = document.getElementById("tiktokLink").value;

  if (link === "") {
    alert("Link TikTok masih kosong");
    return;
  }

  if (!link.includes("tiktok.com")) {
    alert("Ini bukan link TikTok");
    return;
  }

  window.open(
    "https://snaptik.app/en?url=" + encodeURIComponent(link),
    "_blank"
  );
}

function ambilInstagram() {
  let link = document.getElementById("igLink").value;

  if (link === "") {
    alert("Link Instagram masih kosong");
    return;
  }

  if (!link.includes("instagram.com")) {
    alert("Ini bukan link Instagram");
    return;
  }

  window.open(
    "https://igram.world/?url=" + encodeURIComponent(link),
    "_blank"
  );
}
