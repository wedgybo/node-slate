//= require ../lib/_jquery
(function (global) {
  'use strict';

  // Hack to make already open sections to start opened,
  // instead of displaying an ugly animation
  function replaceToken() {
    setTimeout(function () {
      console.log('Replace tokens', window.localStorage.getItem('token'));
      $('.auth-token').text(window.localStorage.getItem('token'))
    }, 50);
  }

  $(function () {
    replaceToken();
  });
})(window);
