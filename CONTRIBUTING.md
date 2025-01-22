## 科目の追加

自分自身すべてのリベラルアーツ系科目を受講出来ていないため、科目の追加に関しては歓迎します。しかし、リベラルアーツ系科目のみ追加を認めます。追加する際は、以下の手順に従ってください。

<br>

## Pull Requestの作成手順


### 1. このリポジトリを `Fork` し、`Clone` します。

```bash
git clone https://github.com/your-username/Liberal-Chart.git
cd Liberal-Chart
```

<br>

### 2. ブランチについて

基本的に開発はすべて個人（１人）で行っており、これまでのCommitは全て `master` ブランチに対して行っています。そのため、新たにブランチを作成する必要はありません。
まぁ、新しいブランチを作成してもらっても構いません。

<br>

### 3. 以下のFormatより、jsonを記述します。

```json
{
    "id": 0,                      # 既存のidよりも大きい値を設定してください
    "name": "",                   # 科目名
    "degree": 1,                  # 授業難易度（１～４）
    "examination": false,         # 試験の有無
    "description": "",            # 授業の概要
},
```

[table.json](./public/assets/table.json) に追記してください。

<br>

### 4. Pull Requestを作成します。  
[Github](https://github.com/Sakamochanq/Liberal-Chart/pulls) より Pull Request を作成してください。
レビュー後、問題がなければマージを行います。