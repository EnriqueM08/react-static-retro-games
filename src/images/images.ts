interface Image {
    name: string;
    image: any;
  }
  export class gameImage {
    private static images: Array<Image> = [
      {
        name: 'pkmRed.jpg',
        image: require('../images/pkmRed.jpg'),
      },
      {
        name: 'dbz.jpg',
        image: require('../images/dbz.jpg'),
      },
      {
        name: 'pkmEmerald.jpg',
        image: require('../images/pkmEmerald.jpg'),
      },
      {
        name: 'sma2.jpg',
        image: require('../images/sma2.jpg'),
      },
      {
        name: 'smb.jpg',
        image: require('../images/smb.jpg'),
      },
      {
        name: 'gta.jpg',
        image: require('../images/gta.jpg'),
      },
      {
        name: 'knidl.jpg',
        image: require('../images/knidl.jpg'),
      },
      {
        name: 'mksc.jpg',
        image: require('../images/mksc.jpg'),
      },
      {
        name: 'mf.jpg',
        image: require('../images/mf.jpg'),
      },
      {
        name: 'pkmLeafGreen.jpg',
        image: require('../images/pkmLeafGreen.jpg'),
      },
      {
        name: 'pkmRuby.jpg',
        image: require('../images/pkmRuby.jpg'),
      },
      {
        name: 'pkmSapphire.jpg',
        image: require('../images/pkmSapphire.jpg'),
      },
      {
        name: 'sa3.jpg',
        image: require('../images/sa3.jpg'),
      },
      {
        name: 'loz4swords.jpg',
        image: require('../images/loz4swords.jpg'),
      },
      {
        name: 'loztmc.jpg',
        image: require('../images/loztmc.jpg'),
      },
      {
        name: 'doom2.jpg',
        image: require('../images/doom2.jpeg'),
      },
      {
        name: 'ygosacred.jpg',
        image: require('../images/ygosacred.jpeg'),
      },
      {
        name: 'ygo.jpg',
        image: require('../images/ygo.jpeg'),
      },
      {
        name: 'usm.jpg',
        image: require('../images/usm.jpeg'),
      },
      {
        name: 'atla.jpg',
        image: require('../images/atla.png'),
      },
      {
        name: 'sonicb.jpg',
        image: require('../images/sonicb.jpeg'),
      },
      {
        name: 'nfsu.jpg',
        image: require('../images/nfsu.jpeg'),
      },
      {
        name: 'lswtvg.jpg',
        image: require('../images/lswtvg.jpeg'),
      },
      {
        name: 'hpatss.jpg',
        image: require('../images/hpatss.jpeg'),
      },
      {
        name: 'gr.jpg',
        image: require('../images/gr.jpeg'),
      },
      {
        name: 'aladdin.jpg',
        image: require('../images/aladdin.jpg'),
      },
      {
        name: 'aerofight.jpg',
        image: require('../images/aerofight.jpg'),
      },
      {
        name: 'bmfm.jpg',
        image: require('../images/bmfm.jpg'),
      },
      {
        name: 'btmreturns.jpg',
        image: require('../images/btmreturns.jpeg'),
      },
      {
        name: 'dkc.jpg',
        image: require('../images/dkc.jpg'),
      },
      {
        name: 'ff3.jpg',
        image: require('../images/ff3.jpeg'),
      },
      {
        name: 'gooftroop.jpg',
        image: require('../images/gooftroop.jpeg'),
      },
      {
        name: 'jurassic.jpg',
        image: require('../images/jurassic.jpeg'),
      },
      {
        name: 'kinstinct.jpg',
        image: require('../images/kinstinct.jpeg'),
      },
      {
        name: 'kss.jpg',
        image: require('../images/kss.jpeg'),
      },
      {
        name: 'lozlttp.jpg',
        image: require('../images/lozlttp.jpeg'),
      },
      {
        name: 'mmpr.jpg',
        image: require('../images/mmpr.jpeg'),
      },
      {
        name: 'nbajam.jpg',
        image: require('../images/nbajam.jpeg'),
      },
      {
        name: 'sbm2.jpg',
        image: require('../images/sbm2.jpeg'),
      },
      {
        name: 'sf2t.jpg',
        image: require('../images/sf2t.jpg'),
      },
      {
        name: 'sidepock.jpg',
        image: require('../images/sidepock.jpeg'),
      },
      {
        name: 'smetroid.jpg',
        image: require('../images/smetroid.jpeg'),
      },
      {
        name: 'smk.jpg',
        image: require('../images/smk.jpeg'),
      },
      {
        name: 'smw.jpg',
        image: require('../images/smw.jpg'),
      },
      {
        name: 'ssw.jpg',
        image: require('../images/ssw.jpeg'),
      },
      {
        name: 'starfox.jpg',
        image: require('../images/starfox.jpeg'),
      },
      {
        name: 'tmnttf.jpg',
        image: require('../images/tmnttf.jpeg'),
      },
      {
        name: 'topgear.jpg',
        image: require('../images/topgear.jpeg'),
      },
      {
        name: 'toystory.jpg',
        image: require('../images/toystory.jpeg'),
      },
      {
        name: 'umk3.jpg',
        image: require('../images/umk3.jpeg'),
      },
    ];

    static GetImage = (name: string) => {
      const found = gameImage.images.find(e => e.name === name);
      return found ? found.image : null;
    };
  }