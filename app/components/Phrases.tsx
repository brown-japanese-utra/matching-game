/* This interface will be used to separate the different parts of the phrase out */
export interface Phrase {
  object: string;
  particle: string;
  kanji: string;
  hiragana: string;
}

// You should be able to construct a "Phrase" as long as you include each part
export const phraseList: Phrase[] = [
  {
    object: "ドア",
    particle: "を",
    kanji: "閉める",
    hiragana: "しめる",
  },
  {
    object: "ドア",
    particle: "が",
    kanji: "閉まる",
    hiragana: "しまる",
  },
  {
    object: "まど",
    particle: "を",
    kanji: "開ける",
    hiragana: "あける",
  },
  {
    object: "まど",
    particle: "が",
    kanji: "開く",
    hiragana: "あく",
  },
  {
    object: "電気",
    particle: "を",
    kanji: "つける",
    hiragana: "つける",
  },
  {
    object: "電気",
    particle: "が",
    kanji: "つく",
    hiragana: "つく",
  },
  {
    object: "電気",
    particle: "を",
    kanji: "消す",
    hiragana: "けす",
  },
  {
    object: "電気",
    particle: "が",
    kanji: "消える",
    hiragana: "きえる",
  },
  {
    object: "シャツ",
    particle: "を",
    kanji: "汚す",
    hiragana: "よごす",
  },
  {
    object: "シャツ",
    particle: "が",
    kanji: "汚れる",
    hiragana: "よごれる",
  },
];
