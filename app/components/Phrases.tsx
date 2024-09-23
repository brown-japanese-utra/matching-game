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
];
