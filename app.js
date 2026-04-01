// ═══════════════════════════════════════════════════════════════
// PLAYERS — top 100, post Miami Open 30 Mar 2026
// [rank, name, nationality, age, titles, hand, backhand]
// ═══════════════════════════════════════════════════════════════
const RAW=[
  [1,"Carlos Alcaraz","Spain",22,17,"Right","Two-handed"],
  [2,"Jannik Sinner","Italy",24,26,"Right","Two-handed"],
  [3,"Alexander Zverev","Germany",28,37,"Right","Two-handed"],
  [4,"Novak Djokovic","Serbia",38,99,"Right","Two-handed"],
  [5,"Lorenzo Musetti","Italy",24,4,"Right","One-handed"],
  [6,"Alex De Minaur","Australia",27,12,"Right","Two-handed"],
  [7,"Felix Auger-Aliassime","Canada",25,7,"Right","Two-handed"],
  [8,"Taylor Fritz","United States",28,9,"Right","Two-handed"],
  [9,"Ben Shelton","United States",23,3,"Left","Two-handed"],
  [10,"Daniil Medvedev","Russia",30,22,"Right","Two-handed"],
  [11,"Alexander Bublik","Kazakhstan",28,7,"Right","One-handed"],
  [12,"Casper Ruud","Norway",27,9,"Right","Two-handed"],
  [13,"Flavio Cobolli","Italy",23,1,"Right","Two-handed"],
  [14,"Jiri Lehecka","Czech Republic",24,1,"Right","Two-handed"],
  [15,"Karen Khachanov","Russia",29,9,"Right","Two-handed"],
  [16,"Andrey Rublev","Russia",28,20,"Right","Two-handed"],
  [17,"Alejandro Davidovich Fokina","Spain",26,2,"Right","Two-handed"],
  [18,"Luciano Darderi","Italy",24,2,"Right","Two-handed"],
  [19,"Francisco Cerundolo","Argentina",27,3,"Right","Two-handed"],
  [20,"Frances Tiafoe","United States",28,3,"Right","Two-handed"],
  [21,"Learner Tien","United States",20,0,"Right","Two-handed"],
  [22,"Tommy Paul","United States",28,5,"Right","Two-handed"],
  [23,"Valentin Vacherot","Monaco",27,1,"Right","Two-handed"],
  [24,"Cameron Norrie","Great Britain",30,9,"Left","Two-handed"],
  [25,"Jack Draper","Great Britain",24,3,"Left","Two-handed"],
  [26,"Arthur Rinderknech","France",30,1,"Right","Two-handed"],
  [27,"Holger Rune","Denmark",22,6,"Right","Two-handed"],
  [28,"Tallon Griekspoor","Netherlands",29,3,"Right","Two-handed"],
  [29,"Brandon Nakashima","United States",24,1,"Right","Two-handed"],
  [30,"Arthur Fils","France",21,3,"Right","Two-handed"],
  [31,"Tomas Martin Etcheverry","Argentina",26,2,"Right","Two-handed"],
  [32,"Corentin Moutet","France",26,0,"Left","One-handed"],
  [33,"Ugo Humbert","France",27,6,"Left","Two-handed"],
  [34,"Jaume Munar","Spain",28,2,"Right","Two-handed"],
  [35,"Sebastian Korda","United States",25,2,"Right","One-handed"],
  [36,"Gabriel Diallo","Canada",24,1,"Right","One-handed"],
  [37,"Denis Shapovalov","Canada",26,4,"Left","One-handed"],
  [38,"Joao Fonseca","Brazil",19,1,"Right","Two-handed"],
  [39,"Alex Michelsen","United States",21,0,"Right","Two-handed"],
  [40,"Alejandro Tabilo","Chile",28,4,"Right","Two-handed"],
  [41,"Jenson Brooksby","United States",25,1,"Right","Two-handed"],
  [42,"Adrian Mannarino","France",37,3,"Left","One-handed"],
  [43,"Grigor Dimitrov","Bulgaria",34,9,"Right","One-handed"],
  [44,"Terence Atmane","France",24,0,"Right","Two-handed"],
  [45,"Zizou Bergs","Belgium",26,0,"Right","Two-handed"],
  [46,"Fabian Marozsan","Hungary",26,1,"Right","Two-handed"],
  [47,"Alexei Popyrin","Australia",26,2,"Right","Two-handed"],
  [48,"Tomas Machac","Czech Republic",25,2,"Right","Two-handed"],
  [49,"Marin Cilic","Croatia",37,20,"Right","Two-handed"],
  [50,"Nuno Borges","Portugal",29,2,"Right","One-handed"],
  [51,"Stefanos Tsitsipas","Greece",27,12,"Right","One-handed"],
  [52,"Sebastian Baez","Argentina",25,4,"Right","Two-handed"],
  [53,"Marton Fucsovics","Hungary",34,1,"Right","Two-handed"],
  [54,"Daniel Altmaier","Germany",27,0,"Right","Two-handed"],
  [55,"Ethan Quinn","United States",22,0,"Right","Two-handed"],
  [56,"Kamil Majchrzak","Poland",30,0,"Right","Two-handed"],
  [57,"Miomir Kecmanovic","Serbia",26,1,"Right","Two-handed"],
  [58,"Giovanni Mpetshi Perricard","France",22,1,"Right","Two-handed"],
  [59,"Vit Kopriva","Czech Republic",28,0,"Right","Two-handed"],
  [60,"Jakub Mensik","Czech Republic",20,3,"Right","One-handed"],
  [61,"Mariano Navone","Argentina",25,2,"Right","Two-handed"],
  [62,"Lorenzo Sonego","Italy",30,5,"Right","Two-handed"],
  [63,"Ignacio Buse","Peru",22,0,"Right","Two-handed"],
  [64,"Yannick Hanfmann","Germany",34,0,"Right","Two-handed"],
  [65,"Botic Van De Zandschulp","Netherlands",30,1,"Right","Two-handed"],
  [66,"Camilo Ugo Carabelli","Argentina",26,1,"Right","Two-handed"],
  [67,"Reilly Opelka","United States",28,5,"Right","Two-handed"],
  [68,"Matteo Berrettini","Italy",29,12,"Right","One-handed"],
  [69,"Juan Manuel Cerundolo","Argentina",24,3,"Right","Two-handed"],
  [70,"Marcos Giron","United States",32,1,"Right","Two-handed"],
  [71,"Raphael Collignon","Belgium",24,0,"Right","Two-handed"],
  [72,"Arthur Cazaux","France",23,1,"Right","Two-handed"],
  [73,"Emilio Nava","United States",24,0,"Right","Two-handed"],
  [74,"Hubert Hurkacz","Poland",29,10,"Right","Two-handed"],
  [75,"Damir Dzumhur","Bosnia",33,2,"Right","Two-handed"],
  [76,"Mattia Bellucci","Italy",24,0,"Left","Two-handed"],
  [77,"Jan-Lennard Struff","Germany",35,2,"Right","Two-handed"],
  [78,"Eliot Spizzirri","United States",24,0,"Right","Two-handed"],
  [79,"James Duckworth","Australia",34,0,"Right","Two-handed"],
  [80,"Thiago Agustin Tirante","Argentina",24,0,"Right","Two-handed"],
  [81,"Francisco Comesana","Argentina",25,1,"Right","Two-handed"],
  [82,"Zachary Svajda","United States",22,0,"Right","Two-handed"],
  [83,"Jacob Fearnley","Great Britain",24,0,"Right","Two-handed"],
  [84,"Alexander Shevchenko","Kazakhstan",25,0,"Right","Two-handed"],
  [85,"Adam Walton","Australia",26,0,"Right","Two-handed"],
  [86,"Aleksandar Vukic","Australia",29,0,"Right","Two-handed"],
  [87,"Sebastian Ofner","Austria",28,0,"Right","Two-handed"],
  [88,"Filip Misolic","Austria",24,0,"Right","Two-handed"],
  [89,"Rafael Jodar","Spain",19,0,"Right","Two-handed"],
  [90,"Quentin Halys","France",28,0,"Right","Two-handed"],
  [91,"Roberto Bautista Agut","Spain",37,11,"Right","Two-handed"],
  [92,"Alexandre Muller","France",29,1,"Right","Two-handed"],
  [93,"Jesper De Jong","Netherlands",25,0,"Right","Two-handed"],
  [94,"Aleksandar Kovacevic","United States",27,0,"Right","Two-handed"],
  [95,"Stan Wawrinka","Switzerland",40,16,"Right","One-handed"],
  [96,"Cristian Garin","Chile",29,7,"Right","Two-handed"],
  [97,"Patrick Kypson","United States",24,0,"Right","Two-handed"],
  [98,"Rinky Hijikata","Australia",24,0,"Right","Two-handed"],
  [99,"Alexander Blockx","Belgium",21,0,"Right","Two-handed"],
  [100,"Dalibor Svrcina","Czech Republic",23,0,"Right","Two-handed"]
];
const ALL=RAW.map(r=>({rank:r[0],name:r[1],nat:r[2],age:r[3],titles:r[4],hand:r[5],bh:r[6]}));

// ═══════════════════════════════════════════════════════════════
// STORAGE — pure localStorage, namespaced
// All accounts and stats live in localStorage under 'sv_db_' prefix.
// This is reliable everywhere; window.storage is not available here.
// ═══════════════════════════════════════════════════════════════
const DB_PFX = 'sv_db_';

const db = {
  get(k)   { try { const v=localStorage.getItem(DB_PFX+k); return v?JSON.parse(v):null; } catch{ return null; } },
  set(k,v) { try { localStorage.setItem(DB_PFX+k, JSON.stringify(v)); return true; } catch{ return false; } },
  del(k)   { try { localStorage.removeItem(DB_PFX+k); } catch{} },
  keys(pfx){ // return all logical keys starting with pfx
    const out=[];
    try {
      for(let i=0;i<localStorage.length;i++){
        const k=localStorage.key(i);
        if(k&&k.startsWith(DB_PFX+pfx)) out.push(k.slice(DB_PFX.length));
      }
    } catch{}
    return out;
  }
};

// ═══════════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════════
let me=null;
function hp(p){let h=0;for(let i=0;i<p.length;i++){h=((h<<5)-h)+p.charCodeAt(i);h|=0}return'h'+Math.abs(h).toString(36)}

// email → username lookup
function setEmailIdx(email,user){ db.set('email:'+email.toLowerCase(),{username:user}); }
function getEmailIdx(email){ const r=db.get('email:'+email.toLowerCase()); return r?r.username:null; }

function sendRegEmail(regEmail, username, total){
  const subj=encodeURIComponent(`Servele new registration #${total}`);
  const body=encodeURIComponent(`New Servele registration:\n\nUsername: ${username}\nEmail: ${regEmail}\nTotal registrants: ${total}\nTime: ${new Date().toUTCString()}`);
  try{
    const a=document.createElement('a');
    a.href=`mailto:herring1209prb@gmail.com?subject=${subj}&body=${body}`;
    a.style.display='none';
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>document.body.removeChild(a),500);
  }catch{}
}

function doRegister(){
  const email=$('re_email').value.trim().toLowerCase();
  const user=$('re_user').value.trim();
  const pass=$('re_pass').value;
  const pass2=$('re_pass2').value;
  const err=$('re_err'),ok=$('re_ok'),btn=$('re_btn');
  err.classList.remove('on');ok.classList.remove('on');

  if(!email||!email.includes('@')||!email.includes('.')){showE(err,'Enter a valid email address.');return}
  if(user.length<3||user.length>20){showE(err,'Username must be 3–20 characters.');return}
  if(!/^[a-zA-Z0-9_]+$/.test(user)){showE(err,'Letters, numbers and underscores only.');return}
  if(pass.length<6){showE(err,'Password must be at least 6 characters.');return}
  if(pass!==pass2){showE(err,'Passwords do not match.');return}

  if(db.get('u:'+user.toLowerCase())){showE(err,'Username already taken.');return}
  if(getEmailIdx(email)){showE(err,'An account with that email already exists.');return}

  const total = db.keys('u:').length + 1;
  const ud = {username:user, email, passHash:hp(pass), createdAt:Date.now(), stats:emptyS()};
  db.set('u:'+user.toLowerCase(), ud);
  setEmailIdx(email, user);

  sendRegEmail(email, user, total);

  ok.textContent='✓ Account created!';ok.classList.add('on');
  btn.disabled=false;btn.textContent='Create Account';
  setTimeout(()=>{ signIn(ud); closeMo('authMo'); toast('Welcome to Servele, '+user+'! 🎾'); }, 700);
}

function doLogin(){
  const email=$('li_email').value.trim().toLowerCase();
  const pass=$('li_pass').value;
  const err=$('li_err'),btn=$('li_btn');
  err.classList.remove('on');
  if(!email||!pass){showE(err,'Enter your email and password.');return}
  if(!email.includes('@')){showE(err,'Enter a valid email address.');return}

  const username=getEmailIdx(email);
  if(!username){showE(err,'No account found with that email.');return}

  const ud=db.get('u:'+username.toLowerCase());
  if(!ud||ud.passHash!==hp(pass)){showE(err,'Incorrect password.');return}

  signIn(ud);
  closeMo('authMo');
  toast('Welcome back, '+ud.username+'! 🎾');
}

function signIn(ud){
  me={username:ud.username,email:ud.email};
  localStorage.setItem('sv_sess',JSON.stringify(me));
  $('acctBtn').classList.remove('guest');
  $('acctAvatar').textContent=ud.username[0].toUpperCase();
  $('acctLabel').textContent=ud.username;

  // Merge: take the better of guest local stats and cloud stats
  const local=ld();
  const cloud=ud.stats||emptyS();
  const merged={
    solved:    Math.max(local.solved,   cloud.solved),
    guesses:   local.guesses>0 ? local.guesses : cloud.guesses,
    fastest:   local.fastest!==null && cloud.fastest!==null ? Math.min(local.fastest,cloud.fastest)
               : local.fastest??cloud.fastest,
    totalTime: Math.max(local.totalTime, cloud.totalTime),
    streak:    Math.max(local.streak,   cloud.streak),
    best:      Math.max(local.best,     cloud.best),
    times:     cloud.times.length>=local.times.length ? cloud.times : local.times,
    lastStreakDate: local.lastStreakDate||cloud.lastStreakDate
  };
  sv(merged);
  updateHdr(merged);
}

function doLogout(){
  syncCloud();
  me=null;
  localStorage.removeItem('sv_sess');
  $('acctBtn').classList.add('guest');
  $('acctAvatar').textContent='?';
  $('acctLabel').textContent='Sign In';
  closeMo('authMo');
  toast('Signed out. Stats saved.');
}

function syncCloud(){
  if(!me)return;
  const ud=db.get('u:'+me.username.toLowerCase());
  if(!ud)return;
  ud.stats=ld();
  ud.lastSync=Date.now();
  db.set('u:'+me.username.toLowerCase(),ud);
}

function showE(el,msg){el.textContent=msg;el.classList.add('on')}
function switchTab(t){
  $('formLogin').style.display=t==='login'?'flex':'none';
  $('formReg').style.display=t==='register'?'flex':'none';
  $('tabLogin').classList.toggle('on',t==='login');
  $('tabReg').classList.toggle('on',t==='register');
  ['li_err','re_err','re_ok'].forEach(id=>$(id).classList.remove('on'));
}

function openAuth(){
  if(me){
    $('authForms').style.display='none';$('authIn').style.display='block';
    $('profAv').textContent=me.username[0].toUpperCase();
    $('profName').textContent=me.username;$('profEmail').textContent=me.email;
    const s=ld(),avg=s.solved>0?(s.guesses/s.solved).toFixed(1):'—';
    $('profStats').innerHTML=[[s.solved,'Solved'],[avg,'Avg Guesses'],[s.streak,'Streak'],[s.fastest!==null?fmt(s.fastest):'—','Fastest']].map(([v,l])=>`<div class="sc"><div class="scv">${v}</div><div class="scl">${l}</div></div>`).join('');
  }else{$('authForms').style.display='block';$('authIn').style.display='none';switchTab('login')}
  openMo('authMo');
}

// ═══════════════════════════════════════════════════════════════
// LEADERBOARD
// ═══════════════════════════════════════════════════════════════
let lbMetric='solved';
function openLb(){openMo('lbMo');loadLb(lbMetric)}
function switchLb(el,m){
  document.querySelectorAll('.lb-tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');lbMetric=m;loadLb(m);
}
function loadLb(m){
  const c=$('lbContent');
  const keys=db.keys('u:');
  if(!keys.length){c.innerHTML='<div class="lb-empty">No players yet. Be the first! 🎾</div>';return}
  const users=[];
  for(const k of keys){const u=db.get(k);if(u&&u.stats&&u.username)users.push(u)}
  if(!users.length){c.innerHTML='<div class="lb-empty">No stats yet.</div>';return}
  const sorted=[...users].sort((a,b)=>{
    const sa=a.stats,sb=b.stats;
    if(m==='solved')return(sb.solved||0)-(sa.solved||0);
    if(m==='streak')return(sb.best||0)-(sa.best||0);
    if(m==='avg'){const aa=sa.solved>0?sa.guesses/sa.solved:999;const ab=sb.solved>0?sb.guesses/sb.solved:999;return aa-ab}
    if(m==='fast'){const fa=sa.fastest!==null?sa.fastest:999999;const fb=sb.fastest!==null?sb.fastest:999999;return fa-fb}
    return 0;
  }).slice(0,50);
  const labels={solved:'Solved',streak:'Best Streak',avg:'Avg Guesses',fast:'Fastest'};
  const rows=sorted.map((u,i)=>{
    const s=u.stats,rn=i+1;
    const rc=rn===1?'g':rn===2?'s':rn===3?'b':'';
    const isYou=me&&u.username.toLowerCase()===me.username.toLowerCase();
    let val;
    if(m==='solved')val=s.solved||0;
    else if(m==='streak')val=s.best||0;
    else if(m==='avg')val=s.solved>0?(s.guesses/s.solved).toFixed(1):'—';
    else val=s.fastest!==null?fmt(s.fastest):'—';
    return`<div class="lb-row${isYou?' you':''}">
      <div class="rank-num ${rc}">${rn}</div>
      <div class="lb-name">${esc(u.username)}${isYou?'<span class="you-chip">you</span>':''}</div>
      <div class="lb-val">${val}</div>
    </div>`;
  }).join('');
  c.innerHTML=`<div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text3);padding:6px 12px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between"><span>Player</span><span>${labels[m]}</span></div>`+rows;
}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

// ═══════════════════════════════════════════════════════════════
// LOCAL STATS
// ═══════════════════════════════════════════════════════════════
const SK='sv3';
function emptyS(){return{solved:0,guesses:0,fastest:null,totalTime:0,streak:0,best:0,times:[],lastStreakDate:null}}
const ld=()=>{
  try{
    const s=JSON.parse(localStorage.getItem(SK));
    if(!s) return emptyS();
    // Back-fill lastStreakDate if missing (old saves)
    if(!('lastStreakDate' in s)) s.lastStreakDate=null;
    return s;
  }catch{return emptyS();}
};
const sv=s=>localStorage.setItem(SK,JSON.stringify(s));

// Get current PT date string "YYYY-MM-DD" — streak resets at midnight PT
function ptDateStr(ts){
  const d=new Date(ts??Date.now());
  // Format in America/Los_Angeles timezone
  return d.toLocaleDateString('en-CA',{timeZone:'America/Los_Angeles'}); // en-CA gives YYYY-MM-DD
}

// Returns days between two PT date strings (negative = date1 is after date2)
function daysBetween(d1,d2){
  if(!d1||!d2) return Infinity;
  const ms=new Date(d1).getTime()-new Date(d2).getTime();
  return Math.round(ms/86400000);
}

// Called on app load — reset streak if player missed a day
function checkStreakOnLoad(){
  const s=ld();
  if(!s.streak||!s.lastStreakDate) return; // no streak to check
  const today=ptDateStr();
  const gap=daysBetween(today,s.lastStreakDate);
  if(gap>1){
    // Missed at least one day — reset streak
    s.streak=0;
    sv(s);
    updateHdr(s);
  }
}

// ═══════════════════════════════════════════════════════════════
// GAME
// ═══════════════════════════════════════════════════════════════
let mystery=null,guesses=[],iv=null,t0=null,elapsed=0,won=false,aidx=-1,egrid=[];

function startT(){clearInterval(iv);t0=Date.now();elapsed=0;iv=setInterval(()=>{elapsed=Math.floor((Date.now()-t0)/1000);const s=fmt(elapsed);$('tdisp').textContent=s;$('ft').textContent=s},1000)}
function stopT(){clearInterval(iv);iv=null;elapsed=Math.floor((Date.now()-t0)/1000);return elapsed}
function fmt(s){return`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`}

function newGame(){
  mystery=ALL[Math.floor(Math.random()*ALL.length)];
  guesses=[];won=false;egrid=[];elapsed=0;
  startT();render();
  const inp=$('inp');inp.value='';inp.disabled=false;
  ['gcount','fg'].forEach(id=>$(id).textContent='0');
  ['tdisp','ft'].forEach(id=>$(id).textContent='0:00');
  $('succ').classList.remove('on');
  $('acdrop').classList.remove('open');aidx=-1;
  // Scroll to top
  $('scrollArea').scrollTop=0;
}

function evalP(p){
  const m=mystery,cells=[];
  // Nationality
  cells.push({lbl:'Country',type:p.nat===m.nat?'ok':'no',val:p.nat});
  // Rank
  const rd=Math.abs(p.rank-m.rank);
  cells.push({lbl:'Ranking',type:p.rank===m.rank?'ok':rd<=20?'cl':'no',val:`#${p.rank}`,arrow:p.rank===m.rank?'':p.rank>m.rank?'⬆':'⬇'});
  // Age
  const ad=Math.abs(p.age-m.age);
  cells.push({lbl:'Age',type:p.age===m.age?'ok':ad<=2?'cl':'no',val:`${p.age}`,arrow:p.age===m.age?'':p.age>m.age?'⬇':'⬆'});
  // Titles
  const td=Math.abs(p.titles-m.titles);
  cells.push({lbl:'Titles',type:p.titles===m.titles?'ok':td<=3?'cl':'no',val:`${p.titles}`,arrow:p.titles===m.titles?'':p.titles>m.titles?'⬇':'⬆'});
  // Hand
  cells.push({lbl:'Hand',type:p.hand===m.hand?'ok':'no',val:p.hand});
  // Backhand
  cells.push({lbl:'Backhand',type:p.bh===m.bh?'ok':'no',val:p.bh==='Two-handed'?'2HBH':'1HBH'});
  return cells;
}

function guess(name){
  if(won)return;
  const p=ALL.find(x=>x.name.toLowerCase()===name.toLowerCase());
  if(!p)return;
  if(guesses.find(g=>g.p.name===p.name)){toast('Already guessed!');return}
  const cells=evalP(p);
  guesses.push({p,cells});
  egrid.push(cells.map(c=>c.type==='ok'?'🟩':c.type==='cl'?'🟨':'⬜').join(''));
  ['gcount','fg'].forEach(id=>$(id).textContent=guesses.length);
  render();
  if(p.name===mystery.name)onWin();
}

function onWin(){
  won=true;
  const e=stopT();
  $('inp').disabled=true;
  const s=ld();
  const today=ptDateStr();

  s.solved++;
  s.guesses+=guesses.length;
  s.totalTime+=e;
  if(s.fastest===null||e<s.fastest) s.fastest=e;
  s.times.push(e);

  // Daily streak logic:
  // - If no previous streak date, or last was yesterday → extend streak
  // - If already solved today → don't change streak (still counts solved/guesses)
  // - If missed a day → reset to 1
  const gap=daysBetween(today,s.lastStreakDate);
  if(s.lastStreakDate===null||gap>=2){
    // First ever solve, or missed a day
    s.streak=1;
  } else if(gap===1){
    // Last solve was yesterday — extend
    s.streak++;
  }
  // gap===0 means already solved today — streak unchanged
  s.lastStreakDate=today;

  if(s.streak>s.best) s.best=s.streak;

  sv(s);updateHdr(s);
  if(me) syncCloud();

  const msgs=['Ace! ⚡','Perfect!','Brilliant!','Excellent!','Well done!','Got it!'];
  $('se').textContent=guesses.length===1?'🏆':guesses.length<=3?'🎾':'✅';
  $('stitle').textContent=msgs[Math.min(guesses.length-1,msgs.length-1)];
  $('ssub').textContent=`You found ${mystery.name} in ${guesses.length} ${guesses.length===1?'guess':'guesses'}!`;
  $('sg').textContent=guesses.length;
  $('stm').textContent=fmt(e);
  $('ssk').textContent=s.streak;
  $('succ').classList.add('on');
  $('scrollArea').scrollTop=0;
}

// ═══════════════════════════════════════════════════════════════
// RENDER — card layout
// ═══════════════════════════════════════════════════════════════
function render(){
  const c=$('rows');
  if(!guesses.length){
    c.innerHTML='<div class="empty"><div class="empty-i">🎾</div><div class="empty-t">Guess an ATP player</div><div class="empty-s">Type a name in the search bar above</div></div>';
    return;
  }
  c.innerHTML='';
  // Newest first so you can see the latest without scrolling down
  [...guesses].reverse().forEach(({p,cells})=>{
    const card=document.createElement('div');card.className='guess-card';
    card.innerHTML=`
      <div class="card-name">
        <span class="card-name-text">${p.name}</span>
        <span class="card-rank-badge">#${p.rank}</span>
      </div>
      <div class="card-attrs">
        ${cells.map(cell=>`
          <div class="attr-tile ${cell.type}">
            <div class="attr-label">${cell.lbl}</div>
            <div class="attr-val">${cell.val}</div>
            ${cell.arrow?`<div class="attr-arrow">${cell.arrow}</div>`:''}
          </div>`).join('')}
      </div>`;
    c.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════════
// AUTOCOMPLETE
// ═══════════════════════════════════════════════════════════════
function updateAC(q){
  const ac=$('acdrop');
  if(!q.trim()){ac.classList.remove('open');aidx=-1;return}
  const ql=q.toLowerCase();
  const hits=ALL.filter(p=>p.name.toLowerCase().includes(ql)).slice(0,7);
  if(!hits.length){ac.classList.remove('open');return}
  ac.innerHTML=hits.map((p,i)=>`<div class="aci" data-n="${p.name}" data-i="${i}">
    <span class="acr">#${p.rank}</span>
    <span class="acn">${hl(p.name,ql)}</span>
    <span class="acp">${p.nat}</span>
  </div>`).join('');
  ac.classList.add('open');aidx=-1;
  ac.querySelectorAll('.aci').forEach(it=>it.addEventListener('mousedown',e=>{e.preventDefault();pick(it.dataset.n)}));
}
function hl(name,q){const i=name.toLowerCase().indexOf(q);if(i<0)return name;return name.slice(0,i)+`<strong>${name.slice(i,i+q.length)}</strong>`+name.slice(i+q.length)}
function pick(name){
  const inp=$('inp');
  inp.value='';
  $('acdrop').classList.remove('open');
  aidx=-1;
  inp.blur(); // dismiss keyboard on mobile
  guess(name);
}

// ═══════════════════════════════════════════════════════════════
// STATS MODAL
// ═══════════════════════════════════════════════════════════════
function openStats(){
  const s=ld();
  const avg=s.solved>0?(s.guesses/s.solved).toFixed(1):'—';
  const avgt=s.times.length>0?fmt(Math.round(s.times.reduce((a,b)=>a+b,0)/s.times.length)):'—';
  $('sgrid').innerHTML=[[s.solved,'Puzzles Solved'],[avg,'Avg Guesses'],[s.fastest!==null?fmt(s.fastest):'—','Fastest Solve'],[avgt,'Avg Time'],[s.streak,'Streak'],[s.best,'Best Streak'],[s.guesses,'Total Guesses'],[fmt(s.totalTime),'Time Played']].map(([v,l])=>`<div class="sc"><div class="scv">${v}</div><div class="scl">${l}</div></div>`).join('');
  openMo('statsMo');
}
function updateHdr(s){$('streak').textContent=s.streak;$('solved').textContent=s.solved}

// ═══════════════════════════════════════════════════════════════
// SHARE
// ═══════════════════════════════════════════════════════════════
function doShare(){
  const txt=[`🎾 Servele — Top 100`,`${guesses.length} guess${guesses.length!==1?'es':''} · ${fmt(elapsed)}`,'', ...egrid,'','servele.game'].join('\n');
  if(navigator.clipboard){navigator.clipboard.writeText(txt).then(()=>toast('Copied! 📋'))}
  else{toast('Copy not supported')}
}

// ═══════════════════════════════════════════════════════════════
// MODAL HELPERS
// ═══════════════════════════════════════════════════════════════
function openMo(id){$(id).classList.add('open')}
function closeMo(id){$(id).classList.remove('open')}

// ═══════════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════════
let ttm;
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('on');clearTimeout(ttm);ttm=setTimeout(()=>t.classList.remove('on'),2600)}

// ═══════════════════════════════════════════════════════════════
// DARK MODE
// ═══════════════════════════════════════════════════════════════
function toggleDark(){
  const el=document.documentElement;
  if(el.hasAttribute('data-dark')){el.removeAttribute('data-dark');$('darkBtn').textContent='🌙';localStorage.setItem('sv_dark','0')}
  else{el.setAttribute('data-dark','');$('darkBtn').textContent='☀️';localStorage.setItem('sv_dark','1')}
}

// ═══════════════════════════════════════════════════════════════
// UTIL
// ═══════════════════════════════════════════════════════════════
function $(id){return document.getElementById(id)}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
function init(){
  if(localStorage.getItem('sv_dark')==='1'){document.documentElement.setAttribute('data-dark','');$('darkBtn').textContent='☀️'}

  // Restore session from localStorage
  try{
    const sess=JSON.parse(localStorage.getItem('sv_sess'));
    if(sess&&sess.username){
      const ud=db.get('u:'+sess.username.toLowerCase());
      if(ud&&ud.passHash){
        signIn(ud);
      } else {
        localStorage.removeItem('sv_sess');
      }
    }
  }catch(e){}

  // Check if streak should be reset (missed a day)
  checkStreakOnLoad();

  updateHdr(ld());

  // Events
  $('darkBtn').addEventListener('click',toggleDark);
  $('statsBtn').addEventListener('click',openStats);
  $('lbBtn').addEventListener('click',openLb);
  $('acctBtn').addEventListener('click',openAuth);
  $('authClose').addEventListener('click',()=>closeMo('authMo'));
  $('logoutBtn').addEventListener('click',doLogout);
  $('resetSt').addEventListener('click',()=>{
    if(confirm('Reset all stats?')){
      sv(emptyS());
      if(me) syncCloud();
      openStats();
      updateHdr(ld());
    }
  });

  // Close modals on backdrop tap
  ['authMo','statsMo','lbMo'].forEach(id=>{
    $(id).addEventListener('click',e=>{if(e.target===$(id))closeMo(id)});
  });

  // New puzzle
  $('newBtn').addEventListener('click',()=>{
    if(!won&&guesses.length>0){if(!confirm('Abandon this puzzle?'))return}
    newGame();
  });
  $('nextBtn').addEventListener('click',newGame);
  $('shareBtn').addEventListener('click',doShare);

  // Search input
  const inp=$('inp');
  inp.addEventListener('input',()=>updateAC(inp.value));
  inp.addEventListener('keydown',e=>{
    const items=document.querySelectorAll('.aci');
    if(e.key==='ArrowDown'){e.preventDefault();aidx=Math.min(aidx+1,items.length-1);items.forEach((it,i)=>it.classList.toggle('foc',i===aidx));if(items[aidx])inp.value=items[aidx].dataset.n}
    else if(e.key==='ArrowUp'){e.preventDefault();aidx=Math.max(aidx-1,0);items.forEach((it,i)=>it.classList.toggle('foc',i===aidx));if(items[aidx])inp.value=items[aidx].dataset.n}
    else if(e.key==='Enter'){e.preventDefault();if(aidx>=0&&items[aidx]){pick(items[aidx].dataset.n)}else{const q=inp.value.trim().toLowerCase();const m=ALL.find(p=>p.name.toLowerCase()===q);if(m)pick(m.name);else if(items.length>0)pick(items[0].dataset.n)}}
    else if(e.key==='Escape'){$('acdrop').classList.remove('open');aidx=-1}
  });
  inp.addEventListener('focus',()=>{if(inp.value.trim())updateAC(inp.value)});
  document.addEventListener('click',e=>{if(!e.target.closest('.search-area')){$('acdrop').classList.remove('open');aidx=-1}});

  // Auth enter keys
  $('li_email').addEventListener('keydown',e=>{if(e.key==='Enter')$('li_pass').focus()});
  $('li_pass').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin()});
  $('re_pass2').addEventListener('keydown',e=>{if(e.key==='Enter')doRegister()});

  newGame();
}

document.addEventListener('DOMContentLoaded',init);

// Register service worker for PWA offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
