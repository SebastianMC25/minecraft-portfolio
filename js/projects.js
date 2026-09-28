/**
 * MINECRAFT CONFIGURATION & SYSTEMS PORTFOLIO DATABASE
 * (Internal server YAML code is kept confidential and protected against theft)
 */

const MINECRAFT_PROJECTS = [
  // =========================================================================
  // CATEGORY: MYTHICMOBS
  // =========================================================================
  {
    id: "mythicmobs-mob-config",
    title: "Mob Configuration: Tactical AI & Random Spawns",
    category: "mythicmobs",
    categoryLabel: "MYTHICMOBS",
    videoType: "mp4",
    videoSrc: "videos/randomspawn.mp4",
    thumbnail: "assets/images/thumb-mob-config.svg",
    tags: ["MythicMobs", "Mob AI", "RandomSpawn", "MMOCore", "Spawners"],
    description: "**Random Mob Spawn System Based on MMOCore Levels**\n\nThis is a random spawn system that spawns different mobs depending on the player's MMOCore level.\n\nIt also includes a horn that can be used to summon two guards to help you fight when you're in trouble.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "Anti-lag monitoring system with despawn and automatic removal of orphaned entities.",
      "Dynamic scaling: base mob spawns plus night reinforcements and party size multipliers.",
      "Strict density limits per area to maintain a rock-solid 20 TPS at all times.",
      "100% native in MythicMobs, zero external modeling plugin dependencies."
    ]
  },

  {
    id: "mythicmobs-cinematics-integration",
    title: "Cinematic Integration in MythicMobs: Awakening of the Kraken",
    category: "mythicmobs",
    categoryLabel: "MYTHICMOBS",
    videoType: "mp4",
    videoSrc: "videos/kraken.mp4",
    thumbnail: "assets/images/thumb-cinematic.svg",
    tags: ["MythicMobs", "Cinematics", "Kraken", "Orbital Camera", "Cutscenes"],
    description: "**Awakening of the Kraken: Cinematic Boss Intro**\n\nIn-game cinematic sequences and custom cutscenes integrated directly into MythicMobs skill mechanics.\n\nIn this demonstration, awakening the deep-sea Kraken shatters nearby player boats, blankets the surroundings in darkness and ink particles, summons localized lightning strikes, and triggers an orbital camera sequence before combat begins.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "Native cutscene trigger tightly synchronized with boss skill pipelines.",
      "Millisecond precision synchronization between particle FX, localized lightning, and custom sound effects.",
      "Physical destruction of nearby boats and dynamic launch of player entities.",
      "Seamless transition from the orbital cutscene camera directly into live combat."
    ]
  },

  {
    id: "mm-ce-aerial-navigation",
    title: "Aerial Navigation & Dynamic In-Flight Mob Encounters",
    category: "mythicmobs conditionalevents",
    categoryLabel: "MYTHICMOBS & CONDITIONALEVENTS",
    videoType: "mp4",
    videoSrc: "videos/volarspawn.mp4",
    thumbnail: "assets/images/thumb-air-navigation.svg",
    tags: ["MythicMobs", "ConditionalEvents", "Aerial Navigation", "Airborne Mobs", "Flight Encounters", "Immersive Travel"],
    description: "**Aerial Navigation & Dynamic In-Flight Mob Encounters**\n\nAn immersive aerial navigation and combat system engineered using ConditionalEvents and MythicMobs.\n\nWhile the player flies through designated air routes or open skies, the system tracks their airborne velocity and altitude to dynamically generate ambient and hostile aerial mobs along their path. This creates a deeply immersive atmosphere where air travel feels alive, unpredictable, and perilous rather than an empty transit.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "Real-time aerial velocity and altitude tracking configured via ConditionalEvents.",
      "Dynamic in-flight entity spawning synchronized with MythicMobs flight AI mechanics.",
      "Seamless airborne combat encounters without disrupting ongoing player travel vectors.",
      "Optimized despawn radius and entity cleanup to prevent server load during high-speed flight."
    ]
  },

{
    id: "mm-spawnaire",
    title: "Aerial Dragon Hunt & Sky Colossus Event",
    category: "mythicmobs conditionalevents",
    categoryLabel: "MYTHICMOBS & CONDITIONALEVENTS",
    videoType: "mp4",
    videoSrc: "videos/spawnaire.mp4",
    thumbnail: "assets/images/thumb-spawnaire.svg",
    tags: ["MythicMobs","ConditionalEvents","Aerial Combat","Dragon","Sky Boss"],
    description: "**Aerial Dragon Hunt & Sky Colossus Event**\\n\\nA dynamic aerial combat encounter for players riding flying pets at high altitude (Y≥90). Solo players face 1‑2 Wild Drakonins, while parties of 2+ trigger a high‑tier mini‑boss with a 50 % chance of Drako the Alpha Dragon (450 HP) or Sky Gargoyle King (400 HP). The AI uses a three‑phase distance system: lock‑on and fireball attacks up to 40 blocks, erratic gliding between 40‑55 blocks, and despawn with smoke beyond 55 blocks. Players receive slow‑fall protection and earn MMOCore XP, fireworks and victory announcements on defeat.",
    highlights: [
        "Real server video demonstration recorded in production.",
        "Smart encounter scaling (solo vs. party) with high‑tier mini‑bosses.",
        "Adaptive three‑phase distance AI with fireball, melee, and despawn phases.",
        "Player safety (slow‑fall) and reward system (XP, fireworks, announcements)."
    ]
},
  // =========================================================================
  // CATEGORY: CONDITIONALEVENTS
  // =========================================================================
  {
    id: "ce-meteor-event",
    title: "World Event: Meteor Impact & Dinosaur Encounter",
    category: "conditionalevents",
    categoryLabel: "CONDITIONALEVENTS",
    videoType: "mp4",
    videoSrc: "videos/meteorito.mp4",
    thumbnail: "assets/images/thumb-meteor.svg",
    tags: ["ConditionalEvents", "WorldGuard", "BossBar", "World Events", "Dinosaurs"],
    description: "**Meteor Impact & Dinosaur Encounter**\n\nDynamic real-time world event that triggers when a survival player meets strict conditions (not in creative mode, out of combat, not mounted, and outside protected safe zones).\n\nAlerts the player with a countdown BossBar and a 3-second reaction window: crouching (sneak) triggers the cinematic impact cutscene, while standing triggers an immediate hostile dinosaur encounter at their current location.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "Exhaustive state filtering: safe biomes, ocean exclusion, and WorldGuard region verification.",
      "Automatic scaling between solo players and parties (MMOCore Party) with increased difficulty.",
      "Interactive sneak reaction mechanic deciding between the cinematic cutscene or immediate spawn.",
      "Synchronized integration with MythicMobs Spawners for post-impact ground combat."
    ]
  },

  {
    id: "ce-regions-and-ambience",
    title: "Region-Based Mob Spawn System",
    category: "conditionalevents",
    categoryLabel: "CONDITIONALEVENTS",
    videoType: "mp4",
    videoSrc: "videos/spawnregion.mp4",
    thumbnail: "assets/images/thumb-regions.svg",
    tags: ["ConditionalEvents", "WorldGuard", "Region Spawns", "Level Scaling", "Zones"],
    description: "**Region-Based Mob Spawn System**\n\nDynamic mob generation system using WorldGuard regions and player level scaling configured entirely in ConditionalEvents.\n\nDetects player coordinates in real time, verifies their MMOCore level, and triggers modular spawn sub-events tailored to the specific region's difficulty tier.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "Seamless integration with WorldGuard regions for territory boundaries.",
      "Strict condition filtering (no fly, no creative, outside water, and in designated zones).",
      "Modular sub-event calls determined by the player's level bracket.",
      "Optimized cooldown management to prevent entity flooding in populated zones."
    ]
  },

  {
    id: "ce-shop-blocking",
    title: "Moral Choice Spawn & Region Shop Lockout System",
    category: "conditionalevents",
    categoryLabel: "CONDITIONALEVENTS",
    videoType: "mp4",
    videoSrc: "videos/spawnshop.mp4",
    thumbnail: "assets/images/thumb-stock.svg",
    tags: ["ConditionalEvents", "WorldGuard", "Moral Choices", "Karma", "Shops"],
    description: "**Moral Choice Spawn & Region Shop Lockout System**\n\nNarrative-driven reactive system where player decisions in the open world directly impact town trade and server economy.\n\nDuring random encounters with wounded soldiers, the player must choose whether to heal or finish them off. This alters their Karma; hostile decisions permanently bar the player from interacting with merchant NPCs inside city trade regions.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "In-game moral choice system with persistent player permission consequences.",
      "Joint integration of world events, WorldGuard region detection, and Citizens NPCs.",
      "Strict shop interaction lockout on negative karma accompanied by rejection sound FX.",
      "Branching rewards (reputation, economy currency, and exclusive keys) based on player route."
    ]
  },

  {
    id: "ce-healing-campfire-system",
    title: "RPG Healing Campfire System with MMOItems",
    category: "conditionalevents",
    categoryLabel: "CONDITIONALEVENTS",
    videoType: "mp4",
    videoSrc: "videos/heal.mp4",
    thumbnail: "assets/images/thumb-heal.svg",
    tags: ["ConditionalEvents", "MMOItems", "RPG Healing", "Combat System", "Campfire"],
    description: "**Healing System**\n\nWhile you are in combat and have low health, you can activate a campfire to heal yourself.\n\nThe campfire gradually restores your health over time, but while you are healing, it also makes you lose hunger.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "Contextual trigger: combat state detection and low-health thresholds via ConditionalEvents.",
      "Deep integration with MMOItems for campfire deployment and resource consumption.",
      "Progressive health regeneration balanced with gradual hunger/saturation depletion.",
      "Balanced in-game survival and RPG mechanic requiring zero commands from players."
    ]
  },

  {
    id: "ce-altar-boss-summon",
    title: "Altar Boss Summon: GPS Scroll & Party Region Lockout",
    category: "conditionalevents",
    categoryLabel: "CONDITIONALEVENTS",
    videoType: "mp4",
    videoSrc: "videos/altarspawn.mp4",
    thumbnail: "assets/images/thumb-altar.svg",
    tags: ["ConditionalEvents", "GPS Scroll", "Party Lockout", "Boss Altar", "Cinematics", "Loot Chest"],
    description: "**Boss Summoning Altar & Party Lockout**\n\nI reused some of the things I already had on my server and created this.\n\nIt’s a “scroll” that activates a GPS system to guide the player to the location where the boss can be summoned. Once they arrive, they have to interact with the altar, which summons the boss and triggers the cinematic.\n\nWhen entering the region, access is blocked for other players who are not part of the party (if you are in a party). Once they defeat the boss, it drops loot inside a chest.\n\nAfter that, the room is closed again and a 5-minute cooldown starts before someone can use it again.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "GPS navigation scroll guiding the player directly to the hidden boss altar coordinates.",
      "Dynamic region lockout restricting room access exclusively to the active player or party members.",
      "Cinematic camera sequence triggered upon altar interaction prior to boss engagement.",
      "Automated chest loot distribution and 5-minute room cooldown before re-entry is permitted."
    ]
  },

  {
    id: "ce-desert-whirlwind",
    title: "Desert Whirlwind Hazard: Dynamic Vortex Pull System",
    category: "conditionalevents",
    categoryLabel: "CONDITIONALEVENTS",
    videoType: "mp4",
    videoSrc: "videos/remolino.mp4",
    thumbnail: "assets/images/thumb-whirlwind.svg",
    tags: ["ConditionalEvents", "Desert Biome", "Whirlwind Hazard", "Vortex Pull", "Environmental Damage"],
    description: "**Desert Whirlwind & Vortex Hazard System**\n\nA dynamic environmental hazard system configured in ConditionalEvents for desert biomes.\n\nPeriodically, a powerful wind vortex (dust devil / whirlwind) spawns near players exploring the desert. The whirlwind pulls nearby players into its vortex, lifting them into the air and inflicting continuous damage until they manage to escape or the storm dissipates.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "Biome-specific environmental hazard detection configured entirely in ConditionalEvents.",
      "Dynamic vortex suction physics pulling players towards the center of the dust devil.",
      "Scaled damage over time and vertical launching mechanics while trapped inside.",
      "Automated timers and random intervals preventing predictable spawn patterns."
    ]
  },

  // =========================================================================
  // CATEGORY: CORETOOLS & MYTHICMOBS
  // =========================================================================
  {
    id: "coretools-mythicmobs-portal-spawns",
    title: "Random Mob Spawn System with CoreTools & MythicMobs",
    category: "coretools",
    categoryLabel: "CORETOOLS & MYTHICMOBS",
    videoType: "mp4",
    videoSrc: "videos/spawnportal.mp4",
    thumbnail: "assets/images/thumb-stations.svg",
    tags: ["CoreTools", "MythicMobs", "Random Spawn", "Schedulers", "Portals", "Waves"],
    description: "**Dimensional Portal & Wave Spawner System**\n\nAutomated synchronization system connecting CoreTools Schedulers with MythicMobs mob spawner controllers.\n\nTriggers periodic and randomized dimensional portal incursions and hostile mob waves at designated map coordinates, while automatically verifying player presence and handling cleanup.",
    highlights: [
      "Real server video demonstration recorded in production.",
      "Automated with CoreTools Schedulers (cron expressions) for staff-free recurring events.",
      "Coordinated invocation of MythicMobs event controllers and wave mechanics.",
      "Smart tick control and player radius checks before launching waves to safeguard server TPS.",
      "Visual dimensional portal FX and synchronized chat/actionbar warnings."
    ]
  }
];

// Export to window global
window.MINECRAFT_PROJECTS = MINECRAFT_PROJECTS;
