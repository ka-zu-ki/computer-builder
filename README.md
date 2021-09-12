# computer-builder
## URL
https://computer-builder-bice.vercel.app/
## 環境設定
```
$ git clone git@github.com:ka-zu-ki/click-empire.git
$ cd computer-builder
$ yarn install
$ yarn run gulp
```
## 概要
PCのパーツを選択し、作成されたPCの性能を測るアプリケーション
組み合わせるパーツは以下
- CPU
- GPU
- RAM（1 - 4メモリモジュール）
- Storage（HDDまたはSSD）
最初にAPI通信をしてパーツのデータを受け取り、プルダウンに格納されます。各プルダウンを全て選択し、「Add PC」ボタンを押下すると各パーツのベンチマークと性能スコアが一覧で表示されます。
## 使用技術
- Typescript
- Tailwind css
- gulp
- webpack
## 学んだこと/注目ポイント
- Typescriptの型定義
- fetch API
