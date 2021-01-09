/*
colors:

Weapons:

0  - 100, 100, 100, 255
1  - 70, 70, 80, 255
2  - 70, 70, 80, 255
3  - 70, 70, 80, 255
4  - 70, 100, 70, 255
5  - 130, 53, 111, 255
6  - 42, 53, 111, 255
7  - 145, 145, 145, 255
8  - 120, 100, 120, 255
9  - 75, 10, 10, 255
10 - 135, 104, 30, 255

Armors:

0  - 100, 100, 100, 255
1  - 28, 28, 96, 255
2  - 79, 79, 62, 255
3  - 135, 104, 30, 255
4  - 127, 18, 0, 255
5  - 10, 60, 10, 255
6  - 40, 40, 40, 255
7  - 47, 79, 50, 255
8  - 127, 52, 90, 255
9  - 90, 60, 90, 255
10 - 0, 35, 60, 255
11 - 105, 90, 70, 255
12 - 94, 91, 53, 255
13 - 85, 85, 8, 255
14 - 75, 10, 10, 255
15 - 48, 48, 48, 255


*/
export function WeaponNumToRgba(val: number) {
  switch (val) {
    default:
      return 'rgba(100, 100, 100, 255)';
    case 1:
      return 'rgba(70, 70, 80, 255)';
    case 2:
      return 'rgba(70, 70, 80, 255)';
    case 3:
      return 'rgba(70, 70, 80, 255)';
    case 4:
      return 'rgba(70, 100, 70, 255)';
    case 5:
      return 'rgba(130, 53, 111, 255)';
    case 6:
      return 'rgba(42, 53, 111, 255)';
    case 7:
      return 'rgba(145, 145, 145, 255)';
    case 8:
      return 'rgba(120, 100, 120, 255)';
    case 9:
      return 'rgba(75, 10, 10, 255)';
    case 10:
      return 'rgba(135, 104, 30, 255)';
  }
}

export function ArmorNumToRgba(val: number) {
  switch (val) {
    default:
      return 'rgba(100, 100, 100, 255)';
    case 1:
      return 'rgba(28, 28, 96, 255)';
    case 2:
      return 'rgba(79, 79, 62, 255)';
    case 3:
      return 'rgba(135, 104, 30, 255)';
    case 4:
      return 'rgba(127, 18, 0, 255)';
    case 5:
      return 'rgba(10, 60, 10, 255)';
    case 6:
      return 'rgba(40, 40, 40, 255)';
    case 7:
      return 'rgba(47, 79, 50, 255)';
    case 8:
      return 'rgba(127, 52, 90, 255)';
    case 9:
      return 'rgba(90, 60, 90, 255)';
    case 10:
      return 'rgba(0, 35, 60, 255)';
    case 11:
      return 'rgba(105, 90, 70, 255)';
    case 12:
      return 'rgba(94, 91, 53, 255)';
    case 13:
      return 'rgba(85, 85, 8, 255)';
    case 14:
      return 'rgba(75, 10, 10, 255)';
    case 15:
      return 'rgba(48, 48, 48, 255)';
  }
}
