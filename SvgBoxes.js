import { useState } from "react";

const SvgBoxes = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
       <svg width="400" height="800" viewBox="0 0 400 800">
        {/* Top Rectangle with Light Grey Background and Text */}
        <rect x="40" y="20" width="160" height="35" fill="rgb(204,204,204)"/>
        <text x="120" y="37" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">PMON Fail</text>
        
        {/* Bottom Rectangle with Text */}
        <rect x="40" y="100" width="160" height="35" fill="rgb(179,217,255)"/>
        <text x="120" y="117" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">PM Due?</text>
        
        {/* Connecting Line */}
        <line x1="120" y1="55" x2="120" y2="95" stroke="black" strokeWidth="2" />
        
        {/* Arrow near the top of the second box */}
        <polygon points="115,90 125,90 120,100" fill="black" />
        
        {/* Third Rectangle with Grey Background and Text */}
        <rect x="265" y="100" width="100" height="35" fill="rgb(204,204,204)"/>
        <text x="315" y="122" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">PM</text>
        
        {/* Line Connecting Second and Third Box */}
        <line x1="200" y1="117" x2="260" y2="117" stroke="black" strokeWidth="2" />
        
        {/* Arrow near Third Box */}
        <polygon points="255,112 255,122 265,117" fill="black" />
        
        {/* Text Above the Connecting Line */}
        <text x="215" y="110" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Yes</text>
        
        {/* Fourth Rectangle Below Second Box */}
        <rect x="40" y="180" width="160" height="35" fill="rgb(179,217,255)"/>
        <text x="120" y="197" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Basic Prechecks OK?</text>
        
        {/* Line Connecting Second and Fourth Box */}
        <line x1="120" y1="135" x2="120" y2="175" stroke="black" strokeWidth="2" />
        
        {/* Arrow near Fourth Box */}
        <polygon points="115,170 125,170 120,180" fill="black" />
        
        {/* Text Beside the Connecting Line */}
        <text x="130" y="147" fontSize="12" fill="black" textAnchor="start" alignmentBaseline="middle">No</text>
        
        {/* Adjusting other connecting lines to be longer */}
        {/* Fifth Rectangle to the Right of Fourth Box */}
        <rect x="265" y="170" width="100" height="55" fill="rgb(153,255,153)"/>
        <text x="315" y="185" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Resolve</text>
        <text x="315" y="200" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Issues &</text>
        <text x="315" y="215" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Retest</text>
        
        {/* Line Connecting Fourth and Fifth Box */}
        <line x1="200" y1="197" x2="260" y2="197" stroke="black" strokeWidth="2" />
        
        {/* Arrow near Fifth Box */}
        <polygon points="255,192 255,202 265,197" fill="black" />
        
        {/* Text Above the Connecting Line */}
        <text x="215" y="188" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">No</text>
        
        {/* Sixth Rectangle Below Fourth Box */}
        <rect x="40" y="260" width="160" height="50" fill="rgb(179,217,255)"/>
        <text x="120" y="275" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Retest on Clean</text>
        <text x="120" y="290" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Test Wafers</text>
        
        {/* Line Connecting Fourth and Sixth Box */}
        <line x1="120" y1="215" x2="120" y2="255" stroke="black" strokeWidth="2" />

        {/* extra Line Connecting sixth and ninth Box */}
        <line x1="200" y1="285" x2="235" y2="285" stroke="black" strokeWidth="2" />
        <text x="210" y="275" fontSize="12" fill="black" textAnchor="start" alignmentBaseline="middle">Pass</text>
        <line x1="200" y1="600" x2="235" y2="600" stroke="black" strokeWidth="2" />
        <text x="210" y="590" fontSize="12" fill="black" textAnchor="start" alignmentBaseline="middle">Pass</text>
        <line x1="200" y1="387" x2="235" y2="387" stroke="black" strokeWidth="2" />
        <text x="210" y="377" fontSize="12" fill="black" textAnchor="start" alignmentBaseline="middle">Pass</text>
        <line x1="235" y1="285" x2="235" y2="600" stroke="black" strokeWidth="2" />
        <line x1="235" y1="420" x2="255" y2="420" stroke="black" strokeWidth="2" />
        <polygon points="255,425 255,415 265,420" fill="black" />
        <rect x="265" y="390" width="100" height="60" fill="rgb(153,255,153)"/>
        <text x="315" y="405" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Release &</text>
        <text x="315" y="420" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Documents in</text>
        <text x="315" y="435" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Resolution</text>

        {/* Arrow near Sixth Box */}
        <polygon points="115,250 125,250 120,260" fill="black" />
        
        {/* Text Beside the Connecting Line */}
        <text x="130" y="227" fontSize="12" fill="black" textAnchor="start" alignmentBaseline="middle">Yes</text>
        
        {/* Seventh Rectangle Below Sixth Box */}
        <rect x="40" y="355" width="160" height="65" fill="rgb(255,212,128)"/>
        <text x="120" y="370" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Run Recovery Actions</text>
        <text x="120" y="385" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">per Local BKM</text>
        <text x="120" y="400" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">(No more than 2x)</text>
        
        {/* Adjusted Line Connecting Sixth and Seventh Box */}
        <line x1="120" y1="310" x2="120" y2="350" stroke="black" strokeWidth="2" />
        
        {/* Arrow near Seventh Box */}
        <polygon points="115,345 125,345 120,355" fill="black" />
        
        {/* Text Beside the Connecting Line */}
        <text x="130" y="322" fontSize="12" fill="black" textAnchor="start" alignmentBaseline="middle">Fail</text>
     
     {/* Info Icon Inside Seventh Box */}
     <circle cx="170" cy="385" r="8" fill="black" cursor="pointer" onClick={() => setShowTooltip(!showTooltip)} />
      <text x="170" y="386" fontSize="12" fill="white" textAnchor="middle" alignmentBaseline="middle" cursor="pointer" onClick={() => setShowTooltip(!showTooltip)}>i</text>
      
      {/* Tooltip */}
      {showTooltip && (
        <rect x="180" y="350" width="120" height="40" fill="white" stroke="black" strokeWidth="1" rx="5" />
      )}
      {showTooltip && (
        <text x="185" y="365" fontSize="12" fill="black">Additional Information</text>
      )}

     {/* Eighth Rectangle Below Seventh Box */}
     <rect x="40" y="465" width="160" height="65" fill="rgb(204,204,204)"/>
      <text x="120" y="480" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Before Opening Chamber,</text>
      <text x="120" y="495" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">formulate Action Plan using</text>
      <text x="120" y="510" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">DES Recommendations</text>
      
      {/* Line Connecting Seventh and Eighth Box */}
      <line x1="120" y1="420" x2="120" y2="460" stroke="black" strokeWidth="2" />
      
      {/* Arrow near Eighth Box */}
      <polygon points="115,455 125,455 120,465" fill="black" />
      
      {/* Text Beside the Connecting Line */}
      <text x="130" y="435" fontSize="12" fill="black" textAnchor="start" alignmentBaseline="middle">Fail</text>
      
      {/* Ninth Rectangle Below Eighth Box */}
      <rect x="40" y="575" width="160" height="50" fill="rgb(255,212,128)"/>
      <text x="120" y="590" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Chamber Inspect &</text>
      <text x="120" y="605" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Wipe Down</text>
      
      {/* Line Connecting Eighth and Ninth Box */}
      <line x1="120" y1="530" x2="120" y2="570" stroke="black" strokeWidth="2" />

      {/* Arrow near Ninth Box */}
      <polygon points="115,565 125,565 120,575" fill="black" />
      
      {/* Tenth Rectangle Below Ninth Box */}
      <rect x="40" y="670" width="160" height="50" fill="rgb(204,204,204)"/>
      <text x="120" y="685" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Troubleshoot Using DES</text>
      <text x="120" y="700" fontSize="12" fill="black" textAnchor="middle" alignmentBaseline="middle">Recommendations</text>
      
      {/* Line Connecting Ninth and Tenth Box */}
      <line x1="120" y1="625" x2="120" y2="665" stroke="black" strokeWidth="2" />
      <text x="130" y="637" fontSize="12" fill="black" textAnchor="start" alignmentBaseline="middle">Fail</text>
      {/* Arrow near Tenth Box */}
      <polygon points="115,660 125,660 120,670" fill="black" />
    </svg>
    );
  };
  
  export default SvgBoxes;
  