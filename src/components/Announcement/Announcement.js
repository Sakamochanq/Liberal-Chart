import "./Announcement.css";
import { useState } from "react";

export const Announcement = () => {

    const [announcements] = useState([
        {
            id: 2,
            title: "利用者の皆様へ",
            description: "本サイトは個人で運営しているものですが、日々少しずつ利用者が増えていることを確認しており、大変嬉しく励みに思っております。引き続き、より良いサービスを提供できるよう努めてまいりますので、今後ともよろしくお願いいたします。", 
            label: "謝辞",
            date: "2026-05-29",
        },
        {
            id: 1,
            title: "お知らせ機能の追加",
            description: "今後は、サイトの更新情報や重要なお知らせなどをこちらでお伝えしていきます。", 
            label: "お知らせ",
            date: "2026-05-29",
        },
    ]);

    // ラベルの色を決定
    const getLabelColor = (label) => {
    const colors = {
        "お知らせ": "#0086EA",
        "更新": "#2ecc71",
        "重要": "#e74c3c",
        "イベント": "#fcb565",
    };
    return colors[label] || "#95a5a6";
  };

  return (
    <div id="announcement" className="announcement-container">
        <h2 class="heading" data-label="ANNOUNCE">お知らせ</h2>
        <br /><br /><br />

        <div className="announcement-list">
          {announcements.length > 0 ? (
            announcements.map((item) => (
              <div key={item.id} className="announcement-item">
                <div className="announcement-header">
                  <span
                    className="announcement-label"
                    style={{ backgroundColor: getLabelColor(item.label) }}
                  >
                    {item.label}
                  </span>
                  <span className="announcement-date">{item.date}</span>
                </div>
                <h3 className="announcement-item-title">{item.title}</h3>
                <p className="announcement-description">{item.description}</p>
              </div>
            ))
          ) : (
            <p className="announcement-empty">お知らせはありません</p>
          )}
        </div>
    </div>
  );
};