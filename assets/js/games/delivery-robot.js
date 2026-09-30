(function(){
  'use strict';
  let root=null,state=null,timer=null;
  const DIRS=['N','E','S','W'];
  const arrows={N:'↑',E:'→',S:'↓',W:'←'};
  const scenarios=[
    {n:5,start:[4,0,'N'],pkg:[2,0],goal:[0,3],blocks:[[3,2],[2,2],[1,2]]},
    {n:5,start:[4,4,'W'],pkg:[4,2],goal:[1,0],blocks:[[3,3],[2,3],[1,3],[2,1]]},
    {n:6,start:[5,0,'N'],pkg:[3,1],goal:[0,4],blocks:[[4,2],[3,2],[2,2],[1,2],[1,4]]},
    {n:6,start:[5,5,'W'],pkg:[2,4],goal:[0,1],blocks:[[4,3],[3,3],[2,3],[1,3],[4,1]]}
  ];
  function startDeliveryRobotGame(){root=document.getElementById('game-play-container');if(!root)return;injectStyle();state={round:1,score:0,cmds:[],running:false,message:'',scenario:null,robot:null,hasPkg:false};newRound();}
  function stopDeliveryRobotGame(){if(timer)clearTimeout(timer);timer=null;state=null;root=null;}
  function injectStyle(){if(document.getElementById('ee-delivery-robot-style'))return;const s=document.createElement('style');s.id='ee-delivery-robot-style';s.textContent=`
    .dr-cell{aspect-ratio:1/1}.dr-cmd{transition:transform .12s}.dr-cmd:active{transform:scale(.95)}
    .dr-robot{transition:transform .22s,left .22s,top .22s}.dr-active{box-shadow:0 0 0 4px rgba(99,102,241,.18)}
  `;document.head.appendChild(s);}
  function newRound(){if(!state)return;if(timer)clearTimeout(timer);timer=null;state.scenario=scenarios[(state.round-1)%scenarios.length];state.cmds=[];state.running=false;state.message='';resetRobot();render();}
  function resetRobot(){const s=state.scenario;state.robot={r:s.start[0],c:s.start[1],d:s.start[2]};state.hasPkg=false;}
  function key(r,c){return r+','+c;}
  function render(){if(!root||!state)return;const s=state.scenario;const blockSet=new Set(s.blocks.map(x=>key(x[0],x[1])));root.innerHTML=`<div class="w-full max-w-[1280px] mx-auto px-2 md:px-4 pb-4 select-none">
    <div class="flex flex-wrap justify-between gap-3 mb-3"><div><div class="text-sm md:text-base font-black text-indigo-600">🤖 ROBOT GIAO HÀNG</div><h2 class="text-xl md:text-2xl font-black text-slate-800">Lập đường đi rồi xem robot thực hiện</h2></div><div class="flex gap-2 text-sm md:text-base font-black"><span class="rounded-full bg-violet-100 text-violet-700 px-3 py-1">Màn ${state.round}</span><span class="rounded-full bg-amber-100 text-amber-700 px-3 py-1">⭐ ${state.score}</span></div></div>
    <div class="grid lg:grid-cols-[minmax(0,1.7fr)_minmax(330px,.85fr)] gap-4">
      <section class="rounded-[28px] border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-4 shadow-sm">
        <div class="mb-3 flex flex-wrap items-center justify-center gap-3 text-base md:text-lg font-black"><span class="rounded-full bg-amber-100 px-3 py-1 text-amber-800">📦 Lấy hàng</span><span>→</span><span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">🏠 Giao tới nhà</span></div>
        <div class="mx-auto grid gap-1.5 rounded-3xl border-2 border-slate-300 bg-slate-200 p-2" style="grid-template-columns:repeat(${s.n},minmax(0,1fr));max-width:${s.n===5?'570':'610'}px">
          ${Array.from({length:s.n*s.n},(_,i)=>{const r=Math.floor(i/s.n),c=i%s.n,k=key(r,c);const isBlock=blockSet.has(k),isPkg=r===s.pkg[0]&&c===s.pkg[1]&&!state.hasPkg,isGoal=r===s.goal[0]&&c===s.goal[1];const isBot=r===state.robot.r&&c===state.robot.c;return `<div class="dr-cell rounded-xl border-2 ${isBlock?'border-slate-400 bg-slate-500':'border-white bg-white'} flex items-center justify-center relative overflow-hidden">${isBlock?'<span class="text-2xl">🌳</span>':''}${isPkg?'<span class="text-3xl md:text-4xl">📦</span>':''}${isGoal?'<span class="text-3xl md:text-4xl">🏠</span>':''}${isBot?`<span class="dr-robot absolute z-10 text-3xl md:text-4xl">🤖<b class="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-indigo-600 text-white text-sm flex items-center justify-center">${arrows[state.robot.d]}</b></span>`:''}</div>`;}).join('')}
        </div>
        <div class="min-h-[48px] mt-3 flex items-center justify-center text-center text-base md:text-lg font-black ${state.message.startsWith('✅')?'text-emerald-700':'text-rose-600'}">${state.message}</div>
      </section>
      <aside class="rounded-[28px] border-2 border-violet-200 bg-violet-50/70 p-4 shadow-sm">
        <div class="text-lg md:text-xl font-black text-violet-700 text-center">Bảng lệnh</div><p class="text-sm md:text-base font-bold text-slate-600 text-center">Xếp lệnh rồi bấm Chạy</p>
        <div class="mt-3 grid grid-cols-3 gap-2"><button data-dr-add="F" class="dr-cmd rounded-2xl border-2 border-sky-200 bg-white py-3 text-xl font-black text-sky-700">↑ Tiến</button><button data-dr-add="L" class="dr-cmd rounded-2xl border-2 border-amber-200 bg-white py-3 text-xl font-black text-amber-700">↶ Trái</button><button data-dr-add="R" class="dr-cmd rounded-2xl border-2 border-rose-200 bg-white py-3 text-xl font-black text-rose-700">↷ Phải</button></div>
        <div class="mt-3 min-h-[150px] rounded-2xl border-2 border-dashed border-violet-300 bg-white p-3 flex flex-wrap content-start gap-2">${state.cmds.length?state.cmds.map((c,i)=>`<button data-dr-remove="${i}" class="rounded-xl border-2 px-3 py-2 text-lg font-black ${i===state.stepIndex?'dr-active border-indigo-500 bg-indigo-50 text-indigo-700':'border-slate-200 bg-slate-50 text-slate-700'}">${c==='F'?'↑':c==='L'?'↶':'↷'}</button>`).join(''):'<span class="m-auto text-slate-400 font-bold">Lệnh sẽ hiện ở đây</span>'}</div>
        <div class="mt-3 grid grid-cols-2 gap-2"><button data-dr-action="undo" ${state.running?'disabled':''} class="rounded-2xl border-2 border-slate-200 bg-white py-3 font-black disabled:opacity-40">↶ Xóa lệnh</button><button data-dr-action="clear" ${state.running?'disabled':''} class="rounded-2xl border-2 border-slate-200 bg-white py-3 font-black disabled:opacity-40">🧹 Xóa hết</button></div>
        <button data-dr-action="run" ${state.running?'disabled':''} class="mt-2 w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 py-3.5 text-lg font-black text-white shadow-md disabled:opacity-50">▶ Chạy robot</button>
        <button data-dr-action="reset" class="mt-2 w-full rounded-2xl border-2 border-indigo-200 bg-white py-3 text-base font-black text-indigo-700">⟲ Đưa robot về đầu</button>
      </aside>
    </div></div>`;bind();}
  function bind(){root.querySelectorAll('[data-dr-add]').forEach(b=>b.addEventListener('click',()=>{if(!state.running&&state.cmds.length<24){state.cmds.push(b.dataset.drAdd);state.message='';render();}}));root.querySelectorAll('[data-dr-remove]').forEach(b=>b.addEventListener('click',()=>{if(!state.running){state.cmds.splice(Number(b.dataset.drRemove),1);render();}}));root.querySelectorAll('[data-dr-action]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.drAction)));}
  function action(a){if(!state)return;if(a==='undo'&&!state.running){state.cmds.pop();render();return;}if(a==='clear'&&!state.running){state.cmds=[];render();return;}if(a==='reset'){if(timer)clearTimeout(timer);timer=null;state.running=false;state.stepIndex=-1;resetRobot();state.message='';render();return;}if(a==='run'&&!state.running)run();}
  function blocked(r,c){const s=state.scenario;return r<0||c<0||r>=s.n||c>=s.n||s.blocks.some(x=>x[0]===r&&x[1]===c);}
  function run(){if(!state.cmds.length){state.message='Bé hãy xếp ít nhất một lệnh trước nhé!';render();return;}resetRobot();state.running=true;state.stepIndex=-1;state.message='Robot bắt đầu chạy...';render();step(0);}
  function step(i){if(!state)return;if(i>=state.cmds.length){finishRun();return;}state.stepIndex=i;const cmd=state.cmds[i];if(cmd==='L'){state.robot.d=DIRS[(DIRS.indexOf(state.robot.d)+3)%4];}else if(cmd==='R'){state.robot.d=DIRS[(DIRS.indexOf(state.robot.d)+1)%4];}else{let dr=0,dc=0;if(state.robot.d==='N')dr=-1;if(state.robot.d==='S')dr=1;if(state.robot.d==='E')dc=1;if(state.robot.d==='W')dc=-1;const nr=state.robot.r+dr,nc=state.robot.c+dc;if(blocked(nr,nc)){state.running=false;state.message='Robot gặp vật cản. Bé sửa đoạn lệnh này rồi thử lại nhé!';render();return;}state.robot.r=nr;state.robot.c=nc;}
    const s=state.scenario;if(state.robot.r===s.pkg[0]&&state.robot.c===s.pkg[1])state.hasPkg=true;render();timer=setTimeout(()=>step(i+1),380);
  }
  function finishRun(){state.running=false;state.stepIndex=-1;const s=state.scenario;if(state.hasPkg&&state.robot.r===s.goal[0]&&state.robot.c===s.goal[1]){state.score++;state.message='✅ Robot đã lấy hàng và giao đúng nơi!';render();timer=setTimeout(()=>{if(!state)return;state.round++;if(state.round===5&&typeof window.rewardMiniGameStar_==='function')window.rewardMiniGameStar_('Bé điều khiển robot rất chính xác!');newRound();},1200);}else{state.message=state.hasPkg?'Robot đã lấy hàng nhưng chưa tới nhà. Bé nối thêm đường đi nhé!':'Robot chưa lấy kiện hàng. Bé kiểm tra lại đường đi!';render();}}
  window.startDeliveryRobotGame=startDeliveryRobotGame;window.stopDeliveryRobotGame=stopDeliveryRobotGame;
})();
