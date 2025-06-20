document.getElementById('artistList');

export function artistList(artists, element) {
  const artistList = artists.map(
    (artist) =>
      `<li><a href="/artists/details.html?id=${artist.artistId}">${artist.artistName}</a></li>`
  );
  element.innerHTML = `${artistList.join('')}`;
}
