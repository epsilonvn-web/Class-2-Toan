(function(){
  'use strict';
  let root=null,state=null,dragLen=null;
  const rnd=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
  function startNumberBridgeGame(){root=document.getElementById('game-play-container');if(!root)return;injectStyle();state={round:1,score:0,target:10,pieces:[],available:[],limit:null,message:'',locked:false};newRound();}
  function stopNumberBridgeGame(){state=null;root=null;dragLen=null;}
  function injectStyle(){if(document.getElementById('ee-number-bridge-style'))return;const s=document.createElement('style');s.id='ee-number-bridge-style';s.textContent=`
    .nb-plank{cursor:grab;transition:transform .16s}.nb-plank:active{transform:scale(.95)}
    .nb-water{background:linear-gradient(#dbeafe,#bae6fd 45%,#38bdf8 46%,#0ea5e9)}
    @keyframes nbWalk{0%{left:2%}100%{left:91%}}.nb-walk{animation:nbWalk 1.15s ease-in-out forwards}
  `;document.head.appendChild(s);}
  function newRound(){
    if(!state)return;state.locked=false;state.message='';state.pieces=[];
    state.target=state.round<4?rnd(8,13):rnd(12,20);
    state.limit=state.round>=7?rnd(2,4):null;
    const lengths=[2,3,4,5,6];state.available=lengths.map(n=>({len:n,count:state.round<5?3:2}));
    render();
  }
  function sum(){return state.pieces.reduce((a,b)=>a+b,0);}
  function render(){if(!root||!state)return;const current=sum();const pct=Math.min(100,current/state.target*100);
    root.innerHTML=`<div class="w-full max-w-[1280px] mx-auto px-2 md:px-4 pb-4 select-none">
      <div class="flex flex-wrap justify-between gap-3 mb-3"><div><div class="text-sm md:text-base font-black text-sky-600">🌉 CÂY CẦU SỐ</div><h2 class="text-xl md:text-2xl font-black text-slate-800">Ghép các đoạn cầu vừa khít để qua sông</h2></div><div class="flex gap-2 text-sm md:text-base font-black"><span class="rounded-full bg-violet-100 text-violet-700 px-3 py-1">Màn ${state.round}</span><span class="rounded-full bg-amber-100 text-amber-700 px-3 py-1">⭐ ${state.score}</span></div></div>
      <div class="grid lg:grid-cols-[minmax(0,1.9fr)_minmax(300px,.75fr)] gap-4">
        <section class="rounded-[28px] border-2 border-sky-200 bg-white p-4 md:p-5 shadow-sm">
          <div class="text-center"><span class="inline-flex rounded-full bg-rose-50 border-2 border-rose-200 px-4 py-2 text-xl md:text-2xl font-black text-rose-600">Khoảng trống cần vượt: ${state.target} ô</span>${state.limit?`<div class="mt-2 text-base font-black text-violet-700">Thử thách: dùng không quá ${state.limit} đoạn cầu</div>`:''}</div>
          <div class="nb-water relative mt-4 h-[280px] rounded-[28px] border-2 border-sky-300 overflow-hidden">
            <div class="absolute left-0 bottom-0 w-[8%] h-[58%] bg-emerald-500 rounded-tr-[60px]"></div><div class="absolute right-0 bottom-0 w-[8%] h-[58%] bg-emerald-500 rounded-tl-[60px]"></div>
            <div class="absolute left-[8%] right-[8%] top-[45%] h-[92px] rounded-2xl border-2 border-dashed border-white/80 bg-white/15 flex items-center p-1.5 gap-1" data-nb-drop="1">
              ${state.pieces.map((n,i)=>`<button data-nb-piece="${i}" title="Bỏ đoạn này" class="h-full rounded-xl bg-amber-400 border-2 border-amber-600 flex items-center justify-center text-lg md:text-xl font-black text-amber-950 shadow-sm" style="flex:${n} 1 0;min-width:42px">${n}</button>`).join('')}
              <div class="h-full rounded-xl bg-white/40" style="flex:${Math.max(0,state.target-current)} 1 0;min-width:${current>=state.target?0:20}px"></div>
            </div>
            <div id="nb-character" class="absolute left-[2%] top-[25%] text-5xl">🐰</div>
            <div class="absolute left-[8%] right-[8%] bottom-3 text-center text-white font-black text-lg drop-shadow">Đã xây ${current} / ${state.target} ô</div>
          </div>
          <div class="mt-3 rounded-2xl border-2 border-slate-200 bg-slate-50 p-3 text-center text-xl md:text-2xl font-black text-slate-800">${state.pieces.length?state.pieces.join(' + '):'Chưa có đoạn cầu'} ${state.pieces.length?'= '+current:''}</div>
          <div class="min-h-[48px] mt-2 flex items-center justify-center text-center text-base md:text-lg font-black ${state.message.startsWith('✅')?'text-emerald-700':'text-rose-600'}">${state.message}</div>
        </section>
        <aside class="rounded-[28px] border-2 border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <div class="text-center text-lg md:text-xl font-black text-amber-700">Kho đoạn cầu</div><p class="text-center text-sm md:text-base font-bold text-slate-600 mb-3">Kéo sang sông hoặc chạm để đặt</p>
          <div class="space-y-2">${state.available.map((p,idx)=>`<button draggable="true" data-nb-add="${p.len}" class="nb-plank w-full rounded-2xl border-2 border-amber-300 bg-white p-2.5 flex items-center gap-3"><span class="h-8 rounded-lg bg-amber-400 border-2 border-amber-600" style="width:${Math.min(150,44+p.len*16)}px"></span><span class="text-xl font-black text-amber-800">${p.len} ô</span></button>`).join('')}</div>
          <div class="mt-3 grid grid-cols-2 gap-2"><button data-nb-action="undo" class="rounded-2xl border-2 border-slate-200 bg-white py-3 font-black">↶ Tháo đoạn</button><button data-nb-action="reset" class="rounded-2xl border-2 border-slate-200 bg-white py-3 font-black">🧹 Xây lại</button></div>
          <button data-nb-action="check" class="mt-2 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 py-3.5 text-lg font-black text-white shadow-md">🚶 Cho Thỏ qua cầu</button>
        </aside>
      </div></div>`;bind();}
  function bind(){
    root.querySelectorAll('[data-nb-add]').forEach(b=>{b.addEventListener('click',()=>add(Number(b.dataset.nbAdd)));b.addEventListener('dragstart',e=>{dragLen=Number(b.dataset.nbAdd);try{e.dataTransfer.setData('text/plain',String(dragLen));}catch(_){}});});
    const z=root.querySelector('[data-nb-drop]');if(z){z.addEventListener('dragover',e=>e.preventDefault());z.addEventListener('drop',e=>{e.preventDefault();add(Number((e.dataTransfer&&e.dataTransfer.getData('text/plain'))||dragLen));});}
    root.querySelectorAll('[data-nb-piece]').forEach(b=>b.addEventListener('click',()=>{if(state.locked)return;state.pieces.splice(Number(b.dataset.nbPiece),1);state.message='';render();}));
    root.querySelectorAll('[data-nb-action]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.nbAction)));
  }
  function add(n){if(!state||state.locked||!Number.isFinite(n))return;state.pieces.push(n);state.message='';render();}
  function action(a){if(!state||state.locked)return;if(a==='undo'){state.pieces.pop();state.message='';render();return;}if(a==='reset'){state.pieces=[];state.message='';render();return;}if(a==='check')check();}
  function check(){const s=sum();if(s!==state.target){state.message=s<state.target?`Cầu còn thiếu ${state.target-s} ô.`:`Cầu đang dài hơn ${s-state.target} ô. Bé tháo bớt nhé!`;render();return;}if(state.limit&&state.pieces.length>state.limit){state.message=`Cầu đã vừa nhưng thử thách yêu cầu không quá ${state.limit} đoạn. Bé tìm cách gọn hơn nhé!`;render();return;}state.locked=true;state.score++;state.message=`✅ Cầu vừa khít! ${state.pieces.join(' + ')} = ${state.target}.`;render();const c=root&&root.querySelector('#nb-character');if(c)c.classList.add('nb-walk');setTimeout(()=>{if(!state)return;state.round++;if(state.round===6&&typeof window.rewardMiniGameStar_==='function')window.rewardMiniGameStar_('Bé đã xây cầu bằng nhiều cách rất tốt!');newRound();},1450);}
  window.startNumberBridgeGame=startNumberBridgeGame;window.stopNumberBridgeGame=stopNumberBridgeGame;
})();
