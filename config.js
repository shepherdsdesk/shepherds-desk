// ── 여기만 고치면 홈페이지의 모든 내려받기 단추가 바뀝니다 ──
// github: GitHub 아이디, repo: 저장소 이름, webCopy: 웹 버전(앱스크립트 배포용 프로젝트) 공유 링크
window.SD_CONFIG = {
  github: 'shepherdsdesk',
  repo: 'shepherds-desk',
  webCopy: '',
  version: '1.0'
};
(function () {
  var c = window.SD_CONFIG, ready = c.github && c.github !== 'YOUR-ID';
  var base = 'https://github.com/' + c.github + '/' + c.repo;
  var links = {
    mac: base + '/releases/latest/download/ShepherdsDesk-AppleSilicon.dmg',
    webzip: base + '/releases/latest/download/ShepherdsDesk-Web.zip',
    verses: base + '/releases/latest/download/ShepherdsDesk-Verses.xlsx',
    github: base,
    releases: base + '/releases',
    webcopy: c.webCopy
  };
  function apply() {
    document.querySelectorAll('[data-link]').forEach(function (a) {
      var u = links[a.getAttribute('data-link')];
      if (ready && u) a.href = u;
    });
    document.querySelectorAll('[data-version]').forEach(function (el) { el.textContent = c.version; });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
