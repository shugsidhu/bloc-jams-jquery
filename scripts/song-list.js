{
  album.songs.forEach((song,index) => {
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
        </tr>
    `);

    song.element.on('click', event => {
      player.playPause(song);
<<<<<<< HEAD
=======
      $('button#play-pause').attr('playState', player.playState);
>>>>>>> assignment-16
    });

    $('#song-list').append(song.element);
  });
}
