/* English rendering of the 40 official sample-test questions.
   Question and choice text is VERBATIM from DMV's English editions of the same
   four tests, including their typos ("with 5 days", "Occuring").

   IMPORTANT: DMV lists the choices in a DIFFERENT ORDER in English than in
   Chinese. The arrays below are reordered to match the Chinese ordering so one
   `answer` index stays correct for all three languages. Never restore DMV's
   English order here without also remapping `answer`. */

EN('official-t1-q1', {
  q: 'When is it legal to drive off the road to pass another vehicle?',
  choices: ['If there are two or more one-way lanes.', 'It is not legal under any conditions.', 'If the vehicle ahead is turning left.'],
  rationale: 'The handbook is explicit: never drive off the paved or main-traveled part of the road to pass. So there is no condition under which it is legal. Note that the Chinese edition of this question drops the words “off the road”, which makes it read as though it were asking about passing in general.',
  whyWrong: ['Two or more lanes in your direction is a condition for passing on the right — it does not permit leaving the roadway.', null, 'You may pass on the right when the driver ahead is turning left, but you must still stay on the paved road.'],
  section: 'Passing'
});

EN('official-t1-q2', {
  q: 'When a railroad crossing is not controlled, what is the speed limit when you are within 100 feet and cannot see for 400 feet in both directions?',
  choices: ['15 mph.', '10 mph.', '25 mph.'],
  rationale: 'The speed limit is 15 mph within 100 feet of a railroad crossing when you cannot see the tracks for 400 feet in both directions. You may go faster only if the crossing is controlled by gates, a warning signal, or a flagman.',
  whyWrong: [null, '10 mph is not the figure the handbook gives.', '25 mph is the default limit in business or residential districts, not at a blind railroad crossing.'],
  section: 'Near Railroad or Light Rail Tracks'
});

EN('official-t1-q3', {
  q: 'Which of the following is the proper procedure for parallel parking?',
  choices: ['Stop next to the vehicle in front of the open space, and then back into the space.', 'Stop next to the vehicle behind the open space, and then drive forward into the space.', 'Drive forward into the space without stopping.'],
  rationale: 'Pull up alongside the vehicle in front of the space, leaving about two feet, stop once your rear bumper lines up with the front of the space, then back in at about a 45-degree angle.',
  whyWrong: [null, 'This has it backwards — you pull alongside the vehicle in front of the space and reverse in, not alongside the one behind it.', 'You must stop and check your blind spots first; driving straight in cannot line the car up and risks hitting the vehicles beside you.'],
  section: 'Parallel Parking'
});

EN('official-t1-q4', {
  q: 'What speed should you be driving when entering onto a highway?',
  choices: ['At or near the speed of traffic.', 'Faster than the speed of traffic.', 'Slower than the speed of traffic.'],
  rationale: 'The handbook says to be at or near the speed of traffic and to merge into a gap large enough for your vehicle. Do not stop on the on-ramp unless absolutely necessary.',
  whyWrong: [null, 'Entering faster than traffic makes it harder to find a safe gap and increases the risk of a rear-end collision.', 'Entering slower forces highway traffic to brake suddenly, a common cause of on-ramp collisions.'],
  section: 'Merging and Exiting'
});

EN('official-t1-q5', {
  q: 'How many feet away should you switch from high beam to low beam headlights when approaching a vehicle coming towards you?',
  choices: ['900 feet.', '700 feet.', '500 feet.'],
  rationale: 'Dim your high beams to low within 500 feet of a vehicle coming toward you — or within 300 feet of a vehicle you are following.',
  whyWrong: ['900 feet is not the distance the handbook gives.', '700 feet is not the distance the handbook gives.', null],
  section: 'Using Your Headlights'
});

EN('official-t1-q6', {
  q: 'Who can legally park next to curb painted blue?',
  choices: ['Someone who is either picking up or dropping off passengers at this location.', 'A person who is disabled and has a special placard or vehicle license plate for disabled persons.', 'A person who will only be parked at the curb for less than 15 minutes.'],
  rationale: 'Blue curbs are for a disabled person, or someone driving a disabled person, with a special placard or special license plate.',
  whyWrong: ['A white curb is the one for picking up or dropping off passengers.', null, 'There is no short-stay exception at a blue curb — without the placard or plate you cannot park there at all.'],
  section: 'Parking at Colored Curbs'
});

EN('official-t1-q7', {
  q: 'What should you do when there is a school bus ahead that starts flashing yellow warning lights?',
  choices: ['Slow down and prepare to stop.', 'Stop immediately and remain stopped.', 'Cautiously pass the school bus on the left.'],
  rationale: 'Flashing yellow lights mean the bus is preparing to stop to let children off. They warn you to slow down and prepare to stop.',
  whyWrong: [null, 'A full stop is required once the red lights flash; at the yellow stage you only need to slow and prepare.', 'The bus is about to unload children — passing is dangerous, and once the red lights flash it carries a fine of up to $1,000 and a one-year suspension.'],
  section: 'Around Children'
});

EN('official-t1-q8', {
  q: 'Which of the following is a requirement of California’s Basic Speed Law?',
  choices: ['Always drive the speed limit, regardless of conditions.', 'Match your speed to that of your surrounding traffic.', 'Never drive faster than is safe for current conditions.'],
  rationale: 'The Basic Speed Law says you may never drive faster than is safe for current road conditions — even if you are within the posted limit.',
  whyWrong: ['The opposite is true: in rain, fog, or congestion, driving the posted limit can itself be illegal.', 'Matching surrounding traffic is not a legal requirement; if that traffic is speeding, so are you.', null],
  section: 'Manage Your Speed'
});

EN('official-t1-q9', {
  q: 'You must notify the DMV with 5 days, if you:',
  choices: ['Receive a traffic violation.', 'Sell or transfer ownership of your vehicle.', 'Paint your vehicle a different color.'],
  rationale: 'When you sell a vehicle you must notify DMV within five days by filing a Notice of Transfer and Release of Liability. (Buying a vehicle gives you 10 days to transfer title.)',
  whyWrong: ['The court notifies DMV of a traffic conviction; you do not file it yourself.', null, 'Repainting your vehicle does not require notice to DMV within five days.'],
  section: 'Buying or Selling a Vehicle'
});

EN('official-t1-q10', {
  q: 'Which of the following is an example of a safe driving practice?',
  choices: ['Staring only at the middle of the road.', 'Always keep your eyes moving to scan the surroundings.', 'Using your high-beam headlights in the fog'],
  rationale: 'Keep your eyes moving and scan the road at least 10 seconds ahead of your vehicle.',
  whyWrong: ['Fixing on the middle of the road means missing pedestrians, cyclists, and vehicles pulling out from the sides.', null, 'In fog you use low beams — high beams reflect back off the fog and cause glare, making visibility worse.'],
  section: 'Be Aware of Your Surroundings'
});

EN('official-t2-q1', {
  q: 'What should you do when reaching an intersection where a person operating a motorized wheelchair has entered the crosswalk?',
  choices: ['Remain stopped behind the crosswalk line until the motorized wheelchair has safely finished crossing.', 'Assume right-of-way if the motorized wheelchair stops in the crosswalk.', 'Remain stopped behind the nearest crosswalk line until the motorized wheelchair is beyond the range of your vehicle.'],
  rationale: 'A person using a wheelchair is a pedestrian and has the right-of-way. You must stop and allow them to safely finish crossing — and the handbook notes people with disabilities may need extra time.',
  whyWrong: [null, 'Pedestrians have the right-of-way; you cannot take it back because they paused mid-crossing.', 'Clearing your vehicle’s path is not enough — the handbook says to let the pedestrian safely finish crossing.'],
  section: 'Pedestrians'
});

EN('official-t2-q2', {
  q: 'Which of the following is true about large trucks?',
  choices: ['They are made of many trailers, which make them more maneuverable than passenger vehicles.', 'They have large blind spots, which makes it difficult for the truck driver to see other vehicles.', 'They have large and powerful emergency brakes, which gives them the capability to stop quickly.'],
  rationale: 'Large vehicles have big blind spots, called No Zones. The handbook’s rule of thumb: if you cannot see the truck’s side mirrors, the truck driver cannot see you.',
  whyWrong: ['The opposite — the longer the vehicle, the wider it must swing to turn, making it less maneuverable than a car.', null, 'Large vehicles need more distance to stop. At 55 mph a car stops in about 300 feet; a large vehicle can take up to 400 feet.'],
  section: 'Blind Spots (the No Zone)'
});

EN('official-t2-q3', {
  q: 'What is one of the most common causes of traffic collisions?',
  choices: ['Better traffic flow.', 'Paying attention to your surroundings.', 'Driver distractions.'],
  rationale: 'Driver distraction heads the handbook’s list of the most common causes of collisions, alongside unsafe speed, improper turns, and right-of-way violations.',
  whyWrong: ['Smoother traffic flow reduces collisions rather than causing them.', 'Paying attention to your surroundings is safe practice — it prevents collisions.', null],
  section: 'Causes of Collisions'
});

EN('official-t2-q4', {
  q: 'Any driver who willfully flees or attempts to evade law enforcement, during which a person is seriously injured, is subject to:',
  choices: ['Imprisonment in a state prison for up to seven years.', 'A fine of less than $1,000.', 'Attending an anger-management class.'],
  rationale: 'Causing serious bodily injury during a law enforcement pursuit is punishable by up to seven years in state prison.',
  whyWrong: [null, 'A fine does not reflect the severity of this offense; the handbook specifies imprisonment.', 'An anger-management class is not a penalty prescribed for this offense.'],
  section: 'Evading Law Enforcement'
});

EN('official-t2-q5', {
  q: 'What should a driver do who is stopped at an intersection and wants to make a left turn?',
  choices: ['Turn immediately if there are no pedestrians.', 'Take the right-of-way turn before oncoming traffic.', 'Give the right-of-way to any approaching vehicle that is close enough to be dangerous.'],
  rationale: 'When turning left, give the right-of-way to any pedestrian or approaching vehicle close enough to be dangerous, and turn only when it is safe.',
  whyWrong: ['Even with no pedestrians present, you must still yield to oncoming vehicles.', 'Cutting in front of oncoming traffic is exactly how left-turn collisions happen.', null],
  section: 'Intersections'
});

EN('official-t2-q6', {
  q: 'In addition to setting your parking brake, what should you do when parking on a hill?',
  choices: ['Make sure your vehicle is left in the “neutral” position.', 'Make sure the front vehicle wheels are parallel to the road.', 'Make sure your vehicle is in the “park” position or in gear.'],
  rationale: 'Set the parking brake and leave the vehicle in park — or in gear for a manual transmission.',
  whyWrong: ['Leaving it in neutral lets the vehicle roll; it is the worst option here.', 'The front wheels should be turned toward or away from the curb, not left parallel, so the curb can block the vehicle if it rolls.', null],
  section: 'Parking on a Hill'
});

EN('official-t2-q7', {
  q: 'You are under 18 years of age and have had your license for eight months. You may drive:',
  choices: ['At any time.', 'Between 5 a.m. and 11 p.m.', 'Between 7 a.m. and 8 p.m.'],
  rationale: 'During the first 12 months, a provisional driver cannot drive between 11 p.m. and 5 a.m. — which leaves 5 a.m. to 11 p.m.',
  whyWrong: ['Provisional drivers in their first 12 months are subject to a night-time restriction.', null, 'This window is stricter than the law actually requires.'],
  section: 'Minor’s Restrictions and Exceptions'
});

EN('official-t2-q8', {
  q: 'Where should you begin a left turn from a one-way street onto a one-way street?',
  choices: ['The lane closest to the center of the street.', 'The far-left lane.', 'You can turn from any lane.'],
  rationale: 'Turning left from a one-way street onto a one-way street, start the turn from the far-left lane.',
  whyWrong: ['Starting from the lane closest to the center applies to two-way streets, not one-way streets.', null, 'The turn must begin in the designated far-left lane, not a lane of your choosing.'],
  section: 'Examples of Turns'
});

EN('official-t2-q9', {
  q: 'You are required to notify DMV by filing a Report of Traffic Accident Occuring in California (SR-1) form if:',
  choices: ['You failed to pay your registration fees.', 'You were involved in a collision with more than $1,000 in damages.', 'You allowed a licensed driver from another state to drive your vehicle.'],
  rationale: 'You must file an SR-1 within 10 days if the collision caused more than $1,000 in property damage, or anyone was injured or killed — regardless of fault, and even on private property.',
  whyWrong: ['Registration fees are a vehicle registration matter, unrelated to collision reporting.', null, 'Letting an out-of-state licensed driver use your vehicle does not require an SR-1.'],
  section: 'Reporting a Collision'
});

EN('official-t2-q10', {
  q: 'At what point during a rainfall are roads slippery on a hot day?',
  choices: ['When it has been raining for a few hours.', 'For the first several minutes.', 'Immediately after it has stopped raining.'],
  rationale: 'The first few minutes are the most slippery, because the rain lifts oil and dust off the surface before washing it away. This is worst after a long dry, hot spell.',
  whyWrong: ['After a few hours the oil has largely washed away and the road is less slippery.', null, 'Once the rain stops the surface begins drying and traction returns.'],
  section: 'Slippery Roads'
});

EN('official-t3-q1', {
  q: 'What color curb does not allow vehicles to stop or park?',
  choices: ['Yellow.', 'Red.', 'White.'],
  rationale: 'A red curb means no stopping, standing, or parking. Only buses may stop at a red zone marked for buses.',
  whyWrong: ['A yellow curb allows a timed stop to load or unload passengers and freight.', null, 'A white curb allows a stop just long enough to pick up or drop off passengers.'],
  section: 'Parking at Colored Curbs'
});

EN('official-t3-q2', {
  q: 'You are required to notify DMV by filing a Report of Traffic Accident Occuring in California (SR-1) form if:',
  choices: ['Your vehicle fails a smog test.', 'You were involved in a collision with an injury.', 'You change your insurance company.'],
  rationale: 'Any collision in which someone was injured or killed — even slightly — must be reported to DMV within 10 days on an SR-1. Law enforcement will not file it for you.',
  whyWrong: ['A smog test is a vehicle registration matter, unrelated to collision reporting.', null, 'Changing insurers does not require an SR-1.'],
  section: 'Reporting a Collision'
});

EN('official-t3-q3', {
  q: 'What is indicated by two sets of double yellow lines spaced 2 feet or more apart?',
  choices: ['Carpool/High-Occupancy (HOV) lane.', 'Barrier.', 'Lanes of traffic moving in the same direction.'],
  rationale: 'Two sets of solid double yellow lines two or more feet apart are considered a barrier. Do not drive on or over it, or turn left or make a U-turn across it, except at designated openings.',
  whyWrong: ['HOV lanes are marked with a diamond symbol and the words Carpool Lane, not by two sets of yellow lines.', null, 'Yellow lines separate opposing traffic; lanes going the same direction are separated by white lines.'],
  section: 'Lane Markings'
});

EN('official-t3-q4', {
  q: 'What should you do to make a right turn at an upcoming intersection?',
  choices: ['Merge into the bicycle lane before making the turn.', 'Wait until the bicycle lane ends, then make the turn.', 'Make the turn from your current lane and do not enter the bicycle lane.'],
  rationale: 'Merge into the bike lane before turning — you may enter it no more than 200 feet before the turn — after checking your blind spots for bicyclists. This keeps a cyclist from being caught between you and the curb.',
  whyWrong: [null, 'The bike lane usually turns to a dashed line near an intersection precisely so you can merge into it; there is no need to wait for it to end.', 'Turning across the bike lane from outside it cuts straight through a cyclist’s path — the classic “right hook” collision.'],
  section: 'Right Turns'
});

EN('official-t3-q5', {
  q: 'A highway has a posted speed limit of 65 mph. What does this mean?',
  choices: ['You may drive faster only if there are no other vehicles.', 'You must always drive 65 mph on that highway.', 'You must drive 65 mph only if driving conditions are ideal.'],
  rationale: 'A posted limit is the ideal maximum. When conditions are not ideal — rain, fog, congestion — the safe speed is below 65 mph.',
  whyWrong: ['An empty road does not permit exceeding the posted limit.', 'The limit is a ceiling, not a speed you must maintain; poor conditions require slowing down.', null],
  section: 'Manage Your Speed'
});

EN('official-t3-q6', {
  q: 'When is parking in a crosshatched (diagonal lines) area allowed?',
  choices: ['It is never allowed to park in a crosshatched (diagonal lines) area.', 'If the area is labeled as a bicycle lane, unless otherwise posted.', 'If the area is at least twenty feet away from a railroad track.'],
  rationale: 'The handbook lists the crosshatched area next to a designated disabled parking space among the places you may never park — it is the access space for a wheelchair.',
  whyWrong: [null, 'A bicycle lane is itself a place you cannot park, so this is no exception.', 'Distance from a railroad track has nothing to do with the crosshatched-area rule.'],
  section: 'Illegal Parking'
});

EN('official-t3-q7', {
  q: 'What should you do if your cell phone rings and you do not have a hands-free device?',
  choices: ['Answer the call and keep the conversation short.', 'Do not answer the phone and let it go to voice mail.', 'Answer the call if you are stopped at a red light.'],
  rationale: 'The handbook is direct: do not answer your cell phone if it rings — let the call go to voicemail. If you must make a call, pull safely off the road first.',
  whyWrong: ['Driving while using a handheld phone is illegal; keeping it short does not make it legal.', null, 'You are still driving while waiting at a red light, so holding the phone is equally illegal.'],
  section: 'Cell Phones and Texting'
});

EN('official-t3-q8', {
  q: 'If a traffic signal is green, but traffic is blocking the intersection, what should you do?',
  choices: ['Partially enter the intersection, as allowed by traffic.', 'Wait and do not enter the intersection until your vehicle can get completely across.', 'Drive around the traffic on the shoulder to help ease the congestion.'],
  rationale: 'Even on a green light, it is against the law to enter and block an intersection when there is not enough space to get completely across before the light turns red.',
  whyWrong: ['Partially entering is exactly what blocks the intersection, and it is illegal.', null, 'The shoulder is not a traffic lane; driving on it to get around traffic is illegal.'],
  section: 'Intersections'
});

EN('official-t3-q9', {
  q: 'In which lane should you end your turn when making a right turn?',
  choices: ['The lane closest to the left edge of the road.', 'Any lane free of traffic.', 'The lane closest to the right edge of the road.'],
  rationale: 'Begin and end a right turn in the lane closest to the right edge of the road. Do not swing wide into another lane.',
  whyWrong: ['Ending in a left lane means crossing several lanes — that is swinging wide.', 'You cannot pick a lane just because it is empty; a right turn must stay in the rightmost lane.', null],
  section: 'Right Turns'
});

EN('official-t3-q10', {
  q: 'When is it required for you to obey directions from a crossing guard?',
  choices: ['At all times.', 'During school hours only.', 'Only when children are present in front of a school.'],
  rationale: 'The handbook says to obey the directions of school safety patrols and crossing guards at all times. Likewise, an officer’s or firefighter’s directions override existing signs and signals.',
  whyWrong: [null, 'Their authority is not limited to school hours.', 'You must obey the crossing guard whether or not children are present.'],
  section: 'Around Children'
});

EN('official-t4-q1', {
  q: 'Which of the following is true about large trucks?',
  choices: ['They are made of many trailers, which make them more maneuverable than passenger vehicles.', 'They have large blind spots, which makes it difficult for the truck driver to see other vehicles.', 'They have large and powerful emergency brakes, which gives them the capability to stop quickly.'],
  rationale: 'Large vehicles have big blind spots, called No Zones. The handbook’s rule of thumb: if you cannot see the truck’s side mirrors, the truck driver cannot see you.',
  whyWrong: ['The opposite — the longer the vehicle, the wider it must swing to turn, making it less maneuverable than a car.', null, 'Large vehicles need more distance to stop. At 55 mph a car stops in about 300 feet; a large vehicle can take up to 400 feet.'],
  section: 'Blind Spots (the No Zone)'
});

EN('official-t4-q2', {
  q: 'Which of the following is illegal while driving?',
  choices: ['Wearing a headset or ear plugs that covers both ears.', 'Wearing a headset or ear plugs that covers one ear.', 'Using cruise control on residential streets.'],
  rationale: 'It is illegal to wear a headset or earplugs in both ears while driving, because you must be able to hear horns, sirens, motorcycles, or screeching tires.',
  whyWrong: [null, 'Covering only one ear is not illegal — the other ear can still hear what is happening on the road.', 'Cruise control is not itself illegal (though the handbook advises against it in high wind).'],
  section: 'An Introduction to Driving'
});

EN('official-t4-q3', {
  q: 'What should you do when traffic is slow and heavy, and you must cross railroad tracks before reaching the upcoming intersection?',
  choices: ['Begin crossing when the vehicle in front of you is crossing the tracks.', 'Wait on the tracks until the stoplight at the intersection turns green.', 'Wait until you can completely cross the tracks before proceeding.'],
  rationale: 'Never stop on railroad tracks. If there is not enough room on the far side to get completely across, wait before the tracks — being stopped on them risks injury or death.',
  whyWrong: ['Following the car ahead onto the tracks can leave you stranded on them if traffic stops.', 'Waiting on the tracks for a light to change is the most dangerous option here.', null],
  section: 'Near Railroad or Light Rail Tracks'
});

EN('official-t4-q4', {
  q: 'Which of the following should you do if you are being followed by a tailgater?',
  choices: ['Change lanes and allow the tailgater to pass.', 'Tap the brakes to signal you are moving at a slower pace.', 'Increase your speed to match the speed of the vehicle.'],
  rationale: 'Maintain your course and speed, then when safe merge right into another lane and let the tailgater pass.',
  whyWrong: [null, 'Tapping the brakes can provoke the other driver or cause the rear-end collision you are trying to avoid.', 'Speeding up pushes you past a safe or legal speed and does not solve the problem.'],
  section: 'Tailgating (Following Too Closely)'
});

EN('official-t4-q5', {
  q: 'When you are driving the speed limit, you can be given a speeding ticket:',
  choices: ['If road or weather conditions require a slower speed.', 'Under no circumstances because it is always legal.', 'Only if you are approaching a sharp curve in the road.'],
  rationale: 'Under the Basic Speed Law you may never drive faster than is safe for current conditions. In rain, fog, or congestion you can be cited even at the posted limit.',
  whyWrong: [null, 'It is not always legal; the posted limit assumes ideal driving conditions.', 'It is not limited to curves — any road or weather condition requiring a slower speed applies.'],
  section: 'Manage Your Speed'
});

EN('official-t4-q6', {
  q: 'Which lights should be used if a driver is having trouble seeing other vehicles because of dust or smoke blowing across the roadway?',
  choices: ['Emergency lights.', 'Parking lights.', 'Headlights.'],
  rationale: 'Use your headlights when conditions such as clouds, dust, smoke, or fog prevent you from seeing other vehicles.',
  whyWrong: ['Emergency flashers warn traffic behind you of a hazard or a disabled vehicle; they are not for driving visibility.', 'It is illegal to drive using only parking lights.', null],
  section: 'Using Your Headlights'
});

EN('official-t4-q7', {
  q: 'What should you do to make a right turn at an upcoming intersection?',
  choices: ['Wait until the bicycle lane ends, then make the turn.', 'Make the turn from your current lane and do not enter the bicycle lane.', 'Merge into the bicycle lane before making the turn.'],
  rationale: 'Merge into the bike lane before turning — you may enter it no more than 200 feet before the turn — after checking your blind spots for bicyclists. This keeps a cyclist from being caught between you and the curb.',
  whyWrong: ['The bike lane usually turns to a dashed line near an intersection precisely so you can merge into it; there is no need to wait for it to end.', 'Turning across the bike lane from outside it cuts straight through a cyclist’s path — the classic “right hook” collision.', null],
  section: 'Right Turns'
});

EN('official-t4-q8', {
  q: 'What does a flashing yellow traffic signal light direct a driver to do?',
  choices: ['Stop and proceed when the traffic allows you to proceed safely.', 'Slow down and proceed with caution.', 'Stop and wait for a flashing green signal.'],
  rationale: 'A flashing yellow light is a warning to proceed with caution. Slow down and be alert — you do not need to stop.',
  whyWrong: ['Stopping first and then proceeding describes a flashing red light, not a flashing yellow one.', null, 'A flashing yellow does not turn green; stopping to wait would just obstruct traffic behind you.'],
  section: 'Traffic Signals'
});

EN('official-t4-q9', {
  q: 'What should you do if a pedestrian is still in the crosswalk after the “DON’T WALK” sign begins to flash and your light has turned green?',
  choices: ['Wait until the pedestrian signals that it is okay for you to proceed.', 'Wait until the pedestrian is out of your path before proceeding.', 'Wait until the pedestrian has crossed the street completely before proceeding.'],
  rationale: 'Drivers must yield to pedestrians even when the DON’T WALK light is flashing. Wait until the pedestrian is out of your path, then proceed.',
  whyWrong: ['Pedestrians are under no obligation to signal you, so waiting for their go-ahead is not the rule.', null, 'You need only wait until they are clear of your path, not until they have reached the far side.'],
  section: 'Pedestrian Signals or Signs'
});

EN('official-t4-q10', {
  q: 'When is it legal for a person to drive with an alcoholic beverage container that has been opened?',
  choices: ['If the container is under the front seat.', 'If the container is in the trunk of the vehicle.', 'If the container is in the glove compartment.'],
  rationale: 'An opened container must be kept in the trunk, or in a place where passengers do not sit. Unopened containers must stay sealed.',
  whyWrong: ['Under the front seat is still within reach inside the passenger compartment, which is illegal.', null, 'The handbook states specifically that it is illegal to keep an open container of alcohol in your glove box.'],
  section: 'Use or Possession of Alcohol or Cannabis Products in a Vehicle'
});
