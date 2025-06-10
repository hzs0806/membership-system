import React from 'react';
import '../styles/HuanghualiDetailPage.css';

const Section = ({ title, children }) => (
  <section className="hh-section">
    <h2 className="hh-section-title">{title}</h2>
    <div className="hh-section-content">{children}</div>
  </section>
);

const HuanghualiDetailPage = () => {
  return (
    <div className="hh-detail-root">
      <h1 className="hh-main-title">黄花梨（降香黄檀）</h1>
      <Section title="一、产地与形成之谜">
        <div className="hh-card-grid">
          <div className="hh-card">
            <div className="hh-card-label">核心产地</div>
            <div className="hh-card-content">
              <b>海南黄花梨（海黄）</b>：仅产于中国海南岛西部（东方市、昌江县），北纬 18°-20° 热带季风气候区，年均降水量 1600-2000mm，独特的火山岩土壤孕育出木质油线丰富的珍品。<br/>
              <b>越南黄花梨（越黄）</b>：主产于越南中部顺化、广平省，与海黄同属降香黄檀，但因气候差异（年均温高 2℃），纹理更粗犷。
            </div>
          </div>
          <div className="hh-card">
            <div className="hh-card-label">生长奇迹</div>
            <div className="hh-card-content">
              成材需 <b>500 年以上</b>，心材形成仅占树干 10%-15%（直径 20cm 的树，心材仅 3-5cm），明清宫廷"一木一器"的奢侈源于此。<br/>
              野生种群已被 <b>CITES</b> 列为附录Ⅱ保护物种，现流通多为人工林老料。
            </div>
          </div>
        </div>
      </Section>
      <Section title="二、文化底蕴：文人与帝王的共同选择">
        <div className="hh-card-grid">
          <div className="hh-card">
            <div className="hh-card-label">文人雅器</div>
            <div className="hh-card-content">
              明代文人崇尚"天然去雕饰"，黄花梨木质坚韧易雕刻，且纹理如"水墨山水"，成为书桌、笔筒的首选（如仇英《园居图》中可见黄花梨香几）。<br/>
              文震亨《长物志》记载："花梨木以文木为上，其纹若鬼面，亦名鬼脸木。"
            </div>
          </div>
          <div className="hh-card">
            <div className="hh-card-label">宫廷珍材</div>
            <div className="hh-card-content">
              清代乾隆时期，黄花梨与紫檀并列宫廷三大贡木，故宫博物院藏《乾隆宝座图》中，宝座扶手纹理即为典型黄花梨鬼脸纹。<br/>
              女性文化关联：孝庄太后嫁妆中曾有黄花梨梳妆匣，内部分格设计精巧，体现古代闺阁对"实用美学"的追求。
            </div>
          </div>
        </div>
      </Section>
      <Section title="三、材质特征：从物理到美学的极致">
        <div className="hh-feature-list">
          <div className="hh-feature-item">
            <span className="hh-feature-label">气干密度：</span>0.82-0.94g/cm³（不沉水，半浮半沉）
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">显微结构：</span>单管孔为主，含丰富芳香族化合物（降香成分），切面打磨后有荧光反应
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">颜色变化：</span>新切面橙黄色→氧化后深褐带紫，阳光下呈现"琥珀光"
          </div>
        </div>
        <div className="hh-feature-list">
          <div className="hh-feature-item">
            <span className="hh-feature-label">鬼脸纹：</span>因树木分叉形成的圆形纹理，中心"鬼眼"有小黑点（天然生长痕迹，仿品多对称）
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">山水纹：</span>顺直纹理如江河奔流，常见于大料家具面板
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">瘤疤纹：</span>树木受伤后形成的结疤，纹理如葡萄串，为收藏级特征
          </div>
        </div>
      </Section>
      <Section title="四、真假鉴别体系（三维度避坑）">
        <div className="hh-identify-table">
          <div className="hh-identify-row hh-identify-header">
            <div>维度</div><div>方法</div><div>要点</div>
          </div>
          <div className="hh-identify-row">
            <div>物理特征</div>
            <div>密度测试、纹理解构、导管观察</div>
            <div>
              真海黄鬼脸纹"鬼眼"偏心，越黄多居中；20倍放大镜看导管：海黄50-100μm，越黄可达150μm
            </div>
          </div>
          <div className="hh-identify-row">
            <div>化学/嗅觉</div>
            <div>酒精擦拭、PH值测试</div>
            <div>真材遇酒精有降香味，PH≈5.8，仿品有酸臭味/PH＞7</div>
          </div>
          <div className="hh-identify-row">
            <div>工艺痕迹</div>
            <div>孔道观察、包浆状态</div>
            <div>手工打孔有螺旋纹，天然包浆通透如琥珀，人工抛光发乌</div>
          </div>
        </div>
      </Section>
      <Section title="五、常见造假手段及反制">
        <div className="hh-fake-table">
          <div className="hh-fake-row hh-fake-header">
            <div>造假类型</div><div>手段解析</div><div>鉴别技巧</div>
          </div>
          <div className="hh-fake-row">
            <div>白酸枝染色</div>
            <div>用硝酸铁溶液浸泡上色</div>
            <div>染色材颜色浮于表面，真材纹理带色根</div>
          </div>
          <div className="hh-fake-row">
            <div>拼接造假</div>
            <div>边材+心材拼接</div>
            <div>强光照射看颜色过渡，真材自然渐变，拼接处突变</div>
          </div>
          <div className="hh-fake-row">
            <div>人工鬼脸</div>
            <div>激光雕刻圆形纹理</div>
            <div>真鬼脸纹凹凸自然，人工纹触感平整</div>
          </div>
          <div className="hh-fake-row">
            <div>越黄冒充海黄</div>
            <div>精选越黄老料仿冒</div>
            <div>海黄降香味持久，越黄香味偏酸且淡</div>
          </div>
        </div>
      </Section>
      <Section title="六、女性场景化应用（品牌特色）">
        <div className="hh-feature-list">
          <div className="hh-feature-item">
            <span className="hh-feature-label">通勤佩戴指南：</span>选择 10mm 珠径手串（约 25g），搭配银质隔片，职场简约美学，便于盘玩。
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">防汗技巧：</span>夏季佩戴时在手腕内侧垫棉麻护腕，避免汗液腐蚀包浆。
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">文化社交场景：</span>闺蜜聚会可用"三问鉴别法"互动：问产地、问密度、问证书。
          </div>
        </div>
      </Section>
      <Section title="七、权威依据与技术辅助">
        <div className="hh-feature-list">
          <div className="hh-feature-item">
            <span className="hh-feature-label">国标引用：</span>GB/T 18107-2017《红木》中降香黄檀鉴别标准，明确心材颜色、密度、气味三大指标。
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">AI 鉴别工具：</span>上传手串照片，系统自动分析鬼脸纹偏心度、导管分布密度等。
          </div>
        </div>
      </Section>
      <Section title="八、收藏级选购建议">
        <div className="hh-feature-list">
          <div className="hh-feature-item">
            <span className="hh-feature-label">新手入门：</span>选择 2000-5000 元越黄老料手串（纹理清晰，适合练手）
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">进阶收藏：</span>关注海南人工林"格料"（心材比例＞30%，带山水纹）
          </div>
          <div className="hh-feature-item">
            <span className="hh-feature-label">传家级标准：</span>瘤疤纹占比＞50%，配国家林草局濒危物种进出口管理办公室证书
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HuanghualiDetailPage; 