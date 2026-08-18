const PRODUCTS = [
  {
    id: 'panda-x-40k',
    name: 'MerryMi Panda X 40K',
    family: 'PANDA',
    image: 'images/jednorazowki-merrymi-baner-panda-x-40k-mobile.png',
    description: 'MerryMi Panda X 40K to flagowy model z 5% nikotyny i nawet 40 000 buchów, zaprojektowany dla użytkowników oczekujących wysokiej wydajności, intensywnego smaku i długiego czasu działania. Urządzenie łączy mocną baterię, stabilną pracę oraz szeroką gamę wyrazistych smaków. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🫐 Blueberry Raspberry Cherry', image: 'variant-images/merrymi-panda-x-40k/Blueberry-Raspberry-Cherry.jpg' },
      { name: '🫐 Blueberry Watermelon', image: 'variant-images/merrymi-panda-x-40k/Blueberry-Watermelon.jpg' },
      { name: '🫐 Crazy Blueberry', image: 'variant-images/merrymi-panda-x-40k/CRAZY-BLUEBERRY.jpg' },
      { name: '🍬 Desert Candy', image: 'variant-images/merrymi-panda-x-40k/Desert-Candy.jpg' },
      { name: '🐉 Dragonfruit Ice', image: 'variant-images/merrymi-panda-x-40k/Dragonfruit-Ice.jpg' },
      { name: '🍇 Frozen Grape', image: 'variant-images/merrymi-panda-x-40k/FROZEN-GRAPE.jpg' },
      { name: '🍊 Fanta', image: 'variant-images/merrymi-panda-x-40k/Fanta.jpg' },
      { name: '🍏 Green Apple', image: 'variant-images/merrymi-panda-x-40k/GREEN-APPLE.jpg' },
      { name: '🍊 Grapefruit Refresher', image: 'variant-images/merrymi-panda-x-40k/Grapefruit-Refresher.jpg' },
      { name: '🍑 Iced Peach Melon', image: 'variant-images/merrymi-panda-x-40k/ICED-PEACH-MELON.jpg' },
      { name: '⚡ Jager Red Energy', image: 'variant-images/merrymi-panda-x-40k/Jager-Red-Energy.jpg' },
      { name: '🥝 Kiwi Passion Fruit Guava', image: 'variant-images/merrymi-panda-x-40k/Kiwi-Passion-Fruit-Guava.jpg' },
      { name: '🍋 Lime Berry Orange', image: 'variant-images/merrymi-panda-x-40k/LIME-BERRY-ORANGE.jpg' },
      { name: '❄️ Lush Ice', image: 'variant-images/merrymi-panda-x-40k/LUSH-ICE.jpg' },
      { name: '🫐 Mixed Berries', image: 'variant-images/merrymi-panda-x-40k/MIXED-BERRIES.jpg' },
      { name: '🍊 Orange Cranberry Lime Ice', image: 'variant-images/merrymi-panda-x-40k/Orange-Cranberry-Lime-Ice.jpg' },
      { name: '🍓 Prime Strawberry', image: 'variant-images/merrymi-panda-x-40k/Prime-Strawberry.jpg' },
      { name: '⚡ Red Energy Ice', image: 'variant-images/merrymi-panda-x-40k/RED-ENERGY-ICE.jpg' },
      { name: '🍋 Sour Lemon Mojito', image: 'variant-images/merrymi-panda-x-40k/SOUR-LEMON-MOJITO.jpg' },
      { name: '🍉 Watermelon B-Pop', image: 'variant-images/merrymi-panda-x-40k/Watermelon-B-Pop.jpg' }
    ]
  },
  {
    id: 'm-mecha-16k',
    name: 'MerryMi M-Mecha 16K',
    family: 'MECHA',
    image: 'images/jednorazowki-merrymi-baner-m-mecha-16k-mobile.png',
    description: 'MerryMi M-Mecha 16K to kompaktowa jednorazówka 3% nikotyny, idealna dla osób szukających wygodnego formatu i solidnej wydajności. Oferuje do 16 000 buchów, równą pracę oraz intensywne aromaty, dzięki czemu świetnie sprawdza się na co dzień. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🫐 Aloe Blackcurrant', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-aloe-blackcurrant.jpg' },
      { name: '🍒 Black Cherry Lime', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-black-cherry-lime.png' },
      { name: '🌿 Black Mint', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-black-mint.png' },
      { name: '🫐 Blue Razz Ice', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-blue-razz-ice.png' },
      { name: '🫐 Blueberry Watermelon', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-blueberry-watermelon.jpg' },
      { name: '🌵 Cactus Candy', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-cactus-candy.png' },
      { name: '🍒 Cherry Cola', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-cherry-cola.png' },
      { name: '🥭 Cranberry Mango', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-cranberry-mango.png' },
      { name: '🥤 Dr. Peper', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-dr-peper.jpg' },
      { name: '🐉 Dragon Fruit Ice', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-dragon-fruit-ice.jpg' },
      { name: '🍊 Fanta', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-fanta.jpg' },
      { name: '🍑 Georgie Peach', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-georgie-peach.jpg' },
      { name: '🍇 Grape Berry', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-grape-berry.jpg' },
      { name: '🍇 Grape Ice', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-grape-ice.png' },
      { name: '🍊 Grapefruit Refresher', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-grapefruit-refresher.jpg' },
      { name: '🍬 Gummy Bears', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-gummy-bears.jpg' },
      { name: '⚡ Jagermeister Red Bull', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-jagermeister-red-bull.jpg' },
      { name: '🍵 Jasmine Tea', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-jasmine-tea.png' },
      { name: '🥝 Kiwi Passion Fruit Guava', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-kiwi-passion-fruit-guava.jpg' },
      { name: '🍋 Lemon Mojito', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-lemon-mojito.jpg' },
      { name: '❤️ Love 66', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-love-66.jpg' },
      { name: '🧊 Lychee Ice', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-lychee-ice.png' },
      { name: '🌴 Miami Mint', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-miami-mint.jpg' },
      { name: '🫐 Mix Berries', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-mix-berries.jpg' },
      { name: '⛰️ Mountain Soda', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-mountain-soda.png' },
      { name: '🔵 Mr Blue', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-mr-blue.jpg' },
      { name: '🍊 Orange Ice Kiwi', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-orange-ice-kiwi.jpg' },
      { name: '🍑 Peach Guava', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-peach-guava.jpg' },
      { name: '🍍 Pina Colada', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-pina-colada.png' },
      { name: '🍍 Pineapple Lychee Soda', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-pineapple-lychee-soda.png' },
      { name: '🍍 Pineapple Orange Soda', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-pineapple-orange-soda.jpg' },
      { name: '🩷 Pink Lemonade', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-pink-lemonade.jpg' },
      { name: '🍑 Pink Peach', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-pink-peach.png' },
      { name: '🍓 Prime Strawberry', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-prime-strawberry.jpg' },
      { name: '🍓 Raspberry Tea', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-raspberry-tea.png' },
      { name: '⚡ Red Energy Ice', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-red-energy-ice.jpg' },
      { name: '🍋 Sea Salt Lemon Tea', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-sea-salt-lemon-tea.png' },
      { name: '🍏 Sour Apple', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-sour-apple.png' },
      { name: '🍓 Strawberry Banana', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-strawberry-banana.png' },
      { name: '🍓 Strawberry Kiwi', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-strawberry-kiwi.png' },
      { name: '🔥 Summer Flame', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-summer-flame.jpg' },
      { name: '🥭 Triple Mango', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-triple-mango.png' },
      { name: '🥤 Vimto', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-vimto.jpg' },
      { name: '🍉 Watermelon Ice', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-watermelon-ice.png' },
      { name: '⚡ Wicks', image: 'variant-images/merrymi-m-mecha/jednorazowki-merrymi-m-mecha-wicks.jpg' }
    ]
  },
  {
    id: 'blade-30k',
    name: 'MerryMi Blade 30K',
    family: 'BLADE',
    image: 'images/jednorazowki-merrymi-produkt-blade-30k.png',
    description: 'MerryMi Blade 30K to model nowej generacji z 5% nikotyny i do 30 000 buchów. Dzięki technologii Dual Mesh Coil, regulowanemu airflow oraz wysokiej stabilności działania zapewnia gęstą parę, wyraźny smak i dużą kontrolę mocy. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🫐 Aloe Blackcurrant', image: 'variant-images/merrymi-blade-30k/Aloe-Blackcurrant.png' },
      { name: '🍊 Aperol', image: 'variant-images/merrymi-blade-30k/Aperol.jpg' },
      { name: '🍒 Black Cherry Lime', image: 'variant-images/merrymi-blade-30k/Black-Cherry-Lime.png' },
      { name: '🍬 Blackberry Lemon Mint Candy', image: 'variant-images/merrymi-blade-30k/Blackberry-Lemon-Mint-Candy.png' },
      { name: '🌵 Cactus Candy', image: 'variant-images/merrymi-blade-30k/Cactus-Candy.png' },
      { name: '🍒 Cherry Cola', image: 'variant-images/merrymi-blade-30k/Cherry-Cola.png' },
      { name: '🫐 Crazy Blueberry', image: 'variant-images/merrymi-blade-30k/Crazy-Blueberry.png' },
      { name: '🥤 Dr. Peper', image: 'variant-images/merrymi-blade-30k/Dr. Peper.jpg' },
      { name: '🐉 Dragon Fruit Ice', image: 'variant-images/merrymi-blade-30k/Dragon-Fruit-Ice.png' },
      { name: '🍊 Fanta', image: 'variant-images/merrymi-blade-30k/Fanta.jpg' },
      { name: '🍇 Grape Berry', image: 'variant-images/merrymi-blade-30k/Grape Berry.jpg' },
      { name: '🍇 Grape Ice', image: 'variant-images/merrymi-blade-30k/Grape-Ice.png' },
      { name: '🍊 Grapefruit Refresher', image: 'variant-images/merrymi-blade-30k/Grapefruit Refresher.jpg' },
      { name: '🍑 Iced Peach Melon', image: 'variant-images/merrymi-blade-30k/Iced Peach Melon.jpg' },
      { name: '⚡ Jager Red Energy', image: 'variant-images/merrymi-blade-30k/Jager-Red-Energy.jpg' },
      { name: '🥝 Kiwi Passion Fruit Guava', image: 'variant-images/merrymi-blade-30k/Kiwi-Passion-Fruit-Guava.png' },
      { name: '🍋 Lemon Mojito', image: 'variant-images/merrymi-blade-30k/Lemon-Mojito.jpg' },
      { name: '🥒 Lemonade Cucumber Mint', image: 'variant-images/merrymi-blade-30k/Lemonade-Cucumber-Mint.png' },
      { name: '❤️ Love 66', image: 'variant-images/merrymi-blade-30k/Love-66.jpg' },
      { name: '🫐 Mixed Berries', image: 'variant-images/merrymi-blade-30k/Mixed-Berries.png' },
      { name: '🔵 Mr Blue', image: 'variant-images/merrymi-blade-30k/Mr-Blue.jpg' },
      { name: '🍊 Orange Dragon', image: 'variant-images/merrymi-blade-30k/Orange Dragon.jpg' },
      { name: '🍑 Peach Lemonade', image: 'variant-images/merrymi-blade-30k/Peach-Lemonade.png' },
      { name: '🍍 Pineapple Orange Soda', image: 'variant-images/merrymi-blade-30k/Pineapple-Orange-Soda.png' },
      { name: '🍑 Pink Peach', image: 'variant-images/merrymi-blade-30k/Pink-Peach.png' },
      { name: '⚡ Red Energy Ice', image: 'variant-images/merrymi-blade-30k/Red-Energy-Ice.png' },
      { name: '🍏 Sour Apple', image: 'variant-images/merrymi-blade-30k/Sour-Apple.png' },
      { name: '🍓 Strawberry Raspberry Cherry Ice', image: 'variant-images/merrymi-blade-30k/Strawberry-Raspberry-Cherry-Ice.png' },
      { name: '🍓 Strawberry', image: 'variant-images/merrymi-blade-30k/Strawberry.png' },
      { name: '🔥 Summer Flame', image: 'variant-images/merrymi-blade-30k/Summer-Flame.png' },
      { name: '🥤 Vimto', image: 'variant-images/merrymi-blade-30k/Vimto.jpg' },
      { name: '🍉 Watermelon Ice', image: 'variant-images/merrymi-blade-30k/Watermelon-Ice.png' }
    ]
  },
  {
    id: 'mecha-pro-35k',
    name: 'MerryMi Mecha Pro 35K',
    family: 'MECHA',
    image: 'images/merrymi-mecha-pro-35k.jpg',
    description: 'MerryMi Mecha Pro 35K to premium jednorazówka z 5% nikotyny, oferująca do 35 000 buchów (lub 25 000 w trybie Turbo). Model wyróżnia się wyświetlaczem, regulacją mocy, dopracowaną personalizacją i mocną baterią ładowaną przez USB-C. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🍊 Aperol', image: 'variant-images/merrymi-mecha-pro-35k/Aperol.jpg' },
      { name: '🌿 Black Mint', image: 'variant-images/merrymi-mecha-pro-35k/Black-Mint.jpg' },
      { name: '🍒 Blackberry Cherry', image: 'variant-images/merrymi-mecha-pro-35k/Blackberry-Cherry.jpg' },
      { name: '🫐 Blue Razz Ice', image: 'variant-images/merrymi-mecha-pro-35k/Blue-Razz-Ice.jpg' },
      { name: '🫐 Blueberry Cherry Cranberry', image: 'variant-images/merrymi-mecha-pro-35k/Blueberry-Cherry-Cranberry.jpg' },
      { name: '🌵 Cactus Candy', image: 'variant-images/merrymi-mecha-pro-35k/Cactus-Candy.jpg' },
      { name: '🍒 Cherry Cola', image: 'variant-images/merrymi-mecha-pro-35k/Cherry-Cola.jpg' },
      { name: '🍊 Fanta', image: 'variant-images/merrymi-mecha-pro-35k/Fanta.jpg' },
      { name: '🍇 Grape Ice', image: 'variant-images/merrymi-mecha-pro-35k/Grape-Ice.jpg' },
      { name: '⚡ Jager Red Energy', image: 'variant-images/merrymi-mecha-pro-35k/Jager-Red-Energy.jpg' },
      { name: '❤️ Love 66', image: 'variant-images/merrymi-mecha-pro-35k/Love66.jpg' },
      { name: '🫐 Mix Berries', image: 'variant-images/merrymi-mecha-pro-35k/Mix-Berries.jpg' },
      { name: '🌲 Pine Needle Berry Mint', image: 'variant-images/merrymi-mecha-pro-35k/Pine-Needle-Berry-Mint.jpg' },
      { name: '🍓 Prime Strawberry', image: 'variant-images/merrymi-mecha-pro-35k/Prime-Strawberry.jpg' },
      { name: '🍋 Sour Lemon Mojito', image: 'variant-images/merrymi-mecha-pro-35k/Sour-Lemon-Mojito.jpg' },
      { name: '🔥 Summer Blaze', image: 'variant-images/merrymi-mecha-pro-35k/Summer-Blaze.jpg' },
      { name: '🍑 Summer Peach Ice', image: 'variant-images/merrymi-mecha-pro-35k/Summer-Peach-Ice.jpg' },
      { name: '🥤 Vimto', image: 'variant-images/merrymi-mecha-pro-35k/Vimto.jpg' },
      { name: '🍉 Watermelon Ice', image: 'variant-images/merrymi-mecha-pro-35k/Watermelon-Ice.jpg' },
      { name: '🍑 White Peach Berries', image: 'variant-images/merrymi-mecha-pro-35k/White-Peach-Berries.jpg' }
    ]
  },
  {
    id: 'wiflux-24k',
    name: 'MerryMi WiFlux 24K',
    family: 'WIFLUX',
    image: 'images/jednorazowki-merrymi-produkt-wiflux-24k.png.png',
    description: 'MerryMi WiFlux 24K to wydajny model z zakresem 2-5% nikotyny i do 24 000 buchów, stworzony dla osób ceniących mocny smak oraz wygodę użytkowania. Urządzenie zapewnia stabilną pracę, nowoczesny design i szeroki wybór intensywnych kompozycji smakowych. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🍒 Blackberry Cherry', image: 'variant-images/merrymi-wiflux/Blackberry Cherry.png' },
      { name: '🫐 Blue Razz Ice', image: 'variant-images/merrymi-wiflux/Blue Razz Ice.png' },
      { name: '🫐 Blueberry Raspberry Pomegranate', image: 'variant-images/merrymi-wiflux/Blueberry-Raspberry Pomegranate.png' },
      { name: '🍒 Cherry Watermelon Raspberry', image: 'variant-images/merrymi-wiflux/Cherry-Watermelon Raspberry.png' },
      { name: '🍇 Grape Cranberry', image: 'variant-images/merrymi-wiflux/Grape Cranberry.png' },
      { name: '🍇 Grape Ice', image: 'variant-images/merrymi-wiflux/Grape Ice.png' },
      { name: '🐉 Lemon Dragon Ice', image: 'variant-images/merrymi-wiflux/Lemon Dragon Ice.png' },
      { name: '🍋 Pink Lemon', image: 'variant-images/merrymi-wiflux/Pink Lemon.png' },
      { name: '🍓 Strawberry Dragon Fruit Kiwi', image: 'variant-images/merrymi-wiflux/Strawberry-Dragon Fruit Kiwi.png' },
      { name: '🍉 Watermelon Grapefruit', image: 'variant-images/merrymi-wiflux/Watermelon-Grapefruit.png' }
    ]
  },
  {
    id: 'mecha-x-28k',
    name: 'MerryMi Mecha X 36K',
    family: 'MECHA',
    image: 'images/jednorazowki-merrymi-produkt-mecha-x-28k.jpg',
    description: 'MerryMi Mecha X 36K to nowoczesna jednorazówka 3% nikotyny z wydajnością do 36 000 buchów w trybie normalnym oraz do 30 000 buchów w trybie turbo. Model został stworzony dla użytkowników, którzy oczekują mocnego uderzenia smaku, długiego działania i szerokiego wyboru wariantów aromatycznych. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🫐 Crazy Blueberry', image: 'variant-images/merrymi-mecha-x-28k/Crazy-Blueberry.jpg' },
      { name: '🐉 Dragon Fruit Ice', image: 'variant-images/merrymi-mecha-x-28k/Dragon-Fruit-Ice.jpg' },
      { name: '🍇 Grape Ice', image: 'variant-images/merrymi-mecha-x-28k/Grape-Ice.jpg' },
      { name: '🍊 Grapefruit Refresher', image: 'variant-images/merrymi-mecha-x-28k/Grapefruit-Refresher.jpg' },
      { name: '🥝 Kiwi Passionfruit Guava', image: 'variant-images/merrymi-mecha-x-28k/Kiwi-Passionfruit-Guava.jpg' },
      { name: '🍋 Lime Apple Mint', image: 'variant-images/merrymi-mecha-x-28k/Lime-Apple-Mint.jpg' },
      { name: '🍋 Lime Lemongrass', image: 'variant-images/merrymi-mecha-x-28k/Lime-Lemongrass.jpg' },
      { name: '🌴 Miami Mint', image: 'variant-images/merrymi-mecha-x-28k/Miami-Mint.jpg' },
      { name: '🍑 Peach Guava', image: 'variant-images/merrymi-mecha-x-28k/Peach-Guava.jpg' },
      { name: '🩷 Pink Lemonade', image: 'variant-images/merrymi-mecha-x-28k/Pink-Lemonade.jpg' },
      { name: '🍋 Sour Lemon Mojito', image: 'variant-images/merrymi-mecha-x-28k/Sour-Lemon-Mojito.jpg' },
      { name: '🍓 Sour Strawberry Daiquiri', image: 'variant-images/merrymi-mecha-x-28k/Sour-Strawberry-Daiquiri.jpg' },
      { name: '🍓 Strawberry Kiwi', image: 'variant-images/merrymi-mecha-x-28k/Strawberry-Kiwi.jpg' },
      { name: '🍉 Watermelon Ice', image: 'variant-images/merrymi-mecha-x-28k/Watermelon-Ice.jpg' },
      { name: '⚡ Wicks', image: 'variant-images/merrymi-mecha-x-28k/Wicks.jpg' }
    ]
  },
  {
    id: 'mecha-twist-75k',
    name: 'MerryMi Mecha Twist 75K',
    family: 'MECHA',
    image: 'images/merrymi-mecha-twist-75k.png',
    description: 'MerryMi Mecha Twist 75K to flagowy model 5% nikotyny z wydajnością do 75 000 buchów, wyposażony w trzy niezależne zbiorniki 15 ml (45 ml łącznie) i obrotowy przełącznik Triple Flavors Switch, dzięki któremu zmieniasz smak bez mieszania aromatów. Urządzenie ma mocną baterię 750 mAh z ładowaniem USB-C, cewkę mesh oraz wskaźnik LED poziomu baterii i płynu. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🍋 Lemon Mojito + ⚡ Jager Red Energy + 🍹 Rum Fruit', image: 'images/merrymi-mecha-twist/cocktail-series.png' },
      { name: '🍇 Frozen Grape + 🍇 Grape Berries + 🌿 Aloe Grape', image: 'images/merrymi-mecha-twist/grape-series.png' },
      { name: '🌿 Miami Mint + 🍇 Grape Mint + 🍒 Blackberry Lemon Mint', image: 'images/merrymi-mecha-twist/mint-series.png' },
      { name: '🍑 Peach Ice + 🍑 Ice Peach Melon + 🍑 Peach Guava', image: 'images/merrymi-mecha-twist/peach-series.png' },
      { name: '🍊 Fanta + 🍒 Cherry Cola + ⚡ Red Energy Ice', image: 'images/merrymi-mecha-twist/soda-series.png' },
      { name: '🐉 Dragon Fruit Ice + 🥝 Kiwi Passion Fruit Guava + 🍊 Grapefruit Refresher', image: 'images/merrymi-mecha-twist/tropical-series.png' },
      { name: '🍉 Watermelon Ice + 🍉 Watermelon Lychee Ice + 🍏 Watermelon Apple', image: 'images/merrymi-mecha-twist/watermelon-series.png' },
      { name: '🍏 Sour Apple + 🍏 Watermelon Apple + 🍏 Lime Apple', image: 'images/merrymi-mecha-twist/apple-series.png' },
      { name: '🍓 Red Raspberry Strawberry + 🍒 Cherry Pomegranate Cranberry + 🍓 Strawberry Raspberry Cherry Ice', image: 'images/merrymi-mecha-twist/berry-series-2.png' },
      { name: '🫐 Crazy Blueberry + 🫐 Mixed Berries + 🍓 Prime Strawberry', image: 'images/merrymi-mecha-twist/berry-series.png' }
    ]
  },
  {
    id: 'kitty-20k',
    name: 'MerryMi Kitty 20K',
    family: 'KITTY',
    image: 'images/jednorazowki-merrymi-produkt-kitty-20k.jpg',
    description: 'MerryMi Kitty 20K to kompaktowy model około 3% nikotyny, łączący stylowy wygląd z wysoką funkcjonalnością. Oferuje do 20 000 buchów, wygodny rozmiar i stabilne działanie, dlatego jest dobrym wyborem dla użytkowników szukających balansu między mocą a mobilnością. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🫐 Blue Razz Ice', image: 'variant-images/merrymi-kitty-20K/Blue-Razz-Ice.jpg' },
      { name: '🌵 Cactus Candy', image: 'variant-images/merrymi-kitty-20K/Cactus-Candy.jpg' },
      { name: '🍒 Cherry Cola', image: 'variant-images/merrymi-kitty-20K/Cherry-Cola.jpg' },
      { name: '🍊 Fanta', image: 'variant-images/merrymi-kitty-20K/Fanta.jpg' },
      { name: '🍇 Frozen Grape', image: 'variant-images/merrymi-kitty-20K/Frozen-Grape.jpg' },
      { name: '🥝 Kiwi Passion Fruit Guava', image: 'variant-images/merrymi-kitty-20K/Kiwi-Passion-Fruit-Guava.jpg' },
      { name: '🍋 Lemon Mojito', image: 'variant-images/merrymi-kitty-20K/Lemon-Mojito.jpg' },
      { name: '🫐 Mixed Berries', image: 'variant-images/merrymi-kitty-20K/Mixed-Berries.jpg' },
      { name: '🌲 Pine Needle Berry Mint', image: 'variant-images/merrymi-kitty-20K/Pine-Needle-Berry-Mint.jpg' },
      { name: '🍑 Pink Peach Lemonade', image: 'variant-images/merrymi-kitty-20K/Pink-Peach-Lemonade.jpg' }
    ]
  },
  {
    id: 'panda-twins-40k',
    name: 'MerryMi Panda Twins 40K',
    family: 'PANDA',
    image: 'images/jednorazowki-merrymi-produkt-panda-twins-40k.jpg',
    description: 'MerryMi Panda Twins 40K to model 2% nikotyny z bardzo długim czasem pracy i wydajnością do 40 000 buchów. Urządzenie wyróżnia się nowoczesną konstrukcją, wysokim komfortem użytkowania oraz ciekawymi duetami smaków w jednym produkcie. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🍏 Green Apple + 🍇 Grape Slush', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-green-apple-grape-slush-alt.png' },
      { name: '🍒 Cherry Cola + ⚡ Jager Red Energy', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-blue-razz-ice-love-66.png' },
      { name: '🍓 Prime Strawberry + 🫐 Crazy Blueberry', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-prime-strawberry-crazy-blueberry.png' },
      { name: '🥝 Kiwi Passion Fruit Guava + 🫐 Mix Berries', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-kiwi-passion-fruit-guava-mix-berries.png' },
      { name: '🍑 Peach Melon Ice + 🍑 Peach Guava', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-blackberry-cherry-dragon-fruit-ice.png' },
      { name: '🫐 Blue Razz Ice + ❤️ Love 66', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-blue-razz-ice-love-66-alt.png' },
      { name: '🍒 Blackberry Cherry + 🐉 Dragon Fruit Ice', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-blackberry-cherry-dragon-fruit-ice-alt.png' },
      { name: '🍋 Lemon Lime + 🩷 Pink Lemonade', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-green-apple-grape-slush.png' },
      { name: '🥝 Feijoa + 🍊 Orange Kiwi Ice', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-feijoa-orange-kiwi-ice.png' },
      { name: '🍉 Watermelon Ice + 🍊 Grapefruit Refresher', image: 'variant-images/merrymi-panda-twins-40k/jednorazowki-merrymi-panda-twins-40k-watermelon-ice-grapefruit-refresher.png' }
    ]
  },
  {
    id: 'mk20000-20k',
    name: 'MerryMi MK20000 20K',
    family: 'PANDA',
    image: 'images/merrymi-mk20000-20k.png',
    description: 'MerryMi MK20000 20K (Panda Edition) to model 5% nikotyny oferujący do 20 000 buchów i nowoczesne funkcje codziennej kontroli urządzenia. Zapewnia intensywny smak, dobrą żywotność oraz bardzo dobry balans między mocą, wygodą i czasem użytkowania. To jednorazówka premium oraz e papieros dla osób, które wybierają jednorazówki i e papierosy jednorazowe.',
    variants: [
      { name: '🍮 Banana Custard', image: 'variant-images/merrymi-mk20000-20k/Banana-Custard.png' },
      { name: '🫐 Blackcurrant Dragon Fruit', image: 'variant-images/merrymi-mk20000-20k/Blackcurrant Dragon Fruit.png' },
      { name: '🫐 Blue Razz Lemonade', image: 'variant-images/merrymi-mk20000-20k/Blue-Razz-Lemonade.png' },
      { name: '🫐 Blueberry Bubble Gum', image: 'variant-images/merrymi-mk20000-20k/Blueberry-Bubble-gum.jpg' },
      { name: '🫐 Blueberry Pomegranate', image: 'variant-images/merrymi-mk20000-20k/Blueberry-Pomegranate.png' },
      { name: '🫐 Blueberry Raspberry', image: 'variant-images/merrymi-mk20000-20k/Blueberry-Raspberry.png' },
      { name: '🌵 Cactus Candy', image: 'variant-images/merrymi-mk20000-20k/Cactus-Candy.jpg' },
      { name: '🫐 Crazi Blueberry', image: 'variant-images/merrymi-mk20000-20k/Crazi-Blueberry.png' },
      { name: '🍇 Grape Ice', image: 'variant-images/merrymi-mk20000-20k/Grape-Ice.png' },
      { name: '🍊 Grapefruit Fig', image: 'variant-images/merrymi-mk20000-20k/Grapefruit-Fig.jpg' },
      { name: '🥝 Kiwi Passionfruit Guava', image: 'variant-images/merrymi-mk20000-20k/Kiwi-Passionfruit-guava.png' },
      { name: '🍋 Lemon Lime', image: 'variant-images/merrymi-mk20000-20k/Lemon--Lime.png' },
      { name: '🍋 Lemon Mojito', image: 'variant-images/merrymi-mk20000-20k/Lemon-Mojito.jpg' }
    ]
  },
  {
    id: 'salts-30ml',
    name: 'MerryMi Salts 30ml',
    family: 'Olejki Do E Papierosa',
    image: 'images/olejki-merrymi-30ml.jpg',
    description: 'MerryMi Salts 30 ml to linia liquidy na sole nikotynowe 5% (50 mg/ml), przeznaczona do urządzeń typu pod. To olejki do e papierosa dla osób, które szukają wyrazistego smaku, a każdy olejek do e papierosa został opracowany pod stabilną pracę pod-systemów. Ta sól nikotynowa i dostępne sole nikotynowe zapewniają szybkie odczucie nikotyny oraz gładkie odczucie.',
    buyUrl: 'https://www.dbucha.com/products/e-liquid-merrymi-salts-30ml-sole-nikotynowe',
    variants: [
      { name: '🫐 Aloe Blackcurrant', image: 'variant-images/merrymi-olejki-30ml/Aloe-Blackcurrant.jpg' },
      { name: '🍋 Breezy Lemon Berry', image: 'variant-images/merrymi-olejki-30ml/Breezy-Lemon-Berry.jpg' },
      { name: '🫐 Crazy Blueberry', image: 'variant-images/merrymi-olejki-30ml/Crazy-Blueberry.jpg' },
      { name: '🍬 Desert Candy', image: 'variant-images/merrymi-olejki-30ml/Desert-Candy.jpg' },
      { name: '🐉 Dragon Fruit Ice', image: 'variant-images/merrymi-olejki-30ml/Dragon-Fruit-Ice.jpg' },
      { name: '🍊 Fanta', image: 'variant-images/merrymi-olejki-30ml/Fanta.jpg' },
      { name: '🍒 Fizzy Cherry', image: 'variant-images/merrymi-olejki-30ml/Fizzy-Cherry.jpg' },
      { name: '🫐 Forest Berries', image: 'variant-images/merrymi-olejki-30ml/Forest-Berries.jpg' },
      { name: '🍇 Frozen Grape', image: 'variant-images/merrymi-olejki-30ml/Frozen-Grape.jpg' },
      { name: '🍇 Grape Berry', image: 'variant-images/merrymi-olejki-30ml/Grape-Berry.jpg' },
      { name: '🍊 Grapefruit Refresher', image: 'variant-images/merrymi-olejki-30ml/Grapefruit-Refresher.jpg' },
      { name: '🍏 Green Apple', image: 'variant-images/merrymi-olejki-30ml/Green-Apple.jpg' },
      { name: '🍑 Iced Peach Melon', image: 'variant-images/merrymi-olejki-30ml/Iced-Peach-Melon.jpg' },
      { name: '⚡ Jager Red Energy', image: 'variant-images/merrymi-olejki-30ml/Jager-Red-Energy.jpg' },
      { name: '🥝 Kiwi Passion Fruit Guava', image: 'variant-images/merrymi-olejki-30ml/Kiwi-Passion-Fruit-Guava.jpg' },
      { name: '🌿 Lemon Mojito', image: 'variant-images/merrymi-olejki-30ml/Lemon-Mojito.jpg' },
      { name: '❄️ Lush Ice', image: 'variant-images/merrymi-olejki-30ml/Lush-Ice.jpg' },
      { name: '🌴 Miami Mint', image: 'variant-images/merrymi-olejki-30ml/Miami-Mint.jpg' },
      { name: '🫐 Mixed Berries', image: 'variant-images/merrymi-olejki-30ml/Mixed-Berries.jpg' },
      { name: '🍊 Orange Dragon', image: 'variant-images/merrymi-olejki-30ml/Orange-Dragon.jpg' },
      { name: '🍑 Peach Lemonade', image: 'variant-images/merrymi-olejki-30ml/Peach-lemonade.jpg' },
      { name: '🍓 Prime Strawberry', image: 'variant-images/merrymi-olejki-30ml/Prime-Strawberry.jpg' },
      { name: '⚡ Red Energy Ice', image: 'variant-images/merrymi-olejki-30ml/Red-Energy-Ice.jpg' },
      { name: '🍓 Strawberry Raspberry Cherry Ice', image: 'variant-images/merrymi-olejki-30ml/Strawberry-Raspberry-Cherry-Ice.jpg' },
      { name: '🍋 Tropical Citrus Fizz', image: 'variant-images/merrymi-olejki-30ml/Tropical-Citrus-Fizz.jpg' }
    ]
  }
];

const DBUCHA_BUY_BY_ID = {
  'panda-x-40k': 'https://www.dbucha.com/products/jednorazowki-merrymi-panda-x-40k-buchow',
  'm-mecha-16k': 'https://www.dbucha.com/products/merrymi-m-mecha-16k-buchow',
  'blade-30k': 'https://www.dbucha.com/products/merrymi-blade-30k-buchow',
  'mecha-pro-35k': 'https://www.dbucha.com/products/merrymi-mecha-pro-35k-buchow',
  'wiflux-24k': 'https://www.dbucha.com/products/merrymi-wiflux-24k-buchow',
  'mecha-x-28k': 'https://www.dbucha.com/products/jednorazowki-merrymi-mecha-x-36k',
  'mecha-twist-75k': 'https://www.dbucha.com/products/jednorazowki-merrymi-mecha-twist-75k',
  'kitty-20k': 'https://www.dbucha.com/collections/jednorazowki-merrymi',
  'panda-twins-40k': 'https://www.dbucha.com/products/jednorazowki-merrymi-panda-twins-40k-buchow',
  'mk20000-20k': 'https://www.dbucha.com/products/merrymi-mk20000-20k-buchow',
  'salts-30ml': 'https://www.dbucha.com/products/e-liquid-merrymi-salts-30ml-sole-nikotynowe'
};

function findProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function getFlavorLabel(variantName) {
  return String(variantName)
    .replace(/^[^A-Za-z0-9ĄĆĘŁŃÓŚŹŻąćęłńóśźż]+/u, '')
    .trim();
}

function createVariantDescription(variantName) {
  const flavorLabel = getFlavorLabel(variantName);
  const flavor = flavorLabel.toLowerCase();

  if (/ice|frozen|cool|mint|mojito|lush/.test(flavor)) {
    return `${flavorLabel} to chłodny smak z wyraźnym, odświeżającym finiszem przy każdym Buchów.`;
  }

  if (/strawberry|berry|blue|grape|cherry|blackcurrant|raspberry|blueberry/.test(flavor)) {
    return `${flavorLabel} zapewnia intensywny, owocowy profil z naturalną słodyczą i soczystym aromatem.`;
  }

  if (/lemon|lime|citrus|orange|grapefruit|fanta/.test(flavor)) {
    return `${flavorLabel} łączy cytrusową świeżość z lekką słodyczą, dając bardzo rześki charakter smaku.`;
  }

  if (/mango|peach|kiwi|guava|pineapple|tropical|dragon/.test(flavor)) {
    return `${flavorLabel} to tropikalna kompozycja, która jest pełna smaku i dobrze wyczuwalna od pierwszego buchu.`;
  }

  return `${flavorLabel} to zbalansowany smak o wyraźnym aromacie, stworzony do codziennego korzystania.`;
}

function createCard(product) {
  const buyUrl = product.buyUrl || DBUCHA_BUY_BY_ID[product.id] || 'https://www.dbucha.com/collections/merrymi-jednorazowki';
  const productTag = product.id === 'salts-30ml' ? 'Olejki do e papieros' : 'Jednorazówki';

  return `
    <article class="catalog-card">
      <a class="catalog-card__media" href="produkt-${product.id}.html">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </a>
      <div class="catalog-card__body">
        <div class="catalog-card__head">
          <div class="catalog-card__labels">
            <p class="catalog-card__family">${product.family}</p>
            <p class="catalog-card__tag">${productTag}</p>
          </div>
        </div>
        <h3>${product.name}</h3>
        <div class="catalog-card__actions">
          <a class="section-cta-strip__primary" href="produkt-${product.id}.html">Wyberz Smak</a>
          <a class="section-cta-strip__secondary" href="${buyUrl}">Kup Teraz</a>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const root = document.querySelector('[data-products-list]');
  const filterRoot = document.querySelector('[data-series-filter]');
  if (!root) return;

  const families = Array.from(new Set(PRODUCTS.map((product) => product.family)));
  let activeFamily = 'ALL';

  const renderCards = () => {
    const visibleProducts = activeFamily === 'ALL'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.family === activeFamily);
    root.innerHTML = visibleProducts.map(createCard).join('');
  };

  if (filterRoot) {
    const renderFilters = () => {
      const controls = ['ALL', ...families]
        .map((family) => {
          const active = family === activeFamily;
          const label = family === 'ALL' ? 'Wszystkie' : family;
          return `<button class="series-filter__btn${active ? ' is-active' : ''}" type="button" data-series="${family}" aria-pressed="${active}">${label}</button>`;
        })
        .join('');

      filterRoot.innerHTML = `
        <p class="series-filter__title">Serie</p>
        <div class="series-filter__row">${controls}</div>
      `;

      filterRoot.querySelectorAll('[data-series]').forEach((button) => {
        button.addEventListener('click', () => {
          activeFamily = button.dataset.series || 'ALL';
          renderFilters();
          renderCards();
        });
      });
    };

    renderFilters();
  }

  renderCards();
}

function renderProductDetail() {
  const titleEl = document.querySelector('[data-product-title]');
  const imageEl = document.querySelector('[data-product-image]');
  const descEl = document.querySelector('[data-product-description]');
  const variantsEl = document.querySelector('[data-product-variants]');
  const variantGalleryEl = document.querySelector('[data-product-variant-gallery]');
  const buyNowEl = document.querySelector('[data-buy-now]');
  if (!titleEl || !imageEl || !descEl || !variantsEl || !variantGalleryEl || !buyNowEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = findProductById(id) || PRODUCTS[0];
  const buyUrl = product.buyUrl || DBUCHA_BUY_BY_ID[product.id] || 'https://www.dbucha.com/collections/merrymi-jednorazowki';
  const isPandaTwins = product.id === 'panda-twins-40k';

  document.title = `${product.name} – MerryMi`;
  titleEl.textContent = product.name;
  imageEl.src = product.image;
  imageEl.alt = product.name;
  descEl.textContent = product.description;
  buyNowEl.href = buyUrl;
  variantGalleryEl.classList.toggle('variants-gallery--panda-twins', isPandaTwins);
  const normalizedVariants = product.variants.map((variant) => {
    if (typeof variant === 'string') {
      return {
        name: variant,
        image: product.image,
        description: createVariantDescription(variant)
      };
    }
    return {
      name: variant.name,
      image: variant.image || product.image,
      description: variant.description || createVariantDescription(variant.name)
    };
  });

  variantsEl.innerHTML = normalizedVariants
    .map((variant) => `<li class="variant-item">${variant.name}</li>`)
    .join('');

  variantGalleryEl.innerHTML = normalizedVariants
    .map(
      (variant) => `
        <article class="variant-card">
          <img src="${variant.image}" alt="${variant.name}" loading="lazy">
          <div class="variant-card__body">
            <h3>${variant.name}</h3>
            <p class="variant-card__desc">${variant.description}</p>
            <a class="variant-card__cta" href="${buyUrl}" target="_blank" >Kup teraz</a>
          </div>
        </article>
      `
    )
    .join('');
}

const page = document.body.dataset.page;
if (page === 'products') renderCatalog();
if (page === 'product-detail') renderProductDetail();
