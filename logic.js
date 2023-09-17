document.addEventListener('alpine:init', () => {
    Alpine.data('themingFunctionality', () => ({
        currentTheme: 0,
        themes: [
            {
                title: 'anime',
                background: 'bg-antiflash',
                primary: 'bg-delftblue',
                secondary: 'bg-trueblue',
                buttonBackground: 'bg-trueblue',
                outsideText: 'text-delftblue',
                insideText: 'text-antiflash',
                buttonText: 'text-antiflash',
                cursor: '',
                image: 'https://cdn.custom-cursor.com/db/11974/ghibli-spirited-away-no-face-cursor.png',
                url: ['','','','']
            },
            { 
                title: 'Naruto',
                background: 'bg-orange-400',
                primary: 'bg-yellow-500',
                secondary: 'bg-neutral-800',
                buttonBackground: 'bg-neutral-800',
                outsideText: 'text-neutral-800',
                insideText: 'text-neutral-800',
                buttonText: 'text-white',
                cursor: 'https://cdn.custom-cursor.com/db/cursor/32/Naruto_Sakura_HarunoKunaiShurikenCursor.png',
                image: 'https://cdn.custom-cursor.com/db/6669/naruto-itachi-uchiha-and-crow-pointer.png',
                url: [
                    'GY9PJ5KWR/naruto',
                    'naruto-993d48dc-d507-47cb-8cca-23e6794f6f66',
                    '',
                    ''
                ]
            },
            {
                title: 'Attack on Titan',
                background: 'bg-orange-300',
                primary: 'bg-red-700',
                secondary: 'bg-yellow-700',
                buttonBackground: 'bg-red-500',
                outsideText: 'text-neutral-800',
                insideText: 'text-orange-100',
                buttonText: 'text-orange-100',
                cursor: 'https://cdn.custom-cursor.com/db/10352/32/anime-attack-on-titan-reiner-braun-and-sword-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/4803/arrow2735.png',
                url: [
                    'GR751KNZY/attack-on-titan',
                    'attack-on-titan-9c91ffa3-dc20-48bf-8bc5-692e37c76d88',
                    'my-en/title/70299043',
                    'en-gb/series/title/5D0Qx5ecSvHm'
                ]
            },
            {
                title: 'Hunter X Hunter',
                background: 'bg-yellow-50',
                primary: 'bg-green-700',
                secondary: 'bg-green-950',
                buttonBackground: 'bg-green-600',
                outsideText: 'text-green-950',
                insideText: 'text-green-50',
                buttonText: 'text-green-50',
                cursor: 'https://cdn.custom-cursor.com/db/3992/32/arrow2333.png',
                image: 'https://cdn.custom-cursor.com/db/3991/arrow2333.png',
                url: [
                    'GY3VKX1MR/hunter-x-hunter',
                    'hunter-x-hunter-4160deed-5e27-4f23-aa9a-a8e4f126e9cb',
                    'gr-en/title/70300472',
                    ''
                ]
            },
            {
                title: 'Death Note',
                background: 'bg-neutral-950',
                primary: 'bg-neutral-900',
                secondary: 'bg-stone-800',
                buttonBackground: 'bg-neutral-700',
                outsideText: 'text-neutral-50',
                insideText: 'text-neutral-100',
                buttonText: 'text-neutral-100',
                cursor: 'https://cdn.custom-cursor.com/db/6034/32/anime-death-note-light-yagami-and-death-note-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/6033/anime-death-note-light-yagami-and-death-note-pointer.png',
                url: [
                    '',
                    'death-note-9065c6f1-4d2d-4150-a1ef-58bced498809',
                    'title/70204970',
                    ''
                ]

            },
            {
                title: 'Seven Deadly Sins',
                background: 'bg-purple-950',
                primary: 'bg-purple-700',
                secondary: 'bg-yellow-300',
                buttonBackground: 'bg-purple-500',
                outsideText: 'text-yellow-300',
                insideText: 'text-yellow-200',
                buttonText: 'text-yellow-200',
                cursor: 'https://cdn.custom-cursor.com/db/cursor/32/seven_deadly_sins_meliodas_lostvayne_cursor.png',
                image: 'https://cdn.custom-cursor.com/db/4279/arrow2475.png',
                url: [
                    '',
                    '',
                    'gr-en/title/80050063',
                    ''
                ]
            },
            {
                title: 'Bleach',
                background: 'bg-neutral-950',
                primary: 'bg-neutral-100',
                secondary: 'bg-red-800',
                buttonBackground: 'bg-neutral-400',
                outsideText: 'text-neutral-100',
                insideText: 'text-neutral-950',
                buttonText: 'text-neutral-950',
                cursor: 'https://cdn.custom-cursor.com/db/14944/32/anime-bleach-ichigo-kurosaki-and-shikai-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/14943/anime-bleach-ichigo-kurosaki-and-shikai-pointer.png',
                url: [
                    '',
                    'bleach-0c265948-3450-40ad-89b4-883af457f36d',
                    '',
                    'en-gb/series/bleach/6g48QKlgQdWK'
                ]

            },
            {
                title: 'Tokyo Revengers',
                background: 'bg-red-600',
                primary: 'bg-neutral-950',
                secondary: 'bg-red-900',
                buttonBackground: 'bg-neutral-800',
                outsideText: 'text-neutral-950',
                insideText: 'text-neutral-50',
                buttonText: 'text-neutral-50',
                cursor: 'https://cdn.custom-cursor.com/db/10914/32/anime-tokyo-revengers-manjiro-sano-and-taiyaki-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/10913/anime-tokyo-revengers-manjiro-sano-and-taiyaki-pointer.png',
                url: [
                    'G3KHEVMN1/tokyo-revengers',
                    'tokyo-revengers-1a195a35-e19c-4e36-b609-3b1c451f6ce4',
                    'jp-en/title/81442520',
                    'en-gb/series/tokyo-revengers/4HFbN55sAh0i'
                ]

            },
            {
                title: 'Fullmetal Alchemist',
                background: 'bg-neutral-800',
                primary: 'bg-slate-700',
                secondary: 'bg-slate-900',
                buttonBackground: 'bg-slate-600',
                outsideText: 'text-slate-300',
                insideText: 'text-slate-300',
                buttonText: 'text-slate-300',
                cursor: 'https://cdn.custom-cursor.com/db/4460/32/arrow2565.png',
                image: 'https://cdn.custom-cursor.com/db/4459/arrow2565.png',
                url: [
                    'GRGGPG93R/fullmetal-alchemist-brotherhood',
                    'fullmetal-alchemist-brotherhood-213ddd1e-0c45-4f84-bb25-ea90ffd6507c',
                    'jp-en/title/70204981',
                    ''
                ]

            },
            {
                title: 'One Piece',
                background: 'bg-sky-400',
                primary: 'bg-blue-600',
                secondary: 'bg-sky-600',
                buttonBackground: 'bg-blue-500',
                outsideText: 'text-sky-50',
                insideText: 'text-sky-50',
                buttonText: 'text-sky-50',
                cursor: 'https://cdn.custom-cursor.com/db/cursor/32/One_Piece_MonkeyDLuffyCursor.png',
                image: 'https://cdn.custom-cursor.com/db/7787/one-piece-zoro-and-sword-pointer.png',
                url: [
                    'GRMG8ZQZR/one-piece',
                    'one-piece-f5d4278b-6acb-4a63-a7a2-eab91de2611e',
                    'title/80107103',
                    ''
                ]

            },
            {
                title: 'Jojo\'s Bizzare Adventures',
                background: 'bg-blue-950',
                primary: 'bg-indigo-800',
                secondary: 'bg-indigo-900',
                buttonBackground: 'bg-indigo-500',
                outsideText: 'text-pink-500',
                insideText: 'text-pink-500',
                buttonText: 'text-pink-500',
                cursor: 'https://cdn.custom-cursor.com/db/5732/32/jojo-bizzare-adventure-joseph-joestar-and-clacker-volley-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/5731/jojo-bizzare-adventure-joseph-joestar-and-clacker-volley-pointer.png',
                url: [
                    'GYP8DP1MY/jojos-bizarre-adventure',
                    'jojos-bizarre-adventure-3f2ffb64-2424-44a5-b229-4371dccb1d6f',
                    'gr-en/title/80179831',
                    'en-gb/series/jojos-bizarre-adventure/7SycqmydEEnp'
                ]

            },
            {
                title: 'Mob Psycho',
                background: 'bg-violet-600',
                primary: 'bg-slate-900',
                secondary: 'bg-purple-950',
                buttonBackground: 'bg-slate-700',
                outsideText: 'text-pink-600',
                insideText: 'text-neutral-50',
                buttonText: 'text-neutral-50',
                cursor: 'https://cdn.custom-cursor.com/db/11610/32/anime-mob-psycho-100-shigeo-kageyama-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/11609/anime-mob-psycho-100-shigeo-kageyama-pointer.png',
                url: [
                    'GY190DKQR/mob-psycho-100',
                    'mob-psycho-100-fc9b8130-e1e3-420b-b28d-a72f0b235069',
                    'mh/title/80179798',
                    ''
                ]

            },
            {
                title: 'Demon Slayer',
                background: 'bg-slate-500',
                primary: 'bg-neutral-50',
                secondary: 'bg-red-700',
                buttonBackground: 'bg-gray-400',
                outsideText: 'text-neutral-950',
                insideText: 'text-neutral-950',
                buttonText: 'text-neutral-950',
                cursor: 'https://cdn.custom-cursor.com/db/4236/32/arrow2453.png',
                image: 'https://cdn.custom-cursor.com/db/4235/arrow2453.png',
                url: [
                    'GY5P48XEY/demon-slayer-kimetsu-no-yaiba',
                    'demon-slayer-kimetsu-no-yaiba-2c3e4b00-30d9-434d-bccc-cf346e40e868',
                    'gr-en/title/81091393',
                    'en-gb/series/demon-slayer/6JukzUyfNAUq'
                ]

            },
            {
                title: 'Neon Genesis Evangelion',
                background: 'bg-violet-700',
                primary: 'bg-lime-500',
                secondary: 'bg-violet-400',
                buttonBackground: 'bg-lime-600',
                outsideText: 'text-neutral-950',
                insideText: 'text-neutral-950',
                buttonText: 'text-neutral-950',
                cursor: 'https://cdn.custom-cursor.com/db/7764/32/evangelion-shinji-ikari-and-coffee-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/7763/evangelion-shinji-ikari-and-coffee-pointer.png',
                url: [
                    '',
                    '',
                    'gr-en/title/81033445',
                    ''
                ]

            },
            {
                title: 'Yu-Gi-Oh!',
                background: 'bg-orange-200',
                primary: 'bg-zinc-950',
                secondary: 'bg-pink-500',
                buttonBackground: 'bg-zinc-700',
                outsideText: 'text-stone-500',
                insideText: 'text-neutral-50',
                buttonText: 'text-neutral-50',
                cursor: 'https://cdn.custom-cursor.com/db/17462/32/anime-yu-gi-oh-yugi-muto-and-coulomb-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/17461/anime-yu-gi-oh-yugi-muto-and-coulomb-pointer.png',
                url: [
                    'G6P8DV7V6/yu-gi-oh',
                    'yu-gi-oh-7202b737-f575-4c3c-b89a-2f6f641a9f16',
                    'title/70177034',
                    ''
                ]

            },
            {
                title: 'Mashle: Magic and Muscles',
                background: 'bg-red-900',
                primary: 'bg-blue-950',
                secondary: 'bg-amber-500',
                buttonBackground: 'bg-blue-900',
                outsideText: 'text-red-600',
                insideText: 'text-neutral-50',
                buttonText: 'text-neutral-50',
                cursor: 'https://cdn.custom-cursor.com/db/17678/32/anime-mashle-mash-burnedead-and-cream-puffs-cursor.png',
                image: 'https://cdn.custom-cursor.com/db/17677/anime-mashle-mash-burnedead-and-cream-puffs-pointer.png',
                url: [
                    'GDKHZEP8W/mashle-magic-and-muscles',
                    '',
                    '',
                    ''
                ]

            },
        ],
        isLeftArrow() {
            if (this.currentTheme == 0) {
                this.currentTheme = this.themes.length - 1;
            } else {
                this.currentTheme -= 1;
            }
        },
        isRightArrow() {
            if (this.currentTheme == this.themes.length - 1) {
                this.currentTheme = 0;
            } else {
                this.currentTheme += 1;
            }
        },
        mobileThemeChange() {
            if (this.currentTheme == this.themes.length - 1) {
                this.currentTheme = 0;
            } else {
                this.currentTheme += 1;
            }
        }
    })),
    Alpine.data('studyingFunctionality', () => ({
        studyingTime: 2400,
        animeTime: 1200,
        remainingTime: 2400,

        studySessions: 0,
        animeEpisodes: 0,

        isRunning: false,
        isStudying: true,
        autostart: true,
        intervalId: null,
        soundOn: true,

        init() {
            this.$watch('studyingTime', (value) => {
                if (value <= 0) {
                    this.switchToAnime();
                }
            });
            this.$watch('animeTime', (value) => {
                if (value <= 0) {
                    this.switchToStudy();
                }
            });
        },

        formatTime() {
            const currentInterval = this.remainingTime;
            const minutes = Math.floor(currentInterval / 60);
            const seconds = currentInterval % 60;
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        },

        startTimer() {
            this.isRunning = true;
            this.intervalId = setInterval(() => {
                if (this.isStudying) {
                    if (this.remainingTime > 0) {
                        this.remainingTime--;
                    } else {
                        this.switchToAnime();
                    }
                } else {
                    if (this.remainingTime > 0) {
                        this.remainingTime--;
                    } else {
                        this.switchToStudy();
                    }
                }
            }, 1000);
        },

        stopTimer() {
            this.isRunning = false;
            clearInterval(this.intervalId);
        },

        resetTimer() {
            this.isRunning = false;
            clearInterval(this.intervalId);
            this.remainingTime = this.isStudying ? this.studyingTime : this.animeTime;
        },

        skipTimer() {
            this.remainingTime = 0;
        },

        checkAutostart() {
            !this.autostart ? this.stopTimer() : '';
        },

        switchToAnime() {
            this.isStudying = false;
            this.remainingTime = this.animeTime;
            this.studySessions += 1;
            this.checkAutostart();
            if (this.soundOn) {
                document.getElementById("startAnimeSound").play();
            }
        },
        
        switchToStudy() {
            this.isStudying = true;
            this.remainingTime = this.studyingTime;
            this.animeEpisodes += 1;
            this.checkAutostart();
            if (this.soundOn) {
                document.getElementById("startStudySound").play();
            }
        },

        addFiveMinutes() {
            this.remainingTime = this.remainingTime + 300;
        },
        subtractFiveMinutes() {
            if (this.remainingTime >= 300) {
                this.remainingTime = this.remainingTime - 300;
            } else {
                this.remainingTime = 0;
            }
        }
    }))
});
