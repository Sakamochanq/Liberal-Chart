import React from 'react'
import './Disclaimer.css'

export const Disclaimer = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>免責事項</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>
            本サイトを利用する上で、以下の免責事項をよくお読みいただき、ご了承の上でご利用ください。
          </p>

          <br />

          <h3>Webサイト作成について</h3>
          <p>
            このサイトは、金沢工業大学のリベラルアーツ系科目についての情報を整理し、学生が履修登録を行う際の参考にしていただくことを目的としています。掲載されている情報は、個人の経験や調査に基づくものです。
          </p>

          <br />

          <h3>情報の正確性について</h3>
          <p>
            可能な限り正確性を期していますが、内容の正確性や最新性を保証するものではありません。講義内容や試験、日程などは、年度や担当講師によって変更される場合があります。
          </p>

          <br />

          <h3>主観的な意見について</h3>
          <p>
            このサイトに掲載されている情報や意見は、作成者の主観に基づくものです。特定の講義や教授に対する評価や意見は、あくまで個人的なものであり、他の学生や利用者の意見を代表するものではありません。情報の利用に際しては、各自の判断と責任で行ってください。
          </p>

          <br />

          <h3>著作権と権利について</h3>
          <p>
            本サイトの内容は、一部金沢工業大学の公式のオープン資料を参考にしていますが、サイトは不特定多数の方々へのアクセスが見込まれるため、在学生のみ閲覧できる資料や機密性の高い情報などからの記載・転載・複製は行っていないことをここに明記します。また、過去の授業資料や試験問題からの情報も一切掲載しておりません。
          </p>

          <br />

          <h3>責任の範囲</h3>
          <p>
            本サイトの情報を利用した結果生じた損害やトラブルについて、作成者は一切の責任を負いかねます。講義選択や履修に関する最終的な判断は、利用者ご自身の責任で行ってください。本サイトを作成するにあたり、大学全体や各科目担当の教授へのご迷惑がないよう十分に配慮しておりますが、万が一問題がある場合は、下記のメールアドレスまでご連絡いただけますようお願い申し上げます。
          </p>

          <br />

          <h3>著者</h3>
          <p className="author-info">
            <a href="https://github.com/Sakamochanq" target="_blank" rel="noopener noreferrer">Sakamochanq</a>
          </p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>閉じる</button>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer
