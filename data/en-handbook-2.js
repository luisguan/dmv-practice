/* English rendering of handbook questions hb-041 – hb-080.
   Choice order matches the Chinese exactly so one `answer` index serves all
   three languages. Wording follows the English handbook's own terminology. */

EN('hb-041', {
  q: 'Unless otherwise posted, what is the speed limit in a business or residential district?',
  choices: ['25 mph.', '35 mph.', '15 mph.'],
  rationale: 'The speed limit in a business or residential district is 25 mph, unless otherwise posted.',
  whyWrong: [null, '35 mph is not the default limit for a residential district.', '15 mph applies to blind intersections, alleys, and obstructed railroad crossings.'],
  section: 'Business or Residential Districts'
});

EN('hb-042', {
  q: 'What is the speed limit at a blind intersection (one with no stop signs at any corner)?',
  choices: ['25 mph.', '10 mph.', '15 mph.'],
  rationale: 'An intersection is considered blind if it has no stop signs at any corner. The speed limit there is 15 mph, and if your view is blocked you should move slowly forward until you can see.',
  whyWrong: ['25 mph is the general limit for business or residential districts.', '10 mph is the limit for passing a stopped bus or streetcar at a safety zone.', null],
  section: 'Blind Intersections'
});

EN('hb-043', {
  q: 'What is the speed limit in an alley?',
  choices: ['25 mph.', '15 mph.', '20 mph.'],
  rationale: 'An alley is any road no wider than 25 feet used to access the rear or side entrances of buildings. The speed limit in an alley is 15 mph.',
  whyWrong: ['25 feet is the width that defines an alley, not its speed limit.', null, '20 mph is not a figure the handbook gives.'],
  section: 'Alleys'
});

EN('hb-044', {
  q: 'What is the speed limit within 500 feet of a school while children are outside or crossing the street?',
  choices: ['25 mph.', '35 mph.', '45 mph.'],
  rationale: 'The speed limit is 25 mph within 500 feet of a school while children are outside or crossing the street. Some school zones may have limits as low as 15 mph.',
  whyWrong: [null, '35 mph is too fast for a school zone with children present.', '45 mph is far above the legal limit for a school zone.'],
  section: 'Around Children'
});

EN('hb-045', {
  q: 'What is the maximum speed limit on a two-lane undivided highway, or for a vehicle towing a trailer?',
  choices: ['65 mph.', '45 mph.', '55 mph.'],
  rationale: 'The ideal maximum on most California highways is 65 mph, but it is 55 mph on a two-lane undivided highway and for vehicles towing trailers.',
  whyWrong: ['65 mph applies to ordinary highways, not to undivided two-lane roads or vehicles towing.', '45 mph is not a figure the handbook gives here.', null],
  section: 'Manage Your Speed'
});

EN('hb-046', {
  q: 'What must you do when a school bus flashes red lights?',
  choices: ['Only vehicles travelling the same direction as the bus must stop.', 'Stop from either direction until the lights stop flashing.', 'Slow to 15 mph and pass carefully.'],
  rationale: 'When the bus flashes red lights, you must stop from either direction until the children are safely across the street and the lights stop flashing.',
  whyWrong: ['Oncoming traffic must stop too, because children may cross the whole street.', null, 'Flashing red lights require a full stop, not a slow pass.'],
  section: 'Around Children'
});

EN('hb-047', {
  q: 'A school bus is flashing red lights on the other side of a divided highway. What must you do?',
  choices: ['Come to a complete stop.', 'Slow to 15 mph.', 'You do not need to stop.'],
  rationale: 'This is the handbook’s stated exception: if the school bus is on the other side of a divided or multilane highway (two or more lanes in each direction), you do not need to stop.',
  whyWrong: ['This is the one situation the handbook exempts from the stopping requirement.', 'The handbook sets no reduced speed for this case.', null],
  section: 'Around Children'
});

EN('hb-048', {
  q: 'What penalty can you face for failing to stop for a school bus flashing red lights?',
  choices: ['A fine of up to $1,000 and possible suspension of your driving privilege for one year.', 'A single point on your driving record.', 'A verbal warning with no fine.'],
  rationale: 'If you fail to stop, you may be fined up to $1,000 and your driving privilege could be suspended for one year.',
  whyWrong: [null, 'The penalty is far more serious than a point — it carries a heavy fine and possible suspension.', 'This is a serious violation, not something handled with a warning.'],
  section: 'Around Children'
});

EN('hb-049', {
  q: 'How large can fines for traffic violations in a work zone be?',
  choices: ['Up to $100.', '$1,000 or more.', 'There are no special penalties in work zones.'],
  rationale: 'Fines for traffic violations in a work zone can be $1,000 or more, and fines are doubled in highway construction or maintenance zones when workers are present.',
  whyWrong: ['Work zone penalties are far higher than this.', null, 'Work zones carry specific enhanced penalties, and some roads are designated Double Fine Zones.'],
  section: 'Fines and Double Fine Zones'
});

EN('hb-050', {
  q: 'What is the maximum penalty for assaulting a highway worker?',
  choices: ['A $500 fine.', 'Payment of medical costs only.', 'Fines of up to $2,000 and imprisonment for up to one year.'],
  rationale: 'Anyone convicted of assaulting a highway worker faces fines of up to $2,000 and imprisonment for up to one year.',
  whyWrong: ['$500 is below the maximum the handbook states.', 'This is a criminal penalty, not merely civil compensation.', null],
  section: 'Fines and Double Fine Zones'
});

EN('hb-051', {
  q: 'Which of the following is correct when driving through a work zone?',
  choices: ['Slow down, allow extra space between vehicles, and expect sudden slowing or stopping.', 'Cross the line of cones to get around congestion.', 'Speed up to clear the work zone quickly.'],
  rationale: 'Go through a work zone carefully: slow down, allow extra space between vehicles, expect sudden slowing or stopping, watch for drivers changing lanes, and avoid distractions.',
  whyWrong: [null, 'The handbook says to merge as soon as it is safe without crossing the cones or drums.', 'Work zones contain workers and equipment; speeding through is dangerous and fines are doubled.'],
  section: 'Road Workers and Work Zones'
});

EN('hb-052', {
  q: 'How far in advance should you signal before exiting a highway?',
  choices: ['One second, about 80 feet.', 'Five seconds, approximately 400 feet.', 'Ten seconds, about 800 feet.'],
  rationale: 'When in the proper lane, signal five seconds (approximately 400 feet) before you exit. Make sure you are at a safe speed and do not cross over any solid lines.',
  whyWrong: ['One second gives fast-moving traffic behind you no time to react.', null, 'The handbook specifies five seconds, not ten.'],
  section: 'Exiting'
});

EN('hb-053', {
  q: 'How much space do you need to merge into traffic on city streets?',
  choices: ['About 50 feet.', 'About 300 feet.', 'Half a block, which is about 150 feet.'],
  rationale: 'To merge, enter, or exit traffic you need half a block on city streets — about 150 feet — and a full block on the highway, about 300 feet.',
  whyWrong: ['50 feet is nowhere near enough space to merge safely.', '300 feet is the space needed on a highway; city streets need 150 feet.', null],
  section: 'Crossing or Entering Traffic'
});

EN('hb-054', {
  q: 'Within how many feet of an intersection, bridge, tunnel, or railroad crossing is passing prohibited?',
  choices: ['100 feet.', '50 feet.', '200 feet.'],
  rationale: 'Do not pass within 100 feet of an intersection, bridge, tunnel, railroad crossing, or other hazardous area.',
  whyWrong: [null, '50 feet is not the distance the handbook gives.', '200 feet is not the distance the handbook gives.'],
  section: 'Passing'
});

EN('hb-055', {
  q: 'To pass safely, how far ahead should a hill or curve be?',
  choices: ['At least 100 feet.', 'At least one-third of a mile.', 'At least half a mile.'],
  rationale: 'To safely pass, the hill or curve should be at least one-third of a mile ahead. Do not pass if you are approaching a hill or curve and cannot see whether other traffic is coming.',
  whyWrong: ['100 feet is nowhere near enough to complete a pass and return to your lane.', null, 'The handbook specifies one-third of a mile.'],
  section: 'Passing'
});

EN('hb-056', {
  q: 'Within how many feet of a fire hydrant is parking prohibited?',
  choices: ['10 feet.', '20 feet.', '15 feet.'],
  rationale: 'Never park within 15 feet of a fire hydrant or fire station driveway.',
  whyWrong: ['10 feet is not the distance the handbook gives.', '20 feet is the distance for a crosswalk; a fire hydrant is 15 feet.', null],
  section: 'Illegal Parking'
});

EN('hb-057', {
  q: 'Within how many feet of a marked or unmarked crosswalk is parking prohibited?',
  choices: ['20 feet.', '10 feet.', '30 feet.'],
  rationale: 'Never park within 20 feet of an unmarked or marked crosswalk, or within 15 feet of a crosswalk where a curb extension is present.',
  whyWrong: [null, '10 feet is not the distance the handbook gives.', '30 feet is not the distance the handbook gives.'],
  section: 'Illegal Parking'
});

EN('hb-058', {
  q: 'How long can a vehicle be left on a freeway before it may be towed?',
  choices: ['More than one hour.', 'More than four hours.', 'More than twenty-four hours.'],
  rationale: 'A vehicle that is stopped, parked, or left standing on a freeway for more than four hours may be removed.',
  whyWrong: ['One hour is not the threshold the handbook gives.', null, 'You do not have twenty-four hours; removal is permitted after four.'],
  section: 'Illegal Parking'
});

EN('hb-059', {
  q: 'When crossing devices or a person warn you a train is coming, how far from the nearest track must you stop?',
  choices: ['At least 5 feet.', 'At least 50 feet.', 'At least 15 feet.'],
  rationale: 'When the crossing devices or a person warns you a train is coming, stop at least 15 feet from the nearest track.',
  whyWrong: ['5 feet is far too close — a train overhangs the rails.', '50 feet is not the distance the handbook gives.', null],
  section: 'Near Railroad or Light Rail Tracks'
});

EN('hb-060', {
  q: 'The red warning lights at a railroad crossing are still flashing but the gate has begun to rise. What should you do?',
  choices: ['Do not cross until the red lights stop flashing.', 'You may cross once the gate is up.', 'Cross slowly and carefully.'],
  rationale: 'Do not proceed over the railroad tracks until the red lights stop flashing, even if the gate rises. Many crossings have multiple tracks and another train may be coming.',
  whyWrong: [null, 'A rising gate is not the all-clear; the flashing lights mean a train may still be coming.', 'While the lights flash you must not cross at all, slowly or otherwise.'],
  section: 'Near Railroad or Light Rail Tracks'
});

EN('hb-061', {
  q: 'What is the legal blood alcohol concentration (BAC) limit for a driver 21 or older?',
  choices: ['0.05% or higher is illegal.', '0.08% or higher is illegal.', '0.01% or higher is illegal.'],
  rationale: 'It is illegal to drive with a BAC of 0.08% or higher if you are over 21. Even below the legal limit you can be arrested and convicted if you are impaired.',
  whyWrong: ['0.05% is the threshold at which an officer may require further testing of an under-21 driver, not the adult limit.', null, '0.01% applies to drivers under 21, or to anyone on DUI probation.'],
  section: 'Blood Alcohol Concentration (BAC) Limits'
});

EN('hb-062', {
  q: 'At what BAC is it illegal for a driver under 21 to drive?',
  choices: ['0.08% or higher.', '0.04% or higher.', '0.01% or higher.'],
  rationale: 'It is illegal to drive with a BAC of 0.01% or higher if you are under 21. A conviction means DMV suspends the driving privilege for one year.',
  whyWrong: ['0.08% is the limit for drivers over 21.', '0.04% applies to driving a vehicle requiring a commercial licence, or driving a passenger for hire.', null],
  section: 'Blood Alcohol Concentration (BAC) Limits'
});

EN('hb-063', {
  q: 'What happens if you refuse a blood or urine test requested by a law enforcement officer?',
  choices: ['DMV will suspend or revoke your driving privilege for one year.', 'Nothing — refusing is your right.', 'You will only be fined.'],
  rationale: 'If an officer thinks you are driving under the influence, they have the right to ask you to take a blood or urine test. If you refuse, DMV will suspend or revoke your driving privilege for one year.',
  whyWrong: [null, 'Driving in California constitutes consent to testing; refusal leads directly to suspension.', 'The consequence is loss of your driving privilege, not just a fine.'],
  section: 'Alcohol and Drugs'
});

EN('hb-064', {
  q: 'After a DUI arrest, how long do you have to request a DMV administrative hearing?',
  choices: ['5 days.', '10 days.', '30 days.'],
  rationale: 'You may request a DMV administrative hearing within 10 days of your arrest. The officer may take your licence and issue you a 30-day temporary licence.',
  whyWrong: ['5 days is not the deadline the handbook gives.', null, '30 days is the life of the temporary licence, not the hearing deadline.'],
  section: 'DUI Arrest'
});

EN('hb-065', {
  q: 'How long does a DUI conviction stay on your DMV record?',
  choices: ['Three years.', 'Five years.', 'Ten years.'],
  rationale: 'All DUI convictions stay on your record with DMV for ten years. Another DUI during that period can bring additional penalties from the court or DMV.',
  whyWrong: ['Three years is the period for maintaining SR 22/SR 1P insurance proof, not the record retention period.', 'Five years is not the period the handbook gives.', null],
  section: 'DUI Conviction'
});

EN('hb-066', {
  q: 'May a child in a rear-facing child restraint ride in the front seat of a vehicle with an air bag?',
  choices: ['No.', 'Yes, as long as the seat belt is fastened.', 'Yes, but only on short trips.'],
  rationale: 'A child in a rear-facing child passenger restraint system may not ride in the front seat of an airbag-equipped vehicle.',
  whyWrong: [null, 'The force of a deploying air bag can be fatal to an infant in a rear-facing seat.', 'There is no short-trip exception; this is an absolute prohibition.'],
  section: 'Child Restraint System and Safety Seats'
});

EN('hb-067', {
  q: 'Until what point must a child be secured in a child restraint in a rear seat?',
  choices: ['Until they turn 6.', 'Until they are 8 years old, or at least 4 feet 9 inches tall.', 'Until they turn 10.'],
  rationale: 'Children under 8 years old, or less than 4 feet 9 inches tall, must be secured in a child passenger restraint system in a rear seat. Once they meet either condition they may use a properly secured safety belt.',
  whyWrong: ['6 is not the threshold in the handbook.', null, '10 is not the threshold in the handbook.'],
  section: 'Child Restraint System and Safety Seats'
});

EN('hb-068', {
  q: 'Which of the following is true about leaving a child alone in a vehicle?',
  choices: ['It is fine as long as a window is left slightly open.', 'No child under 10 may be left alone.', 'It is illegal to leave a child 6 or younger unattended; a supervisor must be at least 12.'],
  rationale: 'It is illegal to leave a child six years old or younger unattended in a vehicle. A child may be left under the supervision of someone at least 12 years old. A parked car heats up rapidly in the sun, even with a window slightly open.',
  whyWrong: ['The handbook notes specifically that the interior heats up rapidly even when a window is left slightly open.', 'The age set in the handbook is six or younger.', null],
  section: 'Unattended Children and Pets'
});

EN('hb-069', {
  q: 'How far should you sit from the air bag cover while driving?',
  choices: ['At least 10 inches.', 'At least 5 inches.', 'At least 20 inches.'],
  rationale: 'Ride at least 10 inches from the air bag cover, as long as you can maintain full control of your vehicle. Measure from the center of the steering wheel to your breastbone. Passengers should do the same.',
  whyWrong: [null, '5 inches is too close and risks serious injury when the air bag deploys.', '20 inches is not the figure the handbook gives, and sitting that far back may compromise control.'],
  section: 'Air Bags'
});

EN('hb-070', {
  q: 'By how much should you reduce your speed on a wet road?',
  choices: ['No reduction is needed, just more following distance.', 'By 5 to 10 mph.', 'By half.'],
  rationale: 'The handbook sets out speed adjustments by surface: wet road, reduce by 5 to 10 mph; packed snow, reduce by half; ice, reduce to no more than 5 mph.',
  whyWrong: ['More following distance is needed, but so is a lower speed.', null, 'Halving your speed applies to packed snow; a wet road calls for 5 to 10 mph.'],
  section: 'Slippery Roads'
});

EN('hb-071', {
  q: 'What should your speed be on ice?',
  choices: ['Under 25 mph.', 'Under 15 mph.', 'No more than 5 mph.'],
  rationale: 'On ice, reduce your speed to no more than 5 mph. Bridges and overpasses freeze before the rest of the road, and shaded areas freeze first and dry out last.',
  whyWrong: ['25 mph is far too fast on ice.', '15 mph is still too fast; the handbook says no more than 5 mph.', null],
  section: 'Slippery Roads'
});

EN('hb-072', {
  q: 'If you cannot see farther than 100 feet in a heavy rainstorm or snowstorm, what is the fastest it is safe to drive?',
  choices: ['30 mph.', '45 mph.', '55 mph.'],
  rationale: 'If you cannot see farther than 100 feet, it is not safe to drive faster than 30 mph. Turn on your windshield wipers, low-beam headlights, and defroster.',
  whyWrong: [null, '45 mph is far too fast when visibility is under 100 feet.', '55 mph is a highway limit for ideal conditions and bears no relation to this visibility.'],
  section: 'Slippery Roads'
});

EN('hb-073', {
  q: 'What should you do if your vehicle starts to hydroplane?',
  choices: ['Brake hard immediately.', 'Slow down gradually and do not use the brakes.', 'Accelerate to regain traction.'],
  rationale: 'If your vehicle starts to hydroplane, slow down gradually and do not use the brakes — sudden braking may cause you to lose control.',
  whyWrong: ['The tires have already lost contact with the road; hard braking will only put you into a skid.', null, 'Accelerating makes hydroplaning worse; the correct response is to slow gradually.'],
  section: 'Hydroplaning'
});

EN('hb-074', {
  q: 'Which lights should you use if you must drive in heavy fog?',
  choices: ['High-beam headlights.', 'Parking lights or fog lights only.', 'Low-beam headlights.'],
  rationale: 'Use your low-beam headlights in heavy fog — high beams reflect back and cause glare. Also slow down, increase your following distance, and never drive using only parking or fog lights.',
  whyWrong: ['High beams reflect off the fog straight back at you, making visibility worse.', 'The handbook explicitly says never to drive using only your parking or fog lights.', null],
  section: 'Fog or Heavy Smoke'
});

EN('hb-075', {
  q: 'What should you do if a tire blows out while you are driving?',
  choices: ['Hold the wheel firmly, ease off the accelerator, and slow down and pull off once stable.', 'Brake hard immediately to stop.', 'Take your foot off the accelerator abruptly and steer sharply.'],
  rationale: 'The handbook follows NHTSA guidance: hold the steering wheel with both hands, maintain speed if safe, gradually release the accelerator, correct steering to stabilise the vehicle, then slow down and pull off the road when it is safe.',
  whyWrong: [null, 'Sudden braking can cause a loss of control; the handbook warns against panicking or overreacting.', 'Abruptly lifting off the accelerator and jerking the wheel will also cause a loss of control.'],
  section: 'Tire Blowouts'
});

EN('hb-076', {
  q: 'What is California’s minimum liability insurance coverage for the death or injury of one person?',
  choices: ['$15,000.', '$30,000.', '$60,000.'],
  rationale: 'The minimums are $30,000 for the death or injury of one person, $60,000 for more than one person, and $15,000 for property damage.',
  whyWrong: ['$15,000 is the minimum for property damage.', null, '$60,000 applies when more than one person is killed or injured.'],
  section: 'Insurance Requirements'
});

EN('hb-077', {
  q: 'If you are in a collision without proper insurance, how long can your driving privilege be suspended?',
  choices: ['Six months.', 'One year.', 'Up to four years.'],
  rationale: 'If you are in a collision and do not have proper insurance, your driving privilege will be suspended for up to four years — and it does not matter who was at fault.',
  whyWrong: ['Six months is not the period the handbook gives.', 'One year is not the period the handbook gives.', null],
  section: 'Driving Without Insurance'
});

EN('hb-078', {
  q: 'If someone is injured or killed in a collision, how soon must you report it to law enforcement?',
  choices: ['Within 24 hours.', 'Within 72 hours.', 'Within 10 days.'],
  rationale: 'If anyone is injured or killed, you must report the collision to law enforcement within 24 hours. Separately, you must file an SR-1 with DMV within 10 days.',
  whyWrong: [null, '72 hours is not the deadline the handbook gives.', '10 days is the deadline for the SR-1 report to DMV, not the report to law enforcement.'],
  section: 'What to Do if You Are in a Collision'
});

EN('hb-079', {
  q: 'How long do you have to register your vehicle after becoming a California resident or taking a job in the state?',
  choices: ['10 days.', '20 days.', '30 days.'],
  rationale: 'After you become a California resident or take a job in the state, you have 20 days to register your vehicle.',
  whyWrong: ['10 days is the deadline for transferring title after buying a vehicle.', null, '30 days is not the deadline the handbook gives.'],
  section: 'Out-of-State Vehicles'
});

EN('hb-080', {
  q: 'You are 70 or older when your licence expires. What does renewal require?',
  choices: ['It can be completed entirely online.', 'You must retake the driving test.', 'You must renew in person and pass a vision test.'],
  rationale: 'If you are 70 or older when your driver’s licence expires, you must renew in person and pass a vision test. In some cases additional tests may be required.',
  whyWrong: ['At 70 or older you must appear in person; the renewal cannot be completed entirely online.', 'A driving test is not automatic — it is required only in particular circumstances, such as a vision or health condition.', null],
  section: 'Renewing Your Driver’s License'
});
