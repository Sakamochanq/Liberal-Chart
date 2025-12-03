<div align="center">
    <h3>Thank you for your contribution!</h3>
    <h4>Your efforts help make this project better for everyone.</h4>
</div>

<br>

## 目次

* [開発環境の構築](#)

    * [科目の追加・修正について](#)

    * [UI/UXの改善について](#)
* [PullRequestの作成について](#)

<br>
<br>
<br>

## 開発環境の構築

<br>

1. **リポジトリをForkしてCloneします。**

```bash
git clone https://github.com/your-username/Liberal-Chart.git
cd Liberal-Chart
```

<br>
<br>

2. **依存関係をインストールします。**  

```bash
npm install
```

<br>
<br>

3. **開発サーバーを起動します。**  

```bash
npm run dev
```

<br>
<br>
<br>

## 科目の追加・修正について

<br>

新しい科目を追加したり、既存の科目を修正する場合は、以下の手順に従ってください。

<br>

1. **ブランチの作成**

ブランチのPrefixとして、科目を追加する場合は`add-`、修正する場合は`fix-`を使用してください。  
形式を以下に示します。

```bash
# 科目を追加する場合
git checkout -b add-<subject-name>
```

```bash
# 科目を修正する場合
git checkout -b fix-<subject-name>
```

<br>
<br>

2. **科目の追加・修正**

`./public/assets/table.json` ファイルを任意のエディタで開き、必要な科目の追加または修正を行います。  
追加する場合のフォーマットは以下の通りです。

```json
{
    "id": 0,
    "name": "科目名",
    "degree": 1,
    "examination": false,
    "description": "　ここに科目の説明を記入します。"
},
```

* **id:**           科目の一意な識別子｜`（整数かつ重複しないもの）`  
* **name:**         科目名｜`（文字列）`
* **degree:**       授業難易度｜`（整数 1～4）`
* **examination:**  試験の有無｜`（真偽値）`
* **description:**  科目の説明｜`（文字列かつ先頭に空白を設けます）`

<br>
<br>

3. **変更のコミットとプッシュ**

```bash
git add .
git commit -m "Add or Fix/subject: <subject-name>"
git push origin <branch-name>
```

<br>
<br>
<br>

## UI/UXの改善について

<br>

UI/UXの改善を行う場合は、以下の手順に従ってください。

<br>

1. **ブランチの作成**

ブランチのPrefixとして`feat-`を使用してください。
形式を以下に示します。

```bash
git checkout -b feat-<improvement-description>
```

<br>
<br>

2. **UI/UXの改善**

アプリケーションのUI/UXを改善するために必要な変更を行います。

<br>
<br>

3. **変更のコミットとプッシュ**

```bash
git add .
git commit -m "Feat: <improvement-description>"
git push origin <branch-name>
```

<br>
<br>
<br>

## PullRequestの作成について

<br>

PullRequestを作成する際は、以下のガイドラインに従ってください。

<br>

1. **PullRequestのタイトル**

PullRequestのタイトルは、変更内容を簡潔に表現してください。

```bash
# 例
○○学の追加
○○○○機能の追加
背景色の変更
...など
```

<br>
<br>

2. **PullRequestの説明**

任意のもので構いません。

<br>
<br>

3. **github上でPullRequestを作成**

新しいPullRequestを作成します。  
レビュー後、問題がなければマージされます。

<br>
<br>

## Author

<br>

[Sakamochanq](https://github.com/Sakamochanq) - 著者