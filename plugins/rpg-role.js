let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let role =
    user.level <= 2
      ? "Newbie ㋡"
      : user.level >= 2 && user.level <= 4
        ? "Furry Pelajar 1 ⚊¹"
        : user.level >= 4 && user.level <= 6
          ? "Furry Pelajar 2 ⚊²"
          : user.level >= 6 && user.level <= 8
            ? "Furry Pelajar 3 ⚊³"
            : user.level >= 8 && user.level <= 10
              ? "Furry Pelajar 4 ⚊⁴"
              : user.level >= 10 && user.level <= 20
                ? "Furry Pemula 1 ⚌¹"
                : user.level >= 20 && user.level <= 30
                  ? "Furry Pemula 2 ⚌²"
                  : user.level >= 30 && user.level <= 40
                    ? "Furry Pemula 3 ⚌³"
                    : user.level >= 40 && user.level <= 50
                      ? "Furry Pemula 4 ⚌⁴"
                      : user.level >= 50 && user.level <= 60
                        ? "Furry Pemula 5 ⚌⁵"
                        : user.level >= 60 && user.level <= 70
                          ? "Furry Senior 1 ☰¹"
                          : user.level >= 70 && user.level <= 80
                            ? "Furry Senior 2 ☰²"
                            : user.level >= 80 && user.level <= 90
                              ? "Furry Senior 3 ☰³"
                              : user.level >= 90 && user.level <= 100
                                ? "Furry Senior 4 ☰⁴"
                                : user.level >= 100 && user.level <= 110
                                  ? "Furry Senior 5 ☰⁵"
                                  : user.level >= 110 && user.level <= 120
                                    ? "Furry Expert 1 ≣¹"
                                    : user.level >= 120 && user.level <= 130
                                      ? "Furry Expert 2 ≣²"
                                      : user.level >= 130 && user.level <= 140
                                        ? "Furry Expert 3 ≣³"
                                        : user.level >= 140 && user.level <= 150
                                          ? "Furry Expert 4 ≣⁴"
                                          : user.level >= 150 &&
                                              user.level <= 160
                                            ? "Furry Expert 5 ≣⁵"
                                            : user.level >= 160 &&
                                                user.level <= 170
                                              ? "Sepuh Furry 1 ﹀¹"
                                              : user.level >= 170 &&
                                                  user.level <= 180
                                                ? "Sepuh Furry 2 ﹀²"
                                                : user.level >= 180 &&
                                                    user.level <= 190
                                                  ? "Sepuh Furry 3 ﹀³"
                                                  : user.level >= 190 &&
                                                      user.level <= 200
                                                    ? "Sepuh Furry 4 ﹀⁴"
                                                    : user.level >= 200 &&
                                                        user.level <= 210
                                                      ? "Sepuh Furry 5 ﹀⁵"
                                                      : user.level >= 210 &&
                                                          user.level <= 220
                                                        ? "Pemuja Furry 1 ︾¹"
                                                        : user.level >= 220 &&
                                                            user.level <= 230
                                                          ? "Pemuja Furry 2 ︾²"
                                                          : user.level >= 230 &&
                                                              user.level <= 240
                                                            ? "Pemuja Furry 3 ︾³"
                                                            : user.level >=
                                                                  240 &&
                                                                user.level <=
                                                                  250
                                                              ? "Pemuja Furry 4 ︾⁴"
                                                              : user.level >=
                                                                    250 &&
                                                                  user.level <=
                                                                    260
                                                                ? "Pemuja Furry 5 ︾⁵"
                                                                : user.level >=
                                                                      260 &&
                                                                    user.level <=
                                                                      270
                                                                  ? "Furry Acolyte 1 ⛧¹"
                                                                  : user.level >=
                                                                        270 &&
                                                                      user.level <=
                                                                        280
                                                                    ? "Furry Acolyte 2 ⛧²"
                                                                    : user.level >=
                                                                          280 &&
                                                                        user.level <=
                                                                          290
                                                                      ? "Furry Acolyte 3 ⛧³"
                                                                      : user.level >=
                                                                            290 &&
                                                                          user.level <=
                                                                            300
                                                                        ? "Furry Acolyte 4 ⛧⁴"
                                                                        : user.level >=
                                                                              300 &&
                                                                            user.level <=
                                                                              310
                                                                          ? "Furry Acolyte 5 ⛧⁵"
                                                                          : user.level >=
                                                                                310 &&
                                                                              user.level <=
                                                                                320
                                                                            ? "Furry Guardian 1 ⛥¹"
                                                                            : user.level >=
                                                                                  320 &&
                                                                                user.level <=
                                                                                  330
                                                                              ? "Furry Guardian 2 ⛥²"
                                                                              : user.level >=
                                                                                    330 &&
                                                                                  user.level <=
                                                                                    340
                                                                                ? "Furry Guardian 3 ⛥³"
                                                                                : user.level >=
                                                                                      340 &&
                                                                                    user.level <=
                                                                                      350
                                                                                  ? "Furry Guardian 4 ⛥⁴"
                                                                                  : user.level >=
                                                                                        350 &&
                                                                                      user.level <=
                                                                                        360
                                                                                    ? "Furry Guardian 5 ⛥⁵"
                                                                                    : user.level >=
                                                                                          360 &&
                                                                                        user.level <=
                                                                                          370
                                                                                      ? "Furry Champion 1 ✶¹"
                                                                                      : user.level >=
                                                                                            370 &&
                                                                                          user.level <=
                                                                                            380
                                                                                        ? "Furry Champion 2 ✶²"
                                                                                        : user.level >=
                                                                                              380 &&
                                                                                            user.level <=
                                                                                              390
                                                                                          ? "Furry Champion 3 ✶³"
                                                                                          : user.level >=
                                                                                                390 &&
                                                                                              user.level <=
                                                                                                400
                                                                                            ? "Furry Champion 4 ✶⁴"
                                                                                            : user.level >=
                                                                                                  400 &&
                                                                                                user.level <=
                                                                                                  410
                                                                                              ? "Furry Champion 5 ✶⁵"
                                                                                              : user.level >=
                                                                                                    410 &&
                                                                                                  user.level <=
                                                                                                    420
                                                                                                ? "Furry Master 1 ✷¹"
                                                                                                : user.level >=
                                                                                                      420 &&
                                                                                                    user.level <=
                                                                                                      430
                                                                                                  ? "Furry Master 2 ✷²"
                                                                                                  : user.level >=
                                                                                                        430 &&
                                                                                                      user.level <=
                                                                                                        440
                                                                                                    ? "Furry Master 3 ✷³"
                                                                                                    : user.level >=
                                                                                                          440 &&
                                                                                                        user.level <=
                                                                                                          450
                                                                                                      ? "Furry Master 4 ✷⁴"
                                                                                                      : user.level >=
                                                                                                            450 &&
                                                                                                          user.level <=
                                                                                                            460
                                                                                                        ? "Furry Master 5 ✷⁵"
                                                                                                        : user.level >=
                                                                                                              460 &&
                                                                                                            user.level <=
                                                                                                              470
                                                                                                          ? "Furry Grandmaster 1 ✸¹"
                                                                                                          : user.level >=
                                                                                                                470 &&
                                                                                                              user.level <=
                                                                                                                480
                                                                                                            ? "Furry Grandmaster 2 ✸²"
                                                                                                            : user.level >=
                                                                                                                  480 &&
                                                                                                                user.level <=
                                                                                                                  490
                                                                                                              ? "Furry Grandmaster 3 ✸³"
                                                                                                              : user.level >=
                                                                                                                    490 &&
                                                                                                                  user.level <=
                                                                                                                    500
                                                                                                                ? "Furry Grandmaster 4 ✸⁴"
                                                                                                                : user.level >=
                                                                                                                      500 &&
                                                                                                                    user.level <=
                                                                                                                      510
                                                                                                                  ? "Furry Grandmaster 5 ✸⁵"
                                                                                                                  : user.level >=
                                                                                                                        510 &&
                                                                                                                      user.level <=
                                                                                                                        520
                                                                                                                    ? "Furry Legend 1 ✹¹"
                                                                                                                    : user.level >=
                                                                                                                          520 &&
                                                                                                                        user.level <=
                                                                                                                          530
                                                                                                                      ? "Furry Legend 2 ✹²"
                                                                                                                      : user.level >=
                                                                                                                            530 &&
                                                                                                                          user.level <=
                                                                                                                            540
                                                                                                                        ? "Furry Legend 3 ✹³"
                                                                                                                        : user.level >=
                                                                                                                              540 &&
                                                                                                                            user.level <=
                                                                                                                              550
                                                                                                                          ? "Furry Legend 4 ✹⁴"
                                                                                                                          : user.level >=
                                                                                                                                550 &&
                                                                                                                              user.level <=
                                                                                                                                560
                                                                                                                            ? "Furry Legend 5 ✹⁵"
                                                                                                                            : user.level >=
                                                                                                                                  560 &&
                                                                                                                                user.level <=
                                                                                                                                  570
                                                                                                                              ? "Furry Mythic 1 ✺¹"
                                                                                                                              : user.level >=
                                                                                                                                    570 &&
                                                                                                                                  user.level <=
                                                                                                                                    580
                                                                                                                                ? "Furry Mythic 2 ✺²"
                                                                                                                                : user.level >=
                                                                                                                                      580 &&
                                                                                                                                    user.level <=
                                                                                                                                      590
                                                                                                                                  ? "Furry Mythic 3 ✺³"
                                                                                                                                  : user.level >=
                                                                                                                                        590 &&
                                                                                                                                      user.level <=
                                                                                                                                        600
                                                                                                                                    ? "Furry Mythic 4 ✺⁴"
                                                                                                                                    : user.level >=
                                                                                                                                          600 &&
                                                                                                                                        user.level <=
                                                                                                                                          610
                                                                                                                                      ? "Furry Mythic 5 ✺⁵"
                                                                                                                                      : user.level >=
                                                                                                                                            610 &&
                                                                                                                                          user.level <=
                                                                                                                                            620
                                                                                                                                        ? "Furry Divine 1 ✾¹"
                                                                                                                                        : user.level >=
                                                                                                                                              620 &&
                                                                                                                                            user.level <=
                                                                                                                                              630
                                                                                                                                          ? "Furry Divine 2 ✾²"
                                                                                                                                          : user.level >=
                                                                                                                                                630 &&
                                                                                                                                              user.level <=
                                                                                                                                                640
                                                                                                                                            ? "Furry Divine 3 ✾³"
                                                                                                                                            : user.level >=
                                                                                                                                                  640 &&
                                                                                                                                                user.level <=
                                                                                                                                                  650
                                                                                                                                              ? "Furry Divine 4 ✾⁴"
                                                                                                                                              : user.level >=
                                                                                                                                                    650 &&
                                                                                                                                                  user.level <=
                                                                                                                                                    660
                                                                                                                                                ? "Furry Divine 5 ✾⁵"
                                                                                                                                                : user.level >=
                                                                                                                                                      660 &&
                                                                                                                                                    user.level <=
                                                                                                                                                      670
                                                                                                                                                  ? "Furry Immortal 1 ✿¹"
                                                                                                                                                  : user.level >=
                                                                                                                                                        670 &&
                                                                                                                                                      user.level <=
                                                                                                                                                        680
                                                                                                                                                    ? "Furry Immortal 2 ✿²"
                                                                                                                                                    : user.level >=
                                                                                                                                                          680 &&
                                                                                                                                                        user.level <=
                                                                                                                                                          690
                                                                                                                                                      ? "Furry Immortal 3 ✿³"
                                                                                                                                                      : user.level >=
                                                                                                                                                            690 &&
                                                                                                                                                          user.level <=
                                                                                                                                                            700
                                                                                                                                                        ? "Furry Immortal 4 ✿⁴"
                                                                                                                                                        : user.level >=
                                                                                                                                                              700 &&
                                                                                                                                                            user.level <=
                                                                                                                                                              710
                                                                                                                                                          ? "Furry Immortal 5 ✿⁵"
                                                                                                                                                          : user.level >=
                                                                                                                                                                710 &&
                                                                                                                                                              user.level <=
                                                                                                                                                                720
                                                                                                                                                            ? "Furry Celestial 1 ❀¹"
                                                                                                                                                            : user.level >=
                                                                                                                                                                  720 &&
                                                                                                                                                                user.level <=
                                                                                                                                                                  730
                                                                                                                                                              ? "Furry Celestial 2 ❀²"
                                                                                                                                                              : user.level >=
                                                                                                                                                                    730 &&
                                                                                                                                                                  user.level <=
                                                                                                                                                                    740
                                                                                                                                                                ? "Furry Celestial 3 ❀³"
                                                                                                                                                                : user.level >=
                                                                                                                                                                      740 &&
                                                                                                                                                                    user.level <=
                                                                                                                                                                      750
                                                                                                                                                                  ? "Furry Celestial 4 ❀⁴"
                                                                                                                                                                  : user.level >=
                                                                                                                                                                        750 &&
                                                                                                                                                                      user.level <=
                                                                                                                                                                        760
                                                                                                                                                                    ? "Furry Celestial 5 ❀⁵"
                                                                                                                                                                    : user.level >=
                                                                                                                                                                          760 &&
                                                                                                                                                                        user.level <=
                                                                                                                                                                          770
                                                                                                                                                                      ? "Furry Ascendant 1 ✾¹"
                                                                                                                                                                      : user.level >=
                                                                                                                                                                            770 &&
                                                                                                                                                                          user.level <=
                                                                                                                                                                            780
                                                                                                                                                                        ? "Furry Ascendant 2 ✾²"
                                                                                                                                                                        : user.level >=
                                                                                                                                                                              780 &&
                                                                                                                                                                            user.level <=
                                                                                                                                                                              790
                                                                                                                                                                          ? "Furry Ascendant 3 ✾³"
                                                                                                                                                                          : user.level >=
                                                                                                                                                                                790 &&
                                                                                                                                                                              user.level <=
                                                                                                                                                                                800
                                                                                                                                                                            ? "Furry Ascendant 4 ✾⁴"
                                                                                                                                                                            : user.level >=
                                                                                                                                                                                  800 &&
                                                                                                                                                                                user.level <=
                                                                                                                                                                                  810
                                                                                                                                                                              ? "Furry Ascendant 5 ✾⁵"
                                                                                                                                                                              : user.level >=
                                                                                                                                                                                    810 &&
                                                                                                                                                                                  user.level <=
                                                                                                                                                                                    820
                                                                                                                                                                                ? "Furry Ethereal 1 ❂¹"
                                                                                                                                                                                : user.level >=
                                                                                                                                                                                      820 &&
                                                                                                                                                                                    user.level <=
                                                                                                                                                                                      830
                                                                                                                                                                                  ? "Furry Ethereal 2 ❂²"
                                                                                                                                                                                  : user.level >=
                                                                                                                                                                                        830 &&
                                                                                                                                                                                      user.level <=
                                                                                                                                                                                        840
                                                                                                                                                                                    ? "Furry Ethereal 3 ❂³"
                                                                                                                                                                                    : user.level >=
                                                                                                                                                                                          840 &&
                                                                                                                                                                                        user.level <=
                                                                                                                                                                                          850
                                                                                                                                                                                      ? "Furry Ethereal 4 ❂⁴"
                                                                                                                                                                                      : user.level >=
                                                                                                                                                                                            850 &&
                                                                                                                                                                                          user.level <=
                                                                                                                                                                                            860
                                                                                                                                                                                        ? "Furry Ethereal 5 ❂⁵"
                                                                                                                                                                                        : user.level >=
                                                                                                                                                                                              860 &&
                                                                                                                                                                                            user.level <=
                                                                                                                                                                                              870
                                                                                                                                                                                          ? "Furry Transcendent 1 ❃¹"
                                                                                                                                                                                          : user.level >=
                                                                                                                                                                                                870 &&
                                                                                                                                                                                              user.level <=
                                                                                                                                                                                                880
                                                                                                                                                                                            ? "Furry Transcendent 2 ❃²"
                                                                                                                                                                                            : user.level >=
                                                                                                                                                                                                  880 &&
                                                                                                                                                                                                user.level <=
                                                                                                                                                                                                  890
                                                                                                                                                                                              ? "Furry Transcendent 3 ❃³"
                                                                                                                                                                                              : user.level >=
                                                                                                                                                                                                    890 &&
                                                                                                                                                                                                  user.level <=
                                                                                                                                                                                                    900
                                                                                                                                                                                                ? "Furry Transcendent 4 ❃⁴"
                                                                                                                                                                                                : user.level >=
                                                                                                                                                                                                      900 &&
                                                                                                                                                                                                    user.level <=
                                                                                                                                                                                                      910
                                                                                                                                                                                                  ? "Furry Transcendent 5 ❃⁵"
                                                                                                                                                                                                  : user.level >=
                                                                                                                                                                                                        910 &&
                                                                                                                                                                                                      user.level <=
                                                                                                                                                                                                        920
                                                                                                                                                                                                    ? "Furry Cosmic 1 ✵¹"
                                                                                                                                                                                                    : user.level >=
                                                                                                                                                                                                          920 &&
                                                                                                                                                                                                        user.level <=
                                                                                                                                                                                                          930
                                                                                                                                                                                                      ? "Furry Cosmic 2 ✵²"
                                                                                                                                                                                                      : user.level >=
                                                                                                                                                                                                            930 &&
                                                                                                                                                                                                          user.level <=
                                                                                                                                                                                                            940
                                                                                                                                                                                                        ? "Furry Cosmic 3 ✵³"
                                                                                                                                                                                                        : user.level >=
                                                                                                                                                                                                              940 &&
                                                                                                                                                                                                            user.level <=
                                                                                                                                                                                                              950
                                                                                                                                                                                                          ? "Furry Cosmic 4 ✵⁴"
                                                                                                                                                                                                          : user.level >=
                                                                                                                                                                                                                950 &&
                                                                                                                                                                                                              user.level <=
                                                                                                                                                                                                                960
                                                                                                                                                                                                            ? "Furry Cosmic 5 ✵⁵"
                                                                                                                                                                                                            : user.level >=
                                                                                                                                                                                                                  960 &&
                                                                                                                                                                                                                user.level <=
                                                                                                                                                                                                                  970
                                                                                                                                                                                                              ? "Furry Eternal 1 ❄¹"
                                                                                                                                                                                                              : user.level >=
                                                                                                                                                                                                                    970 &&
                                                                                                                                                                                                                  user.level <=
                                                                                                                                                                                                                    980
                                                                                                                                                                                                                ? "Furry Eternal 2 ❄²"
                                                                                                                                                                                                                : user.level >=
                                                                                                                                                                                                                      980 &&
                                                                                                                                                                                                                    user.level <=
                                                                                                                                                                                                                      990
                                                                                                                                                                                                                  ? "Furry Eternal 3 ❄³"
                                                                                                                                                                                                                  : user.level >=
                                                                                                                                                                                                                        990 &&
                                                                                                                                                                                                                      user.level <=
                                                                                                                                                                                                                        1000
                                                                                                                                                                                                                    ? "Furry Eternal 4 ❄⁴"
                                                                                                                                                                                                                    : user.level >=
                                                                                                                                                                                                                          1000 &&
                                                                                                                                                                                                                        user.level <=
                                                                                                                                                                                                                          2000
                                                                                                                                                                                                                      ? "Furry Ascended❄❄"
                                                                                                                                                                                                                      : user.level >=
                                                                                                                                                                                                                            2000 &&
                                                                                                                                                                                                                          user.level <=
                                                                                                                                                                                                                            3000
                                                                                                                                                                                                                        ? "Furry Supreme ❄✵"
                                                                                                                                                                                                                        : user.level >=
                                                                                                                                                                                                                              3000 &&
                                                                                                                                                                                                                            user.level <=
                                                                                                                                                                                                                              4000
                                                                                                                                                                                                                          ? "Furry Supreme✵✵"
                                                                                                                                                                                                                          : user.level >=
                                                                                                                                                                                                                                4000 &&
                                                                                                                                                                                                                              user.level <=
                                                                                                                                                                                                                                5000
                                                                                                                                                                                                                            ? "Furry Supreme❄✵✵"
                                                                                                                                                                                                                            : user.level >=
                                                                                                                                                                                                                                  5000 &&
                                                                                                                                                                                                                                user.level <=
                                                                                                                                                                                                                                  6000
                                                                                                                                                                                                                              ? "Furry Ascendant❄✵"
                                                                                                                                                                                                                              : user.level >=
                                                                                                                                                                                                                                    6000 &&
                                                                                                                                                                                                                                  user.level <=
                                                                                                                                                                                                                                    7000
                                                                                                                                                                                                                                ? "Furry Ascendant❄✵✵"
                                                                                                                                                                                                                                : user.level >=
                                                                                                                                                                                                                                      7000 &&
                                                                                                                                                                                                                                    user.level <=
                                                                                                                                                                                                                                      8000
                                                                                                                                                                                                                                  ? "Furry Ascendant✵✵✵"
                                                                                                                                                                                                                                  : user.level >=
                                                                                                                                                                                                                                        8000 &&
                                                                                                                                                                                                                                      user.level <=
                                                                                                                                                                                                                                        9000
                                                                                                                                                                                                                                    ? "Furry Ascendant✵✵✵❄"
                                                                                                                                                                                                                                    : user.level >=
                                                                                                                                                                                                                                          9000 &&
                                                                                                                                                                                                                                        user.level <=
                                                                                                                                                                                                                                          10000
                                                                                                                                                                                                                                      ? "Furry Ascendant❄✵✵✵"
                                                                                                                                                                                                                                      : "Furry Master 숒 × Supreme 숒";
  user.role = role;
  await conn.reply(m.chat, "*Kamu adalah:* " + user.role, m);
};
handler.help = ["role"];
handler.tags = ["info"];
handler.command = /^(role|levelrole)$/i;
handler.register = true;
export default handler;
