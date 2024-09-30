/* This interface will be used to separate the different parts of the phrase out */
export interface Phrase {
  id: number;
  object: string;
  particle: string;
  kanji: string;
  hiragana: string;
}

// You should be able to construct a "Phrase" as long as you include each part
export const phraseList: Phrase[] = [
  {
    id: 0,
    object: "ドア",
    particle: "を",
    kanji: "閉める",
    hiragana: "しめる",
  },
  {
    id: 1,
    object: "ドア",
    particle: "が",
    kanji: "閉まる",
    hiragana: "しまる",
  },
  {
    id: 2,
    object: "まど",
    particle: "を",
    kanji: "開ける",
    hiragana: "あける",
  },
  {
    id: 3,
    object: "まど",
    particle: "が",
    kanji: "開く",
    hiragana: "あく",
  },
  {
    id: 4,
    object: "電気",
    particle: "を",
    kanji: "つける",
    hiragana: "つける",
  },
  {
    id: 5,
    object: "電気",
    particle: "が",
    kanji: "つく",
    hiragana: "つく",
  },
  {
    id: 6,
    object: "電気",
    particle: "を",
    kanji: "消す",
    hiragana: "けす",
  },
  {
    id: 7,
    object: "電気",
    particle: "が",
    kanji: "消える",
    hiragana: "きえる",
  },
  {
    id: 8,
    object: "シャツ",
    particle: "を",
    kanji: "汚す",
    hiragana: "よごす",
  },
  {
    id: 9,
    object: "シャツ",
    particle: "が",
    kanji: "汚れる",
    hiragana: "よごれる",
  },
];
