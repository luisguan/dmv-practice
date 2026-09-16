/* User-supplied question bank, part 1 (source: 'provided').

   These cover the rules tested by the bank the user supplied. Every answer was
   checked against the California Driver's Handbook and carries its page; items
   whose stated answer contradicted the handbook, could not be cited to it, or
   depended on a sign image were left out (see README).

   Wording is restated from the handbook rather than copied from the source, so
   the phrasing matches the rest of the app and every claim traces to a page. */

P({ id:'p-001', topic:'passing', page:25, sec:['超車','超车','Passing'], answer:2,
  hant:['為了超越前方車輛而駛離鋪設路面，什麼情況下合法？','路肩夠寬足以容納您的車輛時。','前方車輛正在左轉時。','任何情況下都不合法。'],
  hans:['为了超越前方车辆而驶离铺装路面，什么情况下合法？','路肩够宽足以容纳您的车辆时。','前方车辆正在左转时。','任何情况下都不合法。'],
  en:['When is it legal to drive off the paved roadway in order to pass another vehicle?','When the shoulder is wide enough for your vehicle.','When the vehicle ahead is turning left.','Under no circumstances.'],
  why:['手冊規定：切勿為了超車而駛出鋪設的路面或道路的主要行車部份，也不得駛上路肩。',
       '手册规定：切勿为了超车而驶出铺装路面或道路的主要行车部分，也不得驶上路肩。',
       'The handbook is explicit: never drive off the paved or main-traveled part of the road to pass.'] });

P({ id:'p-002', topic:'railroad', page:51, sec:['靠近鐵路或輕軌路線','靠近铁路或轻轨线路','Near Railroad or Light Rail Tracks'], answer:0,
  hant:['接近沒有警告設備的鐵路平交道，而您看不到軌道 400 呎以外的情況，限速是多少？','時速 15 哩。','時速 20 哩。','時速 25 哩。'],
  hans:['接近没有警告设备的铁路平交道，而您看不到轨道 400 英尺以外的情况，限速是多少？','时速 15 英里。','时速 20 英里。','时速 25 英里。'],
  en:['You are approaching a railroad crossing with no warning devices and cannot see 400 feet down the tracks. The speed limit is:','15 mph.','20 mph.','25 mph.'],
  why:['距離平交道 100 呎內、且軌道兩側視野不足 400 呎時，限速為時速 15 哩。設有欄桿、警報訊號或旗號員時才可超過。',
       '距离平交道 100 英尺内、且轨道两侧视野不足 400 英尺时，限速为时速 15 英里。设有栏杆、警报信号或旗号员时才可超过。',
       'The limit is 15 mph within 100 feet of a crossing when you cannot see 400 feet in both directions, unless the crossing has gates, a warning signal, or a flagman.'] });

P({ id:'p-003', topic:'parking', page:26, sec:['平行停車','平行停车','Parallel Parking'], answer:1,
  hant:['在平坦街道上平行泊車完成後，車輪應該如何？','前輪須轉向街道中央。','車輪距離路緣不得超過 18 吋。','其中一個後輪須碰到路緣。'],
  hans:['在平坦街道上平行停车完成后，车轮应该如何？','前轮须转向街道中央。','车轮距离路缘不得超过 18 英寸。','其中一个后轮须碰到路缘。'],
  en:['After parallel parking on a level street, your wheels should be:','Turned toward the middle of the street.','Within 18 inches of the curb.','Touching the curb with one rear wheel.'],
  why:['手冊的平行泊車步驟以「車輛應與路緣平行，並與路緣距離少於 18 吋」作結。',
       '手册的平行停车步骤以「车辆应与路缘平行，并与路缘距离少于 18 英寸」作结。',
       'The handbook ends the parallel parking sequence with the vehicle parallel to and within 18 inches of the curb.'] });

P({ id:'p-004', topic:'freeway', page:23, sec:['併線與駛離','并线与驶离','Merging and Exiting'], answer:0,
  hant:['併入高速公路車流時，應以什麼速度行駛？','達至或接近高速公路車流的速度。','比車流慢 5 至 10 哩。','先停在匝道末端再起步。'],
  hans:['汇入高速公路车流时，应以什么速度行驶？','达到或接近高速公路车流的速度。','比车流慢 5 至 10 英里。','先停在匝道末端再起步。'],
  en:['When merging onto a freeway, you should be driving:','At or near the speed of freeway traffic.','5 to 10 mph slower than freeway traffic.','Stopped at the end of the ramp before entering.'],
  why:['手冊要求以與車流相同或接近的速度駛入，併入足夠大的空隙，除非絕對必要否則不要在匝道上停車。',
       '手册要求以与车流相同或接近的速度驶入，汇入足够大的空隙，除非绝对必要否则不要在匝道上停车。',
       'Be at or near the speed of traffic and merge into a gap large enough for your vehicle. Do not stop unless absolutely necessary.'] });

P({ id:'p-005', topic:'weather', page:64, sec:['大霧或濃煙中駕駛','大雾或浓烟中驾驶','Fog or Heavy Smoke'], answer:2,
  hant:['在大霧中駕駛，應使用哪種燈？','只用霧燈。','遠光燈。','近光燈。'],
  hans:['在大雾中驾驶，应使用哪种灯？','只用雾灯。','远光灯。','近光灯。'],
  en:['When driving in fog, you should use your:','Fog lights only.','High beams.','Low beams.'],
  why:['大霧中應開啟近光燈；遠光燈會被霧氣反射造成目眩。手冊並明確禁止只使用泊車燈或霧燈。',
       '大雾中应开启近光灯；远光灯会被雾气反射造成眩目。手册并明确禁止只使用示宽灯或雾灯。',
       'Use low beams in fog -- high beams reflect back and cause glare. The handbook also forbids driving on parking or fog lights alone.'] });

P({ id:'p-006', topic:'parking', page:28, sec:['在有顏色的路緣泊車','在有颜色的路缘停车','Parking at Colored Curbs'], answer:1,
  hant:['白色路緣代表什麼？','裝卸貨物專用區。','供乘客上落車或投寄郵件的臨時停車區。','只限貨物裝卸。'],
  hans:['白色路缘代表什么？','装卸货物专用区。','供乘客上下车或投寄邮件的临时停车区。','只限货物装卸。'],
  en:['A white painted curb means:','A loading zone for freight.','Stop only long enough to pick up or drop off passengers or mail.','A loading zone for freight only.'],
  why:['白色路緣僅限臨時停車，供乘客上下車或投送郵件使用。裝卸貨物屬於黃色路緣。',
       '白色路缘仅限临时停车，供乘客上下车或投送邮件使用。装卸货物属于黄色路缘。',
       'A white curb is for stopping only long enough to pick up or drop off passengers or mail. Freight loading is the yellow curb.'] });

P({ id:'p-007', topic:'schoolbus', page:51, sec:['周圍有兒童','周围有儿童','Around Children'], answer:2,
  hant:['前方同一行車線的校車停下並閃爍紅燈，您應如何處理？','停車，然後在您認為兒童都已下車時繼續前行。','減速至時速 25 哩小心通過。','保持停車，直至紅燈停止閃爍。'],
  hans:['前方同一车道的校车停下并闪烁红灯，您应如何处理？','停车，然后在您认为儿童都已下车时继续前行。','减速至时速 25 英里小心通过。','保持停车，直至红灯停止闪烁。'],
  en:['A school bus ahead in your lane is stopped with red lights flashing. You should:','Stop, then go when you think the children are off the bus.','Slow to 25 mph and pass with caution.','Remain stopped as long as the red lights are flashing.'],
  why:['校車閃爍紅燈時，不論行駛方向都須停車，直至兒童安全穿越街道且紅燈停止閃爍。未停車最高可罰 1,000 美元並吊銷駕駛權一年。',
       '校车闪烁红灯时，不论行驶方向都须停车，直至儿童安全穿越街道且红灯停止闪烁。未停车最高可罚 1,000 美元并吊销驾驶权一年。',
       'Stop from either direction until the children are safely across and the lights stop flashing. Failing to stop can mean a $1,000 fine and a one-year suspension.'] });

P({ id:'p-008', topic:'speed', page:67, sec:['速度控制','速度控制','Manage Your Speed'], answer:1,
  hant:['《加州基本行車速度法》的內容是什麼？','絕不可超過標示限速。','絕不可以超出當時狀況安全範圍的車速行駛。','加州部分高速公路的最高限速是時速 70 哩。'],
  hans:['《加州基本行车速度法》的内容是什么？','绝不可超过标示限速。','绝不可以超出当时状况安全范围的车速行驶。','加州部分高速公路的最高限速是时速 70 英里。'],
  en:['California’s Basic Speed Law says:','You may never exceed the posted speed limit.','You may never drive faster than is safe for current conditions.','The maximum limit in California is 70 mph on some freeways.'],
  why:['基本行車速度法的重點是「當時狀況」：即使未超過標示限速，遇雨、霧或擠塞時也可能違法。',
       '基本行车速度法的重点是「当时状况」：即使未超过标示限速，遇雨、雾或拥堵时也可能违法。',
       'The Basic Speed Law is about current conditions: you can be in violation in rain, fog, or congestion even while within the posted limit.'] });

P({ id:'p-009', topic:'registration', page:79, sec:['購買或出售車輛','购买或出售车辆','Buying or Selling a Vehicle'], answer:0,
  hant:['您剛出售了車輛。須在多少天內通知 DMV？','5 天。','10 天。','15 天。'],
  hans:['您刚出售了车辆。须在多少天内通知 DMV？','5 天。','10 天。','15 天。'],
  en:['You just sold your vehicle. You must notify DMV within how many days?','5 days.','10 days.','15 days.'],
  why:['出售車輛後須在五日內填交《轉讓及免除責任通知》。買入車輛則有 10 日辦理過戶。',
       '出售车辆后须在五日内填交《转让及免除责任通知》。买入车辆则有 10 日办理过户。',
       'Notify DMV within five days of selling, using a Notice of Transfer and Release of Liability. Buying gives you 10 days to transfer title.'] });

P({ id:'p-010', topic:'safedriving', page:57, sec:['留意您的周圍環境','留意您的周围环境','Be Aware of Your Surroundings'], answer:1,
  hant:['為避免臨時才作出動作，您應掃視前方多遠的路況？','約 5 秒的車程。','至少 10 秒的車程。','約 30 秒的車程。'],
  hans:['为避免临时才作出动作，您应扫视前方多远的路况？','约 5 秒的车程。','至少 10 秒的车程。','约 30 秒的车程。'],
  en:['To avoid last-minute moves, how far ahead should you scan the road?','About 5 seconds of travel.','At least 10 seconds of travel.','About 30 seconds of travel.'],
  why:['手冊要求始終保持雙眼移動，並至少提前 10 秒掃視車輛前方的道路。',
       '手册要求始终保持双眼移动，并至少提前 10 秒扫视车辆前方的道路。',
       'Keep your eyes moving and scan the road at least 10 seconds ahead of your vehicle.'] });

P({ id:'p-011', topic:'signalling', page:11, sec:['發出訊號','发出信号','Signaling'], answer:2,
  hant:['準備左轉時，須在轉彎前至少提前多少呎持續發出訊號？','50 呎。','75 呎。','100 呎。'],
  hans:['准备左转时，须在转弯前至少提前多少英尺持续发出信号？','50 英尺。','75 英尺。','100 英尺。'],
  en:['You are about to turn left. You must signal continuously for at least how many feet before the turn?','50 feet.','75 feet.','100 feet.'],
  why:['手冊要求轉彎前至少提前 100 呎發出訊號，即使看不到周圍有其他車輛也應如此。',
       '手册要求转弯前至少提前 100 英尺发出信号，即使看不到周围有其他车辆也应如此。',
       'Signal at least 100 feet before you turn, even when you do not see other vehicles around you.'] });

P({ id:'p-012', topic:'trucks', page:42, sec:['盲點「不可見區域」','盲点「不可见区域」','Blind Spots (the No Zone)'], answer:1,
  hant:['關於盲點，以下哪一項正確？','只要兩側各有一個外後視鏡，盲點就會消失。','大型卡車的盲點比大多數載客車輛更大。','只要看後視鏡就能檢查盲點。'],
  hans:['关于盲点，以下哪一项正确？','只要两侧各有一个外后视镜，盲点就会消失。','大型卡车的盲点比大多数载客车辆更大。','只要看后视镜就能检查盲点。'],
  en:['Which statement about blind spots is true?','They are eliminated by having one outside mirror on each side.','Large trucks have bigger blind spots than most passenger vehicles.','They can be checked by looking in your mirrors.'],
  why:['大型車輛有很大的盲點（「不可見區域」）。手冊的提醒是：如果您看不到卡車的後視鏡，卡車司機就看不到您。檢查盲點必須轉頭從側窗查看。',
       '大型车辆有很大的盲点（「不可见区域」）。手册的提醒是：如果您看不到卡车的后视镜，卡车司机就看不到您。检查盲点必须转头从侧窗查看。',
       'Large vehicles have big blind spots, called No Zones: if you cannot see the truck’s mirrors, the driver cannot see you. Checking a blind spot requires turning your head, not just a mirror.'] });

P({ id:'p-013', topic:'collisions', page:77, sec:['如發生碰撞，應如何處理','如发生碰撞，应如何处理','What to Do if You Are in a Collision'], answer:2,
  hant:['您撞上一輛停放的車輛，卻找不到車主。您必須：','在該車上留下寫有姓名、電話和地址的字條。','向當地警方或（在非建制地區）加州公路巡警報告。','以上兩項都要做。'],
  hans:['您撞上一辆停放的车辆，却找不到车主。您必须：','在该车上留下写有姓名、电话和地址的字条。','向当地警方或（在非建制地区）加州公路巡警报告。','以上两项都要做。'],
  en:['You hit a parked vehicle and cannot find the owner. You must:','Leave a note with your name, phone number, and address on the vehicle.','Report the collision to local police, or to the CHP in unincorporated areas.','Do both of the above.'],
  why:['手冊要求先設法找到車主；找不到時須留下寫有姓名、電話號碼和地址的便條並牢固貼上，同時向執法部門報告。',
       '手册要求先设法找到车主；找不到时须留下写有姓名、电话号码和地址的便条并牢固贴上，同时向执法部门报告。',
       'Try to find the owner; if you cannot, leave a note with your name, phone number, and address secured to the vehicle, and report the collision to law enforcement.'] });

P({ id:'p-014', topic:'speed', page:52, sec:['商業區或住宅區','商业区或住宅区','Business or Residential Districts'], answer:1,
  hant:['除另有標示外，住宅區的限速是多少？','時速 20 哩。','時速 25 哩。','時速 30 哩。'],
  hans:['除另有标示外，住宅区的限速是多少？','时速 20 英里。','时速 25 英里。','时速 30 英里。'],
  en:['Unless otherwise posted, the speed limit in a residential area is:','20 mph.','25 mph.','30 mph.'],
  why:['手冊訂明：商業區或住宅區除另有標示者外，限速為時速 25 哩。',
       '手册订明：商业区或住宅区除另有标示者外，限速为时速 25 英里。',
       'The limit in a business or residential district is 25 mph unless otherwise posted.'] });

P({ id:'p-016', topic:'parking', page:27, sec:['在斜坡上泊車','在斜坡上停车','Parking on a Hill'], answer:1,
  hant:['在沒有路緣的雙向街道上車頭朝上坡泊車，前輪應該怎樣轉？','向左轉（朝向街道）。','向右轉（遠離街道）。','與路面平行。'],
  hans:['在没有路缘的双向街道上车头朝上坡停车，前轮应该怎样转？','向左转（朝向街道）。','向右转（远离街道）。','与路面平行。'],
  en:['When parking uphill on a two-way street with no curb, your front wheels should be:','Turned left, toward the street.','Turned right, away from the street.','Left parallel with the pavement.'],
  why:['手冊規定：無論車頭朝上坡或下坡，若沒有路緣，都應向右打輪，這樣煞車失靈時車輛不會滑向道路中央。',
       '手册规定：无论车头朝上坡或下坡，若没有路缘，都应向右打轮，这样刹车失灵时车辆不会滑向道路中央。',
       'Headed either uphill or downhill with no curb, turn the wheels to the right so the vehicle will roll away from the center of the road if the brakes fail.'] });

P({ id:'p-018', topic:'turns', page:22, sec:['轉彎範例','转弯示例','Examples of Turns'], answer:1,
  hant:['從多車道的單行道左轉進入另一條單行道，應從哪條行車線開始轉彎？','任何行車線，只要安全即可。','最靠近左側路緣的行車線。','道路正中間的行車線。'],
  hans:['从多车道的单行道左转进入另一条单行道，应从哪条车道开始转弯？','任何车道，只要安全即可。','最靠近左侧路缘的车道。','道路正中间的车道。'],
  en:['To turn left from a multilane one-way street onto a one-way street, begin the turn from:','Any lane, as long as it is safe.','The lane closest to the left curb.','The lane in the center of the road.'],
  why:['單行道左轉須從最左（遠端左）的行車線開始。從最靠近街道中心的行車線起轉，適用於雙向道路。',
       '单行道左转须从最左（远端左）的车道开始。从最靠近街道中心的车道起转，适用于双向道路。',
       'A left turn from a one-way street starts in the far-left lane. Starting from the lane nearest the middle of the street applies to two-way streets.'] });

P({ id:'p-019', topic:'collisions', page:78, sec:['報告碰撞情況','报告碰撞情况','Reporting a Collision'], answer:1,
  hant:['發生交通碰撞後，在什麼情況下必須向 DMV 提交 SR-1 書面報告？','只在您或對方受傷時。','財物損失超過 1,000 美元，或有任何人受傷或死亡時。','只在您有責任時。'],
  hans:['发生交通碰撞后，在什么情况下必须向 DMV 提交 SR-1 书面报告？','只在您或对方受伤时。','财产损失超过 1,000 美元，或有任何人受伤或死亡时。','只在您有责任时。'],
  en:['You must file a written report (SR-1) with DMV if:','Only you or the other driver is injured.','There is more than $1,000 in property damage, or anyone is injured or killed.','Only if you were at fault.'],
  why:['須在 10 日內提交 SR-1，門檻是財物損失超過 1,000 美元或有人受傷或死亡。不論責任誰屬，即使發生在私人物業上也適用。',
       '须在 10 日内提交 SR-1，门槛是财产损失超过 1,000 美元或有人受伤或死亡。不论责任归谁，即使发生在私人物业上也适用。',
       'File within 10 days when damage exceeds $1,000 or anyone is injured or killed -- regardless of fault, and even on private property.'] });

P({ id:'p-020', topic:'weather', page:61, sec:['滑路','湿滑路面','Slippery Roads'], answer:2,
  hant:['道路在什麼時候最濕滑？','傾盆大雨之時。','已下雨一段時間之後。','乾旱一段時間後的第一場雨。'],
  hans:['道路在什么时候最湿滑？','倾盆大雨之时。','已下雨一段时间之后。','干旱一段时间后的第一场雨。'],
  en:['Roads are most slippery:','During a heavy downpour.','After it has been raining for a while.','During the first rain after a dry spell.'],
  why:['剛開始下雨時路面最滑，乾熱一段時間後尤甚，因為路面的油污和塵土尚未被沖走。',
       '刚开始下雨时路面最滑，干热一段时间后尤甚，因为路面的油污和尘土尚未被冲走。',
       'The pavement is most slippery when it starts to rain, especially after a dry, hot spell, because oil and dust have not been washed away.'] });

P({ id:'p-021', topic:'parking', page:28, sec:['在有顏色的路緣泊車','在有颜色的路缘停车','Parking at Colored Curbs'], answer:1,
  hant:['以下哪一個地方不得泊車？','緊急情況下的高速公路路邊。','紅色路緣旁。','小學 100 呎範圍內。'],
  hans:['以下哪一个地方不得停车？','紧急情况下的高速公路路边。','红色路缘旁。','小学 100 英尺范围内。'],
  en:['You may not park your vehicle:','On the side of a freeway in an emergency.','Next to a red painted curb.','Within 100 feet of an elementary school.'],
  why:['紅色路緣禁止停車、待車或泊車。緊急情況下可停在高速公路路邊；手冊並無「學校 100 呎」的泊車規定。',
       '红色路缘禁止停车、候客或泊车。紧急情况下可停在高速公路路边；手册并无「学校 100 英尺」的停车规定。',
       'A red curb means no stopping, standing, or parking. Stopping on a freeway in an emergency is permitted, and the handbook has no 100-foot school parking rule.'] });

P({ id:'p-022', topic:'registration', page:79, sec:['購買或出售車輛','购买或出售车辆','Buying or Selling a Vehicle'], answer:0,
  hant:['以下哪一種情況須在 5 日內通知 DMV？','出售或轉讓您的車輛。','車輛未通過廢氣測試。','配了新的眼鏡或隱形眼鏡。'],
  hans:['以下哪一种情况须在 5 日内通知 DMV？','出售或转让您的车辆。','车辆未通过尾气检测。','配了新的眼镜或隐形眼镜。'],
  en:['You must notify DMV within five days if you:','Sell or transfer your vehicle.','Fail a smog test.','Get a new prescription for glasses or contacts.'],
  why:['五日通知的規定只適用於出售或轉讓車輛。廢氣測試屬登記事務，而更換眼鏡毋須主動申報。',
       '五日通知的规定只适用于出售或转让车辆。尾气检测属登记事务，而更换眼镜无须主动申报。',
       'The five-day notice applies to selling or transferring a vehicle. A smog test is a registration matter, and new lenses require no such notice.'] });

P({ id:'p-024', topic:'turns', page:18, sec:['右轉向','右转','Right Turns'], answer:2,
  hant:['準備在前方路口右轉時，除了減速還應該怎樣做？','移向本行車線的左側。','避免駛入腳踏車行車線。','在轉彎前約 100 呎開始發出訊號。'],
  hans:['准备在前方路口右转时，除了减速还应该怎样做？','移向本车道的左侧。','避免驶入自行车道。','在转弯前约 100 英尺开始发出信号。'],
  en:['You want to turn right at an upcoming intersection. You should slow down and:','Move to the left side of your lane.','Avoid driving in the bicycle lane.','Start signaling about 100 feet before the turn.'],
  why:['右轉前約 100 呎開始發出訊號，並靠近道路右緣行駛。若有腳踏車行車線，應在轉彎前 200 呎內併入，而不是避開它。',
       '右转前约 100 英尺开始发出信号，并靠近道路右缘行驶。若有自行车道，应在转弯前 200 英尺内并入，而不是避开它。',
       'Signal about 100 feet before the turn and drive close to the right edge. Where there is a bike lane you merge into it within 200 feet of the turn rather than avoiding it.'] });

P({ id:'p-025', topic:'speed', page:67, sec:['速度控制','速度控制','Manage Your Speed'], answer:2,
  hant:['您在標示限速時速 65 哩的高速公路上行駛，而車流以時速 70 哩前進。您可合法行駛的最高車速是：','時速 70 哩或以上，以跟上車流。','時速 65 至 70 哩之間。','不得超過時速 65 哩。'],
  hans:['您在标示限速时速 65 英里的高速公路上行驶，而车流以时速 70 英里前进。您可合法行驶的最高车速是：','时速 70 英里或以上，以跟上车流。','时速 65 至 70 英里之间。','不得超过时速 65 英里。'],
  en:['You are on a freeway posted at 65 mph and traffic is moving at 70 mph. You may legally drive:','70 mph or faster, to keep up with traffic.','Between 65 and 70 mph.','No faster than 65 mph.'],
  why:['標示限速是上限。跟隨周圍車流的速度並非法律依據；若車流超速，跟著開一樣違法。',
       '标示限速是上限。跟随周围车流的速度并非法律依据；若车流超速，跟着开一样违法。',
       'The posted limit is a ceiling. Matching surrounding traffic is no defence -- if that traffic is speeding, so are you.'] });

P({ id:'p-026', topic:'parking', page:28, sec:['非法泊車','非法停车','Illegal Parking'], answer:0,
  hant:['以下哪一項泊車行為屬違法？','停在沒有標記的行人穿越道上。','停在距離私人車道 3 呎的位置。','停在獲准許泊車的腳踏車行車線內。'],
  hans:['以下哪一项停车行为属违法？','停在没有标记的人行横道上。','停在距离私人车道 3 英尺的位置。','停在获准许停车的自行车道内。'],
  en:['It is illegal to park your vehicle:','On an unmarked crosswalk.','Within three feet of a private driveway.','In a bicycle lane where parking is permitted.'],
  why:['手冊把「在標記或未標記的人行道上」列為禁止泊車之處。3 呎的限制針對殘障人士行人道坡道，而腳踏車行車線在獲准許處可以泊車。',
       '手册把「在标记或未标记的人行道上」列为禁止停车之处。3 英尺的限制针对残障人士人行道坡道，而自行车道在获准许处可以停车。',
       'Parking on a marked or unmarked crosswalk is prohibited. The three-foot rule applies to disabled sidewalk ramps, and a bike lane may be used for parking where permitted.'] });

P({ id:'p-027', topic:'distraction', page:70, sec:['手機和短信','手机和短信','Cell Phones and Texting'], answer:0,
  hant:['關於駕駛時使用手機，以下哪一項最安全？','使用免提裝置，讓雙手都能放在方向盤上。','把手機放在隨手可及之處，以免要移開視線。','接聽前先確認來電號碼。'],
  hans:['关于驾驶时使用手机，以下哪一项最安全？','使用免提装置，让双手都能放在方向盘上。','把手机放在随手可及之处，以免要移开视线。','接听前先确认来电号码。'],
  en:['The safest precaution regarding cell phones while driving is:','Use a hands-free device so both hands stay on the wheel.','Keep the phone within easy reach so you need not look away.','Check the number before answering.'],
  why:['駕駛時手持手機屬違法。成年駕駛員只應在必要時以免提模式使用；手冊更進一步建議不要接聽，讓來電轉到語音信箱。',
       '驾驶时手持手机属违法。成年驾驶员只应在必要时以免提模式使用；手册更进一步建议不要接听，让来电转到语音信箱。',
       'Driving with a handheld phone is illegal. Adults should use hands-free mode only when necessary -- and the handbook goes further, advising you let the call go to voicemail.'] });

P({ id:'p-028', topic:'intersections', page:39, sec:['十字路口','十字路口','Intersections'], answer:0,
  hant:['您面對綠燈，但交叉路口被車流阻塞。應如何處理？','留在路口外，等車流疏通。','駛入路口內等候車流疏通。','變換行車線繞過阻塞的車流。'],
  hans:['您面对绿灯，但路口被车流阻塞。应如何处理？','留在路口外，等车流疏通。','驶入路口内等候车流疏通。','变换车道绕过阻塞的车流。'],
  en:['You have a green light but traffic is blocking the intersection. You should:','Stay out of the intersection until traffic clears.','Enter the intersection and wait for traffic to clear.','Change lanes and try to go around the traffic.'],
  why:['即使是綠燈，若沒有足夠空間在轉紅前完全通過路口，駛入而阻塞路口即屬違法。',
       '即使是绿灯，若没有足够空间在转红前完全通过路口，驶入而阻塞路口即属违法。',
       'Even on a green light, it is against the law to enter and block an intersection when you cannot get completely across before the light turns red.'] });

P({ id:'p-029', topic:'turns', page:18, sec:['右轉向','右转','Right Turns'], answer:2,
  hant:['準備右轉時，正確的做法是：','發出訊號後立即轉彎。','駛入右行車線前先停車，讓所有其他車輛先行。','減速，必要時停車，然後轉彎。'],
  hans:['准备右转时，正确的做法是：','发出信号后立即转弯。','驶入右车道前先停车，让所有其他车辆先行。','减速，必要时停车，然后转弯。'],
  en:['You are getting ready to make a right turn. You should:','Signal and turn immediately.','Stop before entering the right lane and let all other traffic go first.','Slow down or stop if necessary, then make the turn.'],
  why:['手冊的右轉步驟是：發出訊號、觀察右後方並減速、必要時在停駛線後停車、左右觀察，安全時才轉彎。',
       '手册的右转步骤是：发出信号、观察右后方并减速、必要时在停驶线后停车、左右观察，安全时才转弯。',
       'The sequence is: signal, look over your right shoulder and reduce speed, stop behind the limit line if needed, look both ways, and turn when it is safe.'] });

P({ id:'p-030', topic:'lights', page:11, sec:['使用車頭燈','使用车头灯','Using Your Headlights'], answer:2,
  hant:['強風把塵土吹過高速公路，令能見度下降。除了減速，還應開啟什麼燈？','車廂內燈。','泊車燈。','車頭燈。'],
  hans:['强风把尘土吹过高速公路，令能见度下降。除了减速，还应开启什么灯？','车厢内灯。','示宽灯。','车头灯。'],
  en:['A dust storm blows across the freeway and reduces your visibility. You should slow down and turn on your:','Interior lights.','Parking lights.','Headlights.'],
  why:['手冊要求在雲、雨、雪、灰塵、煙霧、大霧等看不見其他車輛的情況下開啟車頭燈。駕駛時僅使用泊車燈屬違法。',
       '手册要求在云、雨、雪、灰尘、烟雾、大雾等看不见其他车辆的情况下开启车头灯。驾驶时仅使用示宽灯属违法。',
       'Use your headlights when conditions such as clouds, dust, smoke, or fog keep you from seeing other vehicles. Driving on parking lights alone is illegal.'] });
