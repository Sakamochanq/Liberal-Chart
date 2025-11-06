import React from 'react'

export const Explain = () => {
  return (
    <div className="explain-container">
      <div className="explain-header">
        <h2 className="explain-title">* Liberal-Chart とは？</h2>
        <p>
          金沢工業大学のリベラルアーツ系科目の<b> 早見表 </b>です。履修登録の際の参考にしましょう。
          このサイトは<b> Sakamochanq </b> によって作成・管理されているため、情報の正確性は保証されません。
          正規の情報は金沢工業大学のeシラバス又は、キャンパスガイドを参照してください。
        </p>
        <br />
        <br />

        {/* detail */}
        <h4 className="explain-subtitle">ご利用前に、以下の免責事項を必ずお読みください。</h4>
        <br />
        <div className="modal-1__wrap">
          <input type="radio" id="modal-1__open" className="modal-1__open-input" name="modal-1__trigger" />
          <label htmlFor="modal-1__open" className="modal-1__open-label">免責事項</label>
          <input type="radio" id="modal-1__close" name="modal-1__trigger" />
          <div className="modal-1">
            <div className="modal-1__content-wrap">
              <label htmlFor="modal-1__close" className="modal-1__close-label">×</label>
              <div className="modal-1__content">
                <br />
                <div className="modal-header">
                  <img className="modal-logo" src="https://liberal-chart.vercel.app/assets/images/Liberal-Chart-Logo.png" alt="Liberal Chart Logo"/>
                  <h2 className="modal-title">免責事項</h2>
                  <img className="modal-logo" src="https://liberal-chart.vercel.app/assets/images/Liberal-Chart-Logo.png" alt="Liberal Chart Logo"/>
                </div>
                <br />
                <hr />
                <br />
                <br />
                <h3>Webサイト作成について</h3>
                <br />
                <p>このサイトは、金沢工業大学のリベラルアーツ系科目についての情報を整理し、学生が履修登録を行う際の参考にしていただくことを目的としています。掲載されている情報は、個人の経験や調査に基づくものです。</p>

                <br />
                <br />

                <h3>情報の正確性について</h3>
                <br />
                <p>可能な限り正確性を期していますが、内容の正確性や最新性を保証するものではありません。講義内容や試験、日程などは、年度や担当講師によって変更される場合があります。</p>

                <br />
                <br />

                <h3>主観的な意見について</h3>
                <br />
                <p>このサイトに掲載されている情報や意見は、作成者の主観に基づくものです。特定の講義や教授に対する評価や意見は、あくまで個人的なものであり、他の学生や利用者の意見を代表するものではありません。情報の利用に際しては、各自の判断と責任で行ってください。</p>

                <br />
                <br />

                <h3>著作権と権利について</h3>
                <br />
                <p>本サイトの内容は、一部金沢工業大学の公式のオープン資料を参考にしていますが、サイトは不特定多数の方々へのアクセスが見込まれるため、在学生のみ閲覧できる資料や機密性の高い情報などからの記載・転載・複製は行っていないことをここに明記します。また、過去の授業資料や試験問題からの情報も一切掲載しておりません。</p>

                <br />
                <br />

                <h3>責任の範囲</h3>
                <br />
                <p>本サイトの情報を利用した結果生じた損害やトラブルについて、作成者は一切の責任を負いかねます。講義選択や履修に関する最終的な判断は、利用者ご自身の責任で行ってください。本サイトを作成するにあたり、大学全体や各科目担当の教授への名誉毀損がないよう十分に配慮しておりますが、万が一問題がある場合は、下記のメールアドレスまでご連絡いただけますようお願い申し上げます。</p>

                <br />
                <br />

                <h3>著者</h3>
                <br />
                <p>Sakamochan.q@outlook.jp</p>
                
                <br />
                <br />
              </div>
            </div>
            <label htmlFor="modal-1__close">
              <div className="modal-1__background"></div>
            </label>
          </div>
        </div>

        <br />
        <hr className="section-divider"></hr>
      </div>
    </div>
  )
}
export default Explain
