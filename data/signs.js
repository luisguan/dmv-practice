/* Traffic-sign artwork for questions that show a sign instead of describing it.

   Drawn here as inline SVG rather than loaded as images. Traffic control
   devices are standard government designs, so the geometry is fixed and easy
   to draw; doing it in SVG keeps the app fully offline, crisp at any text size,
   and free of any external image host.

   Signs carry their own mandated colours (yellow warning diamonds, white
   regulatory plates, orange work-zone diamonds), which read correctly against
   both the light and dark app backgrounds, so these are deliberately NOT
   theme-tokenised.

   Each entry is a complete <svg> with viewBox="0 0 100 100". A question
   references one by key through its `sign` field. */

(function () {
  var Y = '#f2c200', K = '#111111', W = '#ffffff', R = '#c8102e', O = '#f57c1f';

  // A warning diamond: rotated square with an inner keyline.
  function diamond(fill, body, label) {
    return '<svg viewBox="0 0 100 100" role="img" aria-label="' +
      (label || (fill === O ? '橙色菱形施工區標誌 / orange diamond work-zone sign'
                            : '黃色菱形警告標誌 / yellow diamond warning sign')) + '">' +
      '<g transform="rotate(45 50 50)">' +
        '<rect x="20" y="20" width="60" height="60" rx="6" fill="' + fill + '" stroke="' + K + '" stroke-width="4"/>' +
        '<rect x="25" y="25" width="50" height="50" rx="3" fill="none" stroke="' + K + '" stroke-width="1.5"/>' +
      '</g>' + body + '</svg>';
  }

  // A rectangular regulatory plate.
  function plate(body, w, h) {
    w = w || 64; h = h || 76;
    var x = 50 - w / 2, y = 50 - h / 2;
    return '<svg viewBox="0 0 100 100" role="img" ' +
      'aria-label="白色管制標誌 / white regulatory sign">' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="4" fill="' + W +
      '" stroke="' + K + '" stroke-width="3.5"/>' + body + '</svg>';
  }

  // The red circle-and-slash used on prohibition signs.
  function prohibit(body) {
    return '<circle cx="50" cy="48" r="24" fill="none" stroke="' + R + '" stroke-width="6"/>' +
           body +
           '<line x1="32" y1="66" x2="68" y2="30" stroke="' + R + '" stroke-width="6" stroke-linecap="round"/>';
  }

  window.SIGNS = {

    /* ── warning diamonds (yellow) ─────────────────────────────────────── */

    pedCrossing: diamond(Y,
      '<g fill="' + K + '"><circle cx="50" cy="33" r="5"/>' +
      '<path d="M50 39c-6 0-9 4-9 9v8h4v14h4V49h2v21h4V56h4v-8c0-5-3-9-9-9z"/>' +
      '<rect x="28" y="72" width="44" height="3"/></g>'),

    sideRoad: diamond(Y,
      '<g stroke="' + K + '" stroke-width="7" fill="none" stroke-linecap="square">' +
      '<line x1="50" y1="76" x2="50" y2="30"/><line x1="50" y1="46" x2="74" y2="46"/></g>'),

    signalAhead: diamond(Y,
      '<rect x="41" y="24" width="18" height="44" rx="4" fill="none" stroke="' + K + '" stroke-width="3.5"/>' +
      '<circle cx="50" cy="34" r="4.5" fill="' + R + '"/>' +
      '<circle cx="50" cy="46" r="4.5" fill="' + Y + '" stroke="' + K + '" stroke-width="1"/>' +
      '<circle cx="50" cy="58" r="4.5" fill="#1f9d4d"/>' +
      '<line x1="50" y1="68" x2="50" y2="78" stroke="' + K + '" stroke-width="3.5"/>'),

    steepGrade: diamond(Y,
      '<g fill="' + K + '"><path d="M24 70L70 30v40z" opacity=".18"/>' +
      '<path d="M26 70 70 32" stroke="' + K + '" stroke-width="4" fill="none"/>' +
      '<g transform="rotate(-42 50 52)"><rect x="40" y="44" width="22" height="11" rx="2"/>' +
      '<rect x="34" y="48" width="8" height="7" rx="1"/>' +
      '<circle cx="42" cy="57" r="3.2"/><circle cx="58" cy="57" r="3.2"/></g></g>'),

    merge: diamond(Y,
      '<g stroke="' + K + '" fill="none" stroke-width="6.5" stroke-linecap="square">' +
      '<line x1="42" y1="78" x2="42" y2="40"/>' +
      '<path d="M66 78c0-16-24-20-24-34"/></g>' +
      '<path d="M42 24l8 14H34z" fill="' + K + '"/>'),

    reverseCurve: diamond(Y,
      '<path d="M44 78c0-13 14-16 14-28s-12-14-12-22" fill="none" stroke="' + K + '" stroke-width="6.5"/>' +
      '<path d="M46 20l8 13H38z" fill="' + K + '"/>'),

    windingRoad: diamond(Y,
      '<path d="M44 80c0-10 12-12 12-21s-12-11-12-20 10-11 10-17" fill="none" stroke="' + K + '" stroke-width="6"/>' +
      '<path d="M54 18l7 13H47z" fill="' + K + '"/>'),

    sharpTurnRight: diamond(Y,
      '<path d="M40 78V44h22" fill="none" stroke="' + K + '" stroke-width="7"/>' +
      '<path d="M78 44 60 34v20z" fill="' + K + '"/>'),

    slipperyWhenWet: diamond(Y,
      '<g fill="' + K + '"><rect x="34" y="38" width="32" height="13" rx="3"/>' +
      '<rect x="28" y="43" width="9" height="8" rx="1.5"/>' +
      '<circle cx="38" cy="54" r="4"/><circle cx="60" cy="54" r="4"/></g>' +
      '<g stroke="' + K + '" stroke-width="3.5" fill="none" stroke-linecap="round">' +
      '<path d="M32 66c4-5 8 5 12 0s8 5 12 0 8 5 12 0"/></g>'),

    /* ── work zone (orange) ────────────────────────────────────────────── */

    roadwork: diamond(O,
      '<g fill="' + K + '"><circle cx="50" cy="30" r="5"/>' +
      '<path d="M43 37h14l5 13-4 2-3-7v10H45V45l-3 7-4-2z"/>' +
      '<path d="M45 55h10l3 20h-5l-2-12-2 12h-5z"/>' +
      '<rect x="26" y="78" width="48" height="3"/></g>'),

    /* ── railroad ──────────────────────────────────────────────────────── */

    railroadAdvance:
      '<svg viewBox="0 0 100 100" role="img" aria-label="黃色圓形標誌 / yellow circular sign">' +
      '<circle cx="50" cy="50" r="34" fill="' + Y + '" stroke="' + K + '" stroke-width="4"/>' +
      '<circle cx="50" cy="50" r="29" fill="none" stroke="' + K + '" stroke-width="1.5"/>' +
      '<g stroke="' + K + '" stroke-width="5.5"><line x1="30" y1="30" x2="70" y2="70"/>' +
      '<line x1="70" y1="30" x2="30" y2="70"/></g>' +
      '<text x="35" y="45" font-family="Helvetica,Arial,sans-serif" font-size="15" font-weight="700" fill="' + K + '">R</text>' +
      '<text x="56" y="63" font-family="Helvetica,Arial,sans-serif" font-size="15" font-weight="700" fill="' + K + '">R</text>' +
      '</svg>',

    crossbuck:
      '<svg viewBox="0 0 100 100" role="img" aria-label="白色 X 形標誌 / white X-shaped sign">' +
      '<g transform="rotate(45 50 50)">' +
      '<rect x="16" y="43" width="68" height="14" rx="2" fill="' + W + '" stroke="' + K + '" stroke-width="3"/>' +
      '</g><g transform="rotate(-45 50 50)">' +
      '<rect x="16" y="43" width="68" height="14" rx="2" fill="' + W + '" stroke="' + K + '" stroke-width="3"/>' +
      '</g></svg>',

    /* ── regulatory plates (white) ─────────────────────────────────────── */

    yieldSign:
      '<svg viewBox="0 0 100 100" role="img" aria-label="紅白色倒三角形標誌 / red and white downward triangle sign">' +
      '<path d="M8 22h84L50 90z" fill="' + W + '" stroke="' + R + '" stroke-width="9" stroke-linejoin="round"/>' +
      '<text x="50" y="48" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="17" font-weight="700" fill="' + R + '">YIELD</text>' +
      '</svg>',

    doNotEnter:
      '<svg viewBox="0 0 100 100" role="img" aria-label="紅白色方形管制標誌 / red and white square regulatory sign">' +
      '<rect x="14" y="14" width="72" height="72" rx="5" fill="' + W + '" stroke="' + K + '" stroke-width="3.5"/>' +
      '<circle cx="50" cy="42" r="23" fill="' + R + '"/>' +
      '<rect x="32" y="37" width="36" height="10" rx="2" fill="' + W + '"/>' +
      '<text x="50" y="76" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="11" font-weight="700" fill="' + K + '">DO NOT ENTER</text>' +
      '</svg>',

    noUturn: plate(prohibit(
      '<path d="M40 60V44a10 10 0 0 1 20 0v14" fill="none" stroke="' + K + '" stroke-width="5"/>' +
      '<path d="M60 62l-6-10h12z" fill="' + K + '"/>')),

    noLeftTurn: plate(prohibit(
      '<path d="M58 62V46H42" fill="none" stroke="' + K + '" stroke-width="5"/>' +
      '<path d="M32 46l12-7v14z" fill="' + K + '"/>')),

    noRightTurn: plate(prohibit(
      '<path d="M42 62V46h16" fill="none" stroke="' + K + '" stroke-width="5"/>' +
      '<path d="M68 46l-12-7v14z" fill="' + K + '"/>')),

    slowerTrafficKeepRight: plate(
      '<text x="50" y="40" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="13" font-weight="700" fill="' + K + '">SLOWER</text>' +
      '<text x="50" y="54" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="13" font-weight="700" fill="' + K + '">TRAFFIC</text>' +
      '<text x="50" y="68" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="13" font-weight="700" fill="' + K + '">KEEP RIGHT</text>', 78, 60),

    /* ── hand signal (not a sign, but the same "look at the picture" case) ── */

    bikeLeftSignal:
      '<svg viewBox="0 0 100 100" role="img" aria-label="騎自行車者的手勢圖示 / illustration of a bicyclist’s hand signal">' +
      '<g fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round">' +
      '<circle cx="58" cy="26" r="9" fill="currentColor" stroke="none"/>' +
      '<path d="M58 35v26"/>' +            /* torso */
      '<path d="M58 44H22"/>' +            /* left arm straight out */
      '<path d="M58 61l-9 22M58 61l10 22"/>' + /* legs */
      '</g></svg>'
  };
})();
