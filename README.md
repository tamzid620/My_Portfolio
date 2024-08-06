 • live site link: https://tamzid-620-portfolio.netlify.app/

 • Gradient color: bg-gradient-to-r from-stone-300 via-slate-500 to-zinc-300 hover:from-slate-200 hover:to-stone-400


• Font Family => 
style={{ fontFamily: "Arsenal SC, sans-serif"}} ,
style={{ fontFamily: "Nunito Sans, sans-serif"}}

• primary color : #FCDE67
  
• secondary color: #5BCCF6

---------------------------------------------------------------------------------->
 =>Polygon Coordinates Breakdown:
• 0 10%: This is the top-left corner of the polygon, positioned 10% down from the top.
• 100% 0%: This is the top-right corner of the polygon, positioned at the very top.
• 100% 90%: This is the bottom-right corner of the polygon, positioned 90% up from the bottom.
• 0% 100%: This is the bottom-left corner of the polygon, positioned at the very bottom.

=>Combined Effect:
• object-fit: cover; ensures that the content fills the entire container, and any overflow is cropped.
• clip-path: polygon(...) then further crops the already-covered content into a specific polygonal shape.
---------------------------------------------------------------------------------->