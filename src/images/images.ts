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
    ];

    static GetImage = (name: string) => {
      const found = gameImage.images.find(e => e.name === name);
      return found ? found.image : null;
    };
  }