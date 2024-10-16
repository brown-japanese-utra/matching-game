/* This interface will be used to separate the different parts of the phrase out */
export interface Phrase {
  id: number;
  object: string;
  particle: string;
  kanji: string;
  hiragana: string;
  imageURL: string;
  audioURL: string;
}

// You should be able to construct a "Phrase" as long as you include each part
// Invariant: a pair of transitive/intransitive verbs always comes next to each other
export const phraseList: Phrase[] = [
  {
    id: 0,
    object: "ドア",
    particle: "を",
    kanji: "閉める",
    hiragana: "しめる",
    imageURL: "images/ドアを閉める.jpg",
    audioURL: "audio/door_close_t.mp3",
  },
  {
    id: 1,
    object: "ドア",
    particle: "が",
    kanji: "閉まる",
    hiragana: "しまる",
    imageURL: "images/ドアが閉まる.jpg",
    audioURL: "audio/door_close_i.mp3",
  },
  {
    id: 2,
    object: "ドア",
    particle: "を",
    kanji: "開ける",
    hiragana: "あける",
    imageURL: "images/ドアを開ける.jpg",
    audioURL: "audio/door_open_t.mp3",
  },
  {
    id: 3,
    object: "ドア",
    particle: "が",
    kanji: "開く",
    hiragana: "あく",
    imageURL: "images/ドアが開く.jpg",
    audioURL: "audio/door_open_i.mp3",
  },
  {
    id: 4,
    object: "電気",
    particle: "を",
    kanji: "つける",
    hiragana: "つける",
    imageURL: "images/電気をつける.jpg",
    audioURL: "audio/light_on_t.mp3",
  },
  {
    id: 5,
    object: "電気",
    particle: "が",
    kanji: "つく",
    hiragana: "つく",
    imageURL: "images/電気がつく.jpg",
    audioURL: "audio/light_on_i.mp3",
  },
  {
    id: 6,
    object: "電気",
    particle: "を",
    kanji: "消す",
    hiragana: "けす",
    imageURL: "images/電気を消す.jpg",
    audioURL: "audio/light_off_t.mp3",
  },
  {
    id: 7,
    object: "電気",
    particle: "が",
    kanji: "消える",
    hiragana: "きえる",
    imageURL: "images/電気が消える.jpg",
    audioURL: "audio/light_off_i.mp3",
  },
  {
    id: 8,
    object: "シャツ",
    particle: "を",
    kanji: "汚す",
    hiragana: "よごす",
    imageURL: "images/シャツを汚す.jpg",
    audioURL: "audio/shirt_dirty_t.mp3",
  },
  {
    id: 9,
    object: "シャツ",
    particle: "が",
    kanji: "汚れる",
    hiragana: "よごれる",
    imageURL: "images/シャツが汚れる.jpg",
    audioURL: "audio/shirt_dirty_i.mp3",
  },
  {
    id: 10,
    object: "おもちゃ",
    particle: "を",
    kanji: "こわす",
    hiragana: "こわす",
    imageURL: "images/おもちゃを壊す.jpg",
    audioURL: "audio/おもちゃを壊す.mp3",
  },
  {
    id: 11,
    object: "おもちゃ",
    particle: "が",
    kanji: "こわれる",
    hiragana: "こわれる",
    imageURL: "images/おもちゃが壊れる.jpg",
    audioURL: "audio/おもちゃが壊れる.mp3",
  },
  {
    id: 12,
    object: "いぬ",
    particle: "を",
    kanji: "入れる",
    hiragana: "いれる",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-f.gif",
    audioURL: "audio/犬を入れる.mp3",
  },
  {
    id: 13,
    object: "いぬ",
    particle: "が",
    kanji: "入る",
    hiragana: "はいる",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-f.gif",
    audioURL: "audio/犬が入る.mp3",
  },
  {
    id: 14,
    object: "ねこ",
    particle: "を",
    kanji: "出す",
    hiragana: "だす",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-f.gif",
    audioURL: "audio/猫を出す.mp3",
  },
  {
    id: 15,
    object: "ねこ",
    particle: "が",
    kanji: "出る",
    hiragana: "でる",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-f.gif",
    audioURL: "audio/猫が出る.mp3",
  },
  {
    id: 16,
    object: "ペン",
    particle: "を",
    kanji: "おとす",
    hiragana: "おとす",
    imageURL: "images/ペンを落とす.jpg",
    audioURL: "audio/ペンを落とす.mp3",
  },
  {
    id: 17,
    object: "ペン",
    particle: "が",
    kanji: "おちる",
    hiragana: "おちる",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-f.gif",
    audioURL: "audio/ペンが落ちる.mp3",
  },
  {
    id: 18,
    object: "おゆ",
    particle: "を",
    kanji: "わかす",
    hiragana: "わかす",
    imageURL: "images/お湯を沸かす.jpg",
    audioURL: "audio/お湯を沸かす.mp3",
  },
  {
    id: 19,
    object: "おゆ",
    particle: "が",
    kanji: "わく",
    hiragana: "わく",
    imageURL: "images/お湯が沸く.jpg",
    audioURL: "audio/お湯が沸く.mp3",
  },
];
