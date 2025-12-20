const DATA = {
  SHIPS: {
Capitals: {
  Astral: {
    tier: "C+",
    description:
      "Biggest carrier in the game but also the biggest let-down. 6 hangar bays with Recall Device is very strong mind you, you just need to remember this thing costs 50 DP, same as a Pegasus. And there's frankly not much to the ship besides 6 bays, you have 2 large missiles for long range support, but so many other capitals also have that. Ship itself is very fragile, not wise to have it stay in frontlines. It's just a cool little toy that's fun to use, until you figure out you can make a better use of your limited deployment points.",
    images: [
      "Build/Capitals/Astral/2yiV7fG.png",
      "Build/Capitals/Astral/4qGVp5t.png",
      "Build/Capitals/Astral/vQ6uuHG.png"
    ]
  },

  Atlas_MkII: {
    tier: "B-",
    description:
      "Still good as before, cheap glass cannon that you can honestly spam for the price. Campaign stats are not good but this ship is cheaper than even some cruisers, 24 DP for 2 large missiles and 2 large ballistics with Accelerated Ammo Feeder is insane value. Just take care of it as it has destroyer level defenses and will die to a squirrel sneeze. It's also very slow so you kinda have to wait for it to get inside the actual fight.\n\nEDIT: u/BoyKisser39 made a good point that the best missiles for Atlas got nerfed, so it's less crazy than before. Knocking it down do B-.",
    images: [
      "Build/Capitals/Atlas_MkII/ABOty6W.png",
      "Build/Capitals/Atlas_MkII/i4rdttt.png"
    ]
  },

  Conquest: {
    tier: "B / A+",
    description:
      "My beloved Conquest, being so balanced I can't remember the last time it got buffs/nerfs. Battlecruiser means 8 burn, and it also means player bait ship. Basically every such ship has great mobility for a capital, but can't really brawl like one, so the AI is always going to perform worse than a player. Not to say it's bad that way, you can make an easy sniper build for AI that will hang back and fire Gauss Cannons with missiles. Very versatile with many different weapons you can choose. Biggest downside is its shield, worst one in the whole game. Stabilized Shields is almost mandatory in my eyes. And for everyone brand new, asymmetrical builds are where it's at, give one side full firepower, and other PD, you'll need OP elsewhere.",
    images: [
      "Build/Capitals/Conquest/9DJGt22.png",
      "Build/Capitals/Conquest/ixS1XCe.png"
    ]
  },

  Executor: {
    tier: "A",
    description:
      "Didn't have high expectations for this ship, judging by the blog posts. And yet it turned out really good. It has little bit of everything, just don't put flux hungry ballistics on it as the flux stats are not good intially. It's really worth it to max them out so you can actually use it as a battleship. 50 speed is great for a battleship, although I still think it's weak to flankers as it has 270 degree shields with mediocre maneuverability. Don't let it stay alone for long and you'll be good. Built-in Energy Bolt Coherer makes it really nice to use Gigacannons and Autopulses. Makes you feel like a mini Paragon but with much much greater kinetic options in both missiles and ballistic mounts.",
    images: [
      "Build/Capitals/Executor/wdnlTHM.png"
    ]
  },

  Invictus: {
    tier: "A+",
    description:
      "This one is incredibly hard to rank as Invictus is truly a dreadnought, point it at another big thing, and watch the big thing go boom. So in fights where you're fighting many enemy capitals and big cruisers, it's so soo good (might be the best ship in the game for attacking stations, except [REDACTED] ones). But fighting numerous small opponents is pure misery, I couldn't give it a higher rank due to this plus the horrible campaign stats. I feel like large missiles are almost a trap choice on Invictus due to super low OP pool and its hullmods. It's all about ballistic dakka baby. The ship also has 4 fucking built-in hullmods which makes it unique but please read what they all do before shouting \"broken ship\". So yeah, probably the most specialised capital you can have in your fleet.",
    images: [
      "Build/Capitals/Invictus/dYN2TDE.png"
    ]
  },

  Legion: {
    tier: "A-",
    description:
      "Base Legion got some very nice buffs, but since buffs affect both versions, XIV variant will always be superior. 5 composite medium mounts scream missiles here, since you'll barely have flux for firing 2 large ballistics, just remember to have enough PD. Which you can ideally get from its fighter bays. Both Sarrisa and Xyphos wings are excellent here, going for a true battlecarrier feel. It's highly armoured, it's slow and vulnerable to flankers, it's an Onslaught with fighter bays.",
    images: [
      "Build/Capitals/Legion/MEuyLVW.jpeg",
      "Build/Capitals/Legion/ahDVSdr.png",
      "Build/Capitals/Legion/cfuGmMc.png",
      "Build/Capitals/Legion/cuOpQaW.png"
    ]
  },

  Legion_XIV: {
    tier: "A+",
    description:
      "AKA the superior Legion, it trades 2 large ballistics for 2 large missiles, medium composites become ballistics. That's it, all you need to know that this thing is a beast. Burn drive + large torpedoes = fun time. And as any XIV variant, it gets more armour, OP and flux for having less speed. But it was a slow brick to begin with so basically only upsides. You could even Shield Shunt it and it won't become worse.",
    images: [
      "Build/Capitals/Legion_XIV/esAkUZL.png",
      "Build/Capitals/Legion_XIV/jRhJp4P.png",
      "Build/Capitals/Legion_XIV/pGDW7gj.jpeg"
    ]
  },

  Odyssey: {
    tier: "B- / A+",
    description:
      "High tech battlecruiser that goes really fast, it makes for a cool player ship. AI usage as is the nature with battlecruisers is mediocre, it's a ship that takes skill since the system propels it only forward. 2 fighter bays and plenty of missile mounts gives it a good chunk of flux free firepower, but the main thing is the large energy turrets where Plasma Cannon truly shines, probably the best ship for it since it doesn't care about range. Just don't give 2 Plasma Cannons to AI, go for something a bit lighter. Excellent campaign stats which is nice when you're tugging a 45 DP capital around.",
    images: [
      "Build/Capitals/Odyssey/infctaE.png",
      "Build/Capitals/Odyssey/uDCjaMk.png"
    ]
  },

  Onslaught: {
    tier: "A / S-",
    description:
      "Fitting name here, the most DP efficient ship in the game in my humble opinion. It absolutely has way too many mounts but who cares if the target dies first. Very similar to Legion in that it's slow (Burn drive helps a lot getting into action) and vulnerable in the back, but very very tanky. Pile up those armour hullmods and skills and watch it mow through the enemies. AI can be a bit goofy sometimes, base speed is slow so it takes a while to get out of sticky situations. Though if you have enough EMP resistance and weapon durablity, you don't even care. Player piloted is when it truly shines, fat assassin being its role. Forgiving ship since it takes a while to die, but unforgiving if you get caught alone, so always have escorts. 4 mediums are really nice for Annihilator Pods, giving you constant pressure (you'll need Expanded Missile Racks tho).\n\nXIV version is everything I said but better. So A+ / S",
    images: [
      "Build/Capitals/Onslaught/4YMoh3v.png",
      "Build/Capitals/Onslaught/WOo7Qot.png",
      "Build/Capitals/Onslaught/dNdZgAa.png"
    ]
  },

  Paragon: {
    tier: "A-",
    description:
      "Who would've thought we'll be in a patch where Paragon has this much competition. Granted it didn't receive any nerfs, there are just more options now, that don't take so long to get into fights. It is still the king of turtling with Fortress shield. 60 DP is the same as Invictus, this is just the less reckless sidegrade. Where Invictus never stops firing and tanking, the donut ship unloads its burst, hides behing Fortress shield to get rid of soft flux, and then repeat. Also very nice for attacking battlestations. All in all very good all around ship, that needs to have the fleet move with it unless you want the rest to die and the Paragon is still slowly approaching.",
    images: [
      "Build/Capitals/Paragon/4pR6wBg.png",
      "Build/Capitals/Paragon/6j7TXYP.png",
      "Build/Capitals/Paragon/Qi5XZBf.png",
      "Build/Capitals/Paragon/xFoqofp.png"
    ]
  },

  Pegasus: {
    tier: "A / S",
    description:
      "4 large missiles with Fast Missile Racks. I can end the decription right there but the ship has so much more to give. Tons of OP, kinetic options, beam spam and has surpringly good armour for a missile battleship. Flux stats are not good for a 50 DP ship but it's not like you need them for missile showers. AI tends to overkill targets with missiles and needlessly uses FMR charges, if it weren't for that it would've been straight S in all cases. Also you still probably need another ship that will do the tanking when the enemy gets too close. And as Executor, it's weak to flankers unless it has Locusts or Hydras.",
    images: [
      "Build/Capitals/Pegasus/Q9HFlpx.png"
    ]
  },

  Prometheus_MkII: {
    tier: "B / B+",
    description:
      "Nothing really changed from the last time honestly. HIL is easier on the flux which is nice and you have Sarissa if you want extra close range protection. 2 large hybrid mounts is a really unique thing to have, especially for a Pather capital, and it synergises so well with many options. Kinetic ballistic and Tachyon Lance or HIL is never a bad option. It's reasonably tanky and fast but with shit shields. Thankfully it's only 30 DP.",
    images: [
      "Build/Capitals/Prometheus_MkII/WeZJ98Z.png",
      "Build/Capitals/Prometheus_MkII/aMH70Ry.png"
    ]
  },

  Retribution: {
    tier: "D / A-",
    description:
      "Commonly called \"the fart ship\"; Retribution probably has the biggest gap between AI and player usage. And that is precisely for the most obvious glass cannon ship award. 800 armour with a narrow shield and you can't even put ITU on this battlecruiser. Gee I wonder why the AI is not that good. That's less armour than an Enforcer... Now for a low tech ship, it's incredibly fast, even when ignoring the Fart Device, and with it even crazier. You can chase frigates in this thing. It's not an easy ship to fly, it won't be good for everyone and you can probably squeeze 5 DP more and get a real capital ship. But damnit is it fun to pilot it and drift around the battlefield.",
    images: [
      "Build/Capitals/Retribution/bTVnp5U.png"
    ]
  }
},
 Cruisers: {
  Apogee: {
    tier: "B",
    description: "Excellent exploration ship that's actually pretty cheap. In combat it's a great shield tank but for a high tech ship it is slow. Couple that with awkward weapon mounts and it's not something you will abuse in late game, still a very useful ship. Angled large missile hardpoints locks you in just homing options, while the energy mounts that can free fire forward are just 1 large hardpoint along with 2 small ones. This means the ship doesn't have great build diversity, although where it works, it works well.",
    images: [
      "Build/Cruisers/Apogee/6pFz8hc.jpg",
      "Build/Cruisers/Apogee/Tivn5Uy.png",
      "Build/Cruisers/Apogee/WkiAf7l.png"
    ]
  },

  Aurora: {
    tier: "B- / A",
    description: "Out of pure spite I almost wanted to put it in C tier. It seems beloved by many as a strong high tech cruiser, yet in reality it hardly competes with other cruiser options. Keep in mind Aurora costs 30 DP, and it's a ship that has trouble fighting its own caliber unless you spam Sabots. AI is also fairly incompetent with it, going in and out doing some damage, and often dying in situations where other cruisers would live. Fortunately the player can do much more with it, as its mobility is superb. But you're still stuck with weapon mounts for such an expensive rare ship.",
    images: [
      "Build/Cruisers/Aurora/8gxM5pX.png",
      "Build/Cruisers/Aurora/oC0jDTe.png"
    ]
  },

  Champion: {
    tier: "A",
    description: "Feels like Champion obsoleted couple of ships when it came out, luckily the balance brought other ships up to par. Champion has the advantage of having 2 kinetic medium turrets (they are hybrid but let's be real here) alongside a large energy turret paired with a HEF system. For a cherry on top at the very tip it sports a large missile hardpoint, you can see how deadly this combo is. All that package for 25 DP makes this ship a great addition to any fleet. It won't get to the fight quickest, but will certainly hold the line and deal serious damage.",
    images: [
      "Build/Cruisers/Champion/6aPIjB1.png",
      "Build/Cruisers/Champion/GlKP6fv.png",
      "Build/Cruisers/Champion/kOu49m6.png",
      "Build/Cruisers/Champion/p5Qr7m5.png"
    ]
  },

  Dominator: {
    tier: "B+ / A",
    description: "Basically a mini Onslaught, this ship has amazing armour and hull stats while also packing a mean punch. Despite its smaller profile it shares the same vulnerabilities with Onslaught, easy to flank and very slow. Burn drive luckily helps it to actually get into fights, where it's quite good. Dominator is the king of focused firepower, both ballistic and missile, so it's best suited to deal with large targets, such as capitals or stations. Faster and smaller ships will have an easy time dodging its firepower and dancing around it. It would otherwise be in A tier for AI but since Onslaught exists, there's just no reason to not switch it out once you can. Also always keep it escorted by something, it's super vulnerable at the back.",
    images: [
      "Build/Cruisers/Dominator/cLNeBZq.png",
      "Build/Cruisers/Dominator/tECTwHT.png",
      "Build/Cruisers/Dominator/xdMUdK6.png"
    ]
  },

  Doom: {
    tier: "C / B",
    description: "The phase changes killed this ship for me, previously an easy S tier flagship, now so slow you feel like the time completely stops, not slows down. Its Mine strike ability is still a force to be reckoned with, but I honestly don't see it worthwhile at 35 DP. It used to be able to brawl with other ships a bit, and currently it's very hard to do so. Once your flux goes up, you're a sitting duck waiting to get roasted. There's just better phase ships to pilot sadly.",
    images: [
      "Build/Cruisers/Doom/OsPvrTr.png"
    ]
  },

  Eagle: {
    tier: "B",
    description: "All around a decent ship, nothing stands out too much, very safe for AI. You just can't rely on it to kill stuff alone, because its design is made for kiting and providing support fire. Builds that focus on high burst damage also get bursted themselves. You will probably never get very disappointed with it, but it will also never amaze you. It's an AK-47 of Starsector ships. Worth mentioning that it makes for a nice escort for bigger, slower ships.",
    images: [
      "Build/Cruisers/Eagle/2IXblHK.png",
      "Build/Cruisers/Eagle/4qkED2e.png",
      "Build/Cruisers/Eagle/BtrmxoI.png",
      "Build/Cruisers/Eagle/DvhqxWg.png",
      "Build/Cruisers/Eagle/o2lJV0o.png",
      "Build/Cruisers/Eagle/vltptLi.png"
    ]
  },

  Eradicator: {
    tier: "A / A+",
    description: "You want a bigger Hammerhead? Well here it is, a cruiser with AAF as ship system is always going to be strong. Eradicator also has decent combat speed for a low tech cruiser, meaning a lack of mobility system doesn't hurt as much. Equipped with long range weapons this thing will pelt away at enemies like there's no tomorrow. Putting 5 Breaches on a medium range build similarly makes for a crazy strong early-mid game flagship. There's honestly not much to say about its weaknesses, probably the best cruiser per DP imo, AI can't even screw up in it. Did I mention it also has destroyer level burn!",
    images: [
      "Build/Cruisers/Eradicator/4jnIjEM.png",
      "Build/Cruisers/Eradicator/5Vv2Fnc.png",
      "Build/Cruisers/Eradicator/HejTLac.png",
      "Build/Cruisers/Eradicator/IwHdjVX.png",
      "Build/Cruisers/Eradicator/U8n3kbP.png"
    ]
  },

  Falcon: {
    tier: "B",
    description: "Honestly same as Eagle, just smaller. It has the benefit of having destroyer level burn, but again it won't be destroying ships on its own. It's ok as an early game cruiser, though as time passes one, you will find less uses for it. Falcons are even able to catch up to destroyers, they just don't have the mounts to do heavy work. I personally don't use them much since they're a bit too safe for me. Could've been ranked even lower but it's sooo cheap and easy to find while making your early game a tad bit easier it deserves the 'solid' tier.",
    images: [
      "Build/Cruisers/Falcon/pTaCFS6.png"
    ]
  },

  Falcon_P: {
    tier: "A / S",
    description: "You know the negatives I just listed about the base Falcon, forget about it. This red painted cousin sports 4 medium missile slots, on a ship that has built-in Unstable injectors, along with everything else Falcon has (good base speed, Maneuvering jets system). And you get a hell of a missile cruiser. You'll obviously need the Missile specialization skill to fully utilize it but even without skills this thing is scary. I'm honestly more scared seeing pirate Falcons than their capitals. It is however more expensive than the base one by 5 DP, but it's worth every single one of those points.",
    images: [
      "Build/Cruisers/Falcon_P/6pieY6M.png",
      "Build/Cruisers/Falcon_P/P4qnqpp.png",
      "Build/Cruisers/Falcon_P/aDqXdaF.png"
    ]
  },

  Fury: {
    tier: "C / A",
    description: "Shrike that's all grown up, this ship suffers from the same problem. And that is AI going absolutely bananas and dying miserably. I kid you not, in a big fleet, 3 of my Furies were almost always the first to die, all 3 different builds. Not even frigates die that fast. It's lightning fast to get into fights and has decent missile firepower, but I'll honestly take 2 Scarabs over it. Its only saving grace is early-mid game player ship. Human pilot can actually utilize its good mobility and short range assassin style, and in that role, it does well.",
    images: [
      "Build/Cruisers/Fury/FfQmr7P.png",
      "Build/Cruisers/Fury/Hx8pt7r.png"
    ]
  },

  Gryphon: {
    tier: "B- / A",
    description: "Ship that's supposed to be THE missile cruiser unfortunately falls behind the dragster Falcon. It does have a large missile slot, and plenty of missile to last longer due to the built-in Expanded missile racks. It's unfortunately quite slow and fragile, so AI won't be the star of the show, usually left in the support role. The player can do some fancy stuff with it though, just imagine you're a fat assassin. It's still a blast to fool around with, I just think there's better candidates for a flagship personally.",
    images: [
      "Build/Cruisers/Gryphon/4EQJfJH.png",
      "Build/Cruisers/Gryphon/cnrHYPF.png",
      "Build/Cruisers/Gryphon/iAFq8fe.png"
    ]
  },

  Heron: {
    tier: "A+",
    description: "Best carrier in the game in my humble opinion. Great speed to keep it safe, 3 bays, damage boosting ship system for your fighters. Not much science here, you want more fighter/bomber presence? Get this thing. OP might be tight for ambitious build, but it works well with just token PD equipped.",
    images: [
      "Build/Cruisers/Heron/0Solsar.png",
      "Build/Cruisers/Heron/X17zhCM.png",
      "Build/Cruisers/Heron/eAruwR5.png"
    ]
  },

  Mora: {
    tier: "B",
    description: "You could look at it like a mini Legion, but somehow tankier than one (I hate damper field on Moras) while having no mobility. Same as Heron, 3 bays for 20 DP, and it trades mobility for being obnoxiously hard to kill. It also has ok weapon mounts, barely resembling a battlecarrier, just don't forget this carrier is meant to stay in the frontlines. Benefit being your fighters won't have to travel long since the carrier will be just there, I'm just not a fan because of god awful speed.",
    images: [
      "Build/Cruisers/Mora/uv4k0es.png"
    ]
  },

  Venture: {
    tier: "C+",
    description: "Yet another glacially slow cruiser that's hard to kill, this one tries to be an exploration ship, a poor man's Apogee let's say. Its speed both on campaign map and in combat isn't good, but it makes up for it by being cheap, probably the cheapest cruiser now that I think about it. With 2 medium and 2 small missile mounts along with Fast missile racks, it can fight reasonably well, it just can't dictate engagements due to its speed. Now that it got buffed recently, it doesn't seem that bad, I just quickly find it obsolete once better ships come up. Has a built-in wing of Mining pods to make your miner dream become reality.",
    images: [
      "Build/Cruisers/Venture/U6H3muW.png",
      "Build/Cruisers/Venture/alTxPex.png",
      "Build/Cruisers/Venture/bJ7FvA7.png"
    ]
  },

  Venture_P: {
    tier: "?",
    description: "?",
    images: [
      "Build/Cruisers/Venture_P/CvRIeeS.png",
      "Build/Cruisers/Venture_P/wAOV9Sa.png"
    ]
  }
},
Destroyers: {
  Buffalo_MkII: {
    tier: "D",
    description: "Pirate destroyer with too much mounts for its own good, it is a squishy ship without any shields usually going down in a couple of seconds. There have been meme fleets showing a whole herd of Buffalos, and while it seems amusing, no real player will use this ship in a normal fleet. Not F tier because there's even worse things you could have in your fleet.",
    images: [
      "Build/Destroyers/Buffalo_MkII/G2kRa5x.png",
      "Build/Destroyers/Buffalo_MkII/Lx0r3xL.png"
    ]
  },

  Condor: {
    tier: "B+",
    description: "This will probably be your first carrier in the game, and currently it's not even that bad anymore. After the Drovers nerfs, it's a destroyer carrier of choice, being able to field 2 fighter wings for just 10 DP. Quite slow for a destroyer mind you, best to leave it in far backlines where it can chuck its medium missiles. Outclassed by cruiser carriers in late game though, since a single serious frigate will pop it fast.",
    images: [
      "Build/Destroyers/Condor/9OEur7a.png",
      "Build/Destroyers/Condor/LjXAt2S.png",
      "Build/Destroyers/Condor/ZMA6JVm.png",
      "Build/Destroyers/Condor/xkOS6Hy.png"
    ]
  },

  Drover: {
    tier: "C",
    description: "Poor Drover got beaten with the nerf bat multiple times, and then kicked on the ground after that. I mean it's faster and has much more OP than a Condor has, yet that really doesn't justify its high cost. Not much else to say except if you don't have anything else, it's ok, but other carrier options simply surpass it.",
    images: [
      "Build/Destroyers/Drover/TBkURMS.png"
    ]
  },

  Enforcer: {
    tier: "A-",
    description: "Popularly called the 'bowling ball', this little destroyer is very tough to crack. 5 medium ballistic turrets might seem broken at first, but you'll quickly see that it doesn't have the flux stats for it. And that doesn't matter since cheap weapons + Flak work well enough. More long ranged elite builds are also strong, while you must always keep its missiles in mind. A cheap destroyer able to chuck 4 missiles at once is no joke. Biggest weakness is combat speed, being one of the slowest destroyers, thankfully Burn drive is there to alleviate that. This is imo the earliest 'anchor' ship you have available.",
    images: [
      "Build/Destroyers/Enforcer/XhUqAGP.png",
      "Build/Destroyers/Enforcer/YPLHCWM.png",
      "Build/Destroyers/Enforcer/b1MFOxo.png",
      "Build/Destroyers/Enforcer/mEdupnT.png"
    ]
  },

  Gemini: {
    tier: "C",
    description: "A hybrid ship rarely performs well enough to warrant a place in combat, Gemini being almost the case but even a single fighter wing can make a difference. It has decent weapon mounts to provide some artillery fire and the same Reserve deployment system as Drover. You definitely won't use it in a serious fight, but I believe it has some uses in early game. There's a ship that fulfills this role a bit better tho.",
    images: [
      "Build/Destroyers/Gemini/ajZk4ZN.png"
    ]
  },

  Hammerhead: {
    tier: "A / S-",
    description: "Tutorial ship being this strong is certainly an interesting coincidence. This is what most people use during early game to handle tougher fights. AAF system allows it to punch up easily and all around solid stats make it a nice addition to your fleet, even AI does well in it. Player however can do even more, a classic by now is installing Safety overrides and mounting Assault chainguns. If you had any trouble with early pirate fleets, now you don't anymore. It's always nice to see a Hammerhead for sale, and few destroyers are this reliable for a long time. That said it's still good to have an anchor in your fleet, Hammerheads can't take too much pressure.",
    images: [
      "Build/Destroyers/Hammerhead/07ZWKRf.png",
      "Build/Destroyers/Hammerhead/1DubIhT.png",
      "Build/Destroyers/Hammerhead/1EIpy1b.png",
      "Build/Destroyers/Hammerhead/4RRWvZF.png",
      "Build/Destroyers/Hammerhead/eKwQRvX.png"
    ]
  },

  Harbinger: {
    tier: "C- / A+",
    description: "This feels like the worst phase ship you could give to AI, it's unique system enables it to briefly overload enemy ships. And that requires precise timing and a feel for the flow of battle so you know when you're safe. Having it piloted by AI is like watching a baby handle a bazooka. Now in the player hands, there is the real deal. Want to perform flashy backstabs without actually having to get to an open spot? This is the ship for you, relatively 'simple' to use it, it's an excellent assassin for those who enjoy using phase ships. Unfortunately the phase rework hurt it a bit and now you have to be much more careful since your speed tanks after you shoot. It's not THE best phase assassin in terms of efficiency, but it's pretty close.",
    images: [
      "Build/Destroyers/Harbinger/Img1.png"
    ]
  },

  Manticore: {
    tier: "A",
    description: "This is one hell of an artillery/support ship, large ballistic mount, 2 medium missile and its small ballistic mounts have extra range from built-in Ballistic rangefinder. I found Manticores useful even in late game, where I tend to ditch most other destroyers. It won't be catching up to other destroyers or even some cruisers, but it doesn't have to. It brings the pain where you point it, and is surprisingly survivable on its own. Be careful not to overflux them with weapons as they really can't run away once they're pressured.",
    images: [
      "Build/Destroyers/Manticore/tV07bHN.png",
      "Build/Destroyers/Manticore/xRIkXcf.png"
    ]
  },

  Medusa: {
    tier: "B- / A-",
    description: "Not even a bad ship when you look at it, it just had the unlucky place of getting unchanged for a long time when other destroyers got buffs and we got brand new ones. Very slippery with its Phase skimmer and the ability to mount kinetics truly shows how strong it can be. The problem lies in the fragile design of the ship, having barely any armour and hull for a destroyer, while a slow omni shield with a mediocre arc tends to get it killed in tough spots. I want to love this ship but it's just so outclassed by other options. If you somehow get it very early, it's a great flagship, and that is if you get lucky enough (still don't understand why it's so rare).",
    images: [
      "Build/Destroyers/Medusa/3CPaVsH.png",
      "Build/Destroyers/Medusa/45mGCEm.png",
      "Build/Destroyers/Medusa/olDB0pJ.png"
    ]
  },

  Mule: {
    tier: "B",
    description: "Mule is a hybrid ship done right. Decent stats both in campaign and combat, this little destroyer can provide useful distraction in early fights. It's very hard to lock down and kill due to Maneuvering jets system, meaning AI won't die in it as long as the fight doesn't go terribly bad. It's simply a good early game ship if you find yourself lacking in cargo capacity, but you also want more meat in combat.",
    images: [
      "Build/Destroyers/Mule/eco1N8g.png",
      "Build/Destroyers/Mule/qOSJLyv.png"
    ]
  },

  Shrike: {
    tier: "B- / A-",
    description: "Keeping in mind that it's a light destroyer, it does what it needs to do okay. It will hunt frigates and help out with bigger threats. The issues start happening when literally anything manages to get past the omni shield. Incredibly squishy and easy to burst, its only defense is the shield, which is why players sometimes install Converted hangars so the enemy has more targets to shoot at. 8 DP cost make it a spammable destroyer, just don't expect the AI to come out of most fight alive. Getting this early as a flagship can be quite fun and successful, if you don't mind being a glass cannon. Worth noting that it's the only destroyer having frigate level burn!\n\nNote: Shrike(P) does have an option to mount a single ballistic weapon which would otherwise impact the tiers, but the base one has gotten OP buffs and most energy weapons are now better, so I consider them equal. My comments would still be the same since it plays exactly like the OG one.",
    images: [
      "Build/Destroyers/Shrike/XxDus95.png",
      "Build/Destroyers/Shrike/YoJFfyT.png"
    ]
  },

  Sunder: {
    tier: "B / A+",
    description: "And now for a true glass cannon, Sunder has ridiculous amount of firepower for its size. Not quite speedy, very fragile and vulnerable to fighters, but my god can you destroy pretty much anything with it. It honestly shames high tech cruisers imo, as using it versus early enemies almost feels like cheating. AI isn't the best, naturally with glass cannons, but given a long range loadout (beams), it can perform a support role very well. I haven't found it super useful past mid game though, as once I'm done piloting it myself, I just get a better AI ship. Still this is an incredibly satisfying ship to pilot everyone needs to try out at least once.",
    images: [
      "Build/Destroyers/Sunder/0yF5Pl4.png",
      "Build/Destroyers/Sunder/1WFjY9f.png",
      "Build/Destroyers/Sunder/8dDasZR.png"
    ]
  }
},

Frigates: {
  Afflictor: {
    tier: "B / S",
    description: "The most famous little phase assassin in the game, still somehow alive after the phase rework. This is what you want from a phase ship, fast speed, good mounts and a ship system made for dealing even more backstab damage. All that for not even an expensive cost which makes it better than most AI phase ships. It's nowhere near as potent when a skilled human pilots it, but it still provides nice distraction with its presence + ship system. Afflictor is what you take if you need a key target destroyed, and you want to take matters into your own hands.",
    images: [
      "Build/Frigates/Afflictor/9YYJLEX.png",
      "Build/Frigates/Afflictor/yRAHhGt.png"
    ]
  },
    Afflictor_P: {
      tier: "?",
      description: "",
      images: [
        "Build/Frigates/Afflictor_P/yQDt2hK.png"
      ]
    },
  Brawler: {
    tier: "C+",
    description: "Fire support frigate with 2 medium ballistics makes it a handy escort, but the ship itself is very vulnerable due to all of its mounts being hardpoints. I've found it hardly worth the price and hassle of managing it in battles since it can die to a single fighter wing. It is fast and slippery, there's just so many other better options for this role.",
    images: [
      "Build/Frigates/Brawler/94GO4A6.png",
      "Build/Frigates/Brawler/I2cwp5L.png"
    ]
  },
  Brawler_LP: {
    tier: "A / A+",
    description: "Best Brawler variant imo, with built-in Safety overrides you can have a mini SO Hammerhead for yourself. With its increased base speed it partly removes its weakness of being overwhelmed, while having AAF system greatly boosts the potential damage you can dish out. Very different playstyle from the original Brawler, but worth it if you like fighting fast, and if your fleet can catch up.",
    images: [
      "Build/Frigates/Brawler_LP/VtoZ0Kn.png"
    ]
  },
  Brawler_TT: {
    tier: "C+ / B+",
    description: "The Tri Tach version trades range with much better burst with its energy mounts. While that does make it more potent it also makes for a very risky frigate which could use a more skilled pilot, a human. In early game you could do some fancy work with Ion Pulsers, it's just that I haven't found it worthwhile being captained by AI. Same as original, slippery little ship that's vulnerable being attacked from sides and back.",
    images: [
      "Build/Frigates/Brawler_TT/b1u7TaZ.png"
    ]
  },
  Centurion: {
    tier: "A",
    description: "One of the most reliable frigates in the game, Centurion is what you want for a cheap distraction ship that can also fight back. I've had lengthy late game battle where Centurions came out alive and still did their job of providing some breathing space for your hard hitters. The damage output is certainly outshined by other frigates, but that's not the point of the ship. Really surprised there's not much talk about this ship, I was never let down by it.",
    images: [
      "Build/Frigates/Centurion/HPaPCGO.png"
    ]
  },
  Cerberus: {
    tier: "D",
    description: "Not a fan of shieldless ships, Cerberus is a hybrid that is supposed to provide some firepower in battles for its size. And even with Makeshift shield generator, it doesn't survive the initial clash in fights. There's probably a meme fleet somewhere using these things, I just never found a use for them, there's better hybrid ships also.",
    images: [
      "Build/Frigates/Cerberus/Img1.png"
    ]
  },
    Gremlin: {
    tier: "D",
    description: "Basically a tutorial ship for phase mechanics, Gremlin is just too weak to do its phase job. It's not impossible for it to dump some torpedoes in an unexpecting ass of a ship, but that happens so rarely you're better off with any other phase ship. Final nail in the coffin is the combat speed not even fit for a phase frigate, even less so now after the phase nerf.",
    images: [
      "Build/Frigates/Gremlin/Img1.png"
    ]
  },
  Hound: {
    tier: "C-",
    description: "Slightly better than Cerberus because of its speed and small profile it can actually live longer than 3.6 nanoseconds. Not much to say about it, another hybrid ship with no shields that might damage a ship or two and then it pops. At least it's very cheap to maintain.",
    images: [
      "Build/Frigates/Hound/hGW4hR2.png"
    ]
  },
  Hound_LP: {
    tier: "?",
    description: "",
    images: [
      "Build/Frigates/Hound_LP/QvNiYbv.png"
    ]
  },
  Hyperion: {
    tier: "A- / S+",
    description: "Afflictor counterpart if you don't like dealing with phase bullshit gimmicks, incredibly strong piloted by a player. Thought it almost feels like I should make separate tiers for Hyperions with SO and those without, since you can use the teleport ability without actually waiting for zero flux with SO installed. AI does reasonably well with it, but you have to ride this baby yourself to truly justify its enormous cost for a frigate. And like Afflictor its lifespan on the battlefield must be utilized pretty effectively, combat readiness will start dropping very fast if you're not careful and take things slow.",
    images: [
      "Build/Frigates/Hyperion/QfcDCrG.png",
      "Build/Frigates/Hyperion/feZ4ESK.png",
      "Build/Frigates/Hyperion/l8qmDR8.png"
    ]
  },
    Kite_LP: {
      tier: "?",
      description: "",
      images: [
        "Build/Frigates/Kite_LP/8XWu7cu.png"
      ]
    },
    Kite_S: {
      tier: "?",
      description: "",
      images: [
        "Build/Frigates/Kite_S/HYfPGnw.png"
      ]
    },
      Lasher: {
    tier: "B / B+",
    description: "Low tech frigate of choice, Lasher is equipped with enough ballistic mounts and AAF system to make it dangerous in right situations. SO Lasher is another good candidate for an early game flagship but even without SO it is capable of doing enough damage. Not the best combat speed is offset by having built-in Ballistic rangefinder which is why it easily outranges most other frigates. Best of all, once of the cheaper frigates at only 4 DP. The reason it isn't in a higher tier is because large fights demand much more of a basic frigate, and unfortunately it doesn't have neither speed nor defenses to survive those.",
    images: [
      "Build/Frigates/Lasher/Img1.png"
    ]
  },
  Monitor: {
    tier: "S+",
    description: "Monitor is a ship that breaks the game, hard. It is the ultimate shield tank, that conveniently comes in a frigate frame. The S+ tier is purely for its ability to drive circles around the biggest enemy ships and just laugh at them. Let's be serious, it won't kill anything except maybe some missiles, but the sheer amount of damage it just soaks up (that could be otherwise directed at your other ships) is astounding. The player can probably survive even longer and be even more annoying for enemies, unfortunately we've ran out of tiers :/",
    images: [
      "Build/Frigates/Monitor/064vmkK.png",
      "Build/Frigates/Monitor/OWXP71U.png",
      "Build/Frigates/Monitor/XHQPx7d.png"
    ]
  },
  Omen: {
    tier: "A+",
    description: "Oh man, is this a fantastic tiny ship. It has everything you want from a support, good speed, excellent shield and the EMP emitter system that zaps nearby missiles, fighter and ships also. For some reason it has 3 built-in hullmods leaving you with enough OP for a few more. Omen is one of those frigates you can use from the beginning of the game, to the very end. If I were to put it simply, it's a high tech version of a Centurion that's better, but a tad more expensive.",
    images: [
      "Build/Frigates/Omen/wlWTIZS.png"
    ]
  },
  Scarab: {
    tier: "S",
    description: "Yet another ridiculously good high tech frigate, Scarab is able to deal insane damage in short amount of time with its Temporal shell system. Best part of all, AI is more than capable piloting it. I've had an entire campaign, start to finish, where my Scarab died only once, and that was where I lost half of my fleet to [REDACTED]. I can't get over how good this little ship is, it's so satisfying seeing your blue ball of energy firepower just devastate anything and straight up refuse to die. Just be sure to retreat it on time since its PPT ticks down fast.",
    images: [
      "Build/Frigates/Scarab/4CfzWzM.png",
      "Build/Frigates/Scarab/z9d7tYB.png"
    ]
  },
  Shade: {
    tier: "B",
    description: "Combination of Omen and Afflictor, Shade is a phase frigate that will greatly help you out clear fighter swarms, and sometimes it might actually do some damage to a bigger ship. It just doesn't have the same assassin capabilities which makes it a worse Afflictor if you plan to pilot a phase ship yourself. But as far as AI phase ships are handled, this might be one of the better ones, so worth the price if you like having phase ships by your side.",
    images: [
      "Build/Frigates/Shade/q4KwIfk.png",
      "Build/Frigates/Shade/vZUVgTS.png"
    ]
  },
    Shade_P: {
      tier: "?",
      description: "",
      images: [
        "Build/Frigates/Shade_P/9Zypmt7.png",
        "Build/Frigates/Shade_P/hS6Qwra.png"
      ]
    },
  Shepherd: {
    tier: "B-",
    description: "Shepherd is such a great early game ship, boosting your fleet in so many ways. Better salvage, cheaper surveys, and some nice additional cargo space. Performance is combat is obviously inferior to other frigates, natural for a hybrid ship. But having a wing of Borer drones orbiting it means there's always going to be some damage dealt to nearby enemy ships. Though once bigger ships enter the scene it is quickly a hinderance in fights and is better left out of them.",
    images: [
      "Build/Frigates/Shepherd/Img1.png"
    ]
  },
  Tempest: {
    tier: "B",
    description: "Former king of high tech frigates, now without a damage boosting system and instead a drone suicide button, it won't surpass other high tech options. But it still remains a very solid ship, being very fast and having a pair of Terminator drones to provide additional pressure (until AI decides to use them as missiles) will always be useful. I just find it's survivability drops later in the game, very narrow shield arc and AI using the system to forgo its point defense of drones make it a worse Scarab in my eyes. Otherwise a fun and unique ship to pilot, worth a shot despite the nerf.",
    images: [
      "Build/Frigates/Tempest/275ZuGX.png",
      "Build/Frigates/Tempest/4LJ8oAr.png"
    ]
  },

  Vanguard: {
    tier: "C+",
    description: "Initially a fun idea to make an elite low tech frigate without shields, this frigate packs a mean punch while having a unique feature of 2 ship system, one defensive, one mobility. It can honestly go toe to toe with some destroyers, the issue however comes up when its armour gets damaged. Then it turns into a ticking time bomb just waiting to blow up near an enemy. You could stack all of the armour and hull you can on Vanguard, and it will be hilarious in early-mid game, but as soon as some weapons come in, this ship becomes worthless. Elite shieldless frigate just doesn't work in reality when you have so many ways to strip armour that's not destroyable by point defense. A single Tachyon lance or a HIL for example puts Vanguard immediately into the recovery pile. Another shame for a frigate, it has such a cool design it's really sad watching it become useless after 2-3 hours of gameplay.",
    images: [
      "Build/Frigates/Vanguard/7QipKSF.png",
      "Build/Frigates/Vanguard/DPVtKlT.png",
      "Build/Frigates/Vanguard/NtqNsTZ.png"
    ]
  },

  Vigilance: {
    tier: "C",
    description: "I have tried to make this ship work but no amount of tinkering with it justifies its cost. Missile spammer in a nutshell, it'll hardly do anything else that will impress you, leaving it in a 'overpriced escort' role. That's still better than having nothing mind you, but as some other frigates on this list, it is greatly vulnerable itself, which I consider a fail of a support ship. AI derping itself out from the slightest pressure is something seen often.",
    images: [
      "Build/Frigates/Vigilance/9oqUqY3.png",
      "Build/Frigates/Vigilance/PbUBK7v.png"
    ]
  },
  
  Wayfarer: {
    tier: "C-",
    description: "This is just a straight up shittier Shepherd, with no drones but more weapons mounts. Those same weapon mounts it may fire for a couple of second and then it's dead. Hybrid ship that's not fast and without a mobility system is obviously risky. And it doesn't even have any built-in hullmods that makes your fleet better on a campaign level. Shame since I think its mount layout is cool and unique.",
    images: [
      "Build/Frigates/Wayfarer/Img1.png"
    ]
  },
  Wolf: {
    tier: "B-",
    description: "Slippery little devil that can teleport short distances, it is a frigate you'll see very often. And very often you will notice just how quickly it dies. Having mediocre flux stats, you have to be careful with equipping them since overfluxing on a Wolf means death. Despite the flaws, it is still a capable ship that can take advantage of openings really well, just don't expect them to survive most fights. For distraction purposes, a Wolf with a beam loadout isn't too shabby, but you're still much better with other alternatives in late game.",
    images: [
      "Build/Frigates/Wolf/DAx3mAb.png"
    ]
    }
  },
  SPOILERS: {
    Brilliant: {
      tier: "B-",
      description: "Nice cruiser that packs a serious punch, currently slow with a fighter deck (will change next update). You can get a large energy weapon supported by medium ballistics which is amazing in itself. But just a stepping stone before you get Radiant, Brilliants are very good and strong but they're not up there with the greats.",
      images: [
        "Build/SPOILERS/Brilliant/hYeSepZ.png"
      ]
    },
    Glimmer: {
      tier: "S",
      description: "Wonderful little ships, Glimmer spam is one of two meta strats with Remnants. Only 5 DP with great firepower that's even crazier with Safety Overrides. Glimmer spam with cores is also a way to never worry about ECM rating in battles again. Sheer existence of Glimmer basically invalidates all cheap Derelict ships, you just get more bang for your buck.",
      images: [
        "Build/SPOILERS/Glimmer/69ZJRKr.png",
        "Build/SPOILERS/Glimmer/iTaoZLu.png"
      ]
    },
    Radiant: {
      tier: "S+ / S++",
      description: "Let's be honest here, this is 95% the reason why you took Automated ships. Radiant is just bullshit incarnate with 5 potential large energy mounts (some are synergy) and a plethora of other supporting mounts. Imagine you took the firepower from a Paragon, upped it by a bit, and then god rid of its biggest weakness - mobility. Radiant's ability to Phase skimmer in and out of combat while bursting down everything in between is unmatched. You don't even have to be smart with the build, throw random shit and it'll still slap everything. I can't stress enough how potent Radiants are. And the best thing, you can pilot one! Albeit at a high cost of an additional tech capstone skill, and you pretty much need Systems Expertise to make the best out of it. That is 13 skills points out of 15 total just to pilot one ship. And you need to install a hullmod to even be pilotable by player that costs 50 OP. AND EVERY FUCKING STEP IS WORTH IT. Piloting Radiant is the most broken shit in the game, even Ziggurat feels incompetent. I strongly advise to everyone to try this build just once and see how you make the whole game a joke. S++ is an understatement.",
      images: [
        "Build/SPOILERS/Radiant/POpaQpC.png"
      ]
    },
    Rampart: {
      tier: "B",
      description: "Best Derelict ship you're able to use, Ramparts are beasts at 15 DP. Needs heavy investment in armour, emp resistance and hull, but once it's there, it's surprisingly potent. You can also go with the Makeshift shield generator route but imo that's a mistake and it impacts the firepower quite a bit (which is the main thing here). Burn drive makes up for its sluggishness but it could still use an escort to keep flanks safe.\n\nBit of a shame both Derelict and Remnant ships compete with each other for Automated ship skill purposes, as it's hardly ever worth picking up Derelicts. They offer a fun playstyle that's pretty unique, and Rampart alone is worth fooling around with.",
      images: [
        "Build/SPOILERS/Rampart/CiHrjFf.png"
      ]
    },
    Scintilla: {
      tier: "D-",
      description: "Is there anyone using this ship? I didn't come all this way with Automated ships to get a better Drover. It also can only equip drones since it's an Automated ship, which is ehhhh. Lack of choices for builds and presence of other ships makes this pretty darn poopy in my eyes. Looks cool tho.",
      images: [
        "Build/SPOILERS/Scintilla/P9hBCIR.png"
      ]
    },
    Sentry: {
      tier: "C+",
      description: "Continuing the trend of 3 DP frigates, Sentry seems to have the clearest role that's actually useful. It's a much slower Picket that trades 3 ballistics for 3 missiles, and it has Fast missile racks system. Genuinely not bad for spam strats but again very very vulnerable on its own.",
      images: [
        "Build/SPOILERS/Sentry/p9aFWFZ.png"
      ]
    },
    Ziggurat: {
      tier: "S+",
      description: "I mean everyone saw this from a mile away, the only phase capital in the game with insane firepower and ship system. It's also the most expensive ship in the game currently, at 75 DP. Horrible campaign stats and everyone will recognize you with this in your fleet, but that poses no problem since you can handle literally any threat with Ziggurat. Phase rework did hurt its speed and it feels a bit sluggish, yet that barely impacts its performance. So many weapons which are usually hard to fit and don't show their best on most ships, truly shine on Zigg. I now actively avoid piloting it because it turns the late game into a boring slow motion shoot em up. You only get to have one in the game, and it's a reward for a campaign mission, and to me it serves as a 'clutch' flagship if I don't want to come up with proper fleet compositions.",
      images: [
        "Build/SPOILERS/Ziggurat/7oMJgJV.png",
        "Build/SPOILERS/Ziggurat/mUYCGxV.png",
        "Build/SPOILERS/Ziggurat/tMU0uQH.png"
      ]
    }
  },
  SUPER_ALABASTER_REDACTED: {
    "30020010204015200__1075_range_zapper_Fulgent": {
      tier: "?",
      description: "",
      images: [
        "Build/SUPER_ALABASTER_REDACTED/30020010204015200__1075_range_zapper_Fulgent/PAkSoDW.png",
        "Build/SUPER_ALABASTER_REDACTED/30020010204015200__1075_range_zapper_Fulgent/kYgPmo4.png",
        "Build/SUPER_ALABASTER_REDACTED/30020010204015200__1075_range_zapper_Fulgent/oVchOxI.png"
      ]
    },
    "50020010204015200__1495_range_ion_cannon_Fulgent": {
      tier: "?",
      description: "",
      images: [
        "Build/SUPER_ALABASTER_REDACTED/50020010204015200__1495_range_ion_cannon_Fulgent/aAamcDJ.png"
      ]
    },
    Astral_Destroyer_of_Worlds: {
      tier: "?",
      description: "",
      images: [
        "Build/SUPER_ALABASTER_REDACTED/Astral_Destroyer_of_Worlds/F4Z1NJh.png"
      ]
    },
    Tesseract: {
      tier: "?",
      description: "",
      images: [
        "Build/SUPER_ALABASTER_REDACTED/Tesseract/DkypdkE.png"
      ]
    },
    Valkyrie_class_Based_Trop_Transport: {
      tier: "?",
      description: "",
      images: [
        "Build/SUPER_ALABASTER_REDACTED/Valkyrie-class_Based_Trop_Transport/6OH2FSf.png"
      ]
    }
  },
  REDACTED: {
    Brilliant: {
      tier: "?",
      description: "",
      images: [
        "Build/[REDACTED]/Brilliant/35C5pca.png"
      ]
    },
    Glimmer: {
      tier: "?",
      description: "",
      images: [
        "Build/[REDACTED]/Glimmer/F4AJ13b.png",
        "Build/[REDACTED]/Glimmer/KLV4mbH.png",
        "Build/[REDACTED]/Glimmer/XFQWrH7.png"
      ]
    },
    Radiant: {
      tier: "?",
      description: "",
      images: [
        "Build/[REDACTED]/Radiant/COFt3FR.png"
      ]
    }
  }
  },
  
  WEAPONS: {
    "Energy": {
      "Small": [
            {
      name: "Antimatter Blaster",
      tier: "B / S-",
      description: "Ultra-short range burst weapon with limited ammo. Essentially an unblockable energy torpedo with the highest per-shot damage among small energy weapons. Very niche and poor for AI, but devastating in player hands when used for decisive alpha strikes."
    },
{
      name: "Burst PD Laser",
      tier: "A",
      description: "Best small energy point defense weapon. Charge-based burst beam that efficiently destroys missiles and fighters, requiring only a few mounts to be effective."
    },
    {
      name: "Ion Cannon",
      tier: "B-",
      description: "EMP support weapon with low flux cost. Decent if no better EMP options are available, but slow to disable targets and somewhat overpriced for its impact."
    },
    {
      name: "IR Pulse Laser",
      tier: "A",
      description: "Efficient general-purpose small energy weapon. Strong versus shields and fighters but weak against heavy armour. Flux-intensive in large numbers."
    },
    {
      name: "LR PD Laser",
      tier: "C",
      description: "Long-range PD laser that only becomes effective when heavily stacked. Notably capable of intercepting Sabot missiles at long range, but requires too much investment to justify."
    },
    {
      name: "Mining Laser",
      tier: "D+",
      description: "Extremely weak and unimpressive PD option. Cheap, but almost always inferior to any alternative."
    },
    {
      name: "PD Laser",
      tier: "B",
      description: "Medium-range PD option that performs adequately when mounted in groups. Outclassed by Burst PD Laser but still viable with skills or hullmods."
    },
    {
      name: "Tactical Laser",
      tier: "B-",
      description: "General-purpose assault beam. Underwhelming without beam-focused builds, but usable on support ships to apply shield pressure."
    }
  ],

  "Medium": [
    {
      name: "Graviton Beam",
      tier: "B+",
      description: "Long-range kinetic (soft flux) beam used to steadily pressure shields. Best used in multiples as a support weapon, especially on midline ships."
    },
    {
      name: "Heavy Blaster",
      tier: "B- / A+",
      description: "Extremely high-damage energy weapon with massive flux costs. AI struggles with it, but player-controlled ships can use it to brutally crack armour."
    },
    {
      name: "Heavy Burst Laser",
      tier: "C",
      description: "Upsized Burst PD Laser that ignores decoys but costs too much OP and a medium slot. Functional, but almost never optimal."
    },
    {
      name: "Ion Beam",
      tier: "C+",
      description: "Long-range constant EMP beam. High flux cost limits its usefulness, and better support options exist for most ships."
    },
    {
      name: "Ion Pulser",
      tier: "A- / A+",
      description: "Short-range burst weapon dealing both energy and EMP damage. Strong on fast ships and excellent in player hands, though AI often wastes charges."
    },
    {
      name: "Mining Blaster",
      tier: "F",
      description: "Highly inefficient weapon with poor overall performance. Outclassed in every role and best avoided entirely."
    },
    {
      name: "Phase Lance",
      tier: "B- / A",
      description: "Short-range burst beam effective against armour and fighters when shields are down. High flux generation limits AI effectiveness."
    },
    {
      name: "Pulse Laser",
      tier: "B",
      description: "Baseline medium energy weapon. Reliable and flexible, but weak versus armour and best paired with HE or armour-cracking support."
    }
  ],

  "Large": [
    {
      name: "Autopulse Laser",
      tier: "A / A+",
      description: "Highly efficient charge-based burst weapon. Exceptional against shields and dangerous even with AI control. Extremely threatening in groups."
    },
    {
      name: "High Intensity Laser",
      tier: "A-",
      description: "Powerful HE beam that melts armour when supported by kinetic pressure. Wastes flux on shields but devastating once armour is exposed."
    },
    {
      name: "Paladin PD System",
      tier: "B-",
      description: "Exceptional large PD weapon that annihilates missiles and fighters, but occupies a valuable large energy slot better used for damage."
    },
    {
      name: "Plasma Cannon",
      tier: "A / S-",
      description: "One of the strongest energy weapons in the game. Massive damage, solid efficiency, and frequent missile interception. Flux-heavy but devastating."
    },
    {
      name: "Tachyon Lance",
      tier: "B+ / S",
      description: "Long-range burst beam with extreme damage and EMP arcs. AI often misuses it, but player timing makes it one of the deadliest weapons available."
    }
  ]
},
  "Ballistic": {
    "Small": [
      {
        name: "Light Assault Gun",
        tier: "B",
        description: "Accurate small HE option with good range. Reliable at hitting targets and effective against armoured fighters. Excellent early-game HE until medium mounts become available, though low damage per shot struggles against heavy armour.",
      },
      {
        name: "Light Autocannon",
        tier: "B-",
        description: "Budget kinetic option and poor man's Railgun. Very efficient but outclassed by other small kinetic weapons.",
      },
      {
        name: "Light Dual Autocannon",
        tier: "B",
        description: "Trades accuracy and range for higher DPS. Accuracy matters less against shields, making this a solid pressure tool.",
      },
      {
        name: "Light Machine Gun",
        tier: "C",
        description: "Extremely efficient kinetic weapon but limited to SO ships due to its very short range. Poor general PD performance.",
      },
      {
        name: "Light Dual Machine Gun",
        tier: "C",
        description: "Improved damage over LMG and slightly better missile interception, but expensive for its range. Only viable on close-range ships.",
      },
      {
        name: "Light Mortar",
        tier: "B+",
        description: "Inaccurate and slow, but extremely cheap and strong against armour. Great way to give small ships surprising punch.",
      },
      {
        name: "Light Needler",
        tier: "A",
        description: "Devastating burst kinetic weapon capable of rapidly overloading shields. Requires proper HE follow-up.",
      },
      {
        name: "Railgun",
        tier: "A+",
        description: "One of the most versatile ballistic weapons in the game. Accurate, good damage per shot, effective against shields, armour, fighters, and missiles.",
      },
      {
        name: "Vulcan Cannon",
        tier: "A+",
        description: "Best small PD weapon by OP efficiency. Incredible DPS against missiles and fighters but ineffective against shields and armour.",
      }
    ],

    "Medium": [
      {
        name: "Arbalest Autocannon",
        tier: "B+",
        description: "Reliable mid-range kinetic weapon. Efficient but outshined by longer-ranged medium kinetics.",
      },
      {
        name: "Assault Chaingun",
        tier: "B / A+",
        description: "Extremely high DPS armour shredder. Short range limits AI use, but devastating in player hands and effective against fighters.",
      },
      {
        name: "Flak Cannon",
        tier: "A-",
        description: "Solid point defense option with explosive shells. Handles missile swarms well but struggles against large fighter groups.",
      },
      {
        name: "Dual Flak Cannon",
        tier: "S",
        description: "Best PD weapon in the game. Deletes missiles and fighters effortlessly at the cost of reduced range.",
      },
      {
        name: "Heavy Autocannon",
        tier: "B",
        description: "Inaccurate but high DPS kinetic weapon. Solid budget option when OP is limited.",
      },
      {
        name: "Heavy Machine Gun",
        tier: "B-",
        description: "Longer range than small MGs makes it somewhat viable. Best used with SO or elite PD skill.",
      },
      {
        name: "Heavy Mauler",
        tier: "B+ / A",
        description: "Long-range HE sniper. AI struggles with timing, but a powerful player-controlled weapon and essential HE option.",
      },
      {
        name: "Heavy Mortar",
        tier: "B",
        description: "Cheap HE option with low accuracy. Serviceable until better HE weapons become available.",
      },
      {
        name: "Heavy Needler",
        tier: "A",
        description: "Powerful burst kinetic weapon. More competition than its small variant due to range limitations.",
      },
      {
        name: "Hypervelocity Driver",
        tier: "A+",
        description: "High-accuracy kinetic sniper with EMP damage. Extremely reliable and effective against all targets.",
      },
      {
        name: "Thumper",
        tier: "B+",
        description: "Fragmentation burst weapon ideal for hull damage after armour is stripped. Surprisingly strong and effective against fighters.",
      }
    ],

    "Large": [
      {
        name: "Devastator Cannon",
        tier: "C+",
        description: "Excellent against fighters and missiles but unreliable as a primary HE weapon due to inconsistent explosions.",
      },
      {
        name: "Gauss Cannon",
        tier: "B+ / A",
        description: "Extreme-range kinetic sniper with heavy flux cost. Best used by player-controlled ships.",
      },
      {
        name: "Hellbore Cannon",
        tier: "B+ / A",
        description: "Best large HE ballistic weapon. Massive armour damage with very low flux and OP cost.",
      },
      {
        name: "Hephaestus Assault Gun",
        tier: "C-",
        description: "Low damage per shot and high flux cost make it a poor HE option. Generally considered a trap.",
      },
      {
        name: "Mark IX Autocannon",
        tier: "B+",
        description: "Reliable and cheap large kinetic weapon with respectable damage per shot despite poor accuracy.",
      },
      {
        name: "Mjolnir Cannon",
        tier: "B- / A-",
        description: "Unique energy-damage ballistic weapon with EMP. Extremely strong but flux-hungry, better in player hands.",
      },
      {
        name: "Storm Needler",
        tier: "C / B",
        description: "Sustained shield pressure weapon with excellent efficiency but short range and high OP cost limit its usefulness.",
      }
    ]
  },
    MISSILES: {
    SMALL: [
      {
        name: "Annihilator Rocket Launcher",
        tier: "B / B+",
        description: "Fires 5 unguided HE rockets in a spread. Strong vs large targets and PD through saturation. Weak vs fast frigates unless fired point-blank. Scales extremely well with multiple launchers."
      },
      {
        name: "Atropos-class Torpedo Rack",
        tier: "A",
        description: "Reliable homing HE torpedo with high per-missile HP. Lower range than Harpoons but stronger hits. Limited ammo but very consistent."
      },
      {
        name: "Breach SRM",
        tier: "B+",
        description: "Scripted anti-armor missile that bypasses armor reduction. Excellent for opening targets but useless vs shields."
      },
      {
        name: "Hammer-class Torpedo",
        tier: "B+ / A+",
        description: "Fast unguided torpedo with solid HE damage. Strong in player hands, surprisingly usable by AI due to speed."
      },
      {
        name: "Harpoon MRM",
        tier: "A+",
        description: "Reliable homing HE finisher. Excellent range, high ammo, and devastating on overloaded targets."
      },
      {
        name: "Reaper-class Torpedo",
        tier: "B- / S-",
        description: "Single-shot unguided torpedo dealing massive HE damage. High risk for AI, lethal in player hands."
      },
      {
        name: "Sabot SRM",
        tier: "B / S-",
        description: "Kinetic missile with burst submunitions and EMP. Extremely strong for flux pressure in player use."
      },
      {
        name: "Salamander MRM",
        tier: "B-",
        description: "Unlimited ammo EMP missile targeting engines. Strong early game, weak later due to PD saturation."
      },
      {
        name: "Swarmer SRM",
        tier: "B",
        description: "Anti-fighter missile with large ammo reserves. Effective vs fighters, weak vs ships."
      }
    ],

    MEDIUM: [
      {
        name: "Annihilator Rocket Pod",
        tier: "B",
        description: "Continuous stream of unguided HE rockets. Strong pressure tool when stacked, ammo drains quickly."
      },
      {
        name: "Breach SRM Pod",
        tier: "A",
        description: "Fires 5 Breach missiles per volley. Strong armor stripping with good ammo count."
      },
      {
        name: "Harpoon MRM Pod",
        tier: "A",
        description: "Fires large volleys that often overkill. Reliable but less efficient than small mounts."
      },
      {
        name: "Pilum LRM Launcher",
        tier: "B",
        description: "Long-range regenerating support missile with EMP arcs. Best on carriers and backline ships."
      },
      {
        name: "Proximity Charge Launcher",
        tier: "C+ / A",
        description: "Deploys slow bombs with blast radius. High skill ceiling for players, poor AI performance."
      },
      {
        name: "Sabot SRM Pod",
        tier: "B+ / S",
        description: "Fires paired Sabots for massive kinetic bursts. Extremely strong for player-controlled ships."
      },
      {
        name: "Salamander MRM Pod",
        tier: "D",
        description: "Dual Salamanders per shot. Poor value for OP cost and mount size."
      },
      {
        name: "Typhoon Reaper Launcher",
        tier: "B / S",
        description: "Five Reapers per mount. Devastating in skilled hands, forgiving ammo count."
      }
    ],

    LARGE: [
      {
        name: "Cyclone Reaper Launcher",
        tier: "B / S-",
        description: "Sequential dual-Reaper launcher. Limited by ship compatibility, very strong for players."
      },
      {
        name: "Hammer Barrage",
        tier: "B+ / S",
        description: "Rapid-fire spread of Hammer torpedoes. Extremely high burst damage at close range."
      },
      {
        name: "Hurricane MIRV",
        tier: "A- / A",
        description: "Splits into multiple HE submunitions. Highly dependent on ECCM for effectiveness."
      },
      {
        name: "Locust SRM Launcher",
        tier: "S",
        description: "High-tracking fragmentation swarm. Dominates fighters and light ships, massive ammo reserves."
      },
      {
        name: "Squall MLRS",
        tier: "S-",
        description: "Long-range kinetic pressure missile with EMP. Excellent flux pressure across the battlefield."
      }
    ]
  },

  "Omega": {
  "Small": [
    {
      name: "Antimatter SRM Launcher",
      tier: "A+ / S",
      description: "Insanely good missile weapon, on a small mount of all things. It basically has unlimited ammo, although it uses charges to slowly regen, so the initial burst is where its at. Not a lot of range, and uses flux to fire (which can be dangerous to frontline ships you want to be tanking), but it's so fast and strong it hits the target 99% of the time. Energy type damage lets it damage anything equally, AI doesn't even have to be smart about it. On second thought you can look at this as a great energy burst gun practically, so fucking good and fun to use."
    },
    {
      name: "Minipulser",
      tier: "A",
      description: "The first hybrid weapon on this list, I'll write a small paragraph to explain what isn't immediately obvious. Hybrid weapons can be put in both ballistic and energy mounts, an while it usually doesn't matter where it's installed, in some cases it's worth looking closely at the description. For example let's say your ship has High Energy Focus system, that boosts energy weapon damage. You'd think hybrid weapon fall into this group since they can be installed into energy mounts, but it depends on specific hybrid weapon. It will only get boosted if the description says \"Counts as Energy for stat modifiers\" listed under the damage type on the info card. All hybrid weapons have this clarification so don't forget to look it up. Next, ships with ballistic mounts and a Ballistic Rangefinder hullmod will get double the range for hybrid weapons, plus an additional 100 range, that even includes large hybrid weapons.\n\nNow for the gun itself, Minipulser is a bloody gamechanger for high tech ships. Kinetic damage is very valuable for them, especially when it's a burst weapon. Ballistic ships imo don't have much uses for it, as for 8 OP you can get regular ballistics which don't need Ballistic Rangefinder to compete with range. S+ tier for high tech ships, C for low tech and midline."
    },
    {
      name: "Rift Lance",
      tier: "A",
      description: "Mini Phase Lance in a small mount. Same range, less burst damage but better efficiency, amazing versus small, annoying targets. As with any other burst beam it needs additional help from kinetic weapons, or projectile weapons with good efficiency."
    },
    {
      name: "Shock Repeater",
      tier: "A+",
      description: "Hard not to compare it to Burst PD which goes into same small energy slot and costs the same 7 OP. Shock Repeaters have only 300 range, but they deal sustained damage with their lightning arcs that deal respectable EMP damage. They are crazy good versus fighters which just get flamed out from a single shot or two. Sliiighty worse at straight PD duty compared to Burst PD lasers when you only have 1 or 2, but they surpass them greatly when you manage to get more firing in the same area."
    }
  ],

  "Medium": [
    {
      name: "Cryoblaster",
      tier: "S+",
      description: "Easily the most powerful Omega weapon even after the nerf, Cryoblaster fires big fragmentation shots which eventually deal with armour themselves, and then just melt through hull. It's so game changing a single on put on an Onslaught transforms it from a very solid ship, to a nigh unstoppable ship. It's useful on any tech type, although low tech and midline ships may want to install Ballistic rangefinder to give it decent range. Any ship capable of firing it for a longer period of time is better of with it than any other weapon in the game. This honestly feels like it should've been a large weapon but oh well it's limited anyways."
    },
    {
      name: "Cryoflamer",
      tier: "C / B",
      description: "From the best weapon in the game to a cold piss stream, this cryo weapon is unfortunately underwhelming for most ships in the game. Only use I see are SO builds and some very fast frigates and destroyers. Another hybrid weapon that you could put on a low tech ship, but you should never do so. Even though it has insane DPS and great flux efficiency, that doesn't tell the whole story. Low range and accompanying flux costs means your ships will overflux themselves ultra fast in a battle. Better for a player that won't just fire everything until the charges are depleted, but still outshined by even most normal weapons. Really cool looking and also really niche."
    },
    {
      name: "Disintegrator",
      tier: "C+",
      description: "Yet another cool and unique hybrid weapon that ends up as a letdown. Disintegrators fires 3 shots in a very spread pattern with terrible flux efficiency, but each shot will deal scripted armour damage if it connects with enemy hull. I feel like the problem lies in its very design, when do you ever want to slowly chew through your enemy instead of just finishing it or severely damage it? You want to get upper hand in battles and destroy enemies fast and efficiently. This is a weapon that's all about sustain fights with ships that can dance around enemies for weeks, and that's why it seems crazy good on Tesseracts while being underwhelming in player fleets. It's not THAT bad as I paint it as a general weapon, but definitely disappointing as a weapon you get as a reward for fighting the hardest fights in the game."
    },
    {
      name: "Resonator MRM Launcher",
      tier: "A-",
      description: "Another unlimited missile costing flux and working off charges, Resonators are very nice support missiles that deal kinetic damage from far away. High OP cost and not that damaging, they're still super useful for their ability to provide unlimited kinetic pressure. Feel like an inferior choice for ships that will fight head on with the enemy, so best put on carriers and other back line ships."
    },
    {
      name: "Rift Beam",
      tier: "B-",
      description: "Expensive medium energy beam that deals consistent damage while creating small rifts that deal additional damage. And because of that it's one of the best anti-fighter tools there is. But it's main role is PD so it prioritizes missiles and doesn't actually seem that good for that. So honestly kinda underwhelming for most things because 1.0 efficiency isn't that fancy for such a weapon. Rifts are also random in the way they appear, making it a meh choice for ship vs ship combat."
    }
  ],

  "Large": [
    {
      name: "Reality Disruptor",
      tier: "B+",
      description: "The mother of all EMP weapons, it fires a big \"ball\" zapping everything in its way, missiles, fighters, ships that don't have full shield coverage. But the projectile doesn't deal damage, so the ship equipped with this will be basically in a support role trying to lock down a single ship. Projectile also passes through solid matter, so if there's a big ship facing it, that ship will probably have every single weapon knocked out. Sounds broken in theory but it isn't that busted once you get it. If a smidge of pressure attacks the ship equipped with it (so 2 enemies or more), that ship will likely go down. Incredibly fun to use, just be sure to capitalize on all that EMP damage."
    },
    {
      name: "Rift Cascade Emitter",
      tier: "B / A+",
      description: "Funnily enough, this is basically a side-grade to Tachyon Lance, while actually being worse in some situations. 30 OP, 1000 range and same fire rate as a Tach Lance, but it doesn't deal any EMP damage, has less burst damage and worse flux efficiency. Its key feature is creating a bunch of rifts on hit that follow the ship's outline. Potential damage is huge, but that potential damage will rarely become reality as the further away you are when hitting the target, the less rifts appear. So you have a 1000 range weapon that's supposed to be used much closer than that, to get the actual benefit. This is why it's lacklustre on AI ships. Even a skilled player needs a whole loadout built around this weapon and precise aiming to get most rifts possible.\n\nThe only situation where it felt super strong was on Ziggurat, paired with a Tach Lance (they're amazing together), but then again Ziggurat itself is busted."
    },
    {
      name: "Rift Torpedo Launcher",
      tier: "B-",
      description: "Highest damaging projectile in the game at whopping 6000 damage, it's a synergy weapon firing homing energy torpedoes at medium-high range. Unlimited ammo as other Omega missiles, it costs the same flux it deals in damage, meaning it might be dangerous to fire off these when surrounded. Missile itself has very high hitpoints but also moves very slow, getting your 6k damage and flux projectile destroyed sucks. Really nice for support ships hanging a bit away, just be prepared to see a fair amount of overkills.\n\nDidn't get a single drop from 2 playthroughs so I had to use illegal means to test it out. Just goes to show that you can't tier these weapons having a build in mind with multiples of each large weapon."
    },
    {
      name: "Volatile Particle Driver",
      tier: "B- / A+",
      description: "Large hybrid gun dealing burst kinetic damage, it sprays a barrage of projectiles that deals monstrous damage in short time, to you and your enemy. Jokes aside it has a little quirk where approximately 50% of the projectiles will just fizzle out before reaching maximum range. So another weapon broken on Tesseracts and just ok on human ships. You really really want this on something fast, Odyssey, Ziggurat, oh wait that's it. I honestly don't think it's worth bothering with on ships with access to ballistics. In the end, it's very niche and not great for AI use, but it's the fastest way to bring down enemy shields in the game."
    }
  ]
}
}
};
