/* English rendering of handbook questions hb-001 – hb-040.
   Choice order matches the Chinese exactly so one `answer` index serves all
   three languages. Wording follows the English handbook's own terminology. */

EN('hb-001', {
  q: 'What does a solid yellow traffic signal light mean?',
  choices: ['Speed up to get through the intersection.', 'Caution — the light is about to turn red.', 'The same as a flashing red light: come to a full stop.'],
  rationale: 'A yellow light means CAUTION; the light is about to turn red. Stop if you can do so safely. If you cannot stop safely, cautiously cross the intersection.',
  whyWrong: ['A yellow light is not an invitation to accelerate; speeding up to beat it is a common cause of intersection collisions.', null, 'Stopping first and then proceeding describes a flashing red light, not a solid yellow one.'],
  section: 'Traffic Signals'
});

EN('hb-002', {
  q: 'What should you do when a traffic light is not working at all?',
  choices: ['Pull over and wait for the light to start working.', 'Proceed through, since the signal is out of service.', 'Stop as if the intersection is controlled by STOP signs in all directions.'],
  rationale: 'When a traffic light is not working, stop as if the intersection were controlled by STOP signs in all directions, then proceed cautiously when it is safe.',
  whyWrong: ['There is no need to wait at the roadside; treat it as an all-way stop and proceed in turn.', 'A dead signal does not mean you can drive through — doing so risks a collision with cross traffic.', null],
  section: 'Traffic Light Not Working'
});

EN('hb-003', {
  q: 'What does a flashing red traffic signal light mean?',
  choices: ['STOP — then go when it is safe to do so.', 'Slow down and proceed with caution; no stop required.', 'Stop and wait for a green light.'],
  rationale: 'A flashing red signal means STOP. After stopping, you may go when it is safe — it works the same way as a STOP sign.',
  whyWrong: [null, 'Slowing without stopping describes a flashing yellow light, not a flashing red one.', 'A flashing red never turns green; waiting there would just block traffic behind you.'],
  section: 'Traffic Signals'
});

EN('hb-004', {
  q: 'What should you do when stopped at a red arrow?',
  choices: ['You may turn after coming to a complete stop.', 'You may turn slowly and with caution.', 'Do not turn; remain stopped until a green light or green arrow appears.'],
  rationale: 'A red arrow means STOP. Do not turn at a red arrow — remain stopped until a green traffic signal light or green arrow appears.',
  whyWrong: ['Stopping and then turning applies to an ordinary red light; a red arrow prohibits the turn outright.', 'A red arrow forbids the turn regardless of how slowly you make it.', null],
  section: 'Traffic Signals'
});

EN('hb-005', {
  q: 'What does a green arrow mean?',
  choices: ['You may turn, but you must yield to oncoming traffic.', 'A protected turn — oncoming vehicles are stopped by a red light.', 'You may only go straight; turning is prohibited.'],
  rationale: 'A green arrow means GO in the direction the arrow points, and it allows a protected turn: oncoming vehicles are being held by a red light.',
  whyWrong: ['Yielding to oncoming traffic applies to a flashing yellow arrow or a round green light, not a green arrow.', null, 'A green arrow is precisely what permits you to turn in the direction it points.'],
  section: 'Green Arrow'
});

EN('hb-006', {
  q: 'What does a flashing yellow arrow mean?',
  choices: ['You may turn, but the turn is not protected — yield to oncoming traffic first.', 'A protected turn you can make safely.', 'Turning is prohibited.'],
  rationale: 'A flashing yellow arrow means you can turn, but your turn is not protected from other traffic. Yield to oncoming traffic, then turn with caution.',
  whyWrong: [null, 'A protected turn is signalled by a green arrow; a flashing yellow arrow means the opposite.', 'The signal that prohibits turning is a red arrow.'],
  section: 'Flashing Yellow Arrow'
});

EN('hb-007', {
  q: 'There is only one lane going your direction and a solid yellow line on your side of the road. What does this mean?',
  choices: ['You may pass the vehicle in front of you.', 'Do not pass the vehicle in front of you.', 'The area may be used only for left turns.'],
  rationale: 'A single solid yellow line marks the center of a two-way road. If there is only one lane going your direction and a solid yellow line on your side, do not pass the vehicle ahead.',
  whyWrong: ['Passing is permitted next to a broken yellow line, not a solid one.', null, 'A solid yellow line separates opposing traffic and prohibits passing; it has nothing to do with left-turn-only areas.'],
  section: 'Single Solid Yellow Line'
});

EN('hb-008', {
  q: 'What does a broken yellow line indicate?',
  choices: ['Passing is prohibited under all circumstances.', 'This is a barrier area.', 'You may pass when the broken line is next to your lane and it is safe.'],
  rationale: 'A broken yellow line indicates you may pass if the broken line is next to your driving lane. Only pass when it is safe.',
  whyWrong: ['Solid yellow lines and double solid yellow lines are the ones that prohibit passing.', 'A barrier is two sets of double yellow lines spaced two or more feet apart.', null],
  section: 'Broken Yellow Line'
});

EN('hb-009', {
  q: 'What do double solid white lines indicate?',
  choices: ['A lane barrier — never change lanes across them.', 'You may change lanes freely.', 'They separate traffic moving in opposite directions.'],
  rationale: 'Double solid white lines mark a barrier between a regular lane and a preferential lane such as a carpool (HOV) lane. Never change lanes over them — wait until you see a single broken white line.',
  whyWrong: [null, 'Free lane changes are indicated by broken white lines.', 'Opposing traffic is separated by yellow lines; white lines separate lanes going the same direction.'],
  section: 'Double Solid White Lines'
});

EN('hb-010', {
  q: 'What is the purpose of a yield line — a row of solid white triangles?',
  choices: ['It marks the boundary of a crosswalk.', 'It shows approaching vehicles where to yield or stop.', 'It marks an area where parking is allowed.'],
  rationale: 'A yield line is a line of solid white triangles that shows approaching vehicles where to yield or stop. The triangles point toward the approaching vehicles.',
  whyWrong: ['Crosswalks are usually marked with white lines, and school crossings may use yellow ones.', null, 'Parking areas are indicated by curb colors and signs, not yield lines.'],
  section: 'Yield Line'
});

EN('hb-011', {
  q: 'Which lane is the "Number 1 Lane"?',
  choices: ['The lane closest to the right curb.', 'The lane in the middle of the road.', 'The far-left lane, also called the fast lane.'],
  rationale: 'Lanes are numbered from the left: the left (or fast) lane is the Number 1 Lane, the lane to its right is the Number 2 Lane, and so on.',
  whyWrong: ['The rightmost lane carries the highest number and is used to enter or exit the road.', 'Numbering starts at the far left, so a middle lane is never Number 1.', null],
  section: 'Choosing a Lane'
});

EN('hb-012', {
  q: 'How far may you drive in a center left turn lane?',
  choices: ['200 feet.', '500 feet.', 'There is no distance limit.'],
  rationale: 'A center left turn lane is only for preparing to turn left or make a U-turn — it is not a regular traffic lane or passing lane. You may only drive 200 feet in it.',
  whyWrong: [null, '500 feet is not the figure in the handbook; it is 200 feet.', 'There is a limit — the center left turn lane may not be used as a regular traffic lane.'],
  section: 'Center Left Turn Lanes'
});

EN('hb-013', {
  q: 'When driving slowly on a two-lane road where passing is unsafe, how many vehicles behind you require you to use a turnout?',
  choices: ['3 or more.', '5 or more.', '10 or more.'],
  rationale: 'You must use a turnout area or lane to let other vehicles pass when driving slowly on a two-lane road where passing is unsafe and there are five or more vehicles following you.',
  whyWrong: ['The handbook sets the threshold at five vehicles, not three.', null, 'You do not wait for ten — the obligation starts at five following vehicles.'],
  section: 'Turnout Areas or Lanes'
});

EN('hb-014', {
  q: 'How far before a turn should you signal?',
  choices: ['50 feet.', '300 feet.', 'At least 100 feet.'],
  rationale: 'Signal at least 100 feet before you turn — even when you do not see other vehicles around you.',
  whyWrong: ['50 feet is too short to give drivers behind you time to react.', 'About 400 feet (five seconds) applies to signalling a freeway exit; an ordinary turn is 100 feet.', null],
  section: 'Signaling'
});

EN('hb-015', {
  q: 'How many seconds before changing lanes on a freeway should you signal?',
  choices: ['At least five seconds.', 'At least two seconds.', 'At least ten seconds.'],
  rationale: 'Signal at least five seconds before you change lanes on a freeway, so traffic behind you has time to react.',
  whyWrong: [null, 'Two seconds does not give fast-moving traffic behind you enough warning.', 'The handbook specifies five seconds, not ten.'],
  section: 'Signaling'
});

EN('hb-016', {
  q: 'When may you legally make a U-turn in a residential district?',
  choices: ['At any time — there are no restrictions in residential areas.', 'When no vehicles are approaching you within 200 feet.', 'Only where a sign specifically permits U-turns.'],
  rationale: 'You may make a U-turn in a residential district if no vehicles are approaching you within 200 feet.',
  whyWrong: ['There is a condition: you may not turn if a vehicle is approaching within 200 feet.', null, 'No permitting sign is needed; you are restricted only where a NO U-TURN sign is posted.'],
  section: 'U-Turn'
});

EN('hb-017', {
  q: 'At which of these locations is a U-turn prohibited?',
  choices: ['At an intersection showing a green arrow.', 'On a divided highway where a center divider opening is provided.', 'In front of a fire station.'],
  rationale: 'The handbook prohibits U-turns in front of a fire station (and never use a fire station driveway to turn around), at railroad crossings, on one-way streets, in business districts, and wherever you cannot see clearly for 200 feet in each direction.',
  whyWrong: ['A U-turn at a green light or green arrow is legal unless a NO U-TURN sign is posted.', 'A divided highway with a center divider opening is one of the places a U-turn is permitted.', null],
  section: 'U-Turn'
});

EN('hb-018', {
  q: 'When may you turn left against a red light?',
  choices: ['From a one-way street onto a one-way street, with no sign prohibiting it, after stopping and yielding.', 'When turning from a two-way road onto a one-way street.', 'Any time there is no oncoming traffic.'],
  rationale: 'You may turn left against a red light only when turning from a one-way street onto a one-way street. Check that no sign prohibits the turn, and yield to vehicles, pedestrians, or bicyclists who have a green light.',
  whyWrong: [null, 'The street you start from must also be one-way; a left on red from a two-way road is not legal.', 'An absence of traffic is not an exception — the one-way-to-one-way condition must be met.'],
  section: 'Left Turn Against a Red Light'
});

EN('hb-019', {
  q: 'What conditions must be met to turn right at a red light?',
  choices: ['Slowing to under 5 mph is sufficient.', 'A complete stop, no NO TURN ON RED sign, and yielding to pedestrians.', 'No stop is needed as long as there is no oncoming traffic.'],
  rationale: 'You may turn right at a red light after a complete stop, unless a NO TURN ON RED sign is posted, and you must yield to pedestrians and turn only when it is safe.',
  whyWrong: ['Slowing is not stopping — a right on red requires a complete stop.', null, 'A complete stop is required whether or not other traffic is present.'],
  section: 'Right Turn Against a Red Light'
});

EN('hb-020', {
  q: 'What does a five-sided (pentagon) sign mean?',
  choices: ['A railroad crossing is ahead.', 'A roundabout is ahead.', 'You are near a school.'],
  rationale: 'A 5-sided sign means you are near a school. Drive slowly and stop for children in the crosswalk.',
  whyWrong: ['A railroad crossing is marked by a yellow and black circular sign or an X-shaped (RR) sign.', 'A roundabout warning is a diamond-shaped sign.', null],
  section: 'Signs'
});

EN('hb-021', {
  q: 'Two vehicles reach an intersection with no signs or signals at the same time. Who has the right-of-way?',
  choices: ['The vehicle on the left.', 'The vehicle on the right.', 'The larger vehicle.'],
  rationale: 'The vehicle arriving first has the right-of-way. If you arrive at the same time, give the right-of-way to the vehicle, pedestrian, or bicyclist on your right.',
  whyWrong: ['The rule is to yield to the right, not the left.', null, 'Right-of-way does not depend on the size of the vehicle.'],
  section: 'Intersections'
});

EN('hb-022', {
  q: 'At a T intersection without STOP or YIELD signs, who has the right-of-way?',
  choices: ['Vehicles, bicyclists, and pedestrians on the through road.', 'Vehicles entering from the side road.', 'Whoever sounds their horn first.'],
  rationale: 'At T intersections without STOP or YIELD signs, vehicles, bicyclists, and pedestrians on the through road — the ones continuing straight — have the right-of-way.',
  whyWrong: [null, 'Traffic coming from the side road (the stem of the T) must yield.', 'A horn is a warning device; it cannot claim right-of-way.'],
  section: 'Intersections'
});

EN('hb-023', {
  q: 'What should you do as you approach a roundabout?',
  choices: ['Speed up to enter ahead of traffic already circulating.', 'Come to a full stop at the entrance and wait for all traffic to clear.', 'Slow down and yield to all traffic already in the roundabout.'],
  rationale: 'Slow down as you approach, yield to all traffic already in the roundabout, and enter heading to the right when there is a big enough gap to merge safely.',
  whyWrong: ['Forcing your way in conflicts with traffic that already has the right-of-way.', 'A roundabout is designed for yielding rather than stopping; enter as soon as there is a safe gap.', null],
  section: 'Roundabouts'
});

EN('hb-024', {
  q: 'What should you do if you miss your exit in a roundabout?',
  choices: ['Continue around until you return to your exit.', 'Stop and back up inside the roundabout.', 'Cut across the lanes and exit immediately.'],
  rationale: 'If you miss your exit, continue around until you return to it. Do not stop or pass inside a roundabout.',
  whyWrong: [null, 'Stopping in a roundabout is prohibited, and backing up there is extremely dangerous.', 'Cutting across lanes to exit cuts off vehicles beside you.'],
  section: 'Roundabouts'
});

EN('hb-025', {
  q: 'When do pedestrians using guide dogs or white canes have the right-of-way?',
  choices: ['Only in marked crosswalks.', 'At all times.', 'Only when the signal shows WALK.'],
  rationale: 'Pedestrians using guide dogs or white canes have the right-of-way at all times. Do not honk at a blind person — they rely on sound to know a vehicle is nearby.',
  whyWrong: ['It is not limited to marked crosswalks; the right-of-way applies at all times.', null, 'It applies regardless of what the pedestrian signal shows.'],
  section: 'Pedestrians Who Are Blind'
});

EN('hb-026', {
  q: 'A vehicle ahead of you is stopped at a crosswalk. What should you do?',
  choices: ['Do not pass — there may be a pedestrian crossing you cannot see.', 'Pass carefully on the left.', 'Sound your horn to get the vehicle moving.'],
  rationale: 'The handbook warns specifically: do not pass a vehicle stopped at a crosswalk, because you may not be able to see a pedestrian crossing the street.',
  whyWrong: [null, 'The stopped vehicle is blocking your view — passing it is exactly how hidden pedestrians get struck.', 'The vehicle ahead is yielding as required; hurrying it along is not appropriate.'],
  section: 'Pedestrians'
});

EN('hb-027', {
  q: 'Two vehicles meet on a steep, narrow mountain road and neither can pass. Who has the right-of-way?',
  choices: ['The vehicle facing downhill.', 'The larger vehicle.', 'The vehicle facing uphill.'],
  rationale: 'The vehicle facing uphill has the right-of-way. The vehicle facing downhill has more control when backing up, so it should back up until the uphill vehicle can pass.',
  whyWrong: ['It is the other way around — the downhill vehicle backs up.', 'Right-of-way here depends on direction of travel, not vehicle size.', null],
  section: 'Mountain Roads'
});

EN('hb-028', {
  q: 'When you cannot change lanes to pass a bicyclist, how much space must you leave?',
  choices: ['1 foot.', 'At least 3 feet.', '6 feet.'],
  rationale: 'When you cannot change lanes to pass a bicyclist, allow at least three feet between your vehicle and the bicyclist. If you cannot give three feet, do not pass.',
  whyWrong: ['One foot is nowhere near enough; any wobble would put the cyclist under your vehicle.', null, 'More room is always better, but the legal minimum in the handbook is three feet.'],
  section: 'Passing a Bicyclist'
});

EN('hb-029', {
  q: 'How much following distance should you allow behind a motorcycle?',
  choices: ['Three seconds.', 'One second.', 'Five seconds.'],
  rationale: 'Allow a safe three-second following distance. That space helps you avoid hitting a motorcyclist if they brake suddenly or fall.',
  whyWrong: [null, 'One second gives no time to react and amounts to tailgating.', 'The handbook standard is three seconds, though more is wise in bad weather.'],
  section: 'Motorcycles'
});

EN('hb-030', {
  q: 'Which of the following is true about motorcycles sharing a lane with cars (lane splitting)?',
  choices: ['It is illegal.', 'It is legal only on freeways.', 'It is legal, and is known as lane splitting.'],
  rationale: 'It is legal to share lanes with motorcycles; this is known as lane splitting. Never try to pass a motorcycle in the same lane as you.',
  whyWrong: ['Lane splitting is legal in California.', 'It is not restricted to freeways.', null],
  section: 'Motorcycles'
});

EN('hb-031', {
  q: 'When is it legal to drive a car in a bicycle lane?',
  choices: ['When traffic is congested.', 'When turning within 200 feet of an intersection, entering or leaving the road, or parking where permitted.', 'Any time, as long as you drive carefully.'],
  rationale: 'Driving in a bicycle lane is illegal except in three cases: parking where permitted, entering or leaving the road, and turning within 200 feet of an intersection.',
  whyWrong: ['Congestion is not an exception; using the bike lane to get around traffic remains illegal.', null, 'Bicycle lanes are for bicyclists only; you may not simply drive in them.'],
  section: 'Bicycle Lanes'
});

EN('hb-032', {
  q: 'How fast may you pass a bus or streetcar stopped at a safety zone?',
  choices: ['No more than 10 mph.', 'No more than 25 mph.', 'No more than 15 mph.'],
  rationale: 'When a bus, streetcar, or trolley is stopped at a safety zone or traffic light, you may pass at no more than 10 mph.',
  whyWrong: [null, '25 mph is far too fast where passengers are boarding and alighting.', '15 mph is the limit for railroad crossings, blind intersections, and alleys — not safety zones.'],
  section: 'Buses, Streetcars, Trolleys'
});

EN('hb-033', {
  q: 'Which of the following is true about pedestrian safety zones?',
  choices: ['You may drive through when no pedestrians are present.', 'You may drive through at under 10 mph.', 'Do not drive through a safety zone under any condition.'],
  rationale: 'Safety zones are spaces set aside for pedestrians waiting for buses, streetcars, and trolleys, marked by raised buttons or dotted white lines. Do not drive through one under any condition.',
  whyWrong: ['An empty safety zone is still off limits.', 'The 10 mph figure is for passing a stopped bus or streetcar, not for driving through the zone itself.', null],
  section: 'Buses, Streetcars, Trolleys'
});

EN('hb-034', {
  q: 'On which side should you pass a large vehicle or truck?',
  choices: ['The right side.', 'The left side.', 'Either side is fine.'],
  rationale: 'Always pass a large vehicle on the left side. After passing, move ahead of it — driving alongside makes it hard for the driver to avoid hazards in the road.',
  whyWrong: ['A truck’s largest blind spot is on the right, making that the most dangerous side to pass on.', null, 'The handbook specifically directs you to pass on the left.'],
  section: 'Maneuvering'
});

EN('hb-035', {
  q: 'How far does a large vehicle travelling at 55 mph need to stop?',
  choices: ['Up to about 400 feet.', 'About 300 feet.', 'About 200 feet.'],
  rationale: 'An average passenger vehicle at 55 mph can stop within about 300 feet; a large vehicle at the same speed can take up to 400 feet. Never cut in front of a large truck and then slow suddenly.',
  whyWrong: [null, '300 feet is the stopping distance for a passenger car; a large vehicle needs more.', '200 feet is far too short — the heavier and faster the vehicle, the longer it takes to stop.'],
  section: 'Braking'
});

EN('hb-036', {
  q: 'What should you do when an emergency vehicle using a siren and red lights approaches?',
  choices: ['Maintain your speed and lane position.', 'Speed up to get out of the way.', 'Drive to the right edge of the road and stop until it has passed.'],
  rationale: 'Give the right-of-way to any emergency vehicle using a siren and red lights: drive to the right edge of the road and stop until it has passed. Failure to pull over may result in a ticket.',
  whyWrong: ['Holding your speed and position is not yielding, and can earn you a ticket.', 'Accelerating adds confusion; the correct response is to pull right and stop.', null],
  section: 'Emergency Vehicles'
});

EN('hb-037', {
  q: 'How closely may you legally follow an emergency vehicle with its siren or flashing lights on?',
  choices: ['No closer than 100 feet.', 'No closer than 300 feet.', 'No closer than 500 feet.'],
  rationale: 'It is against the law to follow within 300 feet of any fire engine, law enforcement vehicle, ambulance, or other emergency vehicle when its siren or flashing lights are on.',
  whyWrong: ['100 feet is not the distance set in the handbook.', null, '500 feet is not the distance set in the handbook.'],
  section: 'Emergency Vehicles'
});

EN('hb-038', {
  q: 'You are already in an intersection when you see an emergency vehicle approaching. What should you do?',
  choices: ['Continue through the intersection, then pull right and stop when it is safe.', 'Stop immediately where you are in the intersection.', 'Back out of the intersection.'],
  rationale: 'If you are in an intersection when you see an emergency vehicle, continue through the intersection. Drive to the right as soon as it is safe and stop.',
  whyWrong: [null, 'Stopping inside the intersection blocks every direction, including the emergency vehicle’s route.', 'Backing up in an intersection is extremely dangerous and unexpected by traffic behind you.'],
  section: 'Emergency Vehicles'
});

EN('hb-039', {
  q: 'What should you do when approaching a stationary emergency or road work vehicle with flashing lights?',
  choices: ['Maintain your speed as you pass.', 'Sound your horn to alert them you are approaching.', 'Move over and slow down.'],
  rationale: 'Drivers must move over and slow down for stationary emergency vehicles or tow trucks displaying flashing amber warning lights, and for stopped road work vehicles with flashing or amber warning lights.',
  whyWrong: ['Maintaining speed does not meet the legal Move Over and Slow Down requirement.', 'Sounding the horn does nothing to protect people working beside the vehicle.', null],
  section: 'Move Over and Slow Down'
});

EN('hb-040', {
  q: 'A law enforcement officer’s directions conflict with the signs and signals at the scene. Which do you follow?',
  choices: ['The signs and signals.', 'The officer’s or firefighter’s directions.', 'Stop and wait until the conflict resolves.'],
  rationale: 'Obey any direction, order, or signal given by a law enforcement officer or firefighter — even if it conflicts with existing signs, signals, or laws.',
  whyWrong: ['On-scene personnel take precedence over signs and signals because they can see the actual situation.', null, 'Sitting still obstructs the very traffic management the officer is carrying out.'],
  section: 'Emergency Vehicles'
});
