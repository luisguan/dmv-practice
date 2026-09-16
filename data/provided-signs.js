/* Sign-recognition questions from the user-supplied bank.

   The source showed a sign image and asked what it meant, so the text alone
   was unusable. The sign is now drawn on the QUESTION side from window.SIGNS
   (see data/signs.js) instead of appearing only alongside the answer.

   The 26 image questions in the source collapse to 19 here: three asked about
   the same railroad advance-warning sign, two about the same YIELD sign, two
   about the same reverse-curve sign, two about the same steep-grade sign, and
   three about the same side-road/intersection sign.

   Signs the handbook charts individually are cited to their chart page; the
   rest cite p.38, which is where it states that a diamond-shaped sign warns of
   specific road conditions and hazards ahead. */

P({ id:'p-sign-rr', topic:'signs', page:38, sign:'railroadAdvance',
  sec:['標誌','标志','Signs'], answer:0,
  hant:['這個標誌代表什麼？','前方有鐵路平交道，應看、聽、減速並準備停車。','您必須在前方的鐵路平交道完全停車。','必須等訊號指示才可穿越鐵道。'],
  hans:['这个标志代表什么？','前方有铁路平交道，应看、听、减速并准备停车。','您必须在前方的铁路平交道完全停车。','必须等信号指示才可穿越铁道。'],
  en:['What does this sign mean?','A railroad crossing is ahead: look, listen, slow down, and prepare to stop.','You must always stop at the railroad crossing ahead.','You must wait for a signal before crossing the tracks.'],
  why:['黃黑相間的圓形標誌表示您正接近鐵路平交道。手冊要求看、聽、減速並準備停車，讓火車先通過——但並非每次都必須停車。',
       '黄黑相间的圆形标志表示您正接近铁路平交道。手册要求看、听、减速并准备停车，让火车先通过——但并非每次都必须停车。',
       'A yellow and black circular sign means you are approaching a railroad crossing. Look, listen, slow down, and prepare to stop -- but you are not required to stop every time.'] });

P({ id:'p-sign-crossbuck', topic:'signs', page:38, sign:'crossbuck',
  sec:['標誌','标志','Signs'], answer:1,
  hant:['在鐵路平交道看到這個 X 形標誌，應如何處理？','無論如何都必須完全停車。','看、聽，必要時準備在平交道停車。','加速盡快通過軌道。'],
  hans:['在铁路平交道看到这个 X 形标志，应如何处理？','无论如何都必须完全停车。','看、听，必要时准备在平交道停车。','加速尽快通过轨道。'],
  en:['You see this X-shaped sign at a railroad crossing. You should:','Always come to a complete stop.','Look, listen, and be prepared to stop at the crossing if necessary.','Speed up to clear the tracks quickly.'],
  why:['X 形（交叉）標誌標示鐵路平交道本身。手冊要求看、聽、減速並準備停車；只有在看到火車、聽到喇叭或鈴聲，或設備／人員示意時才必須停車。',
       'X 形（交叉）标志标示铁路平交道本身。手册要求看、听、减速并准备停车；只有在看到火车、听到喇叭或铃声，或设备／人员示意时才必须停车。',
       'An X-shaped sign marks the crossing itself. Look, listen, slow down, and prepare to stop -- you must stop if you see a train, hear a horn or bell, or the devices or a person warn you.'] });

P({ id:'p-sign-yield', topic:'signs', page:35, sign:'yieldSign',
  sec:['紅色 YIELD 讓行標誌','红色 YIELD 让行标志','Red YIELD Sign'], answer:2,
  hant:['這個標誌代表什麼？','右方的車輛先行。','您擁有先行權。','減速並準備停車，讓其他車輛、使用自行車人士或行人先通過。'],
  hans:['这个标志代表什么？','右方的车辆先行。','您拥有先行权。','减速并准备停车，让其他车辆、骑自行车的人或行人先通过。'],
  en:['What does this sign mean?','Traffic on the right goes first.','You have the right-of-way.','Slow down and be ready to stop to let other vehicles, bicyclists, or pedestrians pass.'],
  why:['紅色 YIELD 讓行標誌的意思是：在繼續行駛之前，減速並準備停車，讓任何車輛、使用自行車人士或行人通過。',
       '红色 YIELD 让行标志的意思是：在继续行驶之前，减速并准备停车，让任何车辆、骑自行车的人或行人通过。',
       'A red YIELD sign means slow down and be ready to stop to let any vehicle, bicyclist, or pedestrian pass before you proceed.'] });

P({ id:'p-sign-ped', topic:'signs', page:38, sign:'pedCrossing',
  sec:['警告標誌','警告标志','Warning Signs'], answer:1,
  hant:['這個標誌代表什麼？','行人沿前方道路邊行走。','前方有行人穿越道。','此處禁止行人穿越。'],
  hans:['这个标志代表什么？','行人沿前方道路边行走。','前方有人行横道。','此处禁止行人穿越。'],
  en:['What does this sign mean?','Pedestrians are walking along the road ahead.','A pedestrian crossing is ahead.','Pedestrians may not cross here.'],
  why:['這是警告標誌，提示前方有行人穿越道。行人在有標記或無標記的穿越道上都享有先行權，應減速並準備停車。',
       '这是警告标志，提示前方有人行横道。行人在有标记或无标记的人行横道上都享有先行权，应减速并准备停车。',
       'This warning sign flags a pedestrian crossing ahead. Pedestrians have the right-of-way in marked and unmarked crosswalks, so slow down and be ready to stop.'] });

P({ id:'p-sign-sideroad', topic:'signs', page:38, sign:'sideRoad',
  sec:['警告標誌','警告标志','Warning Signs'], answer:0,
  hant:['這個標誌代表什麼？','前方右方有支路匯入，屬於一種交叉路口。','前方道路封閉。','前方是單行道。'],
  hans:['这个标志代表什么？','前方右方有支路汇入，属于一种路口。','前方道路封闭。','前方是单行道。'],
  en:['What does this sign mean?','A side road joins from the right -- one type of intersection.','The road ahead is closed.','The road ahead is one-way.'],
  why:['四邊菱形的警告標誌提示前方的特定路況。此標誌表示有支路匯入，形成交叉路口；進入前應向左右和前方查看車輛、自行車和行人。',
       '四边菱形的警告标志提示前方的特定路况。此标志表示有支路汇入，形成路口；进入前应向左右和前方查看车辆、自行车和行人。',
       'A diamond-shaped sign warns of a specific condition ahead. This one marks a side road forming an intersection; look left, right, and ahead for vehicles, bicyclists, and pedestrians before entering.'] });

P({ id:'p-sign-sharpturn', topic:'signs', page:38, sign:'sharpTurnRight',
  sec:['警告標誌','警告标志','Warning Signs'], answer:2,
  hant:['這個黑黃色標誌代表什麼？','前方右方有支路。','前方因施工而需改道。','前方道路以極大的角度改變方向。'],
  hans:['这个黑黄色标志代表什么？','前方右方有支路。','前方因施工而需改道。','前方道路以极大的角度改变方向。'],
  en:['What does this black and yellow sign mean?','There is a side road to the right.','There is a construction detour to the right.','The road ahead changes direction at an extreme angle.'],
  why:['直角箭頭的菱形警告標誌表示前方道路急轉。手冊要求接近彎道時減速，並在通過時保持減速。',
       '直角箭头的菱形警告标志表示前方道路急转。手册要求接近弯道时减速，并在通过时保持减速。',
       'A diamond warning sign with a right-angle arrow means the road turns sharply. The handbook says to reduce speed approaching a sharp turn and while going through it.'] });

P({ id:'p-sign-signal', topic:'signs', page:38, sign:'signalAhead',
  sec:['警告標誌','警告标志','Warning Signs'], answer:0,
  hant:['這個黃色標誌代表什麼？','前方有交通訊號燈。','前方有鐵路平交道。','前方有行人穿越道。'],
  hans:['这个黄色标志代表什么？','前方有交通信号灯。','前方有铁路平交道。','前方有人行横道。'],
  en:['What does this yellow sign mean?','There is a traffic signal ahead.','There is a railroad crossing ahead.','There is a pedestrian crossing ahead.'],
  why:['這個菱形警告標誌提示前方設有交通訊號燈，讓您有時間減速，以便在必要時安全停車。',
       '这个菱形警告标志提示前方设有交通信号灯，让您有时间减速，以便在必要时安全停车。',
       'This diamond warning sign tells you a traffic signal is ahead, giving you time to slow down so you can stop safely if the light changes.'] });

P({ id:'p-sign-steepgrade', topic:'signs', page:38, sign:'steepGrade',
  sec:['警告標誌','警告标志','Warning Signs'], answer:1,
  hant:['這個道路標誌代表什麼？','前方有橋樑。','前方有陡坡。','前方路面不平。'],
  hans:['这个道路标志代表什么？','前方有桥梁。','前方有陡坡。','前方路面不平。'],
  en:['What does this road sign mean?','There is a bridge ahead.','There is a steep grade ahead.','The road ahead is rough.'],
  why:['這個菱形警告標誌提示前方有陡坡。下陡坡前應先換至低速檔；大型車輛在長坡或陡坡上也可能失速。',
       '这个菱形警告标志提示前方有陡坡。下陡坡前应先换至低速档；大型车辆在长坡或陡坡上也可能失速。',
       'This diamond warning sign marks a steep grade ahead. Shift to a lower gear before a steep downgrade; large vehicles also lose speed on long or steep hills.'] });

P({ id:'p-sign-merge', topic:'signs', page:38, sign:'merge',
  sec:['警告標誌','警告标志','Warning Signs'], answer:2,
  hant:['這個道路標誌代表什麼？','前方行車線終止。','前方是雙向道路。','前方有車流匯入。'],
  hans:['这个道路标志代表什么？','前方车道终止。','前方是双向道路。','前方有车流汇入。'],
  en:['What does this road sign mean?','The lane ahead ends.','The road ahead carries two-way traffic.','Traffic is merging ahead.'],
  why:['這個菱形警告標誌表示前方有車流匯入。手冊提醒為進入車流的車輛預留空間，即使您擁有先行權。',
       '这个菱形警告标志表示前方有车流汇入。手册提醒为进入车流的车辆预留空间，即使您拥有先行权。',
       'This diamond warning sign means traffic is merging ahead. Make room for vehicles entering traffic even when you have the right-of-way.'] });

P({ id:'p-sign-reversecurve', topic:'signs', page:38, sign:'reverseCurve',
  sec:['警告標誌','警告标志','Warning Signs'], answer:0,
  hant:['這個標誌表示前方道路：','先向右彎，然後向左彎。','向右急轉後結束。','分成兩條獨立道路。'],
  hans:['这个标志表示前方道路：','先向右弯，然后向左弯。','向右急转后结束。','分成两条独立道路。'],
  en:['This sign indicates that the road ahead:','Curves right, then left.','Turns sharply right and ends.','Splits into two separate roads.'],
  why:['這個菱形警告標誌表示前方是反向彎道：先向一方彎，再向另一方彎。接近和通過彎道時都應減速。',
       '这个菱形警告标志表示前方是反向弯道：先向一方弯，再向另一方弯。接近和通过弯道时都应减速。',
       'This diamond warning sign marks a reverse curve -- the road bends one way and then the other. Slow down approaching and going through curves.'] });

P({ id:'p-sign-winding', topic:'signs', page:38, sign:'windingRoad',
  sec:['警告標誌','警告标志','Warning Signs'], answer:1,
  hant:['這個標誌代表什麼？','前方道路只有一個彎。','前方是連續彎路。','前方道路變窄。'],
  hans:['这个标志代表什么？','前方道路只有一个弯。','前方是连续弯路。','前方道路变窄。'],
  en:['What does this sign mean?','There is a single curve ahead.','There is a winding road ahead.','The road ahead narrows.'],
  why:['這個菱形警告標誌表示前方有一連串彎道。手冊要求在接近和通過彎道時減速，並避免急轉。',
       '这个菱形警告标志表示前方有一连串弯道。手册要求在接近和通过弯道时减速，并避免急转。',
       'This diamond warning sign means a series of curves is ahead. Reduce speed approaching and going through them, and avoid sharp turns.'] });

P({ id:'p-sign-slippery', topic:'signs', page:38, sign:'slipperyWhenWet',
  sec:['警告標誌','警告标志','Warning Signs'], answer:2,
  hant:['這個黃色標誌代表什麼？','前方道路正在施工。','前方有碎石路面。','前方道路潮濕時可能濕滑。'],
  hans:['这个黄色标志代表什么？','前方道路正在施工。','前方有碎石路面。','前方道路潮湿时可能湿滑。'],
  en:['What does this yellow sign mean?','There is roadwork ahead.','There is gravel ahead.','The road ahead may be slippery when wet.'],
  why:['有些路面潮濕時比其他路面更滑，這類地點通常會張貼警告標誌。濕滑路面應把車速降低 5 至 10 哩。',
       '有些路面潮湿时比其他路面更滑，这类地点通常会张贴警告标志。湿滑路面应把车速降低 5 至 10 英里。',
       'Some road surfaces are more slippery than others when wet, and those places usually have a warning sign posted. On a wet road, reduce your speed by 5 to 10 mph.'] });

P({ id:'p-sign-roadwork', topic:'signs', page:49, sign:'roadwork',
  sec:['修路工人和施工區','修路工人和施工区','Road Workers and Work Zones'], answer:0,
  hant:['這個橙色標誌代表什麼？','前方有道路施工或維修工程。','前方有學校區域。','前方道路封閉。'],
  hans:['这个橙色标志代表什么？','前方有道路施工或维修工程。','前方有学校区域。','前方道路封闭。'],
  en:['What does this orange sign mean?','Roadwork or maintenance is present ahead.','A school zone is ahead.','The road ahead is closed.'],
  why:['橙色標誌屬施工區標誌。通過工作區時應減速、加大車距、留意突然減速或停車的車輛，並注意工人和設備。工人在場時罰款加倍。',
       '橙色标志属施工区标志。通过工作区时应减速、加大车距、留意突然减速或停车的车辆，并注意工人和设备。工人在场时罚款加倍。',
       'Orange signs mark work zones. Slow down, allow extra space, expect sudden slowing or stopping, and watch for workers and equipment. Fines double when workers are present.'] });

P({ id:'p-sign-donotenter', topic:'signs', page:38, sign:'doNotEnter',
  sec:['紅色及白色管制標誌','红色及白色管制标志','Red and White Regulatory Signs'], answer:1,
  hant:['這個標誌代表什麼？','前方路段只限當地車輛通行。','不得駛入設有此標誌的道路或匝道。','前方道路暫時封閉。'],
  hans:['这个标志代表什么？','前方路段只限当地车辆通行。','不得驶入设有此标志的道路或匝道。','前方道路暂时封闭。'],
  en:['What does this sign mean?','The road ahead is for local traffic only.','Do not enter the road or ramp where this sign is posted.','The road ahead is temporarily closed.'],
  why:['「禁止進入」(DO NOT ENTER) 的意思是不得進入顯示有此標誌的道路或出口匝道。若您已逆行駛入，還會看到「錯誤道路」(WRONG WAY) 標誌，應在安全時倒車或轉彎。',
       '「禁止进入」(DO NOT ENTER) 的意思是不得进入显示有此标志的道路或出口匝道。若您已逆行驶入，还会看到「错误道路」(WRONG WAY) 标志，应在安全时倒车或转弯。',
       'DO NOT ENTER means do not enter the road or ramp where the sign is posted. If you have entered against traffic you will also see a WRONG WAY sign -- back out or turn around when it is safe.'] });

P({ id:'p-sign-nouturn', topic:'signs', page:36, sign:'noUturn',
  sec:['紅色和白色管制標誌','红色和白色管制标志','Red and White Regulatory Signs'], answer:0,
  hant:['這個標誌代表什麼？','此處禁止迴轉。','此處禁止左轉。','此處禁止停車。'],
  hans:['这个标志代表什么？','此处禁止掉头。','此处禁止左转。','此处禁止停车。'],
  en:['What does this sign mean?','No U-turn.','No left turn.','No parking.'],
  why:['設有「禁止迴轉」(NO U-TURN) 標誌的地方不得迴轉。手冊另列禁止迴轉之處，包括鐵路交叉口、單行道、商業區和消防站門前。',
       '设有「禁止掉头」(NO U-TURN) 标志的地方不得掉头。手册另列禁止掉头之处，包括铁路交叉口、单行道、商业区和消防站门前。',
       'Never make a U-turn where a NO U-TURN sign is posted. The handbook also bars U-turns at railroad crossings, on one-way streets, in business districts, and in front of a fire station.'] });

P({ id:'p-sign-noleft', topic:'signs', page:36, sign:'noLeftTurn',
  sec:['白色管制標誌','白色管制标志','White Regulatory Signs'], answer:0,
  hant:['這個標誌代表什麼？','此處不得左轉。','此處不得迴轉。','此處不得直行。'],
  hans:['这个标志代表什么？','此处不得左转。','此处不得掉头。','此处不得直行。'],
  en:['What does this sign mean?','No left turn can be made here.','No U-turn can be made here.','You may not go straight here.'],
  why:['圓圈內加一條紅色斜線，表示圈內圖示的動作不可做。此標誌禁止左轉。手冊要求遵守所有管制標誌的指示。',
       '圆圈内加一条红色斜线，表示圈内图示的动作不可做。此标志禁止左转。手册要求遵守所有管制标志的指示。',
       'A red circle with a line through it shows what you cannot do. This one prohibits a left turn. Follow the instruction on every regulatory sign.'] });

P({ id:'p-sign-noright', topic:'signs', page:36, sign:'noRightTurn',
  sec:['白色管制標誌','白色管制标志','White Regulatory Signs'], answer:2,
  hant:['這個標誌代表什麼？','此處不得迴轉。','此處不得左轉。','此處不得右轉。'],
  hans:['这个标志代表什么？','此处不得掉头。','此处不得左转。','此处不得右转。'],
  en:['What does this sign mean?','No U-turn.','No left turn.','No right turn.'],
  why:['圓圈內加紅色斜線表示禁止該動作，此標誌禁止右轉。這與「紅燈處禁止轉彎」(NO TURN ON RED) 不同——後者只在紅燈時禁止右轉。',
       '圆圈内加红色斜线表示禁止该动作，此标志禁止右转。这与「红灯禁止转弯」(NO TURN ON RED) 不同——后者只在红灯时禁止右转。',
       'A red circle and slash prohibits the action shown; this one bars a right turn. It differs from NO TURN ON RED, which bars the turn only while the light is red.'] });

P({ id:'p-sign-slowerright', topic:'signs', page:36, sign:'slowerTrafficKeepRight',
  sec:['白色管制標誌','白色管制标志','White Regulatory Signs'], answer:1,
  hant:['這個白色標誌代表什麼？','所有車輛都必須減速。','如果您比其他車流慢，請留在右側行車線。','慢速車輛必須從右側駛離。'],
  hans:['这个白色标志代表什么？','所有车辆都必须减速。','如果您比其他车流慢，请留在右侧车道。','慢速车辆必须从右侧驶离。'],
  en:['What does this white sign mean?','All traffic must slow down.','Stay in the right lane if you are driving more slowly than other traffic.','Slower traffic must exit on the right.'],
  why:['手冊要求：如果您打算以較慢的速度行駛，請勿在快車行車線上行駛；有車輛從後接近並想加速超車時，應移至右側。',
       '手册要求：如果您打算以较慢的速度行驶，请勿在快车车道上行驶；有车辆从后接近并想加速超车时，应移至右侧。',
       'If you choose to drive slower than other traffic, drive in the right lane; when another driver is close behind and wishes to go faster, move to the right.'] });

P({ id:'p-sign-bikeleft', topic:'bicycles', page:10, sign:'bikeLeftSignal',
  sec:['發出訊號','发出信号','Signaling'], answer:0,
  hant:['這位騎自行車的人正在示意：','左轉。','右轉。','減速或停車。'],
  hans:['这位骑自行车的人正在示意：','左转。','右转。','减速或停车。'],
  en:['This bicyclist is signaling:','A left turn.','A right turn.','Slowing or stopping.'],
  why:['手冊訂明：騎自行車的人可以伸直手臂發出轉彎訊號，指向他們計劃轉彎的方向。手臂向左平伸即表示左轉。',
       '手册订明：骑自行车的人可以伸直手臂发出转弯信号，指向他们计划转弯的方向。手臂向左平伸即表示左转。',
       'The handbook says bicyclists may signal a turn by extending an arm straight out, pointing in the direction they plan to turn. An arm straight out to the left means a left turn.'] });
