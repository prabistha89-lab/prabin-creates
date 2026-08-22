"use client";

import { useMemo, useState } from "react";
import { Icon } from "./Icon";

const scoreItems = [
  "My logo looks professional.",
  "My brand colours are consistent.",
  "My typography is consistent.",
  "My Facebook and Instagram designs look consistent.",
  "My advertising has a clear visual hierarchy.",
  "My marketing materials look professional.",
  "My product or service photography is high quality.",
  "My offers are easy to understand visually.",
  "My call to action is easy to notice.",
  "My print and digital materials match.",
  "My business looks trustworthy online.",
  "My branding is recognisable.",
  "My designs communicate customer benefits.",
  "My content is easy to understand on mobile.",
  "My visual communication supports sales.",
] as const;

const reviewAreas = [
  "Logo & Brand Identity",
  "Facebook / Instagram",
  "Social Media Designs",
  "Advertising Creatives",
  "Brochure / Company Profile",
  "Print & Marketing Materials",
  "Brand Consistency & Sales Communication",
] as const;

function scoreMeaning(score: number) {
  if (score >= 13) return { label: "Strong visual brand", text: "Your foundation is strong. Focus on optimisation, campaigns and conversion." };
  if (score >= 9) return { label: "Good, but inconsistent", text: "Your brand has potential, but a clearer visual system could strengthen your marketing." };
  if (score >= 5) return { label: "Needs improvement", text: "Prioritise the customer touchpoints people see most often." };
  return { label: "Major visual brand gap", text: "Strengthen the brand foundation before spending heavily on promotion." };
}

export function BrandAuditForm() {
  const [checked, setChecked] = useState<boolean[]>(() => scoreItems.map(() => false));
  const score = checked.filter(Boolean).length;
  const result = useMemo(() => scoreMeaning(score), [score]);

  function toggleScore(index: number) {
    setChecked((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
  }

  return (
    <form className="brand-audit-form" action="https://formsubmit.co/prabistha89@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="New Free Visual Brand Audit Request" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.shresthaprabin89.com.np/brand-audit?submitted=true" />
      <input type="hidden" name="visual_brand_score" value={`${score} / 15 — ${result.label}`} />
      <input type="text" name="_honey" className="audit-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="audit-form-heading">
        <div><p className="eyebrow">Free professional review</p><h2>Request your visual brand audit.</h2></div>
        <p>Complete the checklist and share your most important customer touchpoints. You’ll receive practical recommendations for what to improve first.</p>
      </div>

      <fieldset className="audit-fieldset">
        <legend><span>01</span> About your business</legend>
        <div className="audit-input-grid">
          <label>Full name *<input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your full name" /></label>
          <label>Business name *<input name="business_name" required minLength={2} maxLength={120} autoComplete="organization" placeholder="Your business or organisation" /></label>
          <label>Email address *<input name="email" required type="email" maxLength={120} autoComplete="email" placeholder="you@example.com" /></label>
          <label>Phone / WhatsApp *<input name="phone" required type="tel" maxLength={30} autoComplete="tel" placeholder="+977 …" /></label>
          <label>Business type<input name="business_type" maxLength={100} placeholder="For example, retail, education, hospitality" /></label>
          <label>Location<input name="location" maxLength={100} placeholder="City, country" /></label>
          <label className="audit-wide">What does your business offer? *<textarea name="business_offer" required minLength={20} maxLength={1000} rows={4} placeholder="Describe your main products or services and who they are for." /></label>
        </div>
      </fieldset>

      <fieldset className="audit-fieldset">
        <legend><span>02</span> Your visual brand score</legend>
        <p className="audit-field-intro">Give yourself one point for every statement you can confidently answer “yes” to.</p>
        <div className="audit-score-layout">
          <div className="audit-check-grid">
            {scoreItems.map((item, index) => (
              <label key={item} className={checked[index] ? "is-checked" : ""}>
                <input type="checkbox" name={`score_${index + 1}`} value="Yes" checked={checked[index]} onChange={() => toggleScore(index)} />
                <span><Icon name="check" size={16} /></span>{item}
              </label>
            ))}
          </div>
          <aside className="audit-score-card" aria-live="polite">
            <span>Your score</span><strong>{score}<small>/15</small></strong>
            <div className="audit-score-track"><i style={{ width: `${(score / scoreItems.length) * 100}%` }} /></div>
            <h3>{result.label}</h3><p>{result.text}</p>
          </aside>
        </div>
      </fieldset>

      <fieldset className="audit-fieldset">
        <legend><span>03</span> What should I review?</legend>
        <p className="audit-field-intro">Select every area that matters to your business.</p>
        <div className="audit-area-grid">
          {reviewAreas.map((area) => <label key={area}><input type="checkbox" name="review_areas" value={area} /><span><Icon name="circle-check" size={19} />{area}</span></label>)}
        </div>
        <div className="audit-input-grid audit-links-grid">
          <label>Website URL<input name="website_url" type="url" placeholder="https://yourwebsite.com" /></label>
          <label>Facebook page<input name="facebook_url" type="url" placeholder="https://facebook.com/…" /></label>
          <label>Instagram profile<input name="instagram_url" type="url" placeholder="https://instagram.com/…" /></label>
          <label>Other relevant link<input name="other_url" type="url" placeholder="Google Drive, LinkedIn or campaign link" /></label>
        </div>
      </fieldset>

      <fieldset className="audit-fieldset">
        <legend><span>04</span> Goals and priorities</legend>
        <div className="audit-input-grid">
          <label className="audit-wide">What is your biggest visual-brand challenge? *<textarea name="biggest_challenge" required minLength={20} maxLength={1500} rows={5} placeholder="For example: inconsistent posts, an outdated logo, unclear advertising or weak sales materials." /></label>
          <label className="audit-wide">What would you most like the audit to help you achieve? *<textarea name="audit_goal" required minLength={20} maxLength={1500} rows={4} placeholder="More trust, stronger recognition, clearer offers, better enquiries or another outcome." /></label>
          <label>Priority 1<input name="priority_1" maxLength={180} placeholder="The first thing you want to fix" /></label>
          <label>Priority 2<input name="priority_2" maxLength={180} placeholder="The second thing you want to fix" /></label>
          <label>Priority 3<input name="priority_3" maxLength={180} placeholder="The third thing you want to fix" /></label>
          <label>Preferred reply method<select name="preferred_reply" defaultValue="email"><option value="email">Email</option><option value="whatsapp">WhatsApp</option><option value="phone">Phone call</option></select></label>
        </div>
      </fieldset>

      <label className="audit-consent"><input type="checkbox" name="consent" required /><span>I consent to Designer Prabin reviewing the business links and information I provide and contacting me about this free brand audit. *</span></label>
      <button type="submit" className="button audit-submit">Get My Free Brand Audit<Icon name="arrow-right" size={19} /></button>
      <p className="audit-privacy-note">Your information is used only to review your visual brand and respond to this request.</p>
    </form>
  );
}
