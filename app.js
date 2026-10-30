(() => {
  'use strict';
  const copy = {
    en: {
      skip:'Skip to simulation replay',navReplay:'Explore',navMethod:'Method',navEvidence:'Evidence',eyebrow:'AUTONOMOUS DRIVING / PLANNING & CONTROL',heroTitle:'From a route to<br><em>controlled motion.</em>',heroIntro:'A look inside an autonomous-driving stack, from scene understanding and route search to local maneuvers and trajectory tracking.',heroCta:'Explore the simulation',tag1:'Classical planning',tag2:'Closed-loop simulation',replayTitle:'Planning in motion',replayAside:'CHOOSE A SCENE. INSPECT THE MOTION.',simulationLabel:'SIMULATION REPLAY',contextLabel:'Simulation trajectory · schematic context',empty:'Simulation records are being prepared.',legendEgo:'Ego trajectory',legendActor:'Recorded objects',legendContext:'Schematic corridor',elapsed:'Elapsed',speed:'Ego speed',play:'Play',pause:'Pause',playbackSpeed:'Speed',replayCaption:'Replay uses derived, locally referenced simulation traces. Surrounding objects appear only when recorded; the corridor is a visual guide, not a reconstructed road map.',methodTitle:'One task. A connected stack.',methodAside:'THE ENGINEERING APPROACH',methodIntro:'The system connects map-based route search with obstacle-aware maneuvering and feedback control. Each layer turns the driving task into a more immediate decision.',methodStamp:'SCENE → ACTION',evidenceTitle:'Inspect the evidence.',evidenceAside:'SELECTED LOCAL SIMULATIONS',evidenceHeading:'Examples you can<br>play back.',evidenceIntro:'Five selected local simulation results make the behavior inspectable. The table reports trace duration and recorded end status, without extrapolating to overall competition performance.',scopeLabel:'SCOPE',scopeText:'Simulation evidence only. These examples do not establish real-road validation.',tableScene:'Scene',tableDuration:'Duration',tableOutcome:'Recorded outcome',tableNote:'Duration follows each selected trace. Completion indicates the simulator’s recorded terminal status; it is not a safety or performance score.',closingEyebrow:'A PUBLIC WINDOW INTO THE WORK',closingTitle:'Explore the project.<br>Start a conversation.',publicRepo:'Public showcase repository',githubProfile:'GitHub profile',footerProject:'Planning & control showcase',footerNote:'Curated simulation artifacts. Private implementation and original datasets are kept separately.',backTop:'Back to top ↑',complete:'Completed · end 4',incomplete:'Not completed',scene:'SCENE',localFrame:'LOCAL FRAME / METERS',start:'START',goal:'END',replayAria:'Interactive replay of recorded simulation trajectories',timelineAria:'Simulation timeline',speedAria:'Playback speed',langAria:'Switch to Chinese',objects:'recorded objects',
      pipeline:[
        ['Scene','Read the driving task','Map connectivity, task endpoints and scene geometry establish the route-search and maneuvering problem.','HD MAP / SCENE GEOMETRY'],
        ['Prediction','Anticipate nearby motion','Constant-velocity and constant-acceleration models provide short-horizon estimates of surrounding traffic.','CV / CA MOTION MODELS'],
        ['Planning','Find a feasible way through','A* grid routing, map-based route search and obstacle-aware loading maneuvers turn the task into a reference path.','A* / OBSTACLE-AWARE ROUTING'],
        ['Tracking','Turn the path into motion','Pure-pursuit lateral tracking and longitudinal speed profiles guide motion, with conservative TTC-based deceleration.','PURE PURSUIT / SPEED CONTROL'],
        ['Evaluation','Read the recorded outcome','Trajectory, speed and simulator terminal status support inspection of each selected local simulation.','TRACE / SPEED / END STATUS']
      ]
    },
    zh: {
      skip:'跳转至仿真回放',navReplay:'交互回放',navMethod:'方法',navEvidence:'结果',eyebrow:'自动驾驶 / 规划与控制',heroTitle:'从路线规划，<br><em>到闭环控制。</em>',heroIntro:'通过可交互的仿真记录，了解自动驾驶系统如何连接场景理解、路径搜索、局部机动与轨迹跟踪。',heroCta:'探索仿真回放',tag1:'经典规划方法',tag2:'闭环仿真',replayTitle:'让规划动起来',replayAside:'选择场景，观察运动过程。',simulationLabel:'仿真轨迹回放',contextLabel:'仿真轨迹 · 环境示意',empty:'仿真记录正在准备中。',legendEgo:'自车轨迹',legendActor:'记录中的周围对象',legendContext:'示意通行走廊',elapsed:'已播放',speed:'自车速度',play:'播放',pause:'暂停',playbackSpeed:'倍速',replayCaption:'回放采用局部坐标下的衍生仿真轨迹。周围对象仅在有记录时显示；背景走廊用于辅助阅读，并非道路地图复原。',methodTitle:'一个任务，一套相互连接的系统。',methodAside:'规划与控制方法',methodIntro:'系统将基于地图的路径搜索、考虑障碍物的局部机动与反馈控制连接起来，逐层把驾驶任务转化为具体动作。',methodStamp:'场景 → 动作',evidenceTitle:'查看具体结果。',evidenceAside:'所选本地仿真记录',evidenceHeading:'可以回放的<br>运行实例。',evidenceIntro:'五个精选的本地仿真结果，让系统行为可以直接查看。表格列出轨迹时长和记录中的终止状态，不据此推断整体比赛表现。',scopeLabel:'范围',scopeText:'本页仅展示仿真证据。这些实例不构成真实道路验证。',tableScene:'场景',tableDuration:'时长',tableOutcome:'记录结果',tableNote:'时长对应所选轨迹。完成状态来自仿真器终止记录，不是安全性或性能评分。',closingEyebrow:'面向公开交流的项目窗口',closingTitle:'了解项目，<br>交流研究。',publicRepo:'公开展示仓库',githubProfile:'GitHub 主页',footerProject:'规划与控制展示',footerNote:'精选仿真衍生成果。私有实现与原始数据单独保存。',backTop:'返回顶部 ↑',complete:'完成 · 状态 4',incomplete:'未完成',scene:'场景',localFrame:'局部坐标 / 米',start:'起点',goal:'终点',replayAria:'记录中的仿真轨迹交互回放',timelineAria:'仿真回放时间轴',speedAria:'播放倍速',langAria:'Switch to English',objects:'个记录对象',
      pipeline:[
        ['场景','理解驾驶任务','地图连通关系、任务起终点与场景几何，共同定义路径搜索和局部机动问题。','高精地图 / 场景几何'],
        ['预测','估计周围运动','采用恒速与恒加速度模型，对周围交通参与者进行短时运动预测。','CV / CA 运动模型'],
        ['规划','寻找可行路径','利用 A* 栅格搜索、地图路径搜索，以及考虑障碍物的装载区机动，生成参考路径。','A* / 障碍物感知路径'],
        ['跟踪','将路径转化为运动','纯跟踪横向控制与纵向速度曲线共同引导车辆运动，并采用保守的 TTC 减速策略。','纯跟踪 / 纵向速度控制'],
        ['评估','查看运行结果','通过轨迹、车速与仿真器终止状态，检查每个所选本地仿真的具体行为。','轨迹 / 车速 / 终止状态']
      ]
    }
  };
  const data = window.ONSITE_DATA || {scenes:[]};
  const scenes = (data.scenes || []).filter(s => Array.isArray(s.points) && s.points.length > 1);
  const $ = id => document.getElementById(id);
  const canvas = $('scene-canvas');
  const ctx = canvas.getContext('2d');
  let savedLang;
  try { savedLang = localStorage.getItem('onsite-language'); } catch (_) {}
  const queryLang = new URLSearchParams(location.search).get('lang');
  let lang = queryLang === 'zh' || queryLang === 'en' ? queryLang : savedLang === 'zh' ? 'zh' : 'en';
  let sceneIndex = Math.max(0, scenes.findIndex(s => s.type === 'intersection'));
  let elapsed = 0, playing = false, lastFrame = 0, width = 0, height = 0, transform = null;
  const localized = value => typeof value === 'object' && value ? (value[lang] || value.en || '') : (value || '');
  const scene = () => scenes[sceneIndex];
  const duration = () => Number(scene()?.duration_s) || Math.max(0, (scene()?.points.at(-1)?.[0] || 0) - (scene()?.points[0]?.[0] || 0));
  const escapeHTML = s => String(s).replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const clock = value => { const v=Math.max(0,Math.floor(value)); return `${String(Math.floor(v/60)).padStart(2,'0')}:${String(v%60).padStart(2,'0')}`; };
  const outcome = s => s.completed ? (s.end_status === 4 ? copy[lang].complete : (lang==='zh'?'完成 · 状态 ':'Completed · end ')+s.end_status) : copy[lang].incomplete + (s.end_status !== undefined ? ` · ${s.end_status}` : '');
  function renderLanguage() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? 'OnSite — 自动驾驶规划与控制' : 'OnSite — Planning in motion';
    document.querySelectorAll('[data-i18n]').forEach(el => { if(copy[lang][el.dataset.i18n]!==undefined)el.innerHTML=copy[lang][el.dataset.i18n]; });
    $('language').innerHTML = lang === 'en' ? '中文 <span>↗</span>' : 'EN <span>↗</span>';
    $('language').setAttribute('aria-label',copy[lang].langAria);
    canvas.setAttribute('aria-label',copy[lang].replayAria);
    $('timeline').setAttribute('aria-label',copy[lang].timelineAria);
    $('playback-speed').setAttribute('aria-label',copy[lang].speedAria);
    $('scene-tabs').setAttribute('aria-label',lang==='zh'?'仿真场景':'Simulation scenes');
    $('scene-tabs').innerHTML = scenes.map((s,i)=>`<button class="scene-tab" type="button" data-scene="${i}" aria-pressed="${i===sceneIndex}"><small>${String(i+1).padStart(2,'0')}</small>${escapeHTML(localized(s.title))}</button>`).join('');
    $('pipeline').innerHTML = copy[lang].pipeline.map((p,i)=>`<article class="pipeline-step"><span class="pipeline-number">${String(i+1).padStart(2,'0')} / ${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p><span class="pipeline-tag">${p[3]}</span></article>`).join('');
    $('evidence-body').innerHTML = scenes.map((s,i)=>`<tr><td><span class="row-number">${String(i+1).padStart(2,'0')}</span>${escapeHTML(localized(s.title))}</td><td><span class="duration">${Number(s.duration_s).toFixed(1)} s</span></td><td><span class="outcome ${s.completed?'':'incomplete'}">${escapeHTML(outcome(s))}</span></td></tr>`).join('');
    renderSceneDetail(); updateControls(); draw();
  }
  function renderSceneDetail() {
    const s=scene(); if(!s)return;
    $('scene-number').textContent=`${copy[lang].scene} ${String(sceneIndex+1).padStart(2,'0')} / ${String(scenes.length).padStart(2,'0')}`;
    $('scene-title').textContent=localized(s.title);
    $('scene-description').textContent=localized(s.description);
    $('scene-result').textContent=outcome(s);
    $('scene-note').textContent=localized(s.note);
    $('timeline').max=String(duration());
    $('canvas-empty').hidden=true;
  }
  function updateControls() {
    $('play-icon').textContent=playing?'Ⅱ':'▶';
    $('play-label').textContent=playing?copy[lang].pause:copy[lang].play;
    $('play').setAttribute('aria-label',playing?(lang==='zh'?'暂停仿真':'Pause simulation'):(lang==='zh'?'播放仿真':'Play simulation'));
    $('play').setAttribute('aria-pressed',String(playing));
    $('timeline').value=String(elapsed);
    $('timeline').setAttribute('aria-valuetext',`${elapsed.toFixed(1)} / ${duration().toFixed(1)} ${lang==='zh'?'秒':'seconds'}`);
    $('time-display').textContent=`${clock(elapsed)} / ${clock(duration())}`;
    $('elapsed').innerHTML=`${elapsed.toFixed(1)} <small>s</small>`;
    const p=scene()? sample(scene().points,elapsed + scene().points[0][0],false) : null;
    $('speed').innerHTML=`${(p?.[4] || 0).toFixed(1)} <small>m/s</small>`;
  }
  function sample(points,t,observedOnly) {
    if(!points?.length)return null;
    if(observedOnly && (t < points[0][0] || t > points.at(-1)[0]))return null;
    let lo=0,hi=points.length-1;
    while(lo<hi){const mid=(lo+hi)>>1;if(points[mid][0]<t)lo=mid+1;else hi=mid;}
    const b=points[lo],a=points[Math.max(0,lo-1)];
    const nearest=Math.abs(a[0]-t)<Math.abs(b[0]-t)?a:b;
    if(observedOnly && Math.abs(nearest[0]-t)>.600001)return null;
    if(a===b || t<=a[0] || t>=b[0] || (observedOnly && b[0]-a[0]>1.200001))return nearest;
    const k=(t-a[0])/(b[0]-a[0]);
    const da=Math.atan2(Math.sin(b[3]-a[3]),Math.cos(b[3]-a[3]));
    return [t,a[1]+(b[1]-a[1])*k,a[2]+(b[2]-a[2])*k,a[3]+da*k,a[4]+(b[4]-a[4])*k];
  }
  function fit() {
    const s=scene(); if(!s||!width||!height)return;
    const pts=[...s.points,...(s.actors||[]).flatMap(a=>a.points||[])];
    const xs=pts.map(p=>p[1]),ys=pts.map(p=>p[2]);
    const extra=Math.max(7,...(s.dimensions||[9,4]))*.8;
    const minX=Math.min(...xs)-extra,maxX=Math.max(...xs)+extra,minY=Math.min(...ys)-extra,maxY=Math.max(...ys)+extra;
    const padX=width<450?35:55,padTop=50,padBottom=55;
    const scale=Math.min((width-padX*2)/(maxX-minX),(height-padTop-padBottom)/(maxY-minY));
    transform={scale,x:width/2-(minX+maxX)/2*scale,y:padTop+(height-padTop-padBottom)/2+(minY+maxY)/2*scale};
  }
  const project = p => [transform.x+p[1]*transform.scale,transform.y-p[2]*transform.scale];
  function route(points,color,lineWidth) {
    if(!points.length)return;ctx.beginPath();points.forEach((p,i)=>{const[x,y]=project(p);i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke();
  }
  function drawVehicle(p,dimensions,kind) {
    const[x,y]=project(p), ego=kind==='ego', stationary=kind==='static';
    const len=(dimensions?.[0]||4.5)*transform.scale,w=(dimensions?.[1]||2)*transform.scale;
    ctx.save();ctx.translate(x,y);ctx.rotate(-p[3]);
    if(ego){ctx.shadowColor='#e46b3e55';ctx.shadowBlur=13;}
    ctx.fillStyle=ego?'#ececdf':stationary?'#aa9981':'#7c9991';ctx.strokeStyle=ego?'#fff9e9':stationary?'#d9c8ad':'#bbd0c5';ctx.lineWidth=1;
    ctx.fillRect(-len/2,-w/2,len,w);ctx.strokeRect(-len/2,-w/2,len,w);ctx.shadowBlur=0;
    ctx.fillStyle=ego?'#df683b':stationary?'#6c6051':'#4e6b64';
    if(!stationary){ctx.fillRect(len*.15,-w*.36,Math.max(1,len*.12),w*.72);ctx.strokeStyle=ego?'#a04d2d':'#bfd4c5';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(len*.5+2,0);ctx.lineTo(len*.5+8,0);ctx.stroke();}
    else{ctx.strokeStyle='#d9c8ad88';ctx.beginPath();ctx.moveTo(-len/2,-w/2);ctx.lineTo(len/2,w/2);ctx.moveTo(-len/2,w/2);ctx.lineTo(len/2,-w/2);ctx.stroke();}
    ctx.restore();
  }
  function endpoint(p,label,start) {
    const[x,y]=project(p);ctx.save();ctx.translate(x,y);ctx.lineWidth=1;ctx.strokeStyle=start?'#94b39b':'#e9dfc4';ctx.fillStyle='#1c2827';
    if(start){ctx.beginPath();ctx.arc(0,0,4,0,Math.PI*2);ctx.fill();ctx.stroke();}
    else{ctx.beginPath();ctx.moveTo(0,-5);ctx.lineTo(5,0);ctx.lineTo(0,5);ctx.lineTo(-5,0);ctx.closePath();ctx.fill();ctx.stroke();}
    ctx.fillStyle=start?'#9eb4a4':'#e8ddc1';ctx.font='8px ui-monospace,monospace';ctx.textAlign='center';ctx.fillText(label,0,start?19:-13);ctx.restore();
  }
  function draw() {
    if(!ctx||!width||!height)return;ctx.clearRect(0,0,width,height);
    ctx.fillStyle='#6585751b';for(let x=20;x<width;x+=28)for(let y=20;y<height;y+=28)ctx.fillRect(x,y,1,1);
    ctx.fillStyle='#819c8c';ctx.font='8px ui-monospace,monospace';ctx.textAlign='left';ctx.fillText(copy[lang].localFrame,22,24);
    ctx.textAlign='right';ctx.fillStyle='#9fb5a4';ctx.fillText(`t + ${elapsed.toFixed(1)} s`,width-22,24);
    if(!scene()||!transform)return;
    const s=scene(),p=sample(s.points,elapsed+s.points[0][0],false);
    // This ribbon is explicitly schematic; its center follows the recorded ego trace.
    route(s.points,'#53675a22',Math.max(12,(s.dimensions?.[1]||4)*transform.scale+18));
    route(s.points,'#8aa18b66',1.2);
    const past=s.points.filter(q=>q[0]<=elapsed+s.points[0][0]);if(p)past.push(p);
    route(past,'#e47847',2.5);
    for(const actor of s.actors||[]){const q=sample(actor.points,elapsed+s.points[0][0],true);if(q)drawVehicle(q,actor.dimensions,actor.kind);}
    endpoint(s.points[0],copy[lang].start,true);endpoint(s.points.at(-1),copy[lang].goal,false);
    if(p)drawVehicle(p,s.dimensions,'ego');
    const target=55/transform.scale,power=Math.pow(10,Math.floor(Math.log10(target))),base=target/power;
    const meters=(base>=5?5:base>=2?2:1)*power,px=meters*transform.scale;
    ctx.strokeStyle='#819c8c';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(width-23-px,height-39);ctx.lineTo(width-23,height-39);ctx.moveTo(width-23-px,height-42);ctx.lineTo(width-23-px,height-36);ctx.moveTo(width-23,height-42);ctx.lineTo(width-23,height-36);ctx.stroke();ctx.fillStyle='#93a995';ctx.font='8px ui-monospace,monospace';ctx.textAlign='center';ctx.fillText(`${meters} m`,width-23-px/2,height-47);
  }
  function resize() {
    const bounds=canvas.getBoundingClientRect(),ratio=Math.min(window.devicePixelRatio||1,2);width=bounds.width;height=bounds.height;
    canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);ctx.setTransform(ratio,0,0,ratio,0,0);fit();draw();
  }
  $('language').addEventListener('click',()=>{lang=lang==='en'?'zh':'en';try{localStorage.setItem('onsite-language',lang);}catch(_){}renderLanguage();});
  $('scene-tabs').addEventListener('click',event=>{const button=event.target.closest('[data-scene]');if(!button)return;sceneIndex=Number(button.dataset.scene);elapsed=0;playing=false;fit();renderLanguage();});
  $('play').addEventListener('click',()=>{if(!scenes.length)return;if(elapsed>=duration())elapsed=0;playing=!playing;lastFrame=0;updateControls();draw();});
  $('timeline').addEventListener('input',()=>{elapsed=Number($('timeline').value);lastFrame=0;updateControls();draw();});
  function tick(now) {if(playing&&scene()){if(lastFrame){elapsed=Math.min(duration(),elapsed+(now-lastFrame)/1000*Number($('playback-speed').value));if(elapsed>=duration())playing=false;}updateControls();draw();}lastFrame=now;requestAnimationFrame(tick);}
  renderLanguage();resize();
  if(typeof ResizeObserver!=='undefined')new ResizeObserver(resize).observe(canvas.parentElement);else window.addEventListener('resize',resize);
  if(!scenes.length){$('play').disabled=true;$('timeline').disabled=true;$('playback-speed').disabled=true;}
  requestAnimationFrame(tick);
})();
