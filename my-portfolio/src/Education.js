import React from 'react';
import './Education.css'; // ใช้ไฟล์ CSS สำหรับสไตล์

const Education = () => {
  return (
    <div className="education-container">
      <div className="title">
        <h1>EDUCATION</h1>
      </div>

      <div className="long-box-container">
        {/* กรอบที่ 1 */}
        <div className="long-box">
          <img src={require('./assets/images/sm1.png')} alt="Logo 1" className="logo" />
          <div className="info">
            <h2>ระดับ - มัธยมศึกษาตอนต้น</h2>
            <p>โรงเรียนบางปลาม้า “สูงสุมารผดุงวิทย์”</p>
          </div>
        </div>

        {/* กรอบที่ 2 */}
        <div className="long-box">
          <img src={require('./assets/images/sm1.png')} alt="Logo 2" className="logo" />
          <div className="info">
            <h2>ระดับ - มัธยมศึกษาตอนปลาย</h2>
            <p>โรงเรียนบางปลาม้า “สูงสุมารผดุงวิทย์”</p>
          </div>
        </div>

        {/* กรอบที่ 3 */}
        <div className="long-box">
          <img src={require('./assets/images/stc1.png')} alt="Logo 3" className="logo" />
          <div className="info">
            <h2>ระดับ - ประกาศนียบัตรวิชาชีพชั้นสูง</h2>
            <p>วิทยาลัยเทคนิคสุพรรณบุรี</p>
          </div>
        </div>

        {/* กรอบที่ 4 */}
        <div className="long-box">
          <img src={require('./assets/images/kmutnb.png')} alt="Logo 4" className="logo" />
          <div className="info">
            <h2>ระดับ - ปริญญาตรี</h2>
            <p>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
